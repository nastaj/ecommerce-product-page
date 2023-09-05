function CartButton({ cartCount, onCartIsOpen }) {
  function handleToggle() {
    onCartIsOpen((cartIsOpen) => !cartIsOpen);
  }

  return (
    <button className="relative" type="button" onClick={handleToggle}>
      <img
        src="assets/images/icon-cart.svg"
        alt="Cart button"
        className="h-6"
      />
      <span className="h-4 w-6 flex justify-center items-center bg-primary-orange text-white rounded-full absolute -top-1 left-3 text-xs">
        {cartCount}
      </span>
    </button>
  );
}

export default CartButton;
