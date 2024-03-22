import { useEffect, useState } from "react";

function APICall(url: string) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function apiFetch() {
      try {
        setIsLoading(true);
        setIsError(false);
        const fetchProducts = await fetch(url);
        const productList = await fetchProducts.json();
        setProducts(productList.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    apiFetch();
  }, [url]);

  return { products, isLoading, isError};
}


export default APICall;