import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const tracksTable = pgTable("tracks", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  slug: varchar({ length: 255 }).notNull().unique(),
  description: varchar({ length: 255 }),
});
