import Slider from "react-slick";
import { settings } from "../store/db";
import { Card, SectionHeader } from "..";
import type { Product } from "../store/type";
import useScreenSize from "../store/useScreenSize";

const Carousel = ({
  cards,
  heading,
}: {
  heading: string;
  cards: Array<Product>;
}) => {
  const { isSmallScreen, isLargeScreen } = useScreenSize(800, 1200);
  const sliderSetting = {
    ...settings,
    slidesToShow: isLargeScreen ? 5 : isSmallScreen ? 2 : 3,
  };

  return (
    <section className="slider-container bg-white">
      <div className="max-container">
        <SectionHeader heading={heading} isProduct={true} />
        <Slider {...sliderSetting}>
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
