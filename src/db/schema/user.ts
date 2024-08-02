import {relations} from "drizzle-orm";
import {index, pgTable, serial, timestamp, varchar} from "drizzle-orm/pg-core";

import {tasksTable} from "./tasks";

export let usersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", {length: 255}).notNull(),
    email: varchar("email", {length: 255}).notNull().unique(),
    password: varchar("password", {length: 255}).notNull(),
    createdAt: timestamp("created_at", {mode: "string"}).defaultNow(),
  },
  (table) => ({
    userNameInx: index("user_name_idx").on(table.name),
    emailIdx: index("email_idx").on(table.email),
  })
);

export const userRelations = relations(usersTable, ({many}) => ({
  tasks: many(tasksTable), // user has many tasks
}));
