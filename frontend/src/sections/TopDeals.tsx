import { useStore } from "../store";
import { arrow_down } from "../assets";
import { Banner, Btn, SectionHeader } from "..";

const Card = ({
  image,
  name,
  text,
  discountPrice,
  dir,
}: {
  image: string;
  name: string;
  text: string;
  discountPrice: number;
  dir: string;
}) => {
  return (
    <div className={`relative ${dir != "left" ? "max-md:pb-4" : ""}`}>
      <div>
        <img src={image} alt={name} />
      </div>
      <div
        className={`absolute top-1/3 max-md:text-center ${dir}-0 px-6 ${
          dir == "left" ? "text-left" : "text-right"
        }`}
      >
        <h3 className="text-[#EF0D04] font-medium text-xl lg:text-2xl">
          {name}
        </h3>
        <p className="pb-4 text-lg">{text}</p>
        <div className="*:pb-3">
          <h3 className="font-bold md:text-center">UPTO {discountPrice} OFF</h3>
          <img src={arrow_down} className="mx-auto" alt="arrow_down" />
        </div>
        <Btn
          to="/"
          text="SHOP NOW"
          btn={dir != "left" ? "btn_red" : "btn_dark"}
        />
      </div>
    </div>
  );
};

const TopDeals = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  const {
    state: { products },
  } = useStore();
  const deals = products.filter(item => item.category == "deals");
  const firstTwoDeals = deals.slice(0, 2);
  return (
    <section>
      <div className="max-container">
        <SectionHeader isProduct={true} heading={"Top Deals"} />
        <div className="sm:flex gap-3 md:gap-4">
          {firstTwoDeals.map((item, index) => (
            <Card
              key={index}
              dir={index % 2 == 0 ? "right" : "left"}
              name={item.name}
              image={item.imagePath}
              text={item.description}
              discountPrice={item.discountPrice}
            />
          ))}
        </div>
      </div>
      {!isSmallScreen && (
        <div className="pt-8">
          <Banner />
        </div>
      )}
    </section>
  );
};

export default TopDeals;
