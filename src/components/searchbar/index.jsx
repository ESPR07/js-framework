import { useState } from "react";
import styles from "./searchbar.module.css";
import SearchResults from "./searchResult";

function Searchbar() {
  const [isOpen, setOpen] = useState("search_input");
  const [searchValue, setSearchValue] = useState("")


  function openSearch(e) {
    e.preventDefault();
    if (isOpen === "search_input") {
      setOpen("search_open");
    } else {
      setOpen("search_input");
    }
  }

  function searchResults(e) {
    e.preventDefault();
    if (isOpen === "search_input") {
      setOpen("search_open");
    } else {
      setOpen("search_input");
      setSearchValue("");
    }
  }

  return (
    <div className={styles.search_container}>
      <form>
        <input
          className={`${styles.search_input} ${styles[isOpen]}`}
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        {isOpen === "search_input" ? (
          <button
            className={`${styles.search_button}`}
            type="submit"
            onClick={openSearch}
          ></button>
        ) : (
          <button
            className={`${styles.search_button} ${styles.search_button_open}`}
            type="submit"
            onClick={searchResults}
          ></button>
        )}
      </form>
      <SearchResults searchValue = {searchValue}/>
    </div>
  );
}

export default Searchbar;
