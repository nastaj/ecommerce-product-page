import { useState } from "react";

function Carousel({ images }) {
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
    <>
      <figure className="relative md:w-1/2 md:mx-auto lg:mx-0 lg:w-1/4 ">
        <img
          src={images[currentIndex].full}
          alt="Sneakers"
          className="w-full md:rounded-lg"
        />
        <button
          type="button"
          onClick={handlePreviousStep}
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-4 h-10 w-10 flex justify-center items-center rounded-full lg:hidden"
        >
          <img
            src="assets/images/icon-previous.svg"
            alt="Previous image button"
          />
        </button>
        <button
          type="button"
          onClick={handleNextStep}
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-4 h-10 w-10 flex justify-center items-center rounded-full lg:hidden"
        >
          <img src="assets/images/icon-next.svg" alt="Next image button" />
        </button>

        <div className="hidden lg:block mt-6 w-full">
          <div className="flex w-full gap-4 xl:gap-6">
            {/* <img
              src="assets/images/image-product-1-thumbnail.jpg"
              alt="Sneakers thumbnail"
              className="w-1/5 basis-1/4 rounded-lg"
            />
            <img
              src="assets/images/image-product-2-thumbnail.jpg"
              alt="Sneakers thumbnail"
              className="w-1/5 basis-1/4 rounded-lg"
            />
            <img
              src="assets/images/image-product-3-thumbnail.jpg"
              alt="Sneakers thumbnail"
              className="w-1/5 basis-1/4 rounded-lg"
            />
            <img
              src="assets/images/image-product-4-thumbnail.jpg"
              alt="Sneakers thumbnail"
              className="w-1/5 basis-1/4 rounded-lg"
            /> */}
          </div>
        </div>
      </figure>
    </>
  );
}

export default Carousel;
