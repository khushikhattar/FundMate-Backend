import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { genRefreshToken, genAccessToken } from "../utils/helper";

let prisma = new PrismaClient();
const generateAccessAndRefreshTokens = async (userId: number) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new Error("user does not exists");
    }
    const accessToken = genAccessToken(user);
    const refreshToken = genRefreshToken(user);
    await prisma.user.update({
      where: { id: userId },
      data: { refreshToken: refreshToken },
    });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(`Error generating tokens: ${(error as Error).message}`);
  }
};

const registerSchema = z
  .object({
    firstname: z.string({ required_error: "First name is required" }),
    lastname: z.string({ required_error: "Last name is required" }),
    email: z.string().email("Email is required"),
    username: z.string().min(6, "Username must be unique"),
    contact: z
      .string()
      .length(10, { message: "Contact number must be of 10 digits" }),
    password: z.string().min(8, "Password is required"),
    confirmPassword: z.string().min(8, "Confirm Password"),
    address: z.string({ required_error: "Address is required" }),
    purpose: z.string().optional(),
    role: z.enum(["Donor", "Admin", "CampaignCreator"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmpassword"],
  });

type registerPayload = z.infer<typeof registerSchema>;

const registerUser = async (req: Request, res: Response) => {
  try {
    const parseResult = registerSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        message: "Validation errors",
        errors: parseResult.error.errors,
      });
      return;
    }

    const {
      firstname,
      lastname,
      email,
      username,
      contact,
      address,
      password,
      purpose,
      role,
    }: registerPayload = parseResult.data;

    const existedUser = await prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }],
      },
    });

    if (existedUser) {
      res
        .status(409)
        .json({ message: "User with this username or email already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    const createdUser = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        username,
        password: hashedPassword,
        contact,
        address,
        role,
        refreshToken: "",
        purpose,
      },
    });
    if (!createdUser) {
      res.status(400).json({ message: "Error in creating the user" });
    }
    res
      .status(201)
      .json({ message: "User registered successfully", user: createdUser });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const loginSchema = z.object({
  username: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(8),
});

type loginPayload = z.infer<typeof loginSchema>;

const loginUser = async (req: Request, res: Response) => {
  try {
    const parseResult = loginSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        message: "Validation errors",
        errors: parseResult.error.errors,
      });
      return;
    }
    const { username, email, password }: loginPayload = parseResult.data;
    const existedUser = await prisma.user.findFirst({
      where: {
        OR: [
          { username: username || undefined },
          { email: email || undefined },
        ],
      },
    });
    if (!existedUser) {
      res.status(404).json({ message: "User does not exists" });
      return;
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existedUser.password
    );
    if (!isPasswordCorrect) {
      res.status(401).json({ message: "Invalid password" });
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      existedUser.id
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "User Logged In Successfully",
        user: {
          id: existedUser.id,
          username: existedUser.username,
          email: existedUser.email,
          role: existedUser.role,
        },
        token: accessToken,
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getCurrentUser = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Not authenticated" });
      return;
    }

    res.status(200).json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
    return;
  }
};

const logoutUser = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      res.status(400).json({ message: "User not authenticated" });
      return;
    }
    await prisma.user.update({
      where: { id: req.user.id },
      data: { refreshToken: "" },
    });
    const options = { httpOnly: true, secure: true };
    res
      .status(200)
      .clearCookie("accessToken", options)
      .clearCookie("refreshToken", options)
      .json({ message: "User logged out successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging out user" });
    return;
  }
};

const updateSchema = z.object({
  newfirstname: z.string().optional(),
  newlastname: z.string().optional(),
  newemail: z.string().email().optional(),
  newusername: z.string().min(6, "Username must be unique").optional(),
  newcontact: z
    .string()
    .length(10, { message: "Contact number must be of 10 digits" })
    .optional(),
  newaddress: z.string().optional(),
  newpurpose: z.string().optional(),
});

type updatePayload = z.infer<typeof updateSchema>;

const updateUser = async (req: Request, res: Response) => {
  try {
    const parseResult = updateSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        message: "Validation errors",
        errors: parseResult.error.errors,
      });
      return;
    }
    if (!req.user || !req.user.id) {
      res.status(400).json({ message: "User not authenticated" });
      return;
    }
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const {
      newfirstname,
      newlastname,
      newemail,
      newusername,
      newcontact,
      newaddress,
      newpurpose,
    }: updatePayload = parseResult.data;
    const updatedUser = await prisma.user.update({
      where: { id: req.user.id },
      data: {
        firstname: newfirstname,
        lastname: newlastname,
        email: newemail,
        username: newusername,
        contact: newcontact,
        address: newaddress,
        purpose: newpurpose,
      },
    });
    if (!updatedUser) {
      res.status(400).json({ message: " Error updating the user" });
      return;
    }
    res.status(200).json({ message: "User details updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const updatePasswordSchema = z
  .object({
    oldpassword: z.string().min(8, "Old password is required"),
    newpassword: z.string().min(8, "New password"),
    confirmpassword: z.string().min(8, "Confirm password"),
  })
  .refine((data) => data.newpassword === data.confirmpassword, {
    message: "Password do not match",
    path: ["confirmpassword"],
  });

type updatePasswordPayload = z.infer<typeof updatePasswordSchema>;

const updatePassword = async (req: Request, res: Response) => {
  try {
    const parseResult = updatePasswordSchema.safeParse(req.body);
    if (!parseResult.success) {
      res.status(400).json({
        message: "Validation errors",
        errors: parseResult.error.errors,
      });
      return;
    }
    if (!req.user || !req.user.id) {
      res.status(400).json({ message: "User not authenticated" });
      return;
    }
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const { oldpassword, newpassword, confirmpassword }: updatePasswordPayload =
      parseResult.data;
    const isPasswordCorrect = await bcrypt.compare(oldpassword, user.password);
    if (!isPasswordCorrect) {
      res.status(400).json({ message: "Invalid Password" });
      return;
    }
    const hashednewPassword = await bcrypt.hash(newpassword, 16);
    const updatedPassword = await prisma.user.update({
      where: { id: req.user.id },
      data: { password: hashednewPassword },
    });

    if (!updatedPassword) {
      res.status(400).json({ message: "Error updating password" });
    }
    res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      res.status(400).json({ message: "User not authenticated" });
      return;
    }
    const deletedUser = await prisma.user.delete({
      where: { id: req.user.id },
    });
    if (!deletedUser) {
      res.status(404).json({ message: "Error occurred in deleting the user " });
    }
    res.status(500).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const refreshAccessToken = async (req: Request, res: Response) => {
  try {
    const incomingrefreshtoken =
      req.cookies.refreshToken || req.body.refreshToken;
    if (!incomingrefreshtoken) {
      res.status(400).json({ message: "Unauthorized request" });
      return;
    }
    const decodedToken = jwt.verify(
      incomingrefreshtoken,
      process.env.REFRESH_TOKEN_SECRET as string
    ) as { id: number };
    const dbUser = await prisma.user.findUnique({
      where: { id: decodedToken.id },
    });

    if (!dbUser || incomingrefreshtoken !== dbUser.refreshToken) {
      res.status(401).json({ message: "Invalid or expired refresh token" });
      return;
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      dbUser.id
    );
    const options = { httpOnly: true, secure: true };
    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({ message: "Access token refreshed successfully" });
  } catch (error) {
    res.status(401).json({
      message: "Invalid refresh token",
      error: (error as Error).message,
    });
  }
};

export {
  registerUser,
  loginUser,
  updateUser,
  updatePassword,
  deleteUser,
  refreshAccessToken,
  logoutUser,
  getCurrentUser,
};
