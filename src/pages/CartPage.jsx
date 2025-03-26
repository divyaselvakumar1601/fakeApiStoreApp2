import React from "react";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = ({ cart, updateQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      {/* Back to Products Button */}
      <Link to="/" className="back-button">⬅️ Back</Link>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-container">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-img" />

              <div className="cart-item-details">
                <h3 className="cart-title">{item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}</h3>
                <p className="cart-price"><strong>${item.price.toFixed(2)}</strong></p>
                
                {/* Quantity Controls */}
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity === 1}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>

                {/* Remove Button */}
                <button onClick={() => removeFromCart(item)} className="remove-btn">
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total and Final Price Display */}
          <div className="cart-summary">
            <h3>Total: <span>${totalPrice.toFixed(2)}</span></h3>
            <h3>Discount (10%): <span>- ${discount.toFixed(2)}</span></h3>
            <h2>Final Price: <span>${finalPrice.toFixed(2)}</span></h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
