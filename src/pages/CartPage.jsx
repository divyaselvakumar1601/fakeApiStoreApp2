import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9; // 10% discount

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => updateQuantity(item.id, 1)}>➕</button>
                <button onClick={() => updateQuantity(item.id, -1)}>➖</button>
                <Link onClick={() => removeFromCart(item)} className="remove-link">Remove</Link>
              </div>
            </div>
          ))}
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <h3>Final Price (After 10% Discount): ${discountedPrice.toFixed(2)}</h3>
        </div>
      )}
      {/* Back Button (Only on Cart Page) */}
      <button className="back-button" onClick={() => navigate("/")}>⬅ Back to Products</button>
    </div>
  );
};

export default CartPage;
