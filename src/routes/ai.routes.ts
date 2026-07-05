import { Router } from "express";
import aiController from "../controller/ai.controller";

const router = Router();

router.post("/review-code", aiController.reviewCode);

export default router;