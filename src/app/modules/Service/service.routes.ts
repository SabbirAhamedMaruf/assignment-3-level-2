import express from "express";
import { verifyToken } from "../../middlewares/Auth/auth";
import { createService, getAllService, getSingleService, updateSingleServiceController } from "./service.controller";
import { isAdmin } from "../../utils/isAdmin";
const router = express.Router();

router.post("/services",isAdmin("admin"),verifyToken,createService);
router.get("/services/:id",getSingleService);
router.get("/services",getAllService);
router.put("/services/:id",isAdmin("admin"),verifyToken,updateSingleServiceController);

export const ServiceRoutes = router;
