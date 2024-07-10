import { Router } from "express";
import { loginUserController } from "../controllers/AuthController";

const authRouter = Router();

authRouter.post("/login", loginUserController);

export { authRouter };
