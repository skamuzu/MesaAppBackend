import { courses } from "../models/courses";
import { CreateSelectSchema, createUpdateSchema, CreateInsertSchema, createInsertSchema, createSelectSchema } from "drizzle-zod";

export const courseCreateSchema = createInsertSchema(courses);
export const courseUpdateSchema = createUpdateSchema(courses);
export const courseSelectSchema = createSelectSchema(courses)