import { z } from "zod";

export const AdminSchema = z.object({
  user_id: z.number(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type AdminSchema = z.infer<typeof AdminSchema>;
