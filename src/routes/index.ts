import { Router } from "express";
import aiRoutes from "./ai.routes";

const router = Router();

router.get("/health", (_req, res) => {
    res.json({
        success: true,
        message: "Server is Healthy"
    });
});

router.use("/ai", aiRoutes);

export default router;