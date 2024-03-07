import { Link } from "react-router-dom";
import APICall from "../api/apiFetch";
import ReviewStars from "../common/reviewStars";
import styles from "./productCard.module.css";

const url = "https://v2.api.noroff.dev/online-shop";

function ProductCard() {
  const { products, isLoading, isError} = APICall(url);

  if(isLoading) {
    return (
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    )
  }

  if(isError) {
    <div>
      <h1>Oops something went wrong!</h1>
    </div>
  }

  return (
    <div className={styles.card_grid}>
       {products.map(({id, title, image, discountedPrice, price, rating, tags }) => {
        return (
          <Link to={`/product/${id}`} key={id} className={styles.card_container}>
            <div className={styles.image_wrapper}>
              <img className={styles.card_image} src={image.url} alt={image.alt}/>
            </div>
            <h2 className={styles.card_title}>{title}</h2>
            <p className={styles.card_category}>{tags[0]}</p>
            <ReviewStars stars={rating} />
            <div className={styles.card_price_container}>
              <p className={styles.card_price}>kr{price}</p>
              <p className={styles.card_discounted_price}>kr{discountedPrice}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductCard;