import React, { useContext } from "react";
import styles from "../../styles/Estilo.module.css";
import ThemeContext from "../../contexts/ThemeContext";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={styles.divswitch}>
      <label className={styles.switch}>
        <input type="checkbox" onClick={toggleTheme} />
        <span className={`slider ${theme}`}></span>
      </label>
    </div>
  );
}

export default ThemeButton;
