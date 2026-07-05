import OpenAI from "openai";
console.log(process.env.GROQ_API_KEY);
const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});

export default client;