import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Recomendation({ item }) {
  return (
    <Container to={`/product/${item.id}`}>
      <Img src={item.url} alt="" />
      <Title>{item.title}</Title>
      <Price>{item.price} Kr</Price>
    </Container>
  );
}

const Img = styled.img`
  width: 10em;
  grid-row: 1 / span 2;
  grid-column: 1;
  margin: auto;
`;

const Container = styled(Link)`
  display: grid;
  border-radius: 0.5em;
  background-color: white;
  text-decoration: none;
  height: 7em;
`;

const Title = styled.div`
  grid-column: 2;
  grid-row: 1;
  padding-inline: 1em;
  padding-top: 1em;
  color: black;
`;

const Price = styled.div`
  grid-column: 2;
  grid-row: 2;
  padding-inline: 1em;
  color: black;
`;

export default Recomendation;
