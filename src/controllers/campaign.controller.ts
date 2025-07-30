import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";

const prisma = new PrismaClient();
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
      res.status(401).json({ message: "User not authenticated" });
      return;
    }

    if (req.user.role !== "CampaignCreator") {
      res.status(403).json({ message: "User not authorised" });
      return;
    }

    const { title, description, goalAmount }: addPayload = parseResult.data;

    const addedCampaign = await prisma.campaign.create({
      data: {
        title,
        description,
        goalAmount: BigInt(goalAmount),
        amountRaised: BigInt(0),
        userId: req.user.id,
      },
    });

    res.status(201).json({
      message: "Campaign created successfully",
      campaign: addedCampaign,
    });
  } catch (error) {
    console.error("Error in addCampaign:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const readCampaigns = async (req: Request, res: Response) => {
  try {
    const { isApproved, userId } = req.query;

    const filters: any = {};
    if (isApproved === "true") filters.cstatus = "APPROVED";
    else if (isApproved === "false") filters.cstatus = "PENDING";

    if (userId) filters.userId = parseInt(userId as string);

    const campaigns = await prisma.campaign.findMany({
      where: filters,
      include: {
        user: {
          select: {
            id: true,
            firstname: true,
            lastname: true,
            username: true,
            email: true,
          },
        },
        donations: true,
        milestones: true,
      },
      orderBy: { createdAt: "desc" },
    });

    const enrichedCampaigns = campaigns.map((c) => {
      const approvedMilestones = c.milestones.filter(
        (m) => m.approvalStatus === "APPROVED"
      ).length;
      const totalMilestones = c.milestones.length;
      const percentageRaised =
        (Number(c.amountRaised) / Number(c.goalAmount)) * 100;

      return {
        ...c,
        approvedMilestones,
        totalMilestones,
        percentageRaised: Math.floor(percentageRaised),
      };
    });

    res.status(200).json({ campaigns: enrichedCampaigns });
  } catch (error) {
    console.error("Error reading campaigns:", error);
    res.status(500).json({ message: "Server error" });
    return;
  }
};

const getCampaigns = async (req: Request, res: Response) => {
  try {
    const campaigns = await prisma.campaign.findMany({
      where: { userId: req.user?.id },
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });

    res.status(200).json({
      message: "Your campaigns fetched",
      campaigns,
    });
  } catch (error) {
    console.error("getCreatorCampaigns error:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const getDonatedCampaigns = async (req: Request, res: Response) => {
  try {
    const donations = await prisma.donation.findMany({
      where: { userId: req.user?.id },
      include: {
        campaign: {
          include: { user: true },
        },
      },
    });

    const campaigns = donations.map((d) => d.campaign);

    res.status(200).json({
      message: "Donated campaigns fetched",
      campaigns,
    });
  } catch (error) {
    console.error("getDonatedCampaigns error:", error);
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

    const hasDonations = await prisma.donation.findFirst({
      where: { campaignId },
    });

    if (hasDonations && !isAdmin) {
      res
        .status(403)
        .json({ message: "Cannot delete a campaign with donations" });
      return;
    }

    if (!isAdmin && !isGoalMet) {
      res.status(403).json({ message: "Unauthorized to delete campaign" });
      return;
    }

    if (isGoalMet) {
      await prisma.$transaction([
        prisma.transaction.create({
          data: {
            amount: campaign.amountRaised,
            type: "PAYOUT",
            status: "COMPLETED",
            userId: campaign.userId,
            campaignId: campaign.id,
          },
        }),
        prisma.campaign.delete({ where: { id: campaignId } }),
      ]);
    } else {
      await prisma.campaign.delete({ where: { id: campaignId } });
    }

    res.status(200).json({ message: "Campaign deleted successfully" });
  } catch (error) {
    console.error("deleteCampaign error:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const myCampaigns = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const campaigns = await prisma.campaign.findMany({
      where: {
        userId: userId,
      },
      include: {
        milestones: true,
        donations: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({ campaigns });
  } catch (error) {
    console.error("Error in myCampaigns:", error);
    res.status(500).json({ message: "Failed to fetch campaigns" });
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

    if (campaign.cstatus === "APPROVED") {
      res.status(403).json({ message: "Cannot update an approved campaign" });
      return;
    }

    if (
      campaign.userId !== req.user.id &&
      req.user.role !== "CampaignCreator"
    ) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    const { newtitle, newdescription, newgoalamount }: updatePayload =
      parseResult.data;

    const updateData: any = {};
    if (newtitle) updateData.title = newtitle;
    if (newdescription) updateData.description = newdescription;
    if (newgoalamount) updateData.goalAmount = newgoalamount;

    if (Object.keys(updateData).length === 0) {
      res.status(400).json({ message: "No valid fields provided for update" });
      return;
    }

    const updatedCampaign = await prisma.campaign.update({
      where: { id: campaignId },
      data: updateData,
    });

    res.status(200).json({
      message: "Campaign updated successfully",
      campaign: updatedCampaign,
    });
  } catch (error) {
    console.error("Error in updateCampaign:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const approveCampaign = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!req.user || req.user.role !== "Admin") {
      res
        .status(403)
        .json({ message: "Only admins can approve/reject campaigns" });
      return;
    }

    const campaign = await prisma.campaign.findUnique({
      where: { id: Number(id) },
    });

    if (!campaign) {
      res.status(404).json({ message: "Campaign not found" });
      return;
    }

    if (status !== "APPROVED" && status !== "REJECTED") {
      res.status(400).json({ message: "Invalid status provided" });
      return;
    }

    const updatedCampaign = await prisma.campaign.update({
      where: { id: Number(id) },
      data: { cstatus: status },
    });

    if (status === "APPROVED") {
      const firstMilestone = await prisma.milestone.findFirst({
        where: { campaignId: Number(id) },
        orderBy: { createdAt: "asc" },
      });

      if (firstMilestone) {
        await prisma.milestone.update({
          where: { id: firstMilestone.id },
          data: { isActive: true },
        });
      }
    }

    res.status(200).json({
      message: `Campaign ${status.toLowerCase()} successfully`,
      campaign: updatedCampaign,
    });
  } catch (error) {
    console.error("Campaign approval error:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export {
  addCampaign,
  getCampaigns,
  getDonatedCampaigns,
  readCampaigns,
  deleteCampaign,
  updateCampaign,
  approveCampaign,
  myCampaigns,
};
