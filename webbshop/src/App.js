import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Products from './pages/Products';
import Product from './pages/Product';
import Checkout from './pages/Checkout';


function App() {  
    const [productsInCart, setProductsInCart]= useState([])

    const [totalsum, setTotalSum]= useState(0);

    const addProductToCart= (product)=> {
      setProductsInCart([
        ...productsInCart,
        product
      ])

      totalsum=== 0 ? setTotalSum(product.price) : setTotalSum(totalsum+ product.price) 
    }
  
    const clearTheCart= ()=> {
      setProductsInCart([])
    }

  return (
    <div className="App">

      <BrowserRouter>
      <Header />
      <Nav
        productsInCart={productsInCart}
        cartList={productsInCart.length}
        setProductsInCart={setProductsInCart}
        totalsum={totalsum}
        clearTheCart={clearTheCart}
        />

      <Routes>
        <Route path="/" element={<Products setTotalSum={setTotalSum} addProductToCart={addProductToCart} />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout cart={cart} removeItem={removeItem}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
