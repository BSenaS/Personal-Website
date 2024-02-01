import React from "react";
import { useLang } from "../context/LangThemeContext";

export function Header() {
  const { textData, lang, langHandler } = useLang();
  //mock data kısaltması.
  const txt = textData[lang].header;

  return (
    <>
      <div className="w-full">
        <header className="w-10/12 mx-auto flex ">
          <button onClick={langHandler}>Ay</button>
          <span>{txt.darkmode}</span>
          <span>|</span>
          <span>{txt.languagetxt}</span>
          <span>{txt.language}</span>
        </header>
      </div>
    </>
  );
}
