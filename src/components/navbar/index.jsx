import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";
import Searchbar from "../searchbar";
import { useState } from "react";


function Navbar() {
  const [isOpen, setIsOpen] = useState("")

  function toggleStyle() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <nav>
      <NavLink to="/" className={styles.navbar_logo}>
        Checkout
      </NavLink>
      <div className={styles.nav_interactions}>
        <ul className={`${styles.nav_list} ${isOpen ? styles.open : ''}`}>
          <Searchbar />
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/cart">Price</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </ul>
        <button className={styles.nav_toggle} onClick={toggleStyle}></button>
      </div>
    </nav>
  );
}

export default Navbar;
