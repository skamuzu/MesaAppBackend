import db from "../config/db";
import { users } from "../models/users";
import { clerkUserSchema } from "../schemas/clerkUser.schema";

export class ClerkWebhookService{
    static async createUserFromClerk (data: unknown) {
        const parsed  = clerkUserSchema.parse(data);
        const email = parsed.email_address;
        const name = `${parsed.first_name ?? ""} ${parsed.last_name ?? ""}`.trim()

        await db.insert(users).values({
            clerkId: parsed.id,
            email,
            name,
        })
    }
}