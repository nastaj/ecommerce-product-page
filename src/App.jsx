import { useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import CartButton from "./components/CartButton";
import User from "./components/User";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";
import ProductDetails from "./components/ProductDetails";
import AddToCart from "./components/AddToCart";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return (
    <>
      <Header>
        <div className="flex gap-6">
          <Navigation />
          <Logo />
        </div>
        <div className="flex gap-6">
          <CartButton cartCount={cartCount} onCartIsOpen={setCartIsOpen} />
          <User />
        </div>
      </Header>

      <Main>
        {cartIsOpen && (
          <Cart cartCount={cartCount} onCartCount={setCartCount} />
        )}
        <Carousel />
        <ProductDetails />
        <AddToCart onCartCount={setCartCount} />
      </Main>
    </>
  );
}

export default App;
