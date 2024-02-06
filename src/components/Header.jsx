import React from "react";
import { useLang } from "../context/LangThemeContext";
import { Toggle } from "./Toggle";

export function Header() {
  const { textData, lang, langHandler, darkModeHandler, darkMode } = useLang();
  const txt = textData[lang].header;
  return (
    <>
      <div className="justify-center mx-4 mb-8">
        <header className="flex py-4 justify-end gap-x-2 items-center">
          {/* DarkMode için toggle butonu */}
          <Toggle />
          <span className="text-[#777] font-bold ">{txt.darkmode}</span>
          <span className="text-[#777] font-bold">|</span>
          <button onClick={langHandler} className="flex gap-x-2">
            <span className="text-[#4731D3] dark:text-[#BAB2E7] font-bold">
              {txt.languagetxt}
            </span>
            <span className="text-[#777] font-bold">{txt.language}</span>
          </button>
        </header>
        <div className="flex py-4 justify-end gap-x-5 ">
          <span className="text-[#777] rounded-md md:px-6 px-4 py-2 text-lg font-medium">
            {txt.skill}
          </span>
          <span className="text-[#777] rounded-md md:px-6 px-4 py-2 text-lg font-medium">
            {txt.proje}
          </span>
          <span className="text-[#3730A3] border rounded-md px-4 md:px-6 py-2 text-lg font-medium dark:bg-white">
            {txt.contact}
          </span>
        </div>
      </div>
    </>
  );
}
