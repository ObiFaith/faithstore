import { useStore } from "../store";
import { Card, SectionHeader } from "..";
import type { Product } from "../store/type";

const Category = ({
  category,
  products,
}: {
  category: string;
  products: Array<Product>;
}) => {
  return (
    <>
      <section
        className="max-container"
        id={`${category === "men" ? "Men" : "Women"}`}
      >
        <SectionHeader
          // TODO: why MUST it not be featured prodict?
          isProduct={true}
          heading={`Categories for ${category === "men" ? "Men" : "Women"}`}
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 md:gap-y-6 md:gap-x-4">
          {products.map(
            (product, index) =>
              product.category === category &&
              index < 4 && <Card key={index} {...product} />
          )}
        </div>
      </section>
    </>
  );
};

const Categories = () => {
  const {
    state: { products },
  } = useStore();
  const menProducts = products
    ? products.filter(item => item.category == "men")
    : [];
  const womenProducts = products
    ? products.filter(item => item.category == "women")
    : [];

  return (
    <>
      <Category category="women" products={womenProducts} />
      <Category category="men" products={menProducts} />
    </>
  );
};

export default Categories;
