import React, { useContext, useEffect, useState } from "react";
import styles from "./searchbar.module.css";
import { APIResult } from "../../App";
import { Link } from "react-router-dom";

const SearchResults = ({searchValue, emptySearch}: {searchValue: string, emptySearch: (string: string) => void}) => {

  const {allProducts, loading, error} = useContext(APIResult);
  console.log('search value: ', searchValue);
  console.log('loading status', loading);
  console.log('error status:', error);


  const [productList, setProductList] = useState(allProducts);

  useEffect(() => {
    if(searchValue !== "") {
      const filteredList = allProducts.filter((word) => word.title.toLowerCase().includes(searchValue.toLowerCase()));
      setProductList(filteredList.slice(0, 5));
    } else {
      setProductList([]);
    }
  }, [allProducts, searchValue]);
  

  return (
    <div className={styles.results_container}>
      {productList.map(({ id, title, price, image }) => {
        return (
          <Link
            to={`/product/${id}`}
            key={id}
            className={styles.result_container}
            onClick={() => {
              emptySearch("");
            }}
          >
            <img
              src={image.url}
              alt={image.alt}
              className={styles.result_image}
            />
            <div className={styles.product_info}>
              <p>{title}</p>
              <p>kr{price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchResults;
