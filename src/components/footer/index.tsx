import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.footer_interactions}>
          <h3 className={styles.footer_header}>Quick Links</h3>
          <ul className={styles.footer_list}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className={styles.divider}></div>
          <span>
            <p>©2024 Sindre Strømsæther Derås</p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
