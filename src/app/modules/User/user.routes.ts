import express from "express";
import { createToken } from "../../middlewares/Auth/auth";
import { createUser, loginUser } from "./user.controller";
const router = express.Router();

router.post("/auth/signup",createUser);
router.post("/auth/login",createToken,loginUser);

export const UserRoutes = router;
