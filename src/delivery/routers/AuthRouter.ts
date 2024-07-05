import { Router } from "express";
import { loginUser } from "../controllers/AuthController";

const authRouter = Router();

authRouter.post("/login", loginUser);

export { authRouter };
