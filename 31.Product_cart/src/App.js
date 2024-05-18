import React, { useReducer, useState } from "react";
import ProductCard from "./ProductCard";
import AddToCart from "./AddToCart";
export const App = () => {
  const product = [
    {
      id: 1,
      name: "Mobile Relame",
      title:
        "A high-quality mobile device with excellent electrical performance.",
      price: 350.6,
      quantity: 1,
    },
    {
      id: 2,
      name: "Cold Drink",
      title: "A refreshing drink perfect for hot summer days.",
      price: 562.65,
      quantity: 1,
    },
    {
      id: 3,
      name: "H/P Laptop",
      title: "A highly popular and powerful laptop.",
      price: 150.54,
      quantity: 1,
    },
    {
      id: 4,
      name: "Keyboard",
      title: "A soft and responsive keyboard for comfortable typing.",
      price: 235.9,
      quantity: 1,
    },
    {
      id: 5,
      name: "Chicken",
      title: "Delicious chicken, rich in protein and great taste.",
      price: 870,
      quantity: 1,
    },
  ];
  const [cart, setCart] = useState([]);
  return (
    <div>
      <div className="container">
        <ProductCard myProduct={product} cart={cart} setCart={setCart} />
      </div>
      <AddToCart myCart={cart} setCart={setCart} />
    </div>
  );
};
export default App;
