import {
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const tracksTable = pgTable("tracks", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const topicsTable = pgTable(
  "topics",
  {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

    trackId: integer("track_id")
      .notNull()
      .references(() => tracksTable.id, { onDelete: "cascade" }),

    name: text("name").notNull(),
    slug: text("slug").notNull(),

    description: text("description"),
    whyItMatters: text("why_it_matters"),

    orderIndex: integer("order_index").notNull().default(0),

    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => [
    index("topics_track_id_idx").on(table.trackId),
    uniqueIndex("topics_track_id_slug_unique").on(table.trackId, table.slug),
  ],
);

// Tracks
//   DSA / LeetCode
//   CS fundamentals
//   Frontend/platform depth
//   Architecture and system design
//   Code quality and engineering habits
//   Projects and applied learning
//   Mock interviews and communication
//
// Topics
//   Arrays
//   Hash maps
//   Event loop
//   Browser rendering
//   Caching
//   API design
//   System design basics
//   Refactoring
//   Testing
