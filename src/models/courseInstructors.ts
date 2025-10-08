import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { courses } from "./courses";
import { users } from "./users";

export const courseInstructors = pgTable("course_instructors", {
    id: serial("id").primaryKey(),
    courseId: integer("course_id").notNull().references(() => courses.id, {onDelete: "cascade"}),
    instructorId: integer("instructor_id").notNull().references(() => users.id, {onDelete: "cascade"}),
    assignedAt: timestamp("assigned_at").defaultNow().notNull()
})