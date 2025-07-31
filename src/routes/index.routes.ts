import { Router } from "express";
import userRouter from "./user.routes";
import authRouter from "./auth.routes";
import campaignRouter from "./campaign.routes";
import milestoneRouter from "./milestone.routes";
import transactionRouter from "./transaction.routes";

const router = Router();
router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/campaigns", campaignRouter);
router.use("/campaigns", milestoneRouter);
router.use("/transactions", transactionRouter);

export default router;
