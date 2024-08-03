"use server";
import "server-only";

import {eq} from "drizzle-orm";
import {revalidatePath} from "next/cache";

import {db} from "@/db";
import {tasksTable} from "@/db/schema/tasks";
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
  await db.delete(tasksTable).where(eq(tasksTable.id, parseInt(taskId, 10)));
  revalidatePath("/profile");
}

export async function updateTask(prevError: null | boolean, data: FormData) {
  let userFromSession = await getUserFromSession();
  if (!userFromSession) {
    throw new Error("User not logged in");
  }
  let taskId = data.get("task-id");
  let taskValue = data.get("task-value");
  if (typeof taskId !== "string" || typeof taskValue !== "string") {
    return true;
  }
  await db
    .update(tasksTable)
    .set({task: taskValue})
    .where(eq(tasksTable.id, parseInt(taskId, 10)));

  revalidatePath("/profile");
  return null;
}

export async function createTask(prevError: null | boolean, data: FormData) {
  let userFromSession = await getUserFromSession();
  if (!userFromSession) {
    throw new Error("User not logged in");
  }

  let task = data.get("task");
  let userId = data.get("userId");
  if (typeof userId !== "string" || typeof task !== "string") {
    return true;
  }

  await db.insert(tasksTable).values({
    userId: parseInt(userId, 10),
    task,
  });

  revalidatePath("/profile");
  return null;
}

export async function completeTask(prevError: null | boolean, data: FormData) {
  let userFromSession = await getUserFromSession();
  if (!userFromSession) {
    throw new Error("User not logged in");
  }

  let taskId = data.get("task-id");
  let completed = data.get("completed");
  if (typeof taskId !== "string" || typeof completed !== "string") {
    return true;
  }

  let flipped = !!completed;
  await db
    .update(tasksTable)
    .set({completed: flipped})
    .where(eq(tasksTable.id, parseInt(taskId, 10)));

  revalidatePath("/profile");
  return null;
}
