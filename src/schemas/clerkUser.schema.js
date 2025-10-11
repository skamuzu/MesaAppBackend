"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clerkUserSchema = void 0;
var zod_1 = require("zod");
exports.clerkUserSchema = zod_1.default.object({
    id: zod_1.default.string(),
    email_address: zod_1.default.email(),
    first_name: zod_1.default.string().nullable().optional(),
    last_name: zod_1.default.string().nullable().optional(),
});
