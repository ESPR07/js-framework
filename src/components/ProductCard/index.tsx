import React, { useContext, useState } from "react";
import { CartContext } from "../../App";
import { Product } from "../API/apiFetch";
import Button from "../shared/button";
import { Link } from "react-router-dom";
import ReviewStars from "../shared/reviewStars";
import styles from "./ProductCard.module.css";

type AddToCart = {
  id: string,
  title: string,
  discountedPrice: number,
  price: number,
  image: {
      alt: string,
      url: string,
  },
}

function ProductCard({ id, title, image, discountedPrice, price, rating, tags }: Product) {
  const dispatch = useContext(CartContext).dispatch;
  const [buttonText, setButtonText] = useState("Add to Cart");

  const handleAddToCart = ({id, title, discountedPrice, price, image}: AddToCart) => {
    dispatch({type: "addToCart", payload: { id, title, discountedPrice, price, image, quantity: 1 }});
  }

  return (
    <div>
      <Link to={`/product/${id}`} className={styles.card_container}>
        <div className={styles.image_wrapper}>
          <img
            className={styles.card_image}
            src={image.url}
            alt={image.alt}
          />
        </div>
        <h2 className={styles.card_title}>{title}</h2>
        <p className={styles.card_category}>{tags[0]}</p>
        <ReviewStars stars={rating} />
        <div className={styles.card_price_container}>
          {price !== discountedPrice ? <p className={styles.previousPrice}>kr{price}</p> : <p className={styles.card_discounted_price}>kr{price}</p>}
          {price !== discountedPrice ? <p className={styles.card_discounted_price}>kr{discountedPrice}</p> : ""}
        </div>
      </Link>
      <Button
        text={buttonText}
        type="button"
        handleEvent={() => {
          setButtonText("Added!");

          setTimeout(() => {
            setButtonText("Add to Cart");
          }, 1000);

          handleAddToCart({id, title, discountedPrice, price, image});
        }}
      />
    </div>
  )
}

export default ProductCard;