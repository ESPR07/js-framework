import {useContext, useEffect, useState} from "react";
import styles from "./cartComponents.module.css";
import {CartContext} from "../../App";

function NavCart() {
    const [currentCart, setCurrentCart] = useState({})
    const {state} = useContext(CartContext)

    useEffect( () => {
        setCurrentCart(state)
    }, [state])

    const numberOfItems = currentCart.productList !== undefined ?
        currentCart.productList.map(
            product => product.quantity
        ).reduce((a,b) => a+b, 0) :
        0

    return (
        <div className={styles.cartContainer}>
            <div className={styles.cartIcon}></div>
            <div className={styles.cartAmount}> {numberOfItems}</div>
        </div>
    );
}

export default NavCart;
