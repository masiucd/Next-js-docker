import * as schema from "@/db/schema";

import type {DB} from "..";

let tasks = [
  {
    task: "Walk the dog",
    userId: 1,
  },
  {
    task: "Buy groceries",
    userId: 2,
  },
  {
    task: "Do laundry",
    userId: 3,
  },
  {
    task: "Wash dishes",
    userId: 1,
  },
  {
    task: "Mow the lawn",
    userId: 3,
  },
];

export async function seed(db: DB) {
  for (let task of tasks) {
    await db
      .insert(schema.tasksTable)
      .values({
        ...task,
        completed: false,
      })
      .execute();
  }
}
