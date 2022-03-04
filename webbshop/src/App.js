import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([
    {
      id: 234967,
      title: "Bugatti (On Sale)",
      description:
        "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n recusandae alias error harum maxime adipisci amet laborum.",
      price: 550,
      storage: 21,
      quantity: 2,
      url: "https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg",
    },
    {
      id: 678453,
      title: "Ford Mustang",
      description:
        "Quo neque error repudiandae fuga? Ipsa laudantium molestias eos \n sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam\n recusandae alias error harum maxime adipisci amet laborum.",
      price: 1899000,
      storage: 55,
      quantity: 1,
      url: "https://cdn.pixabay.com/photo/2013/07/12/12/56/ford-mustang-146580_1280.png",
    },
  ]);

  const removeItem = (id) => {
    setCart(cart.filter((e) => e.id != id));
  };

  const addToCart = (item) => {
    cart ? setCart([...cart, item]) : setCart(item);
  };

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
            element={<Product addToCart={addToCart} cart={cart} />}
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
