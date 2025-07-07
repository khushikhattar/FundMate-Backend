import { Router } from "express";
import { loginUser } from "../controllers/user.controller";
const router = Router();
router.route("/login").post(loginUser);
export default router;
