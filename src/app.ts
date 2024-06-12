import express from "express"
import cors from "cors";
import { UserRoutes } from "./app/modules/User/user.routes";

const app = express(); 
app.use(cors());
app.use(express.json());

// Routes goes here
app.use("/api",UserRoutes);

export default app