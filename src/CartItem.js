import React from "react";
import "./CartItem.css";

function CartItem({ id, name, price, qty, updateQty }) {
  //   const increment = () => {
  //     qty += 1;
  //   };
  //   const decrement = () => {
  //     qty -= 1;
  //   };
  //Even if we do like this above, but this doesnt work, moreover we are not supposed
  // to change props in a child component
  // even though a prop is changing, something has to tel parent to re render
  const addOne = () => {
    updateQty(id, qty + 1);
  };
  const minusOne = () => {
    updateQty(id, qty - 1);
  };
  return (
    <div className="cartItem">
      <div> {name} </div>
      <div> ${price} </div>
      <div>
        <button onClick={minusOne} disabled={qty <= 0}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>

      <div> Item Total : ${qty * price}</div>
    </div>
  );
}
export default CartItem;

// <CartItem {item}/>
// function CartItem(CartItem) {
//   return (
//     <div>
//       <hi> I ma CartItem</hi>
//       <li>
//         Name:{CartItem.name} Price : {CartItem.price} Qty : {CartItem.qty}
//       </li>
//     </div>
//   );
// }
