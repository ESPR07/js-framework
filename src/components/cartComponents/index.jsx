import { useEffect, useState } from "react";
import styles from "./cartComponents.module.css";
import { initialValue } from "./cartInteractions";

function NavCart() {
  const [currentCart, setCurrentCart] = useState(initialValue);

  useEffect(() => {
    function checkStorage() {
      const storage = JSON.parse(localStorage.getItem("cart"));

      if (storage) {
        setCurrentCart(storage);
      }
    }
    window.addEventListener("storage", checkStorage);

    return () => {
      window.removeEventListener("storage", checkStorage);
    };
  }, []);

  console.log(currentCart);

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartIcon}></div>
      <div className={styles.cartAmount}>{currentCart.productList.length}</div>
    </div>
  );
}

export default NavCart;
