import { useState } from "react";

function ProductImage({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <figure className=" hidden lg:block relative md:w-1/2 md:mx-auto lg:mx-0 lg:w-1/4 ">
        <img
          src={images[currentIndex].full}
          alt="Sneakers"
          className="w-full md:rounded-lg"
        />

        <div className="hidden lg:block mt-6 w-full">
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
      </figure>
    </>
  );
}

export default ProductImage;
