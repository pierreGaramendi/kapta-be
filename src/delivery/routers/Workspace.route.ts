import { Router } from "express";
import { getWorkspacesByUser, createWorkspace } from "../controllers/Workspace.controller";
import { authMiddleware } from "../middlewares/auth";

const workspaceRouter = Router();
workspaceRouter.get("/", authMiddleware, getWorkspacesByUser);
workspaceRouter.post("/", authMiddleware, createWorkspace);
export { workspaceRouter };
