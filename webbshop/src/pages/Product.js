import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Recomendations from "../components/Recomendations";
import { motion } from "framer-motion";

function Product({ addToCart }) {
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
    const newItem = { ...item, quantity: number };
    addToCart(newItem);
    alert(`Added ${number} of ${item.title} to cart.`)
  };

  return (
    <Content className="Product" initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{x:"-100%"}}>
      <Container>
        <Img src={item.url} alt={item.title} />
        <Text>
          <Title>{item.title}</Title>
          <Desc>{item.description}</Desc>
          <Price>{item.price} Kr</Price>

          <Form onSubmit={addCart}>
            <Button>Add to cart</Button>
            <Input type="number" value={number} onChange={changeNumber} />
          </Form>
          <Storage>In Stock: {item.storage}</Storage>
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
  font-family: "Mulish", sans-serif;
  font-weight: 700;
`;

const Container = styled.div`
  display: grid;
  grid-column-gap: 1em;
  background-color: white;
  padding-left: 3em;
  padding-right: 3em;
  padding-bottom: 3em;
  padding-top: 2em;
  min-height: 27em;
`;

const Img = styled.img`
  grid-row: 2;
  grid-column: 1;
  width: 40em;
  margin-inline: auto;
  align-items: center;
`;

const Text = styled.div`
  grid-row: 2;
  margin: auto;
  width: 75%;
  display: grid;

  align-items: center;
`;

const P = styled.p`
  display: block;
  font-family: "Mulish", sans-serif;
  text-align: left;
  grid-row: 2;
  grid-column: 1 / span 2;
`;

const Desc = styled(P)`
  width: 40em;
  margin-inline: auto;
`;

const Price = styled(P)`
  font-weight: bold;
  font-size: 24px;
  grid-row: 3;
  grid-column: 1;
  align-items: center;
  text-align: center;
  font-family: "Mulish", sans-serif;
`;

const Form = styled.form`
  grid-row: 3;
  grid-column: 2;
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
  font-family: "Mulish", sans-serif;
  font-weight: 600;

  &:hover {
    box-shadow: -2px 2px 3px black;
    transition: 0.25s ease-in-out;
    background-color: #00c0ff;
    color: black;
  }
`;

const Content = styled(motion.div)`
  background-color: whitesmoke;
  /*100 px är storleken på header */
  height: calc(100vh - 13.5em);
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
