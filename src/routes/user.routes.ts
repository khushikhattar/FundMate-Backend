import { Router } from "express";
import {
  updatePassword,
  updateUser,
  deleteUser,
  refreshAccessToken,
  getCurrentUser,
} from "../controllers/user.controller";
import { verifyUser } from "../middleware/authMiddleware";
const router = Router();
router.route("/").delete(verifyUser, deleteUser);
router.route("/update").patch(verifyUser, updateUser);
router.route("/updatepassword").patch(verifyUser, updatePassword);
router.route("/refresh").post(refreshAccessToken);
router.route("/me").get(verifyUser, getCurrentUser);

export default router;
