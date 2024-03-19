import { Link } from "react-router-dom";
import ReviewStars from "../shared/reviewStars";
import styles from "./productCard.module.css";
import Button from "../shared/button";
import React, { useContext } from "react";
import { APIResult, CartContext } from "../../App";

function ProductGrid() {
  const { state, dispatch } = useContext(CartContext);
  const { allProducts, loading, error } = useContext(APIResult);

  console.log(state);

  if (loading) {
    return (
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Oops something went wrong!</h1>
      </div>
    );
  }

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

  const handleAddToCart = ({id, title, discountedPrice, price, image}: AddToCart) => {
    dispatch({type: "addToCart", payload: { id, title, discountedPrice, price, image, quantity: 1 }});
  }

  return (
    <div className={styles.card_grid}>
      {allProducts.map(
        ({ id, title, image, discountedPrice, price, rating, tags }) => {
          return (
            <div key={id}>
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
                  <p className={styles.card_price}>kr{price}</p>
                  <p className={styles.card_discounted_price}>
                    kr{discountedPrice}
                  </p>
                </div>
              </Link>
              <Button
                text="Add to cart"
                handleEvent={() => {
                  handleAddToCart({id, title, discountedPrice, price, image});
                }}
              />
            </div>
          );
        }
      )}
    </div>
  );
}

export default ProductGrid;
