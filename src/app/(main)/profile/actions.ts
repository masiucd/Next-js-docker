"use server";
import "server-only";

import {sql} from "drizzle-orm";
import {revalidatePath} from "next/cache";

import {db} from "@/db";
import {getUserFromSession} from "@/lib/auth";

export async function deleteTask(data: FormData) {
  let userFromSession = await getUserFromSession();
  if (!userFromSession) {
    throw new Error("User not logged in");
  }

  let taskId = data.get("delete");
  if (typeof taskId !== "string") {
    throw new Error("Invalid form data");
  }

  await db.execute(
    sql`delete from tasks t where t.id = ${taskId} and t.user_id = ${userFromSession.userId}`
  );
}

export async function updateTask(data: FormData) {
  let userFromSession = await getUserFromSession();
  if (!userFromSession) {
    throw new Error("User not logged in");
  }
  let taskId = data.get("taskId");
  if (typeof taskId !== "string") {
    throw new Error("Invalid form data");
  }

  return null;
}

export async function createTask(data: FormData) {
  let userFromSession = await getUserFromSession();
  if (!userFromSession) {
    throw new Error("User not logged in");
  }

  let task = data.get("task");
  let userId = data.get("userId");
  if (typeof userId !== "string" || typeof task !== "string") {
    throw new Error("Invalid form data");
  }

  await db.execute(
    sql`insert into tasks (task, user_id) values(${task},${userId})`
  );

  revalidatePath("/profile");
}
