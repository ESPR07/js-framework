import { Link } from "react-router-dom";
import APICall from "../api/apiFetch";
import ReviewStars from "../common/reviewStars";
import styles from "./productCard.module.css";
import Button from "../common/button";
import { useReducer } from "react";
import cartInteractions from "../cart/cartInteractions";

const url = "https://v2.api.noroff.dev/online-shop";

// For testing purposes
if (!localStorage.getItem("cart")) {
  const initialValue = JSON.stringify({
    productList: [],
    totalPrice: 0,
  });

  localStorage.setItem("cart", initialValue);
}

const getCart = JSON.parse(localStorage.getItem("cart"));

function ProductCard() {
  const { products, isLoading, isError } = APICall(url);
  const [state, dispatch] = useReducer(cartInteractions, getCart);

  console.log(state);

  if (isLoading) {
    return (
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (isError) {
    <div>
      <h1>Oops something went wrong!</h1>
    </div>;
  }

  return (
    <div className={styles.card_grid}>
      {products.map(
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
                  dispatch({
                    type: "addToCart",
                    payload: { id, title, discountedPrice, price, image },
                  });
                }}
              />
            </div>
          );
        }
      )}
    </div>
  );
}

export default ProductCard;
