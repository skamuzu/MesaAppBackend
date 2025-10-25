import { enrollments } from "../models/enrollments";
import { createInsertSchema,  createUpdateSchema, createSelectSchema } from "drizzle-zod";

export const enrollmentCreateSchema = createInsertSchema(enrollments);
export const enrollmentUpdateSchema = createUpdateSchema(enrollments);
export const enrollmentSelectSchema = createSelectSchema(enrollments);
