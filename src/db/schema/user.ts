import {relations} from "drizzle-orm";
import {index, pgTable, serial, timestamp, varchar} from "drizzle-orm/pg-core";

import {task} from "./tasks";

export let user = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull().unique(),
    password: varchar("password", {length: 255}).notNull(),
    createdAt: timestamp("created_at", {mode: "string"}).defaultNow(),
  },
  (table) => ({
    nameInx: index("name_idx").on(table.name),
    emailIdx: index("email_idx").on(table.email),
  })
);

export const userRelations = relations(user, ({many}) => ({
  tasks: many(task), // user has many tasks
}));
