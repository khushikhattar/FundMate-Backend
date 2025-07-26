import express from "express";
import {
  addCampaign,
  readCampaigns,
  getCreatorCampaigns,
  getDonatedCampaigns,
  deleteCampaign,
  updateCampaign,
  approveCampaign,
} from "../controllers/campaign.controller";
import { verifyUser } from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/roleMiddleware";

const router = express.Router();

router.post(
  "/campaign",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  addCampaign
);
router.get(
  "/read",
  verifyUser,
  authorizeRoles("CampaignCreator", "Admin", "Donor"),
  readCampaigns
);
router.get(
  "/campaign/donated",
  verifyUser,
  authorizeRoles("Donor"),
  getDonatedCampaigns
);
router.get(
  "/campaign/creator",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  getCreatorCampaigns
);
router.delete(
  "/campaign/:id",
  verifyUser,
  authorizeRoles("Admin"),
  deleteCampaign
);
router.patch(
  "/campaign/:id",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  updateCampaign
);
router.patch(
  "/campaign/:id/approve",
  verifyUser,
  authorizeRoles("Admin"),
  approveCampaign
);

export default router;
