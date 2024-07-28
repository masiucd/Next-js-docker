import {Button, Flex} from "@radix-ui/themes";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import type {ReactNode} from "react";

import {getUserFromSession} from "@/lib/auth";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100dvh-10rem)] flex-col">
        {children}
      </main>
      <footer>
        <Flex height="5rem" className="border border-red-500"></Flex>
      </footer>
    </>
  );
}

async function Header() {
  let userFromSession = await getUserFromSession();
  return (
    <header>
      <Flex height="5rem" className="border border-red-500">
        {userFromSession ? (
          <form
            action={async () => {
              "use server";
              let cookieStore = cookies();
              cookieStore.delete("session");
              redirect("/");
            }}
          >
            <Button type="submit">Logout</Button>
          </form>
        ) : null}
      </Flex>
    </header>
  );
}
