import { Router } from "express";
import { createProductLocal, getProducts } from "../controllers/WorkspacesController";

const router = Router();

router.post("/products", createProductLocal);
router.get("/products", getProducts);

export default router;
