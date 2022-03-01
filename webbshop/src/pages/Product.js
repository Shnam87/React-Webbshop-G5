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
    e.target.value > 0 && e.target.value < item.storage
      ? setNumber(e.target.value)
      : setNumber("1");
  };

  const addCart = (e) => {
    e.preventDefault();
    addToCart(item);
    console.log(cart);
  };

  return (
    <Content>
      <Container>
        <Img src={item.url} alt={item.title} />
        <Text>
          <Title>{item.title}</Title>
          <P>{item.description}</P>
          <Price>{item.price} Kr</Price>

          <form onSubmit={addCart}>
            <Button>Add to cart</Button>
            <Input type="number" value={number} onChange={changeNumber} />
          </form>
          <P>I lager: {item.storage}</P>
        </Text>
      </Container>
      
      <Recomendations currentItem={params.id}/>
    </Content>
  );
}

const Title = styled.h1``;

const Container = styled.div`
  display: grid;
  grid-column-gap: 1em;
  background-color: white;
  padding-left:5em;
  padding-bottom:5em;
  padding-top:2em;
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
  display: flex;
  flex-direction: column;
  padding: 3em;
`;

const P = styled.p`
  display: block;
  font-family: "Poppins", sans-serif;
`;

const Price = styled(P)`
  font-weight: bold;
  font-size: 24px;
`;

const Button = styled.button`
  border: none;
  background-color: #00a0ff;
  height: 2.5em;
  margin-right: 1em;
  box-shadow: 2px 2px 3px black;
  color: white;

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
