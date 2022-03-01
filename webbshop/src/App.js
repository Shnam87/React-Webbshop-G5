import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Product from "./pages/Product";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    cart ? setCart([...cart, item]) : setCart(item);
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
            element={<Product addToCart={addToCart} cart={cart} />}
          />
          <Route />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
