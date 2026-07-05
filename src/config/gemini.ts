import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is not defined in the environment variables.");
}

const aiKey = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
});

export default aiKey;