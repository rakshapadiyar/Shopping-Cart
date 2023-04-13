import "./App.css";
import Cart from "./Cart";
import React, { useState } from "react";

const items = [
  { id: 1, name: "Taco", price: 2.23, qty: 2 },
  { id: 2, name: "Pizza", price: 1.23, qty: 3 },
  { id: 3, name: "Fries", price: 3.23, qty: 4 },
];

function App() {
  return (
    <>
      <Cart initialItems={items} />
    </>
  );
}

export default App;
