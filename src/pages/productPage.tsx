import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/shared/loader";
import styles from "./productPage.module.css";
import Button from "../components/shared/button";
import { APIResult, CartContext } from "../App";
import ReviewStars from "../components/shared/reviewStars";

function ProductPage() {
  const [quantity, setQuantity] = useState<number>(1)
  const { state, dispatch } = useContext(CartContext);
  let {id} = useParams();
  const { allProducts, loading, error } = useContext(APIResult);

  const product = allProducts.find((product) => product.id === id);

  console.log("Cart State: ", state)

  function handleClick(id: string, title: string, discountedPrice: number, price: number, image: {alt: string, url: string}) {
    dispatch({type: "addToCart", payload: {id, title, discountedPrice, price, image, quantity: quantity}})
  }

  if(loading) {
    return (
      <Loader/>
    )
  }

  if(error) {
    return (
      <div>
        <h1>Oops something went wrong!</h1>
      </div>
    )
  }

  if(product) {
    return (
      <main className={styles.productContainer}>
        <div className={styles.interactionContainer}>
          <img className={styles.productImage} src={product.image.url} alt={product.image.alt}></img>
          <div className={styles.quantityContainer}>
            <p className={styles.quantity}>Quantity:</p>
            <input className={styles.quantityInput} type="number" placeholder="1" onChange={(e) => {
              setQuantity(Number(e.target.value))
            }}></input>
          </div>
          <Button text="Add to cart" type="button" handleEvent={() => {
            handleClick(product.id, product.title, product.discountedPrice, product.price, product.image);
          }}/>
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <div className={styles.priceContainer}>
            {product.price === product.discountedPrice ? <p className={styles.price}>NOK {product.price}</p>: <p className={styles.discounted}>NOK {product.price}</p>}
            {product.price !== product.discountedPrice ? <p className={styles.price}>NOK {product.discountedPrice}</p>: ""}
          </div>
          <ReviewStars stars={product.rating}/>
          <p className={styles.description}>{product.description}</p>
        </div>
      </main>
    )
  }
}

export default ProductPage;