"use client";

import Switch from "@/components/Switch";
import { useThemeStore } from "@/store/themeStore";

export function DarkMode() {
    const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="flex items-center space-x-2">
      <Switch id="" onClick={() => toggleTheme()} theme={theme} />
    </div>
  );
}
