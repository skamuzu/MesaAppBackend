import { ZodObject , ZodError} from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
      let data = schema.parse(req);
      return next();
    } catch (err) {
      const error = err instanceof ZodError ? err.message : err;

      console.error(error);
      return res.status(400).json(error);
    }
  };
