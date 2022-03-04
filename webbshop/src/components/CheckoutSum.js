import React from "react";

function CheckoutSum({cart}) {
  let sum = 0;
  cart.map((c) => (sum += c.price * c.quantity));

  return <div>{sum} Kr</div>;
}

export default CheckoutSum;
