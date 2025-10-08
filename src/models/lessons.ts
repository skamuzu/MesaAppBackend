import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core";
import { modules } from "./modules";

export const lessons = pgTable("lessons", {
  id: serial("id").notNull(),
  title: text("title").notNull(),
  content: text("content"), // Could be HTML, Markdown, or a video URL
  moduleId: integer("module_id")
    .notNull()
    .references(() => modules.id, { onDelete: "cascade" }),
  order: integer("order"), // For ordering chapters in a module
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
