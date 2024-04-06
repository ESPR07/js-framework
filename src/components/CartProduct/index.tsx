import React, { useContext, useRef } from "react";
import styles from "./CartProduct.module.css";
import { CartContext, CartItem } from "../../App";
import Button from "../shared/button";

function CartProduct({id, title, discountedPrice, price, image, quantity}: CartItem) {

  const dispatch = useContext(CartContext).dispatch;

  const quantityRef = useRef<HTMLInputElement>(null);

  function handleUpdate(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
    if(quantityRef.current === null) {
      return
    }

    if(quantityRef.current.value !== "") {
      dispatch({type: "updateProduct", payload: {id, title, discountedPrice, price, image, quantity: Number(quantityRef.current.value)}})
    }
  }

  function handleRemove(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault()
    dispatch({type: "updateProduct", payload: {id, title, discountedPrice, price, image, quantity: 0}})
  }

  return(
    <div className={styles.productContainer}>
      <img src={image.url} alt={image.alt} className={styles.productImage}></img>
      <div className={styles.productTitleContainer}>
        <h2 className={styles.productTitle}>{title}</h2>
        <div key={id} className={styles.priceContainer}>
        {price === discountedPrice ? <p className={styles.price}>kr {price}</p> : <p className={styles.discountedPrice}>kr {price}</p>}
        {price === discountedPrice ? "" : <p className={styles.price}>kr {discountedPrice}</p>}
        </div>
      </div>
      <form className={styles.productInteraction} onSubmit={(e) => {
        e.preventDefault()
        handleUpdate();
      }}>
        <Button text="Remove" type="button" handleEvent={(e) => {
          handleRemove(e)
        }}/>
        <Button text="Update" type="button" handleEvent={(e) => {
          handleUpdate(e)
        }}/>
        <input className={styles.quantityInput} type="number" defaultValue={String(quantity)} ref={quantityRef} onBlur={() => {
          handleUpdate()
        }}></input>
      </form>
    </div>
  )
}

export default CartProduct;