import {
  // integer,
  // pgEnum,
  pgTable,
  serial,
  timestamp,
  // uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";
import {drizzle} from "drizzle-orm/postgres-js";
// import {migrate} from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import env from "@/env";

export let users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", {length: 255}),
  email: varchar("email", {length: 255}),
  password: varchar("password", {length: 255}),
  createdAt: timestamp("created_at").defaultNow(),
});

export let connection = postgres(
  env.DATABASE_URL
  // {
  //   max: env.DB_MIGRATING || env.DB_SEEDING ? 1 : undefined,
  //   onnotice: env.DB_SEEDING ? () => {} : undefined,
  // }
);

export let db = drizzle(connection, {
  // schema: {users},
  schema: {users},
  logger: true,
});

export type DB = typeof db;

// export default db;
