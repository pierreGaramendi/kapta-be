import { Router } from "express";
import { authRouter } from "../routers/AuthRouter";
import { userRouter } from "../routers/UserRouter";
const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);

export default router;
