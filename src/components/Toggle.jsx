"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import React from "react";
import { useLang } from "../context/LangThemeContext";

export const Toggle = () => {
  const { darkModeHandler, darkMode, setDarkMode } = useLang();
  //DarkMode değişimini izleyip local storageye yazan useEffect.
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div className="flex flex-col justify-center ml-3">
      <div
        className="w-16 h-6 flex items-center dark:bg-[#3A3A3A] bg-[#4731D3] cursor-pointer rounded-full p-1 relative"
        onClick={darkModeHandler}
      >
        <FaMoon className="text-medium" size={14} />
        <div
          className="absolute bg-white dark:bg-medium w-5 h-5 rounded-full shadow-md transform transition-transform duration-300"
          style={darkMode ? { left: "2px" } : { right: "3px" }}
        ></div>
        <BsSunFill className="ml-auto text-[#FFE86E]" />
      </div>
    </div>
  );
};
