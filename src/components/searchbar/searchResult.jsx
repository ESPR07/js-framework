import { useContext, useEffect, useState } from "react";
import styles from "./searchbar.module.css";
import { APIResult } from "../../App";
// import APICall from "../api/apiFetch";

// const url = "https://v2.api.noroff.dev/online-shop";

function SearchResults(searchValue) {

  searchValue = searchValue.searchValue;

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
          <div key={id} className={styles.result_container}>
            <img
              src={image.url}
              alt={image.alt}
              className={styles.result_image}
            />
            <div className={styles.product_info}>
              <p>{title}</p>
              <p>kr{price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResults;
