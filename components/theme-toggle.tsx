"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
      aria-label="toggle theme"
    >
      <Sun className="hidden size-5 dark:block" />
      <Moon className="block size-5 dark:hidden" />
    </button>
  );
}
