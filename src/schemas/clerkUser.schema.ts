import { z } from "zod";

export const clerkUserSchema = z.object({
  type: z.string(),
  data: z.object({
    id: z.string(),
    first_name: z.string().nullable().optional(),
    last_name: z.string().nullable().optional(),
    email_addresses: z.array(
      z.object({
        email_address: z.string().email(),
      }).loose()
    ),
    primary_email_address_id: z.string().nullable().optional(),
  }).loose(),
}).loose();

export type ClerkUserType = z.infer<typeof clerkUserSchema>