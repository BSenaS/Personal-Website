import "./App.css";
import LangThemeContextProvider, {
  useLang,
} from "./context/LangThemeContext.jsx";
import data from "./data.js";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Skills } from "./components/Skills.jsx";
import { Profile } from "./components/Profile.jsx";
import { Projects } from "./components/Projects.jsx";
import { Footer } from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export function App() {
  const { setTextData, textData, darkMode, setDarkMode } = useLang();
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
      {/* darkMode classını ekleme. */}
      <div className={`${darkMode ? "dark" : "light"}`}>
        <div className={`max-w-6xl justify-center mx-auto dark:bg-[#252128]`}>
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}
