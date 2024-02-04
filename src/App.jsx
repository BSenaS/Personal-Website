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
  const { setTextData, textData } = useLang();
  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        setTextData({ ...response.data });
        console.log(textData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //Apiden veri dönmeden componentleri render etme.Daha temiz bir kod yazılabilirmi?
  if (!Object.keys(textData).length) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <div className="max-w-6xl justify-center mx-auto">
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
