import { createContext, useState } from "react";

export const CartContext = createContext({
  products: [],
  addProductToCart: () => {},
  removeProductInCart:() =>{},
});

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // const addProductToCartHandler = (product) => {
  //   setProducts([...products, product]);
  // };

  const addProductToCartHandler = (product) => {
    const exist = products.find((x) => x.ID === product.ID);
    if (exist) {
      setProducts(
        products.map((x) =>
          x.id === product.ID ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setProducts([...products, { ...product, qty: 1 }]);
    }
  };

  const removeProductInCartHandler = (product) => {
    const exist = products.find((x) => x.ID === product.ID);
    if (exist.qty === 1) {
      setProducts(products.filter((x) => x.ID !== product.ID));
    } else {
      setProducts(
        products.map((x) =>
          x.ID === product.ID ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <CartContext.Provider
      value={{
        products: products,
        addProductToCart: addProductToCartHandler,
        removeProductInCart: removeProductInCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
