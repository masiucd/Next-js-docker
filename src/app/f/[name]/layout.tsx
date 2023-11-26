import {type PropsWithChildren} from "react";

export default function Layout({
  children,
  params,
}: PropsWithChildren<{
  params: {[key: string]: string};
}>) {
  console.log("params", params);
  return <main className="flex min-h-[100dvh] flex-col">{children}</main>;
}
