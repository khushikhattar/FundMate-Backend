import { Request, Response } from "express";
import {
  PrismaClient,
  TransactionType,
  TransactionStatus,
} from "@prisma/client";
import { activateNextMilestone } from "../utils/activateNextMilestone";
import { createRazorpayInstance } from "../config/razorpay.config";
import crypto from "crypto";

const prisma = new PrismaClient();
const createOrder = async (req: Request, res: Response) => {
  try {
    const { amount, campaignId, milestoneId } = req.body;

    const razorpay = createRazorpayInstance();

    const options = {
      amount: amount * 100, // convert to paisa
      currency: "INR",
      receipt: `receipt_${campaignId}_${milestoneId}_${Date.now()}`,
    };

    razorpay.orders.create(options, (err, order) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: "Error creating Razorpay order", success: false });
      }
      res.status(200).json({ success: true, order });
    });
  } catch (error) {
    console.error("createOrder error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { orderId, paymentId, signature, campaignId, milestoneId, amount } =
      req.body;

    const secret = process.env.RAZORPAY_KEY_SECRET!;
    const body = `${orderId}|${paymentId}`;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(body)
      .digest("hex");

    if (expectedSignature !== signature) {
      res.status(400).json({ message: "Payment verification failed" });
      return;
    }

    const userId = req.user?.id;
    if (!userId) {
      res.status(400).json({ message: "User not authenticated" });
      return;
    }
    await prisma.$transaction(async (tx) => {
      await tx.donation.create({
        data: {
          amount: BigInt(amount),
          userId,
          campaignId,
        },
      });
      await tx.transaction.create({
        data: {
          type: TransactionType.DONATION,
          amount: BigInt(amount),
          status: TransactionStatus.COMPLETED,
          userId,
          campaignId,
          milestoneId,
        },
      });

      const campaign = await tx.campaign.findUnique({
        where: { id: campaignId },
      });

      const milestone = await tx.milestone.findUnique({
        where: { id: milestoneId },
      });

      if (!campaign || !milestone) {
        throw new Error("Campaign or milestone not found");
      }

      const updatedCampaign = await tx.campaign.update({
        where: { id: campaignId },
        data: {
          amountRaised: campaign.amountRaised + BigInt(amount),
        },
      });

      await tx.milestone.update({
        where: { id: milestoneId },
        data: {
          amount: milestone.amount + BigInt(amount),
        },
      });
      if (updatedCampaign.amountRaised >= updatedCampaign.goalAmount) {
        await tx.transaction.create({
          data: {
            type: TransactionType.PAYOUT,
            amount: updatedCampaign.amountRaised,
            status: TransactionStatus.COMPLETED,
            userId: updatedCampaign.userId,
            campaignId: updatedCampaign.id,
          },
        });

        await tx.campaign.update({
          where: { id: campaignId },
          data: { cstatus: "COMPLETED", isActive: false },
        });
      }
    });
    await activateNextMilestone(campaignId);

    res
      .status(200)
      .json({ message: "Payment verified and recorded successfully" });
  } catch (error) {
    console.error("verifyPayment error:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export { verifyPayment, createOrder };
