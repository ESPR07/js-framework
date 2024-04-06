import React, {useContext, useEffect, useState} from "react";
import styles from "./cartComponents.module.css";
import {Cart, CartContext} from "../../App";
import {initialValue} from "../Reducers/cartInteractions"

function NavCart() {
    const [currentCart, setCurrentCart] = useState<Cart>(initialValue);
    const {state} = useContext(CartContext);

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
