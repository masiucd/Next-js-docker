import {hash} from "argon2";

import * as schema from "@/db/schema";

import type {DB} from "..";

let users = [
  {
    name: "Alice Jonson",
    email: "alice@ex.com",
    password: "password",
    createdAt: "2023-03-08T17:30:00.000Z",
  },
  {
    name: "Mike Smith",
    email: "mike@ex.com",
    password: "password",
    createdAt: "2023-03-08T17:30:00.000Z",
  },
  {
    name: "Linda Carlson",
    email: "linda@ex.com",
    password: "password",
    createdAt: "2023-03-08T17:30:00.000Z",
  },
];

export async function seed(db: DB) {
  for (let user of users) {
    await db
      .insert(schema.usersTable)
      .values({
        ...user,
        password: await hash(user.password),
      })
      .execute();
  }
}
