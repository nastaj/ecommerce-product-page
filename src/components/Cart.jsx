function Cart() {
  return (
    <button className="relative" type="button">
      <img
        src="assets/images/icon-cart.svg"
        alt="Cart button"
        className="h-6"
      />
      <span className="h-4 w-6 flex justify-center items-center bg-primary-orange text-white rounded-full absolute top-0 left-3 text-sm">
        x
      </span>
    </button>
  );
}

export default Cart;
