"use client";
import {ThemeProvider as NextThemeProvider} from "next-themes";
import {type PropsWithChildren} from "react";

export function ThemeProvider({children}: PropsWithChildren<{}>) {
  return (
    <NextThemeProvider defaultTheme="system" enableSystem attribute="class">
      {children}
    </NextThemeProvider>
  );
}
