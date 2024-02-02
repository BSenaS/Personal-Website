import React from "react";
import { useLang } from "../context/LangThemeContext";

export function Header() {
  const { textData, lang, langHandler } = useLang();
  const txt = textData[lang].header;
  return (
    <>
      <div className="justify-center mx-4 mb-8">
        <header className="flex py-4 justify-end gap-x-2">
          <button onClick={langHandler} className="">
            Ay
          </button>
          <span className="text-[#777]">{txt.darkmode}</span>
          <span className="text-[#777]">|</span>
          <span className="text-[#4731D3]">{txt.languagetxt}</span>
          <span className="text-[#777]">{txt.language}</span>
        </header>
        <div className="flex py-4 justify-end gap-x-5 ">
          <span className="text-[#777] rounded-md px-6 py-2 text-lg font-medium">
            {txt.skill}
          </span>
          <span className="text-[#777] rounded-md px-6 py-2 text-lg font-medium">
            {txt.proje}
          </span>
          <span className="text-[#3730A3] border rounded-md px-6 py-2 text-lg font-medium ">
            {txt.contact}
          </span>
        </div>
      </div>
    </>
  );
}
