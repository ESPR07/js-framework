import { useEffect, useState } from "react";
import styles from "./searchbar.module.css";
import APICall from "../api/apiFetch";

const url = "https://v2.api.noroff.dev/online-shop";

function SearchResults(searchValue) {

  searchValue = searchValue.searchValue;

  const { products, isLoading, isError } = APICall(url);
  console.log(searchValue);
  console.log(isLoading);
  console.log(isError);

  const [productList, setProductList] = useState(products);

  useEffect(() => {
    if(searchValue !== "") {
      const filteredList = products.filter((word) => word.title.toLowerCase().includes(searchValue.toLowerCase()));
      setProductList(filteredList.slice(0, 5));
    } else {
      setProductList([]);
    }
  }, [products, searchValue]);
  

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
