import React from 'react'
import { Link } from 'react-router-dom'
import ban from './ban.svg'
import styles from '../styles/pageStyle.module.css'
import {P, TD, TinyImage, RemoveImg, CartButton } from '../styles/styledComponents'


function Cart({productsInCart, setProductsInCart, clearTheCart, totalsum, setTotalSum }) {

  const removeFromCart= (id)=> {
    let cartProducts= productsInCart.filter(product=> product.id !== id)
    setProductsInCart(cartProducts)
    
    console.log(cartProducts)

    setTotalSum(
      cartProducts.map((inCart)=>(0+ inCart.price)).reduce((oldTotalSum, newTotalSum) => oldTotalSum + newTotalSum, 0)
    )

    console.log(totalsum)
    
  }

  const clearingTheCart= ()=> {
    clearTheCart()
  }

  if (productsInCart.length === 0) {
    return(
    <div className={styles.cartwrapper}>
      <h3>Din varukorg är tom</h3>
      <h3>Lägg till en produkt i varukorgen</h3>
    </div>
    ) 
  }
  return (
    <div className={styles.cartwrapper}>
      <div>
        <table>
          <thead>
          <tr>
            <th>Bild</th>
            <th>Namn</th>
            <th>Pris</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {productsInCart.map( (product)=>(
              <tr key={product.id}>
                <TD>
                  <TinyImage src={product.url} alt={product.title} ></TinyImage>                  
                </TD>
                <TD>{product.title}</TD>
                <TD>{product.price} Kr</TD>
                <TD><RemoveImg src={ban} alt='Ta bort' onClick={()=>{removeFromCart(product.id)}}></RemoveImg></TD>
              </tr>
            ))}
            </tbody>
          </table> 
        </div>
        <P>Totalpris: {totalsum} Kr</P>
        <CartButton onClick={clearingTheCart}>Rensa varukorgen</CartButton>
        <Link to="/checkout"><CartButton>Till Kassa</CartButton></Link>
    </div>
  )
}

export default Cart