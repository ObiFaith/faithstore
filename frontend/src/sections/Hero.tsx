import { Btn, Slider } from "..";
import { hero } from "../store/db";

const Hero = () => {
  const isUser = localStorage.getItem("isUser");
  return (
    <section className="bg-[#141212] p-0 w-full">
      <div className="max-container max-md:w-3/5 md:flex max-md:flex-col justify-between gap-3 md:gap-6 items-center">
        <div className="max-md:text-center py-12 w-full text-white self-center">
          <p className="text-[#faa613] md:text-xl">New Arrivals</p>
          <h1 className="lg:text-6xl text-white text-5xl font-bold pb-5 pt-4">
            Fashionable Unisex <Slider slides={hero} text={true} />
          </h1>
          <p className="pb-8 md:text-lg text-[#B8B7B7]">
            Step out in style with the new fashion arrivals for both male and
            female
          </p>
          <div className="w-1/2 max-sm:w-3/4 lg:w-2/5 max-md:mx-auto">
            <Btn
              btn="btn_red"
              to={`${isUser ? "/#men" : "/signup"}`}
              text={`${isUser ? "Visit Store" : "Buy Now"}`}
            />
          </div>
        </div>
        <div className="w-full">
          <Slider slides={hero} image={true} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
