import "./globals.css";

import type {Metadata} from "next";
import {Inter} from "next/font/google";

import {ThemeProvider} from "../lib/providers/theme";
import {cn} from "../lib/utils/cn";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Email app",
  description: "Email app, send and receive emails",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <body
        className={cn(
          "bg-gray-50",
          "dark:bg-gray-950 dark:text-white text-gray-800",
          inter.className
        )}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
