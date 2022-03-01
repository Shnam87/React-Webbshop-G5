import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Recomendation({ item }) {
  return (
    <div>
      <Link to={`/product/${item.id}`}><Img src={item.url} alt="" /></Link>
    </div>
  );
}


const Img = styled.img`
  width: 10em;
  border-radius:0.5em;
`;

export default Recomendation;
