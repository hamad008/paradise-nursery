import React, { useState } from "react";

const plants = [
  { id: 1, name: "Aloe Vera", price: 20 },
  { id: 2, name: "Snake Plant", price: 25 },
  { id: 3, name: "Peace Lily", price: 30 },
  { id: 4, name: "Spider Plant", price: 15 },
  { id: 5, name: "Cactus", price: 10 },
  { id: 6, name: "Palm", price: 40 }
];

function ProductList() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <h2>Plants</h2>
      {plants.map(p => (
        <div key={p.id}>
          <p>{p.name} - ${p.price}</p>
          <button
            disabled={cart.includes(p.id)}
            onClick={() => setCart([...cart, p.id])}
          >
            Add to Cart
          </button>
        </div>
      ))}
      <h3>Cart Items: {cart.length}</h3>
    </div>
  );
}

export default ProductList;
