function Cart({ cartCount, onCartCount }) {
  const total = (125 * cartCount).toFixed(2);

  function handleDelete() {
    onCartCount((cartCount) => (cartCount -= 1));
  }

  return (
    <div className="absolute top-[5.8rem] left-0 right-0 z-10 mx-2 bg-white rounded-lg min-h-[16rem]">
      <h3 className="p-6 font-bold border-b border-b-neutral-gray-3">Cart</h3>

      {cartCount > 0 ? (
        <div className="flex flex-col px-6 gap-6">
          <div className="flex gap-4 pt-6 items-center">
            <img
              src="assets/images/image-product-1-thumbnail.jpg"
              alt="Sneakers thumbnail"
              className="h-14 rounded-md"
            />
            <div>
              <p className="text-neutral-gray-1 mb-1">
                Fall Limited Edition Sneakers
              </p>
              <p className="text-neutral-gray-1">
                $125.00 x {cartCount}{" "}
                <span className="font-bold text-black">${total}</span>
              </p>
            </div>
            <button onClick={handleDelete}>
              <img
                src="assets/images/icon-delete.svg"
                alt="Delete icon"
                className="w-4"
              />
            </button>
          </div>
          <button
            type="button"
            className="bg-primary-orange py-4 rounded-lg mb-8 text-white font-bold"
          >
            Checkout
          </button>
        </div>
      ) : (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 font-bold text-neutral-gray-1">
          Your cart is empty.
        </p>
      )}
    </div>
  );
}

export default Cart;
