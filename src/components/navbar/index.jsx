import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css"

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={styles.navbar_logo}>Checkout</NavLink>
      <ul className={styles.nav_list}>
        <li>Search</li>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">Price</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
