import express from "express";
import {
  addCampaign,
  readCampaigns,
  getCampaigns,
  updateCampaign,
  deleteCampaign,
  approveCampaign,
  myCampaigns,
} from "../controllers/campaign.controller";
import { verifyUser } from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/roleMiddleware";

const router = express.Router();

router.get("/read-campaigns", readCampaigns);
router.get("/get-campaign/:id", getCampaigns);

router.get(
  "/my-campaigns",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  myCampaigns
);

router.post(
  "/create-campaign",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  addCampaign
);
router.put(
  "/update-campaign/:id",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  updateCampaign
);
router.delete(
  "/delete-campaign/:id",
  verifyUser,
  authorizeRoles("CampaignCreator"),
  deleteCampaign
);
router.put(
  "/approve-campaign/:id",
  verifyUser,
  authorizeRoles("Admin"),
  approveCampaign
);

export default router;
