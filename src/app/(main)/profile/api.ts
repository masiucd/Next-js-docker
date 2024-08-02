import "server-only";

import {eq} from "drizzle-orm";
import {alias} from "drizzle-orm/pg-core";

import {db} from "@/db";
import {tasksTable, usersTable} from "@/db/schema";
import type {Payload} from "@/lib/jwt";

export type UserDataType = Awaited<
  ReturnType<typeof getUserData>
>["profileData"];
export type TaskType = Awaited<ReturnType<typeof getUserData>>["tasks"][number];

export async function getUserData(userFromSession: Payload) {
  let u = alias(usersTable, "u");
  let t = alias(tasksTable, "t");
  return await db.transaction(async (tx) => {
    let tasks = await tx
      .select()
      .from(t)
      .where(eq(t.userId, userFromSession.userId));

    let profileData = await tx
      .select({
        id: u.id,
        email: u.email,
        name: u.name,
      })
      .from(u)
      .where(eq(u.id, userFromSession.userId));

    return {tasks, profileData: profileData[0]};
  });
}
