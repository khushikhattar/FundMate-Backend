import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";
const prisma = new PrismaClient();
const addSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  proofUrl: z.string().optional(),
  goalAmount: z.bigint(),
});

type addPayload = z.infer<typeof addSchema>;
const addMilestone = async (req: Request, res: Response) => {
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
      return res.status(401).json({ message: "User not authenticated" });
    }

    const { title, description, proofUrl, goalAmount }: addPayload =
      parseResult.data;

    const campaignId = parseInt(req.params.id);
    const campaign = await prisma.campaign.findUnique({
      where: { id: campaignId },
    });

    if (!campaign) {
      res.status(404).json({ message: "Campaign not found" });
      return;
    }

    const milestone = await prisma.milestone.create({
      data: {
        title,
        description,
        proofUrl,
        goalAmount,
        amount: BigInt(0),
        campaignId,
      },
    });

    res
      .status(200)
      .json({ message: "Milestone created successfully", milestone });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const deleteMilestone = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: "User not authenticated" });
    }
    const milestoneId = parseInt(req.params.id);
    const deletedMilestone = await prisma.milestone.delete({
      where: { id: milestoneId },
    });
    if (!deletedMilestone) {
      res.status(401).json({ message: "Milestone not found" });
      return;
    }
    res.status(200).json({ message: "Milestone deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const readMilestones = async (req: Request, res: Response) => {
  try {
    if (!req.user || !req.user.id) {
      res.status(403).json({ message: "User not authenticated" });
      return;
    }
    const campaignId = parseInt(req.params.id);
    const milestones = await prisma.milestone.findMany({
      where: { campaignId: campaignId },
    });
    if (!milestones) {
      res.status(401).json({ message: "No milestones found" });
      return;
    }
    res
      .status(200)
      .json({ message: "All milestones fetched successfully", milestones });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const updateSchema = z.object({
  newtitle: z.string().optional(),
  newdescription: z.string().optional(),
  newproofUrl: z.string().optional(),
  newgoalAmount: z.string().optional(),
});

type updatePayload = z.infer<typeof updateSchema>;

const updateMilestone = async (req: Request, res: Response) => {
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
      res.status(403).json({ message: "User not authenticated" });
      return;
    }
    const milestoneId = parseInt(req.params.id);
    const {
      newtitle,
      newdescription,
      newproofUrl,
      newgoalAmount,
    }: updatePayload = req.body;
    const updatedMilestone = await prisma.milestone.update({
      where: { id: milestoneId },
      data: {
        title: newtitle,
        description: newdescription,
        proofUrl: newproofUrl,
        goalAmount: newgoalAmount,
      },
    });
    if (!updatedMilestone) {
      res.status(400).json({ message: "Error updating the milestone" });
      return;
    }
    res.status(200).json({
      message: "Milestone details updated successfully",
      updatedMilestone,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
