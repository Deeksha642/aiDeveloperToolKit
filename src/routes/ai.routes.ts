import { Router } from "express";
import aiController from "../controller/ai.controller";
import { validate } from "../middlewares/validate";
import { reviewSchema } from "../schemas/review.schemas";

const router = Router();

router.post(
    "/review-code",
    validate(reviewSchema),
    aiController.reviewCode
);

export default router;