import { Cart, CartItem } from "../../App";

export const initialValue: Cart = {
  productList: [],
  totalPrice: 0,
};

export type InteractionAction = {
  type: "addToCart" | "updateProduct" | "clearCart",
  payload: CartItem
}

const cartInteractions = (state: Cart, action: InteractionAction) => {
  let productIndex;
  let cart;
  let newTotalPrice;



  const productObject = {
    id: action.payload.id,
    title: action.payload.title,
    discountedPrice: action.payload.discountedPrice,
    price: action.payload.price,
    image: action.payload.image,
  };

  switch (action.type) {
    case "addToCart":
      cart = [...state.productList];

      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex === -1) {
        cart.push({ ...productObject, quantity: action.payload.quantity ?? 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + action.payload.quantity },
          ...cart.slice(productIndex + 1),
        ];
      }

      newTotalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      let newCart = JSON.stringify({
        ...state,
        productList: cart,
        totalPrice: newTotalPrice,
      });

      localStorage.setItem("cart", newCart);
      window.dispatchEvent(new Event("storage"));
      return { ...state, productList: cart, totalPrice: newTotalPrice };

    case "updateProduct":
      cart = [...state.productList];

      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        if (action.payload.quantity >= 1) {
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity = action.payload.quantity,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }

      newTotalPrice = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      let removedCart = JSON.stringify({
        ...state,
        productList: cart,
        totalPrice: newTotalPrice,
      });

      localStorage.setItem("cart", removedCart);
      window.dispatchEvent(new Event("storage"));
      return { ...state, productList: cart, totalPrice: newTotalPrice };

    case "clearCart":
      localStorage.removeItem("cart");
      window.dispatchEvent(new Event("storage"));
      return initialValue;

    default:
      throw new Error();
  }
}

export default cartInteractions;
