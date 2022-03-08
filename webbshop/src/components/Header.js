import React from "react";
import { StyledHeader } from "../styles/styledComponents";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
import { StyledNav, CartImg, Background } from "../styles/styledComponents";
import styles from "../styles/pageStyle.module.css";
import cart from "./cart.svg";
import Cart from "./Cart";

function Header({
  cartList,
  productsInCart,
  setProductsInCart,
  totalsum,
  clearTheCart,
})
{

  
  const headerurl = "https://wallpaperaccess.com/full/1985919.jpg";

  return (
    <Background>
      <Img src={headerurl} alt="" /> 
      <StyledHeader>
        <LINK to="/">
        <h1> Locket.se </h1>
        </LINK>
      
        <NavCart className={styles.div}>
          <CartImg src={cart} alt="varukorg"></CartImg>
          {cartList ? (
            <span className={styles.counter}>
              <b>{cartList}</b>
            </span>
          ) : (
            <span className={styles.counter}>
              <b>0</b>
            </span>
          )}
          <Cart
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
            totalsum={totalsum}
            clearTheCart={clearTheCart}
          />
        </NavCart>
      </StyledHeader>
      <Img2 src={headerurl} alt="" />
    </Background>
  );
}

const LINK = styled(Link)`
  text-decoration: none;
  opacity:1;
  
`;

const NavCart = styled.div`
  align-items: right;
  margin-left: 70%;

`;

const Img = styled.img`
  opacity: 0.2;
  background-color: grey;
  position: absolute;
  left: 0;
  top: 0;
  height:15em;
  width:100%;
  object-fit: cover;
  object-position: 0 -20.5em;
  @media screen and (min-width: 992px){
    object-position: 0 -20.5em;
  }
`;

const Img2 = styled.img`
position: relative;
height:15em;
  width:100%;
  object-fit: cover;
  object-position: 0 -27em;
  border-bottom:2px solid red;

  @media screen and (min-width: 992px){
    object-position: 0 -27em;
  }
  
`;

export default Header;
