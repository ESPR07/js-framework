import React from "react";
import styles from "./cartSuccess.module.css";
import Button from "../components/shared/button";
import { Link } from "react-router-dom";

function CartSuccess() {
  return (
    <main>
      <div className={styles.successContainer}>
        <h1>Thank you for your purchase!</h1>
        <h2>Transaction number 123456789</h2>
        <p>While we are preparing your order why not look through some of our wonderful products!</p>
        <Link to="/">
          <Button text="Return to store" type="button" handleEvent={() => {}}></Button>
        </Link>
      </div>
    </main>
  )
}

export default CartSuccess;