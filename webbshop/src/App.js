import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer";

function App() {
  const [productsInCart, setProductsInCart] = useState([]);

  const [totalsum, setTotalSum] = useState(0);

  /*----------------------------------------------------------------------------------- */
  const [cart, setCart] = useState([]);

  const removeItem = (id) => {
    setCart(cart.filter((e) => e.id !== id));
  };

  const addToCart = (item) => {
    if (cart.map((e) => e.id === item.id)) {
      cleanCart(item);
    } else if (!cart.map((e) => e.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const cleanCart = (item) => {
    let count = 0;
    cart.map((e) => (e.id === item.id ? (count += e.quantity) : ""));
    let newCart = cart.filter((e) => (e.id === item.id ? "" : e));
    newCart = [
      ...newCart,
      (item = { ...item, quantity: !isNaN(item.quantity) ? Number(count) + Number(item.quantity) : Number(item.quantity) }),
    ];

    setCart(newCart);
  };

  const changeItemQuantity = (newItem) => {
    const updatedItems = cart.map((item) =>
      item.id === newItem.id ? newItem : item
    );
    setCart(updatedItems);
  };

  /*---------------------------------------------------------------------------------*/

  const addProductToCart = (product) => {
    setProductsInCart([...productsInCart, product]);

    totalsum === 0
      ? setTotalSum(product.price)
      : setTotalSum(totalsum + product.price);
  };

  const clearTheCart = () => {
    setProductsInCart([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav
          productsInCart={cart}
          cartList={cart.length}
          setProductsInCart={setProductsInCart}
          totalsum={totalsum}
          clearTheCart={clearTheCart}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Products
                setTotalSum={setTotalSum}
                addProductToCart={addToCart}
              />
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} removeItem={removeItem} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
