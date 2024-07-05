import { Router } from "express";
import { loginUser, protectedRoute, testMiddleware } from "../controllers/UserController";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.post("/login", loginUser);
router.get("/protected", protectedRoute);
router.get("/middleware", authMiddleware, testMiddleware);

export default router;
