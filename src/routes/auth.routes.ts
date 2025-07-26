import { Router } from "express";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../controllers/user.controller";
import { verifyUser } from "../middleware/authMiddleware";
const router = Router();
router.route("/register").post(registerUser);
router.route("/logout").post(verifyUser, logoutUser);
router.post("/login", loginUser);

export default router;
