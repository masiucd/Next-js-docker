import {Box, Button, TextField} from "@radix-ui/themes";
import {verify} from "argon2";
import {format} from "date-fns";
import {eq} from "drizzle-orm";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";

import {PageWrapper} from "@/_components/page-wrapper";
import {H1, Label, Span} from "@/_components/typography";
import {db} from "@/db";
import {user} from "@/db/schema";
import {isAuthorized} from "@/lib/auth";
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
      expires: format(expires, "yyyy-MM-dd'T'HH:mm:ssxxx"),
    }),
    expires,
  });

  redirect("/profile");
}

export default async function Home() {
  let authorized = await isAuthorized();
  if (authorized) {
    redirect("/profile");
  }
  return (
    <PageWrapper>
      <Box width="400px">
        <H1>Sign in</H1>
        <form action={login}>
          <fieldset className="flex flex-col gap-2">
            <Box>
              <Label htmlFor="email">Email</Label>
              <TextField.Root type="email" name="email" required />
            </Box>
            <Box>
              <Label htmlFor="password">Password</Label>
              <TextField.Root type="password" name="password" required />
            </Box>
            <Button type="submit">
              <Span weight="medium">Sign in</Span>
            </Button>
          </fieldset>
        </form>
      </Box>
    </PageWrapper>
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
