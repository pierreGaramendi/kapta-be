import { Router } from "express";
import { getUsers, getMe } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/auth";
import { createUserController } from "../controllers/AuthController";

const userRouter = Router();

userRouter.get("/", authMiddleware, getUsers);
userRouter.get("/me", authMiddleware, getMe);
userRouter.post("/", createUserController);

export { userRouter };
