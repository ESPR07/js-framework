export const initialValue = {
  productList: [],
  totalPrice: 0,
};

function cartInteractions(state, action) {
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
        cart.push({ ...productObject, quantity: 1 });
      } else {
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
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
      return { ...state, productList: cart, totalPrice: newTotalPrice };

    case "removeProduct":
      cart = [...state.productList];

      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex] - 1,
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
      return { ...state, productList: cart, totalPrice: newTotalPrice };

    case "clearCart":
      return initialValue;

    default:
      throw new Error();
  }
}

export default cartInteractions;
