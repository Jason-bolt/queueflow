"use client";

import { useEffect } from "react";

const ThemeChecker = () => {
  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : false;

    const shouldBeDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", shouldBeDark);
    }
  }, []);
  return <></>;
};

export default ThemeChecker;
