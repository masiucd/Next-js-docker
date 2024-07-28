import {Flex} from "@radix-ui/themes";
import type {PropsWithChildren} from "react";

import {cn} from "@/lib/cn";

type Props = {
  className?: string;
  fluid?: boolean;
};

export function PageWrapper({
  children,
  className,
  fluid,
}: PropsWithChildren<Props>) {
  return (
    <Flex
      asChild
      direction="column"
      flexGrow="1"
      className={cn("mx-auto", fluid ? "w-full" : "w-app-width", className)}
    >
      <section>{children}</section>
    </Flex>
  );
}
