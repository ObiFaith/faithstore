import Slider from "react-slick";
import { SectionHeader } from "..";
import { Link } from "react-router-dom";
import type { Product } from "../store/type";
import type { Settings } from "../components/type";
import useScreenSize from "../store/useScreenSize";

const Trend = ({
  trend,
  settings,
}: {
  settings: Settings;
  trend: Array<Product>;
}) => {
  const { isSmallScreen } = useScreenSize(0, 640);
  settings = { ...settings, slidesToShow: isSmallScreen ? 2 : 4 };
  const trendElements = trend.map(item => (
    <div key={item.id}>
      <img src={`/src/assets/${item.imagePath}`} alt={item.name} />
      <Link
        to={`/product/${item.id}`}
        className="lg:text-lg text-center font-medium pt-4 hover:underline hover:cursor-pointer"
      >
        {item.name}
      </Link>
    </div>
  ));
  return (
    <section className="max-container">
      {isSmallScreen && (
        <>
          <SectionHeader heading="Trending Items" isProduct={true} />
          <div className="grid grid-cols-2 gap-y-6 gap-x-3">
            {trendElements}
          </div>
        </>
      )}
      {!isSmallScreen && (
        <>
          <SectionHeader heading="Trending Items" isProduct={true} />
          <Slider {...settings}>{trendElements}</Slider>
        </>
      )}
    </section>
  );
};

export default Trend;
