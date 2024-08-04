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
    <section
      className={cn(
        "flex flex-col mx-auto flex-1",
        fluid ? "w-full" : "max-w-6xl w-full",
        className
      )}
    >
      {children}
    </section>
  );
}
