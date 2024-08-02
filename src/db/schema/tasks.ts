import {relations} from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

import {usersTable} from "./user";

export let tasksTable = pgTable(
  "tasks",
  {
    id: serial("id").primaryKey().notNull(),
    task: varchar("task", {length: 255}).notNull(),
    completed: boolean("completed").default(false).notNull(),
    userId: integer("user_id")
      .references(() => usersTable.id)
      .notNull(),
  },
  (table) => ({
    taskInx: index("task_idx").on(table.task),
  })
);

export let taskRelations = relations(tasksTable, ({one}) => ({
  user: one(usersTable, {
    fields: [tasksTable.userId],
    references: [usersTable.id],
  }),
}));
