import {Box, Button, TextField} from "@radix-ui/themes";
import {verify} from "argon2";
import {eq} from "drizzle-orm";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import {db} from "@/db";
import {user} from "@/db/schema";
import {encrypt} from "@/lib/jwt";
import {getExpires} from "@/lib/session";

async function login(data: FormData) {
  "use server";
  let email = data.get("email");
  let password = data.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    throw new Error("Invalid form data");
  }
  let userInDb = await db
    .select({userId: user.id, password: user.password, email: user.email})
    .from(user)
    .where(eq(user.email, email));

  if (!userInDb) {
    throw new Error("User not found");
  }
  let userFields = userInDb[0];
  let isValidPassword = await verify(userFields.password, password);
  if (!isValidPassword) {
    throw new Error("Invalid password");
  }
  let expires = getExpires();
  let cookieStore = cookies();
  // let foo = await encrypt({email:userInDb[].email},expires)
  cookieStore.set({
    name: "session",
    value: await encrypt({
      userId: userFields.userId,
      email: userFields.email,
      expires,
    }),
    expires,
  });

  redirect("/progile");
}

export default async function Home() {
  // let xs = await db
  //   .select({
  //     id: user.id,
  //     name: user.name,
  //     task: {
  //       title: task.task,
  //       completed: task.completed,
  //     },
  //   })
  //   .from(user)
  //   .leftJoin(task, eq(user.id, task.userId));
  // // .where(eq(user.id, 1));
  // console.log("xs", xs);

  return (
    <>
      <Box className="max-w-10">
        <form action={login}>
          <fieldset>
            <TextField.Root type="password" name="email" required />
            <TextField.Root type="password" name="password" required />
            <Button type="submit">Login</Button>
          </fieldset>
        </form>
      </Box>
    </>
  );
}

// let foodRecordsStatement = await db
// .selectDistinct({
//   foodId: f.foodId,
//   foodName: f.name,
//   lowerName: sql`lower(${f.name})`,
//   description: f.description,
//   calories: fn.calories,
//   carbs: fn.carbohydrates,
//   totalFat: fn.fat,
//   protein: fn.protein,
//   foodType: dt.name,
//   foodTypeId: dt.id,
// })
// .from(f)
// .leftJoin(fn, eq(f.foodId, fn.foodId))
// .leftJoin(dt, eq(f.type_id, dt.id))
// .where(eq(f.foodId, foodID))
// .get();
