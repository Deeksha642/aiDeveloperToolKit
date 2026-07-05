import aiService from "./ai.services";
import { buildReviewPrompt } from "../prompt/review.prompt";
import { CodeReviewResponse } from "../types/review";

class ReviewService {
  async review(
    language: string,
    code: string
  ): Promise<CodeReviewResponse> {

    const prompt = buildReviewPrompt(language, code);

    return await aiService.generate(prompt);
  }
}

export default new ReviewService();