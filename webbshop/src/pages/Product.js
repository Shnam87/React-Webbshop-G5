import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Recomendations from "../components/Recomendations";

function Product({ addToCart, cart }) {
  const [item, setItem] = useState({});
  const [number, setNumber] = useState("1");
  const params = useParams();
  document.title = "Locketprodukt: " + item.title;

  const fetchItem = async () => {
    await fetch(`https://codexplained.se/cars.php?id=${params.id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  };

  useEffect(() => {
    fetchItem();
  }, [item]);

  const changeNumber = (e) => {
    e.target.value > 0 && e.target.value <= item.storage
      ? setNumber(e.target.value)
      : setNumber("1");
  };

  const addCart = (e) => {
    e.preventDefault();
    addToCart(item);
    console.log(cart);
  };

  return (
    <Content className="Product">
      <Container>
        <Img src={item.url} alt={item.title} />
        <Text>
          <Title>{item.title}</Title>
          <P>{item.description}</P>
          <Price>{item.price} Kr</Price>

          <Form onSubmit={addCart}>
            <Button>Add to cart</Button>
            <Input type="number" value={number} onChange={changeNumber} />
          </Form>
          <Storage>I lager: {item.storage}</Storage>
        </Text>
      </Container>

      <Recomendations currentItem={params.id} />
    </Content>
  );
}

const Title = styled.h1`
  grid-row: 1;
  grid-column: 1 / span 2;
  font-size: 2em;
  font-family: "Quicksand", sans-serif;
`;

const Container = styled.div`
  display: grid;
  grid-column-gap: 1em;
  background-color: white;
  padding-left: 5em;
  padding-bottom: 5em;
  padding-top: 2em;
`;

const Img = styled.img`
  grid-row: 2;
  grid-column: 1;
  width: 100%;
`;

const Text = styled.div`
  grid-row: 2;
  margin: auto;
  width: 75%;
  display: grid;
  padding: 3em;
`;

const P = styled.p`
  display: block;
  font-family: "Poppins", sans-serif;
  text-align: left;
  grid-row: 2;
  grid-column: 1 / span 2;
  opacity: 0.8;
`;

const Price = styled(P)`
  font-weight: bold;
  font-size: 24px;
  grid-row: 3;
  grid-column: 1;
  padding-top: 2em;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

const Form = styled.form`
  grid-row: 3;
  grid-column: 2;
  padding-top: 4em;
`;

const Storage = styled(P)`
  grid-row: 4;
  grid-column: 1 / span 2;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  background-color: #00a0ff;
  height: 2.5em;
  margin-right: 1em;
  box-shadow: 2px 2px 3px black;
  color: white;
  font-family: 'Quicksand', sans-serif;
  font-weight:500;

  

  &:hover {
    box-shadow: -2px 2px 3px black;
    transition: 0.25s ease-in-out;
    background-color: #00c0ff;
    color: black;
  }
`;

const Content = styled.div`
  background-color: whitesmoke;
  /*100 px är storleken på header */
  min-height: calc(100vh - 100px);
`;

const Input = styled.input`
  width: 2.5em;
  height: 2em;
  border: none;
  background-color: whitesmoke;
  box-shadow: 2px 2px 3px black;
  font-size: 16px;
`;

export default Product;
