import { useContext } from "react";
import {ShoppingCartContext} from "./ShoppingCartApp";

export default function Cart() {
  const { cart, handleIncreaseQuantity, handleDecreaseQuantity, removeProduct, calculateTotal} = useContext(ShoppingCartContext);

    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="product-item">
              {product.name} - ${product.price} x {product.quantity}
              <div className="quantity-buttons">
                <button onClick={()=>{handleIncreaseQuantity(product)}}>+</button>
                <button onClick={()=>{handleDecreaseQuantity(product)}}>-</button>
              </div>
              <button className="remove-button" onClick={()=>{removeProduct(product)}}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p className="total">Total: ${calculateTotal(cart)}</p>
      </div>
    );
  }