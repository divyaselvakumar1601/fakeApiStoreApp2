import React from "react";
import '/src/styles/ProductPages.css';

const ProductCard = ({ product, addToCart, removeFromCart, cart }) => {
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">
        {product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}
      </h3>
      <p className="product-price">${product.price.toFixed(2)}</p>

      {isInCart ? (
        <button className="remove-btn" onClick={() => removeFromCart(product)}>
          Remove from Cart
        </button>
      ) : (
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
