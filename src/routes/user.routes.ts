import { Router } from "express";
import {
  registerUser,
  logoutUser,
  updatePassword,
  updateUser,
  deleteUser,
  refreshAccessToken,
} from "../controllers/user.controller";
import { verifyUser } from "../middleware/authMiddleware";
const router = Router();
router.route("/register").post(registerUser);
router.route("/logout").post(verifyUser, logoutUser);
router.route("/").delete(verifyUser, deleteUser);
router.route("/update").patch(verifyUser, updateUser);
router.route("/updatepassword").patch(verifyUser, updatePassword);
router.route("/refresh").post(verifyUser, refreshAccessToken);

export default router;
