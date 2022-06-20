import { createContext, useState } from "react";

export const CartContext = createContext({
  products: [],
  addProductToCart: () => {},
});

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProductToCartHandler = (product) => {
    setProducts([...products, product]);
  };

  return (
    <CartContext.Provider
      value={{ products: products, addProductToCart: addProductToCartHandler }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
