import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

function CheckoutForm() {
  const [enabled, setEnabled] = useState(true);

  const remove = () =>{
      setEnabled(false);
  }

  return enabled ? (
    <>
      <Form initial={{ x: "100%" }} animate={{ x: 0 }}>
        <First>
          <Label htmlFor="Name">Namn: </Label>
          <Input type="text" name="Namn" placeholder="Namn" />
          <Label htmlFor="email">E-post: </Label>
          <Input type="email" placeholder="exempel@exempel.com" />
          <Label htmlFor="adress">Adress: </Label>
          <Input type="text" name="adress" placeholder="exempelvägen 1" />
          <Label htmlFor="Postkod">Postkod: </Label>
          <Input type="number" name="Postkod" placeholder="12345" />
        </First>

        <Second>
          <Label htmlFor="Kortnummer">Kortnummer: </Label>
          <Input type="number" name="Kortnummer" placeholder="1234567891011" />
          <Label htmlFor="text">Datum: </Label>
          <Input type="text" placeholder="01/22" />
          <Label htmlFor="CVC">CVC: </Label>
          <Input type="number" name="CVC" placeholder="123" />
        </Second>
      </Form>
      <NextBtn onClick={remove}>Fortsätt</NextBtn>
    </>
  ) : (
    <h1>Tack för din beställning!</h1>
  );
}

const Form = styled(motion.form)`
  background-color: whitesmoke;
  display: flex;
  margin-inline: auto;
  width: 40em;
  padding-left: 2em;
  padding-block: 1em;
  margin-top: 3em;
  margin-bottom: 1em;
`;

const Input = styled.input`
  width: 15em;
  border: none;
  box-shadow: 2px 2px 3px black;
  padding: 0.4em;
  font-size: 16px;
`;

const Label = styled.label`
  text-align: left;
  padding-top: 1em;

  &:first-child {
    padding-top: 0;
  }
`;

const First = styled.div`
  display: grid;

  width: 30em;
`;

const Second = styled(First)``;

const NextBtn = styled.button`
  border: none;
  font-size: 26px;
  padding-inline: 1em;
  padding-block: 0.5em;
  background-color: #a0ffa0;
  box-shadow: 2px 2px 3px black;
  margin-bottom: calc(100vh - 23.5em);
 
  &:hover {
    box-shadow: -2px 2px 3px black;
    transition: 0.25s ease-in-out;
    background-color: lightgreen;
  }
`;

export default CheckoutForm;
