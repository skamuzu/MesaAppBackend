import db from "../config/db";
import { enrollments } from "../models/enrollments";
import {
  enrollmentCreateSchema,
  enrollmentUpdateSchema,
  enrollmentSelectSchema,
} from "../schemas/enrollments.schema";
import z from "zod";
import { eq } from "drizzle-orm";

export class EnrollmentService {
  static async getEnrollments() {
    return db.select().from(enrollments);
  }

  static async getEnrollmentsbyUser(id: number) {
    return db.select().from(enrollments).where(eq(enrollments.userId, id))
  }

  static async getEnrollmentsbyCourse(id: number) {
    return db.select().from(enrollments).where(eq(enrollments.courseId, id))
  }

  static async createEnrollments(data: z.infer<typeof enrollmentCreateSchema>) {
    return db.insert(enrollments).values(data).returning();
  }


}
