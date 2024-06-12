import express from "express"
import cors from "cors";
import { UserRoutes } from "./app/modules/User/user.routes";
import { ServiceRoutes } from "./app/modules/Service/service.routes";

const app = express(); 
app.use(cors());
app.use(express.json());

// Routes goes here
app.use("/api",UserRoutes);
app.use("/api",ServiceRoutes)

export default app