import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const Cart = () => {
  const { cart, removeFromCart, adjustQuantity } = useContext(CartContext);

  return (
    <div className="cart">
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <input
            type="number"
            value={item.quantity || 1}
            onChange={(e) => adjustQuantity(item.id, e.target.value)}
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
