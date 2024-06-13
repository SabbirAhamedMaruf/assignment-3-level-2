import express from "express";
import { isAdmin } from "../../utils/isAdmin";
import { verifyToken } from "../../middlewares/Auth/auth";
import { createServiceSlot, getAllSlotsController } from "./slot.controller";
const router = express.Router();

router.post("/services/slots",isAdmin("admin"),verifyToken,createServiceSlot);
router.get("/slots/availability",getAllSlotsController)

export const SlotRoutes = router;
