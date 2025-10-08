import { pgTable, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { courses } from "./courses";

export const modules = pgTable("modules", {
  id: serial("id").primaryKey(),
  courseId: integer("course_id").references(() => courses.id, {
    onDelete: "cascade",
  }),
order: integer("order").default(1),
  createdAt: timestamp("created_at").defaultNow().notNull(),

});
