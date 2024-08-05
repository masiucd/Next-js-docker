# Next js and Docker with Postgres

This is a simple project to demonstrate how to use Next.js with Docker and Postgres.
We are using a docker-compose file to run the Next.js app and Postgres database.
This make it easy to run the app in any environment.

### Description

A simple _CRUD_ app with Next.js and Postgres.
Where users have their own tasks and can create, read, update and delete them.
I wanted to be as simple as possible to demonstrate how to use Next.js with Docker and Postgres.
Then I felt into the trap and added some more features like authentication and authorization.
But the main goal is to show how to use Next.js with Docker and Postgres. Don't think about the features, they are just for fun.

### Installation

```bash
git clone
cd nextjs-docker-postgres
```

### Install dependencies

```bash
pnpm install
```

### Run docker compose

```bash
docker-compose up -d # Run in detached mode
```

### Stop docker compose

```bash
docker-compose down
```

### Run the app

```bash
pnpm dev
```

### Env file

The env file is included in the repository. You can change the values as needed.

### DB generation

You gen generate the database with the following command:

```bash
pnpm db:generate
```

### DB migration

You can run the migrations with the following command:

```bash
pnpm db:migrate
```

### DB seed

You can seed the database with the following command:

```bash
pnpm db:seed
```
