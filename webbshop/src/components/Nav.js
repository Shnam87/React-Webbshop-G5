import React from 'react'
import {Link} from 'react-router-dom'
import {StyledNav, CartImg} from '../styles/styledComponents'
import styles from '../styles/pageStyle.module.css'
import cart from './cart.svg'
import Cart from './Cart'

function Nav({productsInCart, cartList, setProductsInCart, totalsum, clearTheCart}) {
  return (
    <StyledNav>
        <Link to="/"><b>Hem</b></Link>
        <div className={styles.div}>
          <CartImg src={cart} alt='varukorg' ></CartImg>
          {cartList 
            ? <span className={styles.counter} ><b>{cartList}</b></span> 
            : <span className={styles.counter} ><b>0</b></span> 
          }
          <Cart 
            productsInCart={productsInCart}
            setProductsInCart={setProductsInCart}
            totalsum={totalsum}
            clearTheCart={clearTheCart}
            />
        </div>
    </StyledNav>
  )
}

export default Nav