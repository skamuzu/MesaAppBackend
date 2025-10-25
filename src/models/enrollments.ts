import {pgTable, integer, primaryKey, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users";
import { courses } from "./courses";

export const enrollments = pgTable(
  "enrollments",
  {
    userId: integer("user_id")
      .references(() => users.id)
      .notNull(),

    courseId: integer("course_id")
      .references(() => courses.id)
      .notNull(),

    enrolledAt: timestamp("enrolled_at").defaultNow().notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.userId, table.courseId] }),
  })
);
