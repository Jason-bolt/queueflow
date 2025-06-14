"use client";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/contexts/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative rounded-lg bg-gray-100 p-2 transition-all duration-300 ease-in-out hover:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative h-5 w-5">
        <Sun
          className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-300 ${
            isDark
              ? "scale-0 rotate-90 opacity-0"
              : "scale-100 rotate-0 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 text-blue-400 transition-all duration-300 ${
            isDark
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
