"use client";

import {useTheme} from "next-themes";

import {cn} from "@/lib/utils/cn";

export default function ThemeToggle() {
  let {theme, setTheme} = useTheme();
  console.log("theme", theme);

  return (
    <div className="flex gap-10">
      <button
        className={cn("bg-gray-50", theme === "light" && "bg-red-200")}
        onClick={() => {
          setTheme("light");
        }}
      >
        Light
      </button>
      <button
        className={cn(
          "bg-gray-50",

          theme === "dark" && "bg-red-200"
        )}
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
      <button
        className={cn("bg-gray-50", theme === "system" && "bg-red-100")}
        onClick={() => {
          setTheme("system");
        }}
      >
        System
      </button>
    </div>
  );
}
