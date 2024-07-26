import {index, pgTable, serial, timestamp, varchar} from "drizzle-orm/pg-core";

export let users = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", {length: 255}),
    email: varchar("email", {length: 255}).unique(),
    password: varchar("password", {length: 255}),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (table) => {
    return {
      nameInx: index("name_idx").on(table.name),
      emailIdx: index("email_idx").on(table.email),
    };
  }
);
