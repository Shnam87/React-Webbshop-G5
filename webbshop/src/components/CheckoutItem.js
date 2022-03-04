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
    console.log(updatedItem);
  };

  const handleDelete = () => {
    removeItem(item.id);
  };

  return (
    <tr>
      <Td>{item.title}</Td>
      <Td>{item.price} kr</Td>
      <Td>
        <Input type="number" value={number} onChange={changeNumber} />
      </Td>
      <Td>{item.id}</Td>
      <Td>
        <button onClick={handleDelete}>Remove</button>
      </Td>
    </tr>
  );
}

const Td = styled.td`
 font-size:26px;
 padding:1em;
 

`;

const Input = styled.input`
width:2em;
font-size:26px;
border:none;
height:2em;
padding-left:6px;
`;

export default CheckoutItem;
