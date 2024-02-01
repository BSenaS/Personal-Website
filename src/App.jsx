import "./App.css";
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
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
}
