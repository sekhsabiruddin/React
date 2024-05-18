import React, { useState } from "react";

const AddToCart = ({ myCart, setCart }) => {
  const handleIncrement = (id) => {
    const updatedCart = myCart.map((value) => {
      if (value.id === id) {
        return { ...value, quantity: value.quantity + 1 };
      }
      return value;
    });
    setCart(updatedCart);
  };

  const handleDrement = (id) => {
    const updatedCart = myCart.map((value) => {
      if (value.id === id && value.quantity > 1) {
        return { ...value, quantity: value.quantity - 1 };
      }
      return value;
    });
    setCart(updatedCart);
  };

  // Function to calculate the total amount
  const calculateTotalAmount = () => {
    return myCart
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2); // Convert the total to a string with 2 decimal places
  };

  return (
    <div className="addto-cart">
      <h1>Cart ({myCart.length})</h1>
      <div className="inner-data">
        <div className="cart-data">
          <table>
            <thead>
              <tr>
                <th>SR.</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Inc/Dre</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {myCart &&
                myCart.map((value, i) => (
                  <tr key={value.id}>
                    <td>{i + 1}</td>
                    <td>{value.name}</td>
                    <td>{value.quantity}</td>
                    <td>
                      <button onClick={() => handleIncrement(value.id)}>
                        +
                      </button>
                      <button onClick={() => handleDrement(value.id)}>-</button>
                    </td>
                    <td>{(value.price * value.quantity).toFixed(2)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          <h2>Total Amount: ${calculateTotalAmount()}</h2>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
