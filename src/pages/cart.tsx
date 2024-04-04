import React, { useContext, useEffect, useState } from "react";
import styles from "./cart.module.css";
import { Cart, CartContext } from "../App";
import { initialValue } from "../components/cartComponents/cartInteractions";
import Button from "../components/shared/button";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function CartPage() {
  const [increment, setIncrement] = useState<number>(1)
  const [currentCart, setCurrentCart] = useState<Cart>(initialValue);
  const {state, dispatch} = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  const imageObject = {
    alt: "yolo",
    url: "url"
  }

  function handleUpdate(id: string, title: string, discountedPrice: number, price: number, image: {alt: string, url: string,}) {
    dispatch({type: "updateProduct", payload: {id, title, discountedPrice, price, image, quantity: increment}})
  }

  function handleRemove(id: string, title: string, discountedPrice: number, price: number, image: {alt: string, url: string,}) {
    dispatch({type: "updateProduct", payload: {id, title, discountedPrice, price, image, quantity: 0}})
  }

  function handleClear(id: string, title: string, discountedPrice: number, price: number, image: {alt: string, url: string,}) {
    dispatch({type: "clearCart", payload: {id, title, discountedPrice, price, image, quantity: 0}})
  }

  useEffect( () => {
    setCurrentCart(state)
}, [state])

  if(currentCart.productList.length === 0) {
    return(
      <React.Fragment>
        <Helmet>
          <meta charSet='UTF-8'></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta name='description' content="Cart Page"></meta>
          <title>Cart</title>
        </Helmet>
        <main>
        <div className={styles.cartContainer}>
          <div className={styles.cartContentContainer}>
            <div className={styles.cartHeaderContainer}>
              <h1 className={styles.cartHeader}>Your Cart</h1>
            </div>
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
          </div>
        </div>
      </main>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet='UTF-8'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name='description' content="Cart Page"></meta>
        <title>Cart</title>
      </Helmet>
      <main>
        <div className={styles.cartContainer}>
          <div className={styles.cartContentContainer}>
            <div className={styles.cartHeaderContainer}>
              <h1 className={styles.cartHeader}>Your Cart</h1>
              <div>
                <Button text="Clear Cart" type="button" handleEvent={() => {
                  handleClear("a", "b", 1, 2, imageObject)
                }} />
              </div>
            </div>
            {currentCart.productList.map((product) => {
              return (
                <div key={product.id}>
                  <div className={styles.productContainer}>
                    <img src={product.image.url} alt={product.image.alt} className={styles.productImage}></img>
                    <div className={styles.productInfoContainer}>
                      <div className={styles.productTitleContainer}>
                        <h2 className={styles.productTitle}>{product.title}</h2>
                        <div key={product.id} className={styles.priceContainer}>
                        {product.price === product.discountedPrice ? <p className={styles.price}>kr {product.price}</p> : <p className={styles.discountedPrice}>kr {product.price}</p>}
                        {product.price === product.discountedPrice ? "" : <p className={styles.price}>kr {product.discountedPrice}</p>}
                        </div>
                      </div>
                      <div className={styles.productInteraction}>
                        <Button text="Remove" type="button" handleEvent={() => {
                          handleRemove(product.id, product.title, product.discountedPrice, product.price, product.image)
                        }}/>
                        <Button text="Update" type="button" handleEvent={() => {
                          handleUpdate(product.id, product.title, product.discountedPrice, product.price, product.image)
                        }}/>
                        <input className={styles.quantityInput} type="number" placeholder={String(product.quantity)} onChange={(e) => {
                          setIncrement(Number(e.target.value));
                        }}></input>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productInteractionMobile}>
                    <Button text="Remove" type="button" handleEvent={() => {
                      handleRemove(product.id, product.title, product.discountedPrice, product.price, product.image)
                      }}/>
                    <Button text="Update" type="button" handleEvent={() => {
                      handleUpdate(product.id, product.title, product.discountedPrice, product.price, product.image)
                      }}/>
                    <input className={styles.quantityInput} type="number" placeholder={String(product.quantity)} onChange={(e) => {
                      setIncrement(Number(e.target.value));
                      }}></input>
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
            <Link to="/cartSuccess">
              <Button text="Checkout" type="button" handleEvent={() => {
                handleClear("a", "b", 1, 2, imageObject)
              }}/>
            </Link>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default CartPage;