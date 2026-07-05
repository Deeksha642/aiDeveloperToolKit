import client from "../config/groq";
import { cleanJson } from "../utils/json";

class AIService {

    async generate<T>(prompt: string): Promise<T> {

        const response = await client.chat.completions.create({

            model: process.env.AI_MODEL!,

            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],

            temperature: 0.2

        });

        const text = response.choices[0]?.message?.content;

        if (!text) {
            throw new Error("No response received from AI.");
        }

        const cleaned = cleanJson(text);

        try {

            return JSON.parse(cleaned) as T;

        } catch (error) {

            console.error("AI Response:");
            console.error(cleaned);

            throw new Error("Invalid JSON returned by AI.");

        }

    }

}

export default new AIService();