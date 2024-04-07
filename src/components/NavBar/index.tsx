import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Searchbar from "../Searchbar";
import React, { useState } from "react";
import NavCart from "../NavCart";


function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggleStyle() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <nav>
      <NavLink to="/" onClick={() => {
        setIsOpen(false);
      }} className={styles.navbar_logo}>
        Checkout
      </NavLink>
      <div className={styles.nav_interactions}>
        <ul className={`${styles.nav_list} ${isOpen ? styles.open : ''}`}>
          <Searchbar />
          <NavLink to="/contact" onClick={toggleStyle}>Contact</NavLink>
          <NavLink to="/cart" onClick={toggleStyle}><NavCart /></NavLink>
        </ul>
        <button name="Toggle Navbar" className={styles.nav_toggle} onClick={toggleStyle}></button>
      </div>
    </nav>
  );
}

export default Navbar;
