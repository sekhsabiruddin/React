import React from "react";

const ProductCard = ({ myProduct, cart, setCart }) => {
  const handleAdd = (id) => {
    // Find the product in the myProduct list
    let singleData = myProduct.find((value) => value.id === id);

    // Count how many times the product is already in the cart
    let count = cart.filter((item) => item.id === id).length;

    // Only add the product if it's been added less than 2 times
    if (count < 1) {
      setCart([...cart, singleData]);
    }
  };

  return (
    <>
      {myProduct &&
        myProduct.map((value) => (
          <div key={value.id} className="box">
            <h3>{value.name}</h3>
            <p>{value.title}</p>
            <span>${value.price}</span>
            <br />
            <button onClick={() => handleAdd(value.id)}>ADD</button>
          </div>
        ))}
    </>
  );
};

export default ProductCard;
