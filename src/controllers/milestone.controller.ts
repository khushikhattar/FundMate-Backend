import { PrismaClient, ApprovalStatus, WorkStatus } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";

const prisma = new PrismaClient();
const addSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  amount: z.number().positive(),
});

const updateSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  dueDate: z
    .string()
    .optional()
    .refine((date) => !date || !isNaN(Date.parse(date)), {
      message: "Invalid date format",
    }),
  amount: z.number().positive().optional(),
});
const addMilestone = async (req: Request, res: Response) => {
  try {
    const result = addSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Validation error", errors: result.error.errors });
      return;
    }

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
        title: result.data.title,
        description: result.data.description,
        dueDate: new Date(result.data.dueDate),
        amount: result.data.amount,
        campaignId,
        status: WorkStatus.NOTSTARTED,
        approvalStatus: ApprovalStatus.PENDING,
      },
    });

    res.status(200).json({ message: "Milestone created", milestone });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const deleteMilestone = async (req: Request, res: Response) => {
  try {
    const milestoneId = parseInt(req.params.id);
    const votes = await prisma.milestoneVote.findMany({
      where: { milestoneId },
    });
    if (votes.length > 0) {
      res.status(400).json({ message: "Milestone has votes" });
      return;
    }

    await prisma.milestone.delete({ where: { id: milestoneId } });
    res.status(200).json({ message: "Milestone deleted" });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const readMilestones = async (req: Request, res: Response) => {
  try {
    const campaignId = parseInt(req.params.id);
    const milestones = await prisma.milestone.findMany({
      where: { campaignId },
      orderBy: { createdAt: "asc" },
    });

    res.status(200).json({ milestones });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const updateMilestone = async (req: Request, res: Response) => {
  try {
    const result = updateSchema.safeParse(req.body);
    if (!result.success) {
      res
        .status(400)
        .json({ message: "Validation error", errors: result.error.errors });
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

    const hasVotes = await prisma.milestoneVote.findFirst({
      where: { milestoneId },
    });
    if (hasVotes) {
      res.status(400).json({ message: "Voting started; can't update" });
      return;
    }

    const updated = await prisma.milestone.update({
      where: { id: milestoneId },
      data: {
        title: result.data.title,
        description: result.data.description,
        dueDate: result.data.dueDate
          ? new Date(result.data.dueDate)
          : undefined,
        amount: result.data.amount,
      },
    });

    res.status(200).json({ message: "Milestone updated", milestone: updated });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const voting = async (req: Request, res: Response) => {
  try {
    const { milestoneId, vote } = req.body;
    if (!req.user || !req.user.id) {
      res.status(401).json({ message: "User not authenticated" });
      return;
    }
    const userId = req.user.id;

    const milestone = await prisma.milestone.findUnique({
      where: { id: milestoneId },
      include: { votes: true },
    });
    if (!milestone) {
      res.status(404).json({ message: "Milestone not found" });
      return;
    }

    const existingVote = await prisma.milestoneVote.findUnique({
      where: { milestoneId_userId: { milestoneId, userId } },
    });

    if (existingVote) {
      await prisma.milestoneVote.update({
        where: { milestoneId_userId: { milestoneId, userId } },
        data: { vote },
      });
    } else {
      await prisma.milestoneVote.create({
        data: { milestoneId, userId, vote },
      });
    }

    const allVotes = await prisma.milestoneVote.findMany({
      where: { milestoneId },
    });
    const approvals = allVotes.filter((v) => v.vote).length;
    const rejections = allVotes.filter((v) => !v.vote).length;
    const approvalRatio = approvals / allVotes.length;
    const rejectionRatio = rejections / allVotes.length;

    let newStatus: ApprovalStatus | null = null;
    if (approvalRatio >= 0.6) newStatus = ApprovalStatus.APPROVED;
    else if (rejectionRatio >= 0.6) newStatus = ApprovalStatus.REJECTED;

    if (newStatus) {
      await prisma.milestone.update({
        where: { id: milestoneId },
        data: { approvalStatus: newStatus },
      });
    }

    res.status(200).json({ message: "Vote recorded", newStatus });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const getMilestonesGroupedByCampaign = async (_req: Request, res: Response) => {
  try {
    const grouped = await prisma.campaign.findMany({
      where: { isActive: true },
      select: {
        id: true,
        title: true,
        milestones: {
          select: {
            id: true,
            title: true,
            description: true,
            amount: true,
            status: true,
            approvalStatus: true,
          },
        },
      },
    });
    res.status(200).json({ grouped });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
export {
  addMilestone,
  deleteMilestone,
  getMilestonesGroupedByCampaign,
  updateMilestone,
  voting,
  readMilestones,
};
