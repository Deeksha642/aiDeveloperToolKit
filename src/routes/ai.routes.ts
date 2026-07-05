import { Router } from "express";
import aiController from "../controller/ai.controller";
import { validate } from "../middlewares/validate";
import { reviewSchema } from "../schemas/review.schemas";
import { sqlSchema } from "../schemas/sql.schema";

const router = Router();

router.post(
    "/review-code",
    validate(reviewSchema),
    aiController.reviewCode
);

router.post(
  "/generate-sql",
  validate(sqlSchema),
  aiController.generateSql
);

export default router;