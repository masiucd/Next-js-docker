import {boolean, integer, pgTable, serial, varchar} from "drizzle-orm/pg-core";

import {users} from "./user";

export let tasks = pgTable("tasks", {
  id: serial("id").primaryKey(),
  task: varchar("task", {length: 255}),
  completed: boolean("completed").default(false),
  userId: integer("user_id").references(() => users.id),
});
