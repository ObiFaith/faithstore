import {
  Hero,
  Trend,
  Banner,
  Brands,
  Carousel,
  Categories,
  ShopCategory,
} from "..";
import { useStore } from "../store";
import { settings } from "../store/db";

import useScreenSize from "../store/useScreenSize";

const Home = () => {
  const {
    state: { products },
  } = useStore();

  const featured = products
    ? products.filter(item => item.specialOffer === "Featured")
    : [];
  const trend = products
    ? products.filter(item => item.specialOffer === "Trending")
    : [];
  const others = products
    ? products.filter(item => item.specialOffer === "New")
    : [];

  const { isSmallScreen } = useScreenSize(0, 640);
  const featuredElements = (
    <Carousel heading="Featured Items" cards={featured} />
  );

  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="bg-white">
        <ShopCategory settings={settings} />
      </div>
      <Trend settings={settings} trend={trend} />
      {isSmallScreen && (
        <>
          {featuredElements} <Banner />
        </>
      )}
      {/* <TopDeals isSmallScreen={isSmallScreen} /> */}
      {!isSmallScreen && featuredElements}
      <Categories />
      <Brands />
      <Carousel cards={others} heading="You may also like" />
    </div>
  );
};

export default Home;
