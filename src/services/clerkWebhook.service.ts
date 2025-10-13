import db from "../config/db";
import { users } from "../models/users";
import { clerkUserSchema, ClerkUserType } from "../schemas/clerkUser.schema";

export class ClerkWebhookService{
    static async createUserFromClerk (data: unknown) {
        
        const parsed: ClerkUserType  = clerkUserSchema.parse(data);
        const email = parsed.data.email_addresses[0].email_address;
        const name = `${parsed.data.first_name ?? ""} ${parsed.data.last_name ?? ""}`.trim()

        await db.insert(users).values({
            clerkId: parsed.data.id,
            email,
            name,
        })
    }
}