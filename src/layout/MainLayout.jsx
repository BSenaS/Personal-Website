import React from "react";
import { Header } from "../components/Header.jsx";
import { Hero } from "../components/Hero.jsx";
import { Skills } from "../components/Skills.jsx";
import { Profile } from "../components/Profile.jsx";
import { Projects } from "../components/Projects.jsx";
import { Footer } from "../components/Footer.jsx";
import { useLang } from "../context/LangThemeContext.jsx";
import "./layoutAnimations.css";

export const MainLayout = () => {
  const { darkMode } = useLang();
  return (
    <>
      {/* darkMode classını ekleme. */}
      <div className={`${darkMode ? "dark" : "light"}`}>
        <div className="dark:bg-[#252128]">
          <div className={`max-w-6xl justify-center mx-auto intro`}>
            <Header />
            <Hero />
            <Skills />
            <Profile />
            <Projects />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
