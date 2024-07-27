import {Flex} from "@radix-ui/themes";
import type {ReactNode} from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <header>
        <Flex height="5rem" className="border border-red-500"></Flex>
      </header>
      <main className="flex min-h-[calc(100dvh-10rem)] flex-col">
        {children}
      </main>
      <footer>
        <Flex height="5rem" className="border border-red-500"></Flex>
      </footer>
    </>
  );
}
