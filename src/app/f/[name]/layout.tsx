import {type PropsWithChildren} from "react";

export default function Layout({children}: PropsWithChildren) {
  return <main className="flex min-h-[100dvh] flex-col">{children}</main>;
}
