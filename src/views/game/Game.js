import React from "react";
import styles from "./Game.module.css"

export const Game = () => {
  return (
    <button className={`${styles.draw} ${styles.button}`}>
      Draw Button
    </button>
  );
};
