import React from "react";
import styles from "./button.module.css";

type ButtonTypes = {
  handleEvent: () => void,
  text: string,
}

const Button = ({handleEvent, text}: ButtonTypes) => {
  return(
    <button className={styles.button} onClick={handleEvent}>{text}</button>
  )
}

export default Button;