import { PrismaClient, MilestoneStatus } from "@prisma/client";
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

    if (!req.user?.id) {
      res.status(401).json({ message: "User not authenticated" });
      return;
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
        status: MilestoneStatus.PENDING,
        isActive: false,
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
    if (!req.user?.id) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    const milestoneId = parseInt(req.params.id);

    const votes = await prisma.milestoneVote.findMany({
      where: { milestoneId },
    });

    if (votes.length > 0) {
      res.status(400).json({ message: "Cannot delete a milestone with votes" });
      return;
    }

    const deletedMilestone = await prisma.milestone.delete({
      where: { id: milestoneId },
    });

    if (!deletedMilestone) {
      res.status(404).json({ message: "Milestone not found" });
      return;
    }

    res.status(200).json({ message: "Milestone deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const readMilestones = async (req: Request, res: Response) => {
  try {
    if (!req.user?.id) {
      res.status(403).json({ message: "User not authenticated" });
      return;
    }

    const campaignId = parseInt(req.params.id);

    const milestones = await prisma.milestone.findMany({
      where: { campaignId },
      orderBy: { createdAt: "asc" },
    });

    if (!milestones.length) {
      res.status(404).json({ message: "No milestones found" });
      return;
    }

    const total = milestones.length;
    const approvedCount = milestones.filter(
      (m) => m.status === "APPROVED"
    ).length;
    const active = milestones.find((m) => m.isActive);

    res.status(200).json({
      message: "All milestones fetched successfully",
      milestones,
      total,
      approvedCount,
      active,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const updateSchema = z.object({
  newtitle: z.string().optional(),
  newdescription: z.string().optional(),
  newproofUrl: z.string().optional(),
  newgoalAmount: z.bigint().optional(),
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

    if (!req.user?.id) {
      res.status(403).json({ message: "User not authenticated" });
      return;
    }

    const milestoneId = parseInt(req.params.id);
    const milestone = await prisma.milestone.findUnique({
      where: { id: milestoneId },
    });

    if (!milestone) {
      res.status(404).json({ message: "Milestone not found" });
      return;
    }

    const donationVotes = await prisma.milestoneVote.findMany({
      where: { milestoneId },
    });

    if (donationVotes.length > 0) {
      res.status(400).json({
        message: "Can't update milestone once voting has started",
      });
      return;
    }

    const updateData: any = {};
    const {
      newtitle,
      newdescription,
      newproofUrl,
      newgoalAmount,
    }: updatePayload = req.body;

    if (newtitle) updateData.title = newtitle;
    if (newdescription) updateData.description = newdescription;
    if (newproofUrl) updateData.proofUrl = newproofUrl;
    if (newgoalAmount) updateData.goalAmount = newgoalAmount;

    const updatedMilestone = await prisma.milestone.update({
      where: { id: milestoneId },
      data: updateData,
    });

    res.status(200).json({
      message: "Milestone updated successfully",
      updatedMilestone,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
const getMilestonesGroupedByCampaign = async (req: Request, res: Response) => {
  const groupedMilestones = await prisma.campaign.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      title: true,
      milestones: {
        select: {
          id: true,
          title: true,
          description: true,
          goalAmount: true,
          amount: true,
          status: true,
        },
        orderBy: {
          createdAt: "asc",
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  res.status(200).json({
    success: true,
    data: groupedMilestones,
  });
};
const voting = async (req: Request, res: Response) => {
  try {
    const { milestoneId, vote } = req.body;

    if (!req.user?.id) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    const milestone = await prisma.milestone.findUnique({
      where: { id: milestoneId },
    });

    if (!milestone) {
      res.status(404).json({ message: "Milestone not found" });
      return;
    }

    const existingVote = await prisma.milestoneVote.findFirst({
      where: {
        userId: req.user.id,
        milestoneId,
      },
    });

    if (existingVote) {
      res
        .status(400)
        .json({ message: "You have already voted on this milestone" });
      return;
    }

    await prisma.milestoneVote.create({
      data: {
        userId: req.user.id,
        milestoneId,
        vote,
      },
    });

    res.status(200).json({ message: "Vote recorded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export {
  addMilestone,
  updateMilestone,
  deleteMilestone,
  getMilestonesGroupedByCampaign,
  readMilestones,
  voting,
};
