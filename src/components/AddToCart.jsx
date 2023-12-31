import { useState } from "react";

function AddToCart({ onCartCount }) {
  const [itemCount, setItemCount] = useState(0);

  function handleAddToCart() {
    onCartCount((cartCount) =>
      itemCount > 0 ? (cartCount += itemCount) : cartCount
    );
    setItemCount(0);
  }

  return (
    <div className="flex flex-col lg:flex-row mb-12 lg:mb-0 lg:gap-6">
      <div className="flex justify-between bg-neutral-gray-3 rounded-md px-5 py-3 mb-4 lg:basis-2/5 lg:mb-0">
        <button
          type="button"
          onClick={() =>
            setItemCount((itemCount) =>
              itemCount > 0 ? itemCount - 1 : itemCount
            )
          }
        >
          <img src="assets/images/icon-minus.svg" alt="Minus icon" />
        </button>
        <span className="font-bold text-lg">{itemCount}</span>
        <button
          type="button"
          onClick={() => setItemCount((itemCount) => (itemCount += 1))}
        >
          <img src="assets/images/icon-plus.svg" alt="Plus icon" />
        </button>
      </div>

      <button
        type="button"
        onClick={handleAddToCart}
        className="flex justify-center gap-4 items-center bg-primary-orange rounded-md px-5 py-3 lg:basis-3/5 hover:opacity-50 hover:drop-shadow-glow active:scale-95 transition-all"
      >
        <svg
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block"
        >
          <path
            d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
            fill="hsl(0, 0%, 100%)"
            fillRule="nonzero"
          />
        </svg>
        <span className="text-white text-md font-bold">Add to cart</span>
      </button>
    </div>
  );
}

export default AddToCart;
