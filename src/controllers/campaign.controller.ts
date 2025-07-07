import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";
let prisma = new PrismaClient();
const addSchema = z.object({
  title: z.string(),
  description: z.string(),
  goalAmount: z.bigint(),
});
type addPayload = z.infer<typeof addSchema>;
const addCampaign = async (req: Request, res: Response) => {
  try {
    const parseResult = addSchema.safeParse(req.body);
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
    const { title, description, goalAmount }: addPayload = parseResult.data;
    const addedcampaign = await prisma.campaign.create({
      data: {
        title,
        description,
        goalAmount: BigInt(goalAmount),
        amountRaised: BigInt(0),
        userId: req.user.id,
      },
    });
    if (!addedcampaign) {
      res.status(400).json({ message: "Error creating the campaign" });
      return;
    }
    res.status(200).json({ message: "Campaign created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const readCampaign = async (req: Request, res: Response) => {
  try {
    if (!req.user || req.user.role !== "Admin") {
      res.status(403).json({ message: "Access denied. Admins only." });
      return;
    }
    const campaigns = await prisma.campaign.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });
    if (!campaigns || campaigns.length === 0) {
      res.status(404).json({ message: "No campaigns found" });
      return;
    }
    res.status(200).json({
      message: "All campaigns fetched successfully",
      campaigns,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
const deleteCampaign = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }
    const campaignId = Number(req.params.id);
    if (isNaN(campaignId)) {
      res.status(400).json({ message: "Invalid campaign ID" });
      return;
    }
    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
    });
    if (!campaign) {
      res.status(404).json({ message: "Campaign not found" });
      return;
    }
    const isAdmin = req.user.role === "Admin";
    const isGoalMet = campaign.goalAmount === campaign.amountRaised;

    if (!isAdmin && !isGoalMet) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete campaign" });
    }
    if (isGoalMet) {
      await prisma.transaction.create({
        data: {
          amount: campaign.amountRaised,
          type: "PAYOUT",
          status: "COMPLETED",
          userId: campaign.userId,
          campaignId: campaign.id,
        },
      });
    }
    const deletedCampaign = await prisma.campaign.delete({
      where: { id: campaignId },
    });
    if (!deletedCampaign) {
      res.status(400).json({ message: "Error deleting the campaign" });
      return;
    }
    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const updateSchema = z.object({
  newtitle: z.string().optional(),
  newdescription: z.string().optional(),
  newgoalamount: z.bigint().optional(),
});

type updatePayload = z.infer<typeof updateSchema>;

const updateCampaign = async (req: Request, res: Response) => {
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
    const campaignId = Number(req.params.id);
    const { newtitle, newdescription, newgoalamount }: updatePayload =
      parseResult.data;
    const updatedCampaign = await prisma.campaign.update({
      where: { id: campaignId },
      data: {
        title: newtitle,
        description: newdescription,
        goalAmount: newgoalamount,
      },
    });
    if (!updatedCampaign) {
      res.status(400).json({ message: "Error updating the campaign" });
      return;
    }
    res
      .status(200)
      .json({
        message: "Campaign details updated successfully",
        updatedCampaign,
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const isAprroved = async (req: Request, res: Response) => {
  try {
    if (!req.user || req.user.role !== "Admin") {
      if (!req.user || req.user.role !== "Admin") {
        res.status(403).json({ message: "Access denied. Admins only." });
        return;
      }
    }
    const campaignId = Number(req.params.id);
    const approved = await prisma.campaign.update({
      where: { id: campaignId },
      data: { isActive: true, cstatus: "APPROVED" },
    });
    if (!approved) {
      res.status(400).json({ message: "Error updating the campaign" });
      return;
    }
    res.status(200).json({ message: "Campaign is approved" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export {
  addCampaign,
  deleteCampaign,
  updateCampaign,
  isAprroved,
  readCampaign,
};
