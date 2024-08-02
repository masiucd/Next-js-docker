import "server-only";

import {eq} from "drizzle-orm";

import {db} from "@/db";
import {usersTable} from "@/db/schema";

export async function getUser(email: string) {
  let userInDb = await db
    .select({
      userId: usersTable.id,
      password: usersTable.password,
      email: usersTable.email,
    })
    .from(usersTable)
    .where(eq(usersTable.email, email));

  return userInDb.length > 0 ? userInDb.at(0) : null;
}
