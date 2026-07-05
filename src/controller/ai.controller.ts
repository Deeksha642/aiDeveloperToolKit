import { Request, Response, NextFunction } from "express";
import reviewService from "../services/review.service";
import { buildReviewPrompt } from "../prompt/review.prompt";
import sqlService from "../services/sql.service";

export class AIController {
  async reviewCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { language, code } = req.body;

      const prompt = buildReviewPrompt(language, code);

      const review = await reviewService.review(language, code);
      return res.json({
        success: true,
        data: review,
      });
    } catch (error) {
      next(error);
    }
  }

  async generateSql(req: Request, res: Response, next: NextFunction) {
    try {
      const { database, query } = req.body;

      const result = await sqlService.generate(database, query);

      return res.json({
        success: true,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new AIController();
