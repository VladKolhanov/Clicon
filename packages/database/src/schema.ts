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
  title: varchar({ length: 100 }).notNull(),
  slug: varchar({ length: 100 }).notNull().unique(),
  imageUrl: text('image_url').notNull(),
  ...timestamps,
})

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}))

export const products = pgTable('products', {
  id: serial().primaryKey(),
  title: varchar({ length: 100 }).notNull(),
  slug: varchar({ length: 110 }).notNull().unique(),
  price: numeric({ precision: 6, scale: 2 }).notNull(),
  discount: numeric({ precision: 2, scale: 0 }).default('0'),
  inStock: boolean('in_stock').default(true),
  thumbnailUrl: text('thumbnail_url'),
  imageUrls: json('image_urls').$type<string[]>().notNull(),
  categoryId: integer('category_id').references(() => categories.id),
  ...timestamps,
})

export const productsRelations = relations(products, ({ one }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
}))
