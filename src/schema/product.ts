import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  quantity_in_stock: z.number(),
  image_url: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type ProductSchema = z.infer<typeof ProductSchema>;

export const ProductListsSchema = z.array(ProductSchema);

export type ProductListsSchema = z.infer<typeof ProductListsSchema>;
