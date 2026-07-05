import { ZodError, ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
    (schema: ZodObject<any>) =>
    (req: Request, res: Response, next: NextFunction) => {

        try {

            req.body = schema.parse(req.body);

            next();

        } catch (error: unknown) {

            if (error instanceof ZodError) {
                return res.status(400).json({
                    success: false,
                    errors: error.issues.map((issue) => ({
                        path: issue.path,
                        message: issue.message
                    }))
                });
            }

            return res.status(400).json({
                success: false,
                message: "Validation failed"
            });

        }

    };