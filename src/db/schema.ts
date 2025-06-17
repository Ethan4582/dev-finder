import { pgTable, text } from "drizzle-orm/pg-core";


export const users = pgTable("users", {
  id: text("id").notNull().primaryKey(),
  name: text("name").notNull(),
//   email: text("email").notNull().unique(),
//   createdAt: text("created_at").defaultNow(),
});