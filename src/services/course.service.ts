import db from "../config/db";
import { courses } from "../models/courses";
import { courseCreateSchema, courseUpdateSchema } from "../schemas/courses.schema";
import z from "zod";
import { eq } from "drizzle-orm";

export class CourseService{
    static async createCourse(data: z.infer<typeof courseCreateSchema>) {
        return db.insert(courses).values(data).returning()
    }

    static async getCourses() {
        return db.select().from(courses);
    }

    static async getCourseById(id: number) {
        return db.select().from(courses).where(eq(courses.id,id))
    }

    static async updateCourse(id: number, data: z.infer<typeof courseUpdateSchema>) {
        return db.update(courses).set(data).where(eq(courses.id,id)).returning
    }

    static async deleteCourse(id: number) {
        return db.delete(courses).where(eq(courses.id,id)).returning()
    }
}