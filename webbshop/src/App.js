import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Footer from "./components/Footer";
import Product from "./pages/Product";

function App() {
  const [cart, setCart] = useState([]);

  const removeItem = (id) => {
    setCart(cart.filter((e) => e.id !== id));
  };

  /*----------------------------------------------------------------------------------- */
  const addToCart = (item) => {
    if (cart.map(e=>e.id === item.id)){
      cleanCart(item);
    }else if (!cart.map(e=>e.id === item.id)){
      setCart([...cart, item])
    }
  };

  const addTo = (item) => {
    addToCart(item);
  };

  const cleanCart = (item) => {
    let count = 0;
    cart.map((e) =>  e.id === item.id ? count += e.quantity : "");
    let newCart = cart.filter(e=> e.id === item.id ? "" : e);
    newCart = [...newCart, item = {...item, quantity: Number(count) + Number(item.quantity)}]
    
    setCart(newCart)
  };
  /*---------------------------------------------------------------------------------*/

  const changeItemQuantity = (newItem) => {
    const updatedItems = cart.map((item) =>
      item.id === newItem.id ? newItem : item
    );
    setCart(updatedItems);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route
            path="/product/:id"
            element={
              <Product addToCart={addToCart} />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                removeItem={removeItem}
                changeItemQuantity={changeItemQuantity}
              />
            }
          />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
