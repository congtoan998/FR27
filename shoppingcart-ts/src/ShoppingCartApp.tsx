import React from 'react';
import ProductList from "./component/ProductList"; // Assuming ProductList is in a separate file
import Cart from './component/Cart'; // Assuming Cart is in a separate file

const ShoppingCartApp: React.FC = () => {
  return (
    <>
      <ProductList />
      <Cart />
    </>
  );
};

export default ShoppingCartApp;
