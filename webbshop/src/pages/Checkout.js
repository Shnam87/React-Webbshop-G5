import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";
import CheckoutSum from "../components/CheckoutSum";
import styled from "styled-components";
import { motion } from "framer-motion";
import CheckoutForm from "../components/CheckoutForm";

function Checkout({ cart, removeItem, changeItemQuantity }) {
  const [formIsActive, setFormIsActive] = useState(false);
  document.title = "Checkout";
  const showForm = () => {
    setFormIsActive(!formIsActive);
  };

  return (
    <motion.div initial={{ x: "100%" }} animate={{ x: 0 }}>
      {cart != "" && formIsActive === false ? (
        <div>
          <Table>
            <tbody>
              <TR>
                <Th>Produkt</Th>
                <Th>Kostnad /st.</Th>
                <Th>Kvant.</Th>
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
          <NextBtn onClick={showForm}>Next</NextBtn>
        </div>
      ) : (
        <div>
          {formIsActive ? (
            ""
          ) : (
            <EmptyMessage>
              Varukorgen är tom. Hämta artiklar, <br></br>
              <Link to="/">
                <Button>Här</Button>
              </Link>
            </EmptyMessage>
          )}
        </div>
      )}
      {formIsActive ? (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }}>
          <CheckoutForm />
        </motion.div>
      ) : (
        ""
      )}
    </motion.div>
  );
}

const TR = styled.tr`
  background-color: lightgrey;
`;

const Table = styled.table`
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  
`;

const Th = styled.th`
  padding: 1em;
`;

const NextBtn = styled.button`
  border: none;
  font-size: 26px;
  padding-inline: 1em;
  padding-block: 0.5em;
  background-color: #a0ffa0;
  box-shadow: 2px 2px 3px black;
  margin-bottom:  calc(100vh - 23.5em);
  
  &:hover {
    box-shadow: -2px 2px 3px black;
    transition: 0.25s ease-in-out;
    background-color: lightgreen;
  }
`;

const Button = styled.button`
  padding: 0.5em;
  border: none;
  font-size: 1.4em;

  &:hover {
    cursor: pointer;
  }
`;

const EmptyMessage = styled.div`
  height: calc(100vh - 23.5em);

`;
export default Checkout;
