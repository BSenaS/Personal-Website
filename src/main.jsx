import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import LangThemeContextProvider from "./context/LangThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LangThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LangThemeContextProvider>
);
