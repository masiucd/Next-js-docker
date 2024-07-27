import {defineConfig} from "drizzle-kit";

import env from "@/env";

export default defineConfig({
  schema: "./src/db/schema/index.ts", // schema file/files
  out: "./src/db/migrations", // output directory
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true, // log all queries
  strict: true, // fail on first error
});
