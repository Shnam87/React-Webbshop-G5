import React, { useState } from "react";
import styled from "styled-components";

function CheckoutItem({ item, removeItem, changeItemQuantity }) {
  const [number, setNumber] = useState(item.quantity);
  const changeNumber = (e) => {
    e.target.value <= 0 ? setNumber("1") : setNumber(e.target.value);

    const updatedItem = {
      ...item,
      quantity: Number(number) + 1,
    };
    changeItemQuantity(updatedItem);
  };

  const handleDelete = () => {
    removeItem(item.id);
  };

  return (
    <tr>
      <Td>
        <Img src={item.url} alt={item.title} />
        <div>{item.title}</div>
      </Td>
      <Td>{item.price} kr</Td>
      <Td>
        <Input type="number" value={number} onChange={changeNumber} />
      </Td>
      <Td>{item.id}</Td>
      <Td>
        <Button onClick={handleDelete}>Remove</Button>
      </Td>
    </tr>
  );
}

const Td = styled.td`
  font-size: 26px;
  padding: 1em;
  &:first-child {
    display: flex;
    align-items: center;
  }
  div {
    margin-left: 1em;
  }
`;

const Input = styled.input`
  width: 2em;
  font-size: 26px;
  border: none;
  height: 2em;
  padding-left: 6px;
  box-shadow: 2px 2px 3px black;
`;

const Button = styled.button`
  border: none;
  height: 2em;
  font-size: 26px;
  background-color: #ffafaf;
  box-shadow: 2px 2px 3px black;

  &:hover {
    box-shadow: -2px 2px 3px black;
    transition: 0.25s ease-in-out;
    background-color: #ff0000;
    color: white;
  }
`;

const Img = styled.img`
  width: 5em;
`;

export default CheckoutItem;
