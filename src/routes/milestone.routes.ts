import express from "express";
import {
  voting,
  addMilestone,
  deleteMilestone,
  updateMilestone,
  readMilestones,
} from "../controllers/milestone.controller";
import { verifyUser } from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/roleMiddleware";

const router = express.Router();

router.post(
  "/milestone",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  addMilestone
);
router.get(
  "/read",
  verifyUser,
  authorizeRoles("CampaignCreator", "Donor", "Admin"),
  readMilestones
);
router.delete(
  "/milestone/:id",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  deleteMilestone
);
router.put(
  "/milestone/:id",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  updateMilestone
);
router.post(
  "/milestone/vote",
  verifyUser,
  authorizeRoles("Donor", "Admin"),
  voting
);

export default router;
