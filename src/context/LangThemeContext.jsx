//Burada, dark mode ve language logic'i bulanacak.
import { createContext, useContext, useState } from "react";
export const LangThemeContext = createContext();

export const LangThemeContextProvider = ({ children }) => {
  //1.Local Storageden language tercihi varsa bunu çekip bir variable'a atıyorum.
  const currentLang = localStorage.getItem("language");
  //2.language için state
  const [lang, setLang] = useState(currentLang || "tr");
  //3.languageimi değiştiren handler.
  const langHandler = () => {
    lang === "tr" ? setLang("en") : setLang("tr");
  };

  //Darkmode için state.
  const [darkMode, setDarkMode] = useState(true);
  const darkModeHandler = () => {
    setDarkMode(!darkMode);
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
