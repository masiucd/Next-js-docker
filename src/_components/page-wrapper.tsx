import type {PropsWithChildren} from "react";

import {cn} from "../lib/cn";

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
        "mx-auto w-full flex flex-col flex-1",
        fluid ? "max-w-none" : "w-app-width",
        className
      )}
    >
      {children}
    </section>
  );
}
