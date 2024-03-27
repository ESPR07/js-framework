import React, { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css";
import { Cart, CartContext } from "../App";
import { initialValue } from "../components/cartComponents/cartInteractions";
import Button from "../components/shared/button";

function CartPage() {
  const [increment, setIncrement] = useState<number>(1)
  const [currentCart, setCurrentCart] = useState<Cart>(initialValue);
  const {state, dispatch} = useContext(CartContext);

  function handleClick(id: string, title: string, discountedPrice: number, price: number, image: {alt: string, url: string}) {
    dispatch({type: "updateProduct", payload: {id, title, discountedPrice, price, image, quantity: increment}})
  }

  useEffect( () => {
    setCurrentCart(state)
}, [state])

  if(currentCart.productList.length === 0) {
    return(
      <main>
      <div className={styles.cartContainer}>
        <div className={styles.cartContentContainer}>
          <h1 className={styles.cartHeader}>Your Cart</h1>
          <h2>Your cart is empty!</h2>
        </div>
        <div className={styles.summaryContainer}>
          <h3 className={styles.summaryHeader}>Summary</h3>
          <div>
            <p>Subtotal:</p>
            <p>kr 0</p>
          </div>
          <div>
            <p>Estimated shipping: </p>
            <p>kr 0</p>
          </div>
          <div>
            <p>Total:</p>
            <p>kr 0</p>
          </div>
          <Button text="Checkout" type="button" handleEvent={() => {}}/>
        </div>
      </div>
    </main>
    )
  }

  return (
    <main>
      <div className={styles.cartContainer}>
        <div className={styles.cartContentContainer}>
          <h1 className={styles.cartHeader}>Your Cart</h1>
          {currentCart.productList.map((product) => {
            return (
              <div key={product.id} className={styles.productContainer}>
                <img src={product.image.url} alt={product.image.alt} className={styles.productImage}></img>
                <div className={styles.productTitleContainer}>
                  <h2 className={styles.productTitle}>{product.title}</h2>
                  <div className={styles.productInteraction}>
                    <Button text="Update" type="button" handleEvent={() => {
                      handleClick(product.id, product.title, product.discountedPrice, product.price, product.image)
                    }}/>
                    <input className={styles.quantityInput} type="number" placeholder={String(product.quantity)} onChange={(e) => {
                      setIncrement(Number(e.target.value));
                    }}></input>
                  </div>
                </div>
                <div className={styles.priceContainer}>
                  {product.price === product.discountedPrice ? <p className={styles.price}>kr {product.price}</p> : <p className={styles.discountedPrice}>kr {product.price}</p>}
                  {product.price === product.discountedPrice ? "" : <p className={styles.price}>kr {product.discountedPrice}</p>}
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.summaryContainer}>
          <h3 className={styles.summaryHeader}>Summary</h3>
          <div>
            <p>Subtotal:</p>
            <p>kr {currentCart.totalPrice.toFixed(2)}</p>
          </div>
          <div>
            <p>Estimated shipping: </p>
            <p>kr 0</p>
          </div>
          <div>
            <p>Total:</p>
            <p>kr {currentCart.totalPrice.toFixed(2)}</p>
          </div>
          <Button text="Checkout" type="button" handleEvent={() => {}}/>
        </div>
      </div>
    </main>
  )
}

export default CartPage;