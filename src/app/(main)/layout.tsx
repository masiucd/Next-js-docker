import {Box, Button, Flex} from "@radix-ui/themes";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import type {ReactNode} from "react";

import {P, Strong} from "@/_components/typography";
import {getUserFromSession} from "@/lib/auth";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="my-5 flex min-h-[calc(100dvh-12rem)] flex-col">
        {children}
      </main>
      <Footer />
    </>
  );
}

async function Header() {
  let userFromSession = await getUserFromSession();
  return (
    <header className="bg-gray-100 shadow">
      <Flex
        height="5rem"
        className="mx-auto w-app-width"
        align="center"
        justify="between"
      >
        <Box>
          <Strong>Docker Next-JS</Strong>
        </Box>
        {userFromSession ? (
          <form
            action={async () => {
              "use server";
              let cookieStore = cookies();
              cookieStore.delete("session");
              redirect("/");
            }}
          >
            <Button variant="ghost" type="submit">
              Logout
            </Button>
          </form>
        ) : null}
      </Flex>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 shadow">
      <Flex height="5rem" className="mx-auto w-app-width" align="center">
        <P asChild size="2">
          <small>© {new Date().getFullYear()} Docker Next-JS</small>
        </P>
      </Flex>
    </footer>
  );
}
