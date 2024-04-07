import styles from "./productCard.module.css";
import React, { useContext } from "react";
import { APIResult } from "../../App";
import Loader from "../shared/loader";
import ProductCard from "../ProductCard";

function ProductGrid() {
  const { allProducts, loading, error } = useContext(APIResult);

  if (loading) {
    return (
      <Loader/>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Oops something went wrong!</h1>
      </div>
    );
  }

  return (
    <div className={styles.card_grid}>
      {allProducts.map(
        (product) => {
          return (
            <ProductCard key={product.id} {...product} />
          );
        }
      )}
    </div>
  );
}

export default ProductGrid;
