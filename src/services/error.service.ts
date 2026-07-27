import aiService from "./ai.services";
import { buildErrorPrompt } from "../prompt/error.prompt";
import { ErrorExplanationResponse } from "../types/error";

class ErrorService {

    async explain(
        language: string,
        error: string
    ): Promise<ErrorExplanationResponse> {

        const prompt = buildErrorPrompt(language, error);

        return aiService.generate<ErrorExplanationResponse>(prompt);
    }
}

export default new ErrorService();