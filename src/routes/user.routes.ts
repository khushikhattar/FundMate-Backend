import { Router } from "express";
import {
  updatePassword,
  updateUser,
  deleteUser,
} from "../controllers/user.controller";
import { verifyUser } from "../middleware/authMiddleware";
const router = Router();
router.route("/").delete(verifyUser, deleteUser);
router.route("/update").patch(verifyUser, updateUser);
router.route("/updatepassword").patch(verifyUser, updatePassword);
export default router;
