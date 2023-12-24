"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme } from "@/context/theme-context";


export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  const buttonClassName = `fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all ${
    theme === "dark" ? "bg-orange-400" : "bg-purple-500"
  }`;

  return (
    <button className={buttonClassName} onClick={toggleTheme}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}