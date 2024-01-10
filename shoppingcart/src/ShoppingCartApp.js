import React, {createContext, useEffect, useState} from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./ShoppingCartApp.css"

function useShoppingCart() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 },
  ]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex !== -1) {
        return [
          ...prevCart.slice(0, existingProductIndex),
          { ...prevCart[existingProductIndex], quantity: prevCart[existingProductIndex].quantity + 1 },
          ...prevCart.slice(existingProductIndex + 1),
        ];
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  
  const handleIncreaseQuantity = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((p) => p.id === product.id);
      if (existingProductIndex !== -1) {
        return [
          ...prevCart.slice(0, existingProductIndex),
          { ...prevCart[existingProductIndex], quantity: prevCart[existingProductIndex].quantity + 1 },
          ...prevCart.slice(existingProductIndex + 1),
        ];
      }
      return prevCart; // Handle cases where product not found
    });
  };  
  
  const handleDecreaseQuantity = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex((p) => p.id === product.id);
      if (existingProductIndex !== -1) {
        const updatedQuantity = prevCart[existingProductIndex].quantity - 1;
        if (updatedQuantity > 0) {
          return [
            ...prevCart.slice(0, existingProductIndex),
            { ...prevCart[existingProductIndex], quantity: updatedQuantity },
            ...prevCart.slice(existingProductIndex + 1),
          ];
        } else {
          return [
            ...prevCart.slice(0, existingProductIndex),
            ...prevCart.slice(existingProductIndex + 1),
          ]; // Remove product if quantity reaches 0
        }
      }
      return prevCart; // Handle cases where product not found
    });
  };
  
  const removeProduct = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((p) => p.id !== product.id);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update localStorage
      return updatedCart;
    });
  };

  const calculateTotal = (cart) => {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }; 

  return {
    products,
    cart,
    addToCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    removeProduct,
    calculateTotal
  };
}

export const ShoppingCartContext = createContext();


function ShoppingCartApp() {
    const shoppingCart = useShoppingCart()
    console.log(shoppingCart);

    return (
      <ShoppingCartContext.Provider value={shoppingCart}>
        <ProductList />
        <Cart />
      </ShoppingCartContext.Provider>
    );
  }
  
export default ShoppingCartApp;