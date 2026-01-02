import { Btn } from "..";
import { banner_img } from "../assets";

const Banner = () => {
  return (
    <div className="lg:max-container max-md:my-4 flex justify-between lg:pt-4 lg:px-6 md:px-0 px-8 gap-4 lg:gap-6 bg-[#090808] lg:rounded-2xl text-white">
      <div className="w-full max-md:hidden self-end">
        <img src={banner_img} alt="Banner Image" />
      </div>
      <div className="w-full flex flex-col md:gap-4 max-md:gap-16 justify-between py-3">
        <div className="max-md:w-4/5 w-full md:pe-4 lg:p-0">
          <h2 className="text-white text-3xl lg:text-4xl font-bold pb-4">
            Discover all Types of Unisex{" "}
            <span className="text-[#EF0D04]">Wears on Sale</span> at Clothline
            Collections.
          </h2>
          <p className="text-[#E8E8E8]">
            Find sales on a wide variety of clothing styles from highly waited
            brands to designer wears today
          </p>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">UPTO 40% OFF</h3>
          <span className="text-xs font-medium p-3">
            <Btn btn="btn_red" text="SHOP NOW" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
