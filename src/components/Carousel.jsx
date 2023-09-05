import { useState } from "react";
import { useKey } from "../hooks/useKey";

function Carousel({ images, onCarouselIsOpen }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useKey("Escape", handleCloseModal);

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

  function handleCloseModal() {
    onCarouselIsOpen((isOpen) => !isOpen);
  }

  return (
    <>
      <figure className="relative md:w-1/2 md:mx-auto lg:fixed lg:translate-x-0 lg:translate-y-0 lg:left-0 lg:top-0 lg:rounded-none lg:w-full lg:h-full lg:backdrop-brightness-[.3] z-50">
        <div className="w-full lg:w-1/4 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
          <button
            type="button"
            className="absolute -top-8 right-0"
            onClick={handleCloseModal}
          >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <div className="relative">
            <img
              key={images[currentIndex].full}
              src={images[currentIndex].full}
              alt="Sneakers"
              className="md:rounded-lg"
            />
            <button
              type="button"
              onClick={handlePreviousStep}
              className="absolute top-1/2 -translate-y-1/2 left-4 bg-white p-4 h-10 w-10 flex justify-center items-center rounded-full lg:-left-5"
            >
              <img
                src="assets/images/icon-previous.svg"
                alt="Previous image button"
              />
            </button>
            <button
              type="button"
              onClick={handleNextStep}
              className="absolute top-1/2 -translate-y-1/2 right-4 bg-white p-4 h-10 w-10 flex justify-center items-center rounded-full lg:-right-5"
            >
              <img src="assets/images/icon-next.svg" alt="Next image button" />
            </button>
          </div>

          <div className="hidden lg:block p-6 w-full">
            <div className="flex w-full gap-4 xl:gap-6">
              {images.map((image, i) => (
                <div
                  className={`${
                    currentIndex === i
                      ? "border-[3px] border-primary-orange hover:opacity-100"
                      : ""
                  } w-1/5 basis-1/4 rounded-lg hover:opacity-50 cursor-pointer`}
                  key={i}
                >
                  <img
                    src={image.thumbnail}
                    alt="Sneakers thumbnail"
                    className={`${
                      currentIndex === i ? "opacity-50 rounded-none" : ""
                    } rounded-lg`}
                    onClick={() => setCurrentIndex(i)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </figure>
    </>
  );
}

export default Carousel;
