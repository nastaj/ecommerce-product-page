function ProductDetails({ children }) {
  return (
    <article className="p-6 mb-2 basis-2/5 lg:mb-0 xl:basis-2/6">
      <span className="inline-block uppercase font-bold text-sm text-primary-orange tracking-wide mb-4">
        Sneaker Company
      </span>
      <h1 className="text-3xl lg:text-4xl font-bold text-black leading-none mb-6 lg:mb-8">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-neutral-gray-1 mb-6 lg:mb-8">
        These low-profile sneakers are your perfect casual wear companion.
        Reaturing a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      <section className="flex justify-between items-center mb-6 lg:flex-col lg:items-start">
        <div className="flex gap-4 lg:mb-2">
          <h2 className="text-3xl font-bold">$125.00</h2>
          <span className="inline-block text-lg text-primary-orange font-bold bg-primary-pale px-3 py-1 rounded-md">
            50%
          </span>
        </div>

        <span className="text-lg text-neutral-gray-2 font-bold line-through">
          $250.00
        </span>
      </section>
      {children}
    </article>
  );
}

export default ProductDetails;
