import React from "react";
import styles from "./button.module.css";

type ButtonTypes = {
  handleEvent: () => void,
  type: "button" | "submit" | "reset" | undefined,
  text: string,
}

const Button = ({text, type, handleEvent}: ButtonTypes) => {
  return(
    <button type={type} value={text} className={styles.button} onClick={handleEvent}>{text}</button>
  )
}

export default Button;