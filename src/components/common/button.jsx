import styles from "./button.module.css";

function Button({handleEvent, text}) {
  return(
    <button className={styles.button} onClick={handleEvent}>{text}</button>
  )
}

export default Button;