import React from "react";
import { StyledHeader } from "../styles/styledComponents";
import {Link} from "react-router-dom";
import Nav from "./Nav";
import styled from "styled-components";
import { StyledNav, CartImg } from "../styles/styledComponents";
import styles from "../styles/pageStyle.module.css";
import cart from "./cart.svg";
import Cart from "./Cart";

function Header({cartList, productsInCart, setProductsInCart, totalsum, clearTheCart}) {
  return (
    <StyledHeader>
      <LINK to="/">
        <h1>Locket.se</h1>
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
  );
}

const LINK = styled(Link)`
text-decoration:none;
`;

const NavCart = styled.div`
align-items: right;
margin-left:80%;
`;

export default Header;
