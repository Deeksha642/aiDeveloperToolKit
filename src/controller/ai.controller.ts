import { Request, Response, NextFunction } from "express";
import aiService from "../services/ai.services";
import { buildReviewPrompt } from "../prompt/review.prompt";

export class AIController {

    async reviewCode(
        req: Request,
        res: Response,
        next: NextFunction
    ) {

        try {

            const { language, code } = req.body;

            const prompt = buildReviewPrompt(language, code);

            const review = await aiService.reviewCode(prompt);

            return res.json({
                success: true,
                data: review
            });

        } catch (error) {

            next(error);

        }

    }

}

export default new AIController();