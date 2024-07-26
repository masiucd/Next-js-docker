import {db, users} from "@/db/d";

export default async function Home() {
  let xs = await db.select({}).from(users);
  // let xs = await db.query.users.findMany();
  console.log("xs", xs);
  return (
    <>
      <h1>home</h1>
    </>
  );
}
