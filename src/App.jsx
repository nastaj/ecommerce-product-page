import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import Cart from "./components/Cart";
import User from "./components/User";
import Main from "./components/Main";
import Carousel from "./components/Carousel";
import ProductDetails from "./components/ProductDetails";
import AddToCart from "./components/AddToCart";

function App() {
  return (
    <>
      <Header>
        <div className="flex gap-6">
          <Navigation />
          <Logo />
        </div>
        <div className="flex gap-6">
          <Cart />
          <User />
        </div>
      </Header>

      <Main>
        <Carousel />
        <ProductDetails />
        <AddToCart />
      </Main>
    </>
  );
}

export default App;
