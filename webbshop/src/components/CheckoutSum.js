import React from "react";
import styled from "styled-components";

function CheckoutSum({cart}) {
  let sum = 0;
  cart.map((c) => (sum += c.price * c.quantity));

  return <Sum>Total: {sum} Kr</Sum>;
}

const Sum = styled.div`
font-size:26px;
font-weight:bold;
margin-bottom: 1em;
margin-top: 1em;
border:2px solid #FFafaf;
width:9em;
margin-inline:auto;
padding:1em;
border-radius:0.3em;
background-color:whitesmoke;

`;

export default CheckoutSum;
