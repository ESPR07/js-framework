import {Outlet, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HomePage from "./pages/homepage.jsx";
import {createContext, useReducer} from "react";
import cartInteractions, {initialValue} from "./components/cartComponents/cartInteractions";
import APICall from "./components/api/apiFetch.jsx";

export const CartContext = createContext({state: {}, dispatch: () => {}})
export const APIResult = createContext({allProducts: {}, loading: null, error: null});

function Layout() {
    const url = "https://v2.api.noroff.dev/online-shop";
    const {products, isLoading, isError} = APICall(url);
    console.log(products);
    const [state, dispatch] = useReducer(cartInteractions,
        JSON.parse(localStorage.getItem("cart")) ?? initialValue
    );


    return (
        <div>
            <CartContext.Provider value={{state: state, dispatch: dispatch}}>
            <APIResult.Provider value={{allProducts: products, loading: isLoading, error: isError}}>
                <Navbar/>
                <Outlet/>
                <Footer/>
            </APIResult.Provider>
            </CartContext.Provider>
        </div>
    );
}

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}></Route>
                    <Route
                        path="product/:id"
                        element={
                            <img
                                src="https://t3.ftcdn.net/jpg/02/33/17/50/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
                                alt="under construction"
                            />
                        }
                    ></Route>
                    <Route
                        path="contact"
                        element={
                            <img
                                src="https://t3.ftcdn.net/jpg/02/33/17/50/360_F_233175040_hwqRyiZlQkXimeLz2AIZhajyfiU9El1m.jpg"
                                alt="under construction"
                            />
                        }
                    ></Route>
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
