"use server";
import "server-only";

export async function deleteTask(data: FormData) {
  let deleteID = data.get("delete");
  if (typeof deleteID !== "string") {
    throw new Error("Invalid form data");
  }
  // TODO delete task
}
