import React, { useState } from "react";
import styles from "./searchbar.module.css";
import SearchResults from "./searchResult";

function Searchbar() {
  const [isOpen, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("")



  function searchResults(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const handleClick = () => {
    if(!isOpen) {
      setSearchValue("");
    }

    setOpen(!isOpen);
  }

  return (
    <div className={styles.search_container}>
      <form onSubmit={searchResults}>
        <input
          className={`${styles.search_input} ${styles[isOpen ? "search_input" : "search_open"]}`}
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
          <button
            className={`${styles.search_button} ${!isOpen && styles.search_button_open}`}
            onClick={handleClick}
          ></button>
      </form>
      <SearchResults searchValue = {searchValue}/>
    </div>
  );
}

export default Searchbar;
