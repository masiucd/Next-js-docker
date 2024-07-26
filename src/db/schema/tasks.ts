import {boolean, integer, pgTable, serial, varchar} from "drizzle-orm/pg-core";

import {user} from "./user";

export let task = pgTable("tasks", {
  id: serial("id").primaryKey(),
  task: varchar("task", {length: 255}).notNull(),
  completed: boolean("completed").default(false),
  userId: integer("user_id")
    .references(() => user.id)
    .notNull(),
});
