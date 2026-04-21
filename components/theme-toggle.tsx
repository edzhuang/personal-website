"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const emptySubscribe = () => () => {};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!isMounted) {
    return (
      <button
        className="text-muted transition-colors"
        aria-label="toggle theme"
        disabled
      >
        <Sun className="size-5" />
      </button>
    );
  }

  const isDarkMode = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className="text-muted hover:text-foreground transition-colors cursor-pointer"
      aria-label="toggle theme"
    >
      {isDarkMode ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </button>
  );
}
