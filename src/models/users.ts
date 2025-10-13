import { timestamp } from "drizzle-orm/pg-core";
import {
  integer,
  pgTable,
  varchar,
  serial,
  text,
  pgEnum,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("user_role", [
  "Admin",
  "Instructor",
  "Student",
]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  clerkId: text("clerk_id").notNull().unique(),
  role: userRoleEnum("role").notNull().default("Student"),
  email: text("email").notNull().unique(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  name: text("name").notNull()
});
