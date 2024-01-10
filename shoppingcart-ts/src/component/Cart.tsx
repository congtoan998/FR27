import React from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Cart: React.FC = () => {
  const cart: CartItem[] = []; // Assuming cart data is initially empty

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price} x {product.quantity}
            <div className="quantity-buttons">
              <button onClick={() => /* Handle quantity increase */null}>+</button>
              <button onClick={() => /* Handle quantity decrease */ null}>-</button>
            </div>
            <button className="remove-button" onClick={() => /* Handle removal */ null}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="total">Total: ${0}</p> // Update total calculation based on cart items
    </div>
  );
};

export default Cart;
