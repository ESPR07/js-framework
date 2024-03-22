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
    if(isOpen) {
      setSearchValue("");
    }

    setOpen(!isOpen);
  }

  return (
    <div className={styles.search_container}>
      <form className={styles.searchForm} onSubmit={searchResults}>
        <input
          className={`${styles.search_input} ${styles[isOpen ? "search_open" : "search_input"]}`}
          type="text"
          placeholder="Search"
          title="Searchbar"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
          <button
            className={`${styles.search_button} ${isOpen && styles.search_button_open}`}
            onClick={handleClick}
            title={isOpen ? "Close searchbar" : "Open searchbar"}
          ></button>
      </form>
      <SearchResults searchValue = {searchValue}/>
    </div>
  );
}

export default Searchbar;
