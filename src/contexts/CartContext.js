import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    let exists = cart.find((p) => {
      return p.name === product.name;
    });
    if (exists) {
      product.quantity += 1;
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  }

  function quantityIncDec(product, increase) {
    const index = cart.indexOf(product);
    if (increase) {
      cart[index].quantity += 1;
    } else {
      if (cart[index].quantity > 1) cart[index].quantity -= 1;
    }
    setCart([...cart]);
  }

  function deleteItem(product) {
    const index = cart.indexOf(product);
    cart.splice(index, 1);
    setCart([...cart]);
  }

  function calculatedTotal() {
    let sum = 0;
    cart.forEach((e) => {
      sum += e.quantity * e.price;
    });
    return sum;
  }

  function checkCoffee(product) {
    return product.category.includes("Coffee");
  }

  function updateItem(product, darkness, sugar, milk) {
    const index = cart.indexOf(product);
    cart[index].darkness = darkness;
    cart[index].sugar = sugar;
    cart[index].milk = milk;
    setCart([...cart]);
  }
  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        quantityIncDec,
        deleteItem,
        calculatedTotal,
        checkCoffee,
        updateItem,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}
