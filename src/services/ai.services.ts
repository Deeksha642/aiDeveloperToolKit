import ai from "../config/gemini";
import { CodeReviewResponse } from "../types/review";
import { cleanJson } from "../utils/json";

class AIService {

    async reviewCode(prompt: string): Promise<CodeReviewResponse> {

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

       const text = cleanJson(response.text ?? "");

        return JSON.parse(text);

    }

}

export default new AIService();