import { useState } from "react";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import CartButton from "./components/CartButton";
import User from "./components/User";
import Main from "./components/Main";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel";
import ProductImage from "./components/ProductImage";
import ProductDetails from "./components/ProductDetails";
import AddToCart from "./components/AddToCart";

const images = [
  {
    full: "assets/images/image-product-1.jpg",
    thumbnail: "assets/images/image-product-1-thumbnail.jpg",
  },
  {
    full: "assets/images/image-product-2.jpg",
    thumbnail: "assets/images/image-product-2-thumbnail.jpg",
  },
  {
    full: "assets/images/image-product-3.jpg",
    thumbnail: "assets/images/image-product-3-thumbnail.jpg",
  },
  {
    full: "assets/images/image-product-4.jpg",
    thumbnail: "assets/images/image-product-4-thumbnail.jpg",
  },
];

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [carouselIsOpen, setCarouselIsOpen] = useState(false);

  return (
    <>
      <Header>
        <div className="flex gap-6 xl:gap-24  items-center md:gap-8">
          <Logo />
          <Navigation />
        </div>
        <div className="flex gap-6 lg:gap-10">
          <CartButton cartCount={cartCount} onCartIsOpen={setCartIsOpen} />
          <User />
        </div>
      </Header>

      <Main>
        {cartIsOpen && (
          <Cart cartCount={cartCount} onCartCount={setCartCount} />
        )}
        <ProductImage images={images} />
        {carouselIsOpen && <Carousel images={images} />}

        <ProductDetails>
          <AddToCart onCartCount={setCartCount} />
        </ProductDetails>
      </Main>
    </>
  );
}

export default App;
