function ProductDetails() {
  return (
    <article className="p-6 mb-2">
      <span className="inline-block uppercase font-bold text-sm text-primary-orange tracking-wide mb-4">
        Sneaker Company
      </span>
      <h1 className="text-3xl font-bold text-black leading-none mb-6">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-neutral-gray-1 mb-6">
        These low-profile sneakers are your perfect casual wear companion.
        Reaturing a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>

      <section className="flex justify-between items-center">
        <div className="flex gap-4">
          <h2 className="text-3xl font-bold">$125.00</h2>
          <span className="inline-block text-lg text-primary-orange font-bold bg-primary-pale px-3 py-1 rounded-md">
            50%
          </span>
        </div>

        <span className="text-lg text-neutral-gray-2 font-bold line-through">
          $250.00
        </span>
      </section>
    </article>
  );
}

export default ProductDetails;
