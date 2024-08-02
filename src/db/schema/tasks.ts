import {relations} from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTable,
  serial,
  varchar,
} from "drizzle-orm/pg-core";

import {user} from "./user";

export let task = pgTable(
  "tasks",
  {
    id: serial("id").primaryKey(),
    task: varchar("task", {length: 255}).notNull(),
    completed: boolean("completed").default(false).notNull(),
    userId: integer("user_id")
      .references(() => user.id)
      .notNull(),
  },
  (table) => ({
    taskInx: index("task_idx").on(table.task),
  })
);

export let taskRelations = relations(task, ({one}) => ({
  user: one(user, {
    fields: [task.userId],
    references: [user.id],
  }),
}));
