import Slider from "react-slick";
import { Link } from "react-router-dom";
import { categoryImg } from "../store/db";
import useScreenSize from "../store/useScreenSize";
import type { Settings } from "../components/type";

const ShopCategory = ({ settings }: { settings: Settings }) => {
  const { isSmallScreen, isLargeScreen } = useScreenSize(768, 1200);
  settings = {
    ...settings,
    slidesToShow: isLargeScreen ? 5 : isSmallScreen ? 3 : 4,
  };

  return (
    <section className={`${!isSmallScreen ? "max-container" : ""} pb-10`}>
      <h3 className="text-center font-medium text-2xl pb-12">
        Shop by Categories
      </h3>
      {/* <div className="flex max-md:flex-wrap text-center justify-between gap-6 items-center max-md:justify-center"> */}
      <Slider {...settings}>
        {categoryImg.map(category => (
          <div key={category.alt} className="text-center">
            <img
              className="rounded-full pb-2 mx-auto"
              key={category.alt}
              alt={category.alt}
              src={category.img}
            />
            <Link
              to="#"
              className="font-semibold text-[#323231] hover:underline hover:cursor-pointer"
            >
              {category.alt}
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ShopCategory;
