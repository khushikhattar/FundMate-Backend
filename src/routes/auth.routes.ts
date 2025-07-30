import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
  getCurrentUser,
  refreshAccessToken,
} from "../controllers/user.controller";
import { verifyUser } from "../middleware/authMiddleware";
const router = Router();
router.route("/register").post(registerUser);
router.route("/logout").post(verifyUser, logoutUser);
router.post("/login", loginUser);
router.route("/me").get(verifyUser, getCurrentUser);
router.route("/refresh").post(refreshAccessToken);
export default router;
