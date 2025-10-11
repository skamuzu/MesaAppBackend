import z from "zod";

export const clerkUserSchema = z.object({
  id: z.string(),
  email_address: z.email(),
  first_name: z.string().nullable().optional(),
  last_name: z.string().nullable().optional(),
});

export type clerkUserType = z.infer<typeof clerkUserSchema>