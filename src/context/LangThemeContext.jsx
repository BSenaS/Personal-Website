//Burada, dark mode ve language logic'i bulanacak.
import { createContext, useContext, useState } from "react";
export const LangThemeContext = createContext();
import data from "../data.js";
import axios from "axios";

export const LangThemeContextProvider = ({ children }) => {
  //1.language için state
  const [lang, setLang] = useState("tr");
  const langHandler = () => {
    lang === "tr" ? setLang("en") : setLang("tr");
  };
  //2.darkmode için state
  const [darkMode, setDarkMode] = useState(true);
  const darkModeHandler = () => {
    setDarkMode(darkMode ? false : true);
  };

  //axios isteği
  const [textData, setTextData] = useState({});
  return (
    <LangThemeContext.Provider
      value={{
        lang,
        setLang,
        langHandler,
        darkMode,
        setDarkMode,
        darkModeHandler,
        textData,
        setTextData,
      }}
    >
      {children}
    </LangThemeContext.Provider>
  );
};

export const useLang = () => useContext(LangThemeContext);
export default LangThemeContextProvider;
