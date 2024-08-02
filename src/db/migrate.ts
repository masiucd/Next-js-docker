import {migrate} from "drizzle-orm/postgres-js/migrator";

import env from "@/env";
import config from "$/drizzle.config";

import {connection, db} from ".";

if (!env.DB_MIGRATING) {
  throw new Error("DB_MIGRATING is not set to true");
}

(async () => {
  await migrate(db, {migrationsFolder: config.out!});
  await connection.end();
})();
