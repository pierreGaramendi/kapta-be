import { Router } from "express";
import { getUsers } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/auth";

const userRouter = Router();

userRouter.get("/",authMiddleware, getUsers);

export { userRouter };
