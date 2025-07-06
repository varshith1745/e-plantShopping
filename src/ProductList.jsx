// File: ProductList.jsx
import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const plantsArray = [ /* your categories array is long, keep it same */ ];

  const handleAddToCart = (plant) => {
    const product = { ...plant, quantity: 1 };
    dispatch(addItem(product));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div>
      {/* navbar stays same */}

      {!showCart ? (
        <div className="product-list">
          {plantsArray.map((category, idx) => (
            <div key={idx}>
              <h2 className="plant_heading">{category.category}</h2>
              <div className="product-grid">
                {category.plants.map((plant, index) => (
                  <div className="product-card" key={index}>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <p className="product-price">{plant.cost}</p>
                    <button
                      className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
