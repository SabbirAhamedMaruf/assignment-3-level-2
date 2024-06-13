import express from "express";
import { isAdmin } from "../../utils/isAdmin";
import { verifyToken } from "../../middlewares/Auth/auth";
import { createServiceSlot } from "./slot.controller";
const router = express.Router();

router.post("/services/slots",isAdmin("admin"),verifyToken,createServiceSlot);

export const SlotRoutes = router;
