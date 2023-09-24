import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  username: z.string(),
  password: z.string(),
  email: z.string().email(),
  first_name: z.string(),
  last_name: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postal_code: z.number(),
  country: z.string(),
  phone_number: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type UserSchema = z.infer<typeof UserSchema>;
