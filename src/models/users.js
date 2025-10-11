"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.userRoleEnum = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
var pg_core_2 = require("drizzle-orm/pg-core");
exports.userRoleEnum = (0, pg_core_2.pgEnum)("user_role", [
    "Admin",
    "Instructor",
    "Student",
]);
exports.users = (0, pg_core_2.pgTable)("users", {
    id: (0, pg_core_2.serial)("id").primaryKey(),
    clerkId: (0, pg_core_2.text)("clerk_id").notNull().unique(),
    role: (0, exports.userRoleEnum)("role").notNull().default("Student"),
    email: (0, pg_core_2.text)("email").notNull(),
    created_at: (0, pg_core_1.timestamp)("created_at").defaultNow().notNull(),
    name: (0, pg_core_2.text)("name").notNull()
});
