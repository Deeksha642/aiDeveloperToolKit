import { z } from "zod";

export const reviewSchema = z.object({
    language: z.string().min(1, "Language is required"),

    code: z.string().min(5, "Code must be at least 5 characters")
});

export type ReviewRequest = z.infer<typeof reviewSchema>;