import { Router } from "express";
import {
  createOrder,
  verifyPayment,
} from "../controllers/transaction.controller";
import { verifyUser } from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/roleMiddleware";

const router = Router();
router.post(
  "/create-order",
  verifyUser,
  authorizeRoles("donor", "admin"),
  createOrder
);
router.post("/verify-payment", verifyUser, verifyPayment);

export default router;
