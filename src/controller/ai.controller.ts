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

            if (!language || !code) {

                return res.status(400).json({
                    success: false,
                    message: "language and code are required"
                });

            }

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