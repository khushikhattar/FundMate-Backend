import { Router } from "express";
import {
  addCampaign,
  deleteCampaign,
  readCampaign,
  isAprroved,
  updateCampaign,
} from "../controllers/campaign.controller";
import { authorizeRoles } from "../middleware/roleMiddleware";
import { verifyUser } from "../middleware/authMiddleware";
const router = Router();
router.route("/add").post();
router.route("/").delete();
router.route("/update").patch();
router.route("/approve:id").post();

export default router;
