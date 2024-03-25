import { useEffect, useState } from "react";

const url = "https://v2.api.noroff.dev/online-shop";

export type Product = {
  description: string;
  discountedPrice: number;
  id: string;
  image: {
    alt: string;
    url: string;
  };
  price: number;
  rating: 1 | 2 | 3 | 4 | 5;
  reviews: [
    {
      description: string;
      id: string;
      rating: 1 | 2 | 3 | 4 | 5;
      username: string;
    }
  ];
  tags: string[];
  title: string;
};

function useGetProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

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
  }, []);

  return { products, isLoading, isError};
}



export default useGetProducts;