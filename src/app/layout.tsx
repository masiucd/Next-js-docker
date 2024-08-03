import "./globals.css";
import "@radix-ui/themes/styles.css";

import {Theme} from "@radix-ui/themes";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import type {ReactNode} from "react";

import {appTheme} from "@/lib/config";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Docker with Next.js",
  description: "A Next.js app with Docker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          accentColor={appTheme.accentColor}
          grayColor={appTheme.grayColor}
          radius={appTheme.radius}
          scaling={appTheme.scaling}
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
