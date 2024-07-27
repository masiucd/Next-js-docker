import {getTableName, sql, Table} from "drizzle-orm";

import * as schema from "@/db/schema";
import env from "@/env";

import {type DB, db} from ".";

if (!env.DB_SEEDING) {
  throw new Error("DB_SEEDING is not set to true");
}

for (let table of [schema.user, schema.task]) {
  await resetTable(db, table);
}

async function resetTable(db: DB, table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`)
  );
}
