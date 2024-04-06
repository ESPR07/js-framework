import React, { useEffect } from "react";
import styles from "./cartSuccess.module.css";
import Button from "../components/shared/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function CartSuccess() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  
  return (
    <main>
      <Helmet>
        <meta charSet='UTF-8'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name='description' content="Store Homepage"></meta>
        <title>Purchase Success!</title>
      </Helmet>
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