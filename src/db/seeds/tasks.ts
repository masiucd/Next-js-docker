import * as schema from "@/db/schema";

import type {DB} from "..";

let tasks = [
  {
    id: 1,
    task: "Walk the dog",
    userId: 1,
  },
  {
    id: 2,
    task: "Buy groceries",
    userId: 2,
  },
  {
    id: 3,
    task: "Do laundry",
    userId: 3,
  },
  {
    id: 4,
    task: "Wash dishes",
    userId: 1,
  },
  {
    id: 5,
    task: "Mow the lawn",
    userId: 3,
  },
];

export async function seed(db: DB) {
  for (let task of tasks) {
    await db
      .insert(schema.task)
      .values({
        ...task,
        completed: false,
      })
      .execute();
  }
}
