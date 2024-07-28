import {Box, Flex, Separator} from "@radix-ui/themes";
import {isBefore, parseISO} from "date-fns";
import {redirect} from "next/navigation";

import {LoginForm} from "@/_components/login-form";
import {PageWrapper} from "@/_components/page-wrapper";
import {H1, Lead} from "@/_components/typography";
import {getUserFromSession} from "@/lib/auth";
import {verifyPassword} from "@/lib/password";
import {setAuthSession} from "@/lib/session";

import {getUser} from "./api";

async function login(
  prevState: null | {ok: boolean; message: string},
  data: FormData
) {
  "use server";
  let email = data.get("email");
  let password = data.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    throw new Error("Invalid form data");
  }
  let userInDb = await getUser(email);
  if (!userInDb) {
    return {ok: false, message: "Wrong email or password"};
  }

  let isValidPassword = await verifyPassword(userInDb.password, password);
  if (!isValidPassword) {
    return {ok: false, message: "Wrong email or password"};
  }
  await setAuthSession(userInDb);
  return {ok: true, message: "Success"};
}

export default async function Home() {
  let userFromSession = await getUserFromSession();
  if (
    userFromSession !== null &&
    isBefore(parseISO(userFromSession.expires), new Date())
  ) {
    redirect("/profile");
  }

  return (
    <PageWrapper>
      <Box width="420px">
        <Flex asChild direction="column" gap="2">
          <section>
            <H1>Log in</H1>
            <Lead>Log in to view you tasks</Lead>
          </section>
        </Flex>
        <Separator my="5" size="3" className="w-full" />
        <LoginForm login={login} />
      </Box>
    </PageWrapper>
  );
}
