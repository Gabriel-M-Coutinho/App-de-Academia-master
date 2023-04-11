import React, { useState } from "react";
import ThemeContext from "../contexts/ThemeContext";
import "../styles/Estilo.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("escuro");

  function toggleTheme() {
    setTheme(theme === "claro" ? "escuro" : "claro");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}
