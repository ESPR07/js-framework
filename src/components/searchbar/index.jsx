import { useState } from "react";
import styles from "./searchbar.module.css";

function Searchbar() {
  const [isOpen, setOpen] = useState("search_input");

  function openSearch(e) {
    e.preventDefault();
    if (isOpen === "search_input") {
      setOpen("search_open");
    } else {
      setOpen("search_input");
    }
  }

  function searchResults(e) {
    e.preventDefault()
  }

  return (
    <form>
      <input className={`${styles.search_input} ${styles[isOpen]}`} type="text" placeholder="Search" />
      {isOpen === "search_input" ? <button className={`${styles.search_button}`} type="submit" onClick={openSearch}>C</button> : <button className={`${styles.search_button} ${styles.search_button_open}`} type="submit" onClick={searchResults}>O</button>}
    </form>
  );
}

export default Searchbar;
