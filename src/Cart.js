import React, { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

// cart will have array for items
// { id: 1, name : 'Taco' , price:2.23, qty: 2}
function Cart({ initialItems }) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, newQty) => {
    //when user clicks on plus minus buttons next to qty, the quntity change is done here
    // in the parent component as parent has to re render on state change
    // Point to note: never change the original array ( change qty)
    // so create a copy of the items array.
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);
  //console.log(initialItems);

  return (
    <div>
      <div className="cart">
        <h1 className="Cart-title">Shopping Cart</h1>
        <div className="cartItems">
          {items.map((item) => (
            // <li>
            //   Name:{item.name} Price : {item.price} Qty : {item.qty}
            // </li>
            <CartItem key={item.id} updateQty={updateQty} {...item} />
            // <CartItem cartItem={item}/> see commented code in CartItem for passing item like this
          ))}
        </div>
      </div>
      <h2 className="Cart-total">Grand Total : ${grandTotal}</h2>
    </div>
  );
}

export default Cart;
