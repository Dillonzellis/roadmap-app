import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tracks = sqliteTable("tracks", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
});
