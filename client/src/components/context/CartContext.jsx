import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  const updateTotalQuantity = (newQuantity) => {
    setTotalQuantity(newQuantity);
  };

  return (
    <CartContext.Provider value={{ totalQuantity, updateTotalQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
