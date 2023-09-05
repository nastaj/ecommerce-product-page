import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  function determineMobile() {
    const width = window.innerWidth;
    setIsMobile(width < 1024);
  }

  useEffect(() => {
    window.addEventListener("resize", determineMobile);
    return () => {
      window.removeEventListener("resize", determineMobile);
    };
  }, []);

  return (
    <>
      <Header>
        <div className="flex gap-6 xl:gap-24 items-center md:gap-8">
          <Logo />
          <Navigation />
        </div>
        <div className="flex gap-6 lg:gap-10 items-center">
          <CartButton cartCount={cartCount} onCartIsOpen={setCartIsOpen} />
          <User />
        </div>
      </Header>

      <Main>
        {(carouselIsOpen || isMobile) && (
          <Carousel images={images} onCarouselIsOpen={setCarouselIsOpen} />
        )}
        <AnimatePresence>
          {cartIsOpen && (
            <motion.div
              className="absolute top-[5.8rem] left-0 right-0 z-50 lg:z-10 xl:left-3/4"
              initial={{ opacity: 0, translateY: -40 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -40 }}
            >
              <Cart cartCount={cartCount} onCartCount={setCartCount} />
            </motion.div>
          )}
        </AnimatePresence>
        <ProductImage images={images} onCarouselIsOpen={setCarouselIsOpen} />

        <ProductDetails>
          <AddToCart onCartCount={setCartCount} />
        </ProductDetails>
      </Main>
    </>
  );
}

export default App;
