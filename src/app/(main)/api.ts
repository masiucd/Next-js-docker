import "server-only";

import {eq} from "drizzle-orm";

import {db} from "@/db";
import {user} from "@/db/schema";

export async function getUser(email: string) {
  let userInDb = await db
    .select({userId: user.id, password: user.password, email: user.email})
    .from(user)
    .where(eq(user.email, email));

  return userInDb.length > 0 ? userInDb.at(0) : null;
}
