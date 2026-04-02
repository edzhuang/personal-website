"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  const isDarkMode = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className="text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
      aria-label="toggle theme"
    >
      {isDarkMode ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </button>
  );
}
