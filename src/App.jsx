import "./App.css";
import { useLang } from "./context/LangThemeContext.jsx";
import data from "./data.js";
import { useEffect } from "react";
import axios from "axios";
import { MainLayout } from "./layout/MainLayout.jsx";

export function App() {
  const { setTextData, textData, setDarkMode } = useLang();
  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        //1.Postlanan veriyi, setTextDataya atayıp kullanma.
        setTextData({ ...response.data });
        //2.DarkModu localStoregeden çekip site refresh edildiğinde hatırlama.
        const theme = localStorage.getItem("theme");
        theme === "dark" ? setDarkMode(true) : setDarkMode(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //Apiden veri dönmeden componentleri render etme.Daha temiz bir kod yazılabilirmi?
  if (!Object.keys(textData).length) {
    return <div></div>;
  }
  return (
    <>
      <MainLayout />
    </>
  );
}
