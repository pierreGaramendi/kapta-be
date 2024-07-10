import { Router } from "express";
import { authRouter } from "../routers/AuthRouter";
import { userRouter } from "../routers/UserRouter";
import { workspaceRouter } from "../routers/Workspace.route";
const router = Router();

router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/workspace", workspaceRouter);

export default router;
