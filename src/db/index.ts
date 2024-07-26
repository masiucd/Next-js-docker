import {drizzle} from "drizzle-orm/postgres-js";
// import {migrate} from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import env from "@/env";

import {tasks} from "./schema/tasks";
import {users} from "./schema/user";

export let connection = postgres(env.DATABASE_URL, {
  max: env.DB_MIGRATING || env.DB_SEEDING ? 1 : undefined, // only allow one connection during migration
  onnotice: env.DB_SEEDING ? () => {} : undefined, // ignore notices during seeding
});

export let db = drizzle(connection, {
  schema: {users, tasks},
  logger: true,
});

export type DB = typeof db;

// export default db;
