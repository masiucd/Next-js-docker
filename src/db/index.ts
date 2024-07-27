import {drizzle} from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "@/db/schema";
import env from "@/env";

export let connection = postgres(env.DATABASE_URL, {
  max: env.DB_MIGRATING || env.DB_SEEDING ? 1 : undefined, // only allow one connection during migration
  onnotice: env.DB_SEEDING ? () => {} : undefined, // ignore notices during seeding
});

export let db = drizzle(connection, {
  schema,
  logger: true,
});

export type DB = typeof db;
