import { brands } from "../store/db";

const Brands = () => {
  return (
    <section className="max-container mt-20 pb-20 max-md:w-full bg-[#141212] text-white text-center">
      <h2 className="text-white font-bold text-3xl">Top Brands Deal</h2>
      <p className="pt-2 pb-12 text-xl font-light">
        Up To <span className="text-[#FAA613] font-semibold">60%</span> off on
        brands
      </p>
      <div className="flex max-md:flex-col max-md:w-1/2 justify-between w-11/12 lg:w-4/5 mx-auto gap-6 overflow-hidden">
        {brands.map(brand => (
          <div
            key={brand.alt}
            className="bg-white w-full rounded-xl px-6 py-1 flex justify-center"
          >
            <img className="max-w-16" src={brand.img} alt={brand.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
