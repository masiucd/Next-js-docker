CREATE TABLE IF NOT EXISTS "tasks" (
	"id" serial PRIMARY KEY NOT NULL,
	"task" varchar(255) NOT NULL,
	"completed" boolean DEFAULT false,
	"user_id" integer NOT NULL
);

--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);

--> statement-breakpoint
DO $ $ BEGIN
ALTER TABLE
	"tasks"
ADD
	CONSTRAINT "tasks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;

EXCEPTION
WHEN duplicate_object THEN null;

END $ $;

--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "name_idx" ON "users" USING btree ("name");

--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_idx" ON "users" USING btree ("email");