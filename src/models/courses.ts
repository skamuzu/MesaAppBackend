import { pgTable, serial, text } from "drizzle-orm/pg-core";


export const courses = pgTable("courses",{
    id: serial("id").primaryKey(),
    course_name: text("course_name").notNull(),
    description: text("description").notNull(),
    thumbnail: text("thumbnail_url"),

})

