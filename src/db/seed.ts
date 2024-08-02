import {getTableName, sql, Table} from "drizzle-orm";

import * as schema from "@/db/schema";
import env from "@/env";

import {connection, type DB, db} from ".";
import {seed as seedTask} from "./seeds/tasks";
import {seed as seedUser} from "./seeds/user";

if (!env.DB_SEEDING) {
  throw new Error("DB_SEEDING is not set to true");
}

for (let table of [schema.usersTable, schema.tasksTable]) {
  (async () => {
    // db.delete(table).execute(); // This will delete the whole table
    await resetTable(db, table);
  })();
}

(async () => {
  await seedUser(db);
  await seedTask(db);
  await connection.end();
})();

async function resetTable(db: DB, table: Table) {
  return db.execute(
    sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`)
  );
}
