import { relations } from 'drizzle-orm'
import {
  boolean,
  integer,
  json,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

const timestamps = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
}

export const categories = pgTable('categories', {
  id: serial().primaryKey(),
  name: varchar({ length: 100 }).notNull(),
  slug: varchar({ length: 100 }).notNull().unique(),
  imageUrl: text(),
  ...timestamps,
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}))

export const products = pgTable('products', {
  id: serial().primaryKey(),
  name: varchar({ length: 100 }).notNull(),
  slug: varchar({ length: 110 }).notNull().unique(),
  price: numeric({ precision: 10, scale: 2 }).notNull(),
  discountPercent: numeric({ precision: 3, scale: 1 }),
  inStock: boolean().default(true),
  thumbnailUrl: text(),
  imageUrls: json().$type<string[]>().notNull(),
  categoryId: integer().notNull(),
  ...timestamps,
})

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}))
