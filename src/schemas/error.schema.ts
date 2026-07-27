import { z } from "zod";

export const errorSchema = z.object({
  language: z.string().min(1),
  error: z.string().min(1),
});