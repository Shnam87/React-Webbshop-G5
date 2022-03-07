import React from "react";
import { useEffect, useState } from "react";
import Recomendation from "./Recomendation";
import styled from "styled-components";

function Recomendations({ currentItem }) {
  const [recomendations, setRecomendations] = useState([]);

  const fetchItems = async () => {
    await fetch(`https://codexplained.se/cars.php?`)
      .then((res) => res.json())
      .then((data) => setRecomendations(data));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <h1>We also recommend: </h1>
      <Content>
        {recomendations.map((e) =>
          e.id == currentItem ? (
            ""
          ) : (
            <Recomendation key={e.id} item={e}></Recomendation>
          )
        )}
      </Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 1em;
`;

export default Recomendations;
