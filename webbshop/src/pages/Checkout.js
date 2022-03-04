import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import CheckoutSum from "../components/CheckoutSum";
import styled from "styled-components";

function Checkout({ cart, removeItem, changeItemQuantity}) {
  return (
    <div>
      {cart != "" ? (
        <div>
          <Table>
            <tbody>
              <TR>
                <Th>Product</Th>
                <Th>Amount</Th>
                <Th>Quant.</Th>
                <Th>Id</Th>
              </TR>

              {cart.map((c) => (
                <CheckoutItem
                  key={c.id}
                  item={c}
                  cart={cart}
                  removeItem={removeItem}
                  changeItemQuantity={changeItemQuantity}
                />
              ))}
            </tbody>
          </Table>
          <CheckoutSum cart={cart} />
          <button>Next</button>
        </div>
      ) : (
        <div>
          Your cart is empty. To get more items,
          <Link to="/">
            <button>Click Here</button>
          </Link>
        </div>
      )}
    </div>
  );
}

const TR = styled.tr`
background-color:grey;
`;

const Table = styled.table`
display:flex;
justify-content:center;
background-color:whitesmoke;

`;

const Th = styled.th`
padding: 1em;
`;
export default Checkout;
