import { z } from "zod";

export const sqlSchema = z.object({
    database: z.string(),

    query: z.string().min(5)
});