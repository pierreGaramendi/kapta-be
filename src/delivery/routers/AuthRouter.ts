import { Router } from "express";
import { loginUser } from "../controllers/UserController";

const router = Router();

router.post("/login", loginUser);

export default router;
