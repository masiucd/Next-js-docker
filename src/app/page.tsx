// import {db, users} from "@/db/d";
import {db} from "@/db/d";
import env from "@/env";

export default async function Home() {
  // let xs = await db.select({}).from(users);
  let xs = await db.query.users.findMany();
  console.log("xs", xs);
  console.log(env);
  // let xs = await db.select().from(users);
  return (
    <>
      <h1>home</h1>
    </>
  );
}
