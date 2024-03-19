import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage";
import React, { createContext, useReducer } from "react";
import cartInteractions, {
  InteractionAction,
  initialValue,
} from "./components/cartComponents/cartInteractions";
import APICall from "./components/api/apiFetch";
import Contact from "./pages/contact";

type Product = {
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

type APIInterface = {
  allProducts: Product[];
  loading: boolean;
  error: boolean;
};

export type CartItem = {
  id: string;
  title: string;
  discountedPrice: number;
  image: {
    alt: string;
    url: string;
  };
  price: number;
  quantity: number;
};

export type Cart = {
  productList: CartItem[];
  totalPrice: number;
};

export const CartContext = createContext<{
  state: Cart;
  dispatch: ({ type, payload }: InteractionAction) => void;
}>({ state: initialValue, dispatch: () => {} });
export const APIResult = createContext<APIInterface>({
  allProducts: [],
  loading: false,
  error: false,
});

const Layout = () => {
  const url = "https://v2.api.noroff.dev/online-shop";
  const { products, isLoading, isError } = APICall(url);

  console.log(products);
  const localStoreCart = localStorage.getItem("cart");

  const [state, dispatch] = useReducer(
    cartInteractions,
    localStoreCart !== null ? JSON.parse(localStoreCart) : initialValue
  );

  return (
    <div>
      <CartContext.Provider value={{ state: state, dispatch: dispatch }}>
        <APIResult.Provider
          value={{ allProducts: products, loading: isLoading, error: isError }}
        >
          <Navbar />
          <Outlet />
          <Footer />
        </APIResult.Provider>
      </CartContext.Provider>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="product/:id"
            element={
              <img
                src="https://t3.ftcdn.net/jpg/02/33/17/50/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
                alt="under construction"
              />
            }
          ></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route
            path="cart"
            element={
              <img
                src="https://t3.ftcdn.net/jpg/02/33/17/50/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
                alt="under construction"
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
