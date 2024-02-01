import "./App.css";
import LangThemeContextProvider from "./context/LangThemeContext.jsx";
import data from "./data.js";
import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Skills } from "./components/Skills.jsx";
import { Profile } from "./components/Profile.jsx";
import { Projects } from "./components/Projects.jsx";
import { Footer } from "./components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLang } from "./context/LangThemeContext.jsx";

export function App() {
  // useEffect(() => {
  //   axios
  //     .post("https://reqres.in/api/workintech", data)
  //     .then((response) => {
  //       setTextData({ ...response.data });
  //       console.log(textData);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(textData);
  return (
    <>
      <LangThemeContextProvider>
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </LangThemeContextProvider>
    </>
  );
}
