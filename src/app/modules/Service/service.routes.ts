import express from "express";
import { verifyToken } from "../../middlewares/Auth/auth";
import { createService, deleteSingleServiceController, getAllService, getSingleService, updateSingleServiceController } from "./service.controller";
import { isAdmin } from "../../utils/isAdmin";
const router = express.Router();

router.post("/services",isAdmin("admin"),verifyToken,createService);
router.get("/services/:id",getSingleService);
router.get("/services",getAllService);
router.put("/services/:id",isAdmin("admin"),verifyToken,updateSingleServiceController);
router.delete("/services/:id",isAdmin("admin"),verifyToken,deleteSingleServiceController);

export const ServiceRoutes = router;
