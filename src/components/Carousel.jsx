import { useState } from "react";

const images = [
  "assets/images/image-product-1.jpg",
  "assets/images/image-product-2.jpg",
  "assets/images/image-product-3.jpg",
  "assets/images/image-product-4.jpg",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePreviousStep() {
    setCurrentIndex((currentIndex) =>
      currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1
    );
  }

  function handleNextStep() {
    setCurrentIndex((currentIndex) =>
      currentIndex + 1 > images.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <figure className="relative">
      <img src={images[currentIndex]} alt="Sneakers" className="w-full" />
      <button
        type="button"
        onClick={handlePreviousStep}
        className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-4 h-10 w-10 flex justify-center items-center rounded-full"
      >
        <img
          src="assets/images/icon-previous.svg"
          alt="Previous image button"
        />
      </button>
      <button
        type="button"
        onClick={handleNextStep}
        className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-4 h-10 w-10 flex justify-center items-center rounded-full"
      >
        <img src="assets/images/icon-next.svg" alt="Next image button" />
      </button>
    </figure>
  );
}

export default Carousel;
