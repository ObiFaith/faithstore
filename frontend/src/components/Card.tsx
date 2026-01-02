import { useState } from "react";
import { Btn, Rating } from "..";
import { useStore } from "../store";
import { useApi } from "../store/api";
import type { Product } from "../store/type";
import { Link, useNavigate } from "react-router-dom";
import { cartImg, heart_active, wishlist } from "../assets";

const Card = ({
  id,
  name,
  color,
  sizes,
  price,
  rating,
  category,
  quantity,
  imagePath,
  specialOffer,
  discountPrice,
}: Product) => {
  const navigate = useNavigate();
  const { handleAddToCart } = useApi();
  const isUser = localStorage.getItem("isUser");
  const [isHeart, setIsHeart] = useState(false);
  const [addToFav, setAddToFav] = useState(false);
  const [addProduct, setAddProduct] = useState(false);

  const { dispatch } = useStore();

  const addToCart = async () => {
    if (!addProduct) {
      setAddProduct(addProduct => !addProduct);
      handleAddToCart(id);
    }
  };

  const addToFavourite = () => {
    if (!addToFav) {
      setIsHeart(isHeart => !isHeart);
      setAddToFav(addToFav => !addToFav);
      dispatch({
        type: "ADD_TO_FAVOURITE",
        payload: {
          id,
          quantity,
          color,
          sizes,
          imagePath,
          specialOffer,
          price,
          discountPrice,
          rating,
          category,
          name,
        },
      });
    }
  };

  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${imagePath})` }}
        className={`bg-cover flex flex-col p-4 justify-between bg-center min-h-80`}
      >
        <div className="flex justify-between items-start gap-1.5">
          <div className="*:self-start flex flex-col text-white font-medium">
            <span
              className={`px-3 rounded-md py-0.5 text-base hover:bg-none ${
                specialOffer === "Featured" ? "btn_dark" : ""
              } ${specialOffer === "New" ? "btn_red" : ""} ${
                specialOffer === "Trending" ? "btn_yellow" : ""
              }`}
            >
              {specialOffer}
            </span>
            {discountPrice > 0 && (
              <span className="mt-2 p-3 bg-[#38CB89] tracking-wide font-inter rounded-md py-0 text-lg">
                -{discountPrice}%
              </span>
            )}
          </div>
          <img
            src={!isHeart ? wishlist : heart_active}
            alt="heart icon"
            className={`shadow-lg p-2 rounded-full hover:cursor-pointer ${
              !isHeart
                ? "bg-white hover:bg-[#fee]"
                : "bg-[#ef0d04] hover:bg-[#7a0501]"
            }`}
            onClick={() => (isUser ? addToFavourite() : navigate("/signup"))}
          />
        </div>
        {category != "men" && category != "women" && (
          <span
            className="w-4/5 mx-auto"
            onClick={() => (isUser ? addToCart() : navigate("/signup"))}
          >
            <Btn to="/" text="Add to cart" />
          </span>
        )}
      </div>
      <div className={`flex justify-between items-center py-2`}>
        <p className="text-[#FAA613] text-sm font-medium">
          {category == "men" && "Male"} {category == "women" && "Female"}
        </p>
        <Rating rating={rating} />
      </div>
      <Link
        to={`/product/${id}`}
        className="text-[#6C7275] pb-1 font-medium lg:text-lg text-base hover:text-[#333] hover:underline"
      >
        {name}
      </Link>
      <div className="flex justify-between items-center gap-4">
        <p className="font-medium flex gap-3">
          <span className="lg:text-xl md:text-lg text-base text-[#323231">
            <span className="line-through">N</span>
            {discountPrice
              ? (price - price * (discountPrice / 100)).toFixed(2)
              : price}
          </span>
          {discountPrice > 0 && (
            <span className="text-[#6C7275]/80 md:text-lg text-base line-through">
              N{discountPrice && price}
            </span>
          )}
        </p>
        {(category == "men" || category == "women") && (
          <span
            className="flex gap-1 lg:gap-2 items-center"
            onClick={() => (isUser ? addToCart() : navigate("/signup"))}
          >
            <img src={cartImg} alt="cart icon" />
            <Link
              to="/"
              className="text-[#EF0D04] hover:text-[#7a0501] focus:text-[#520401] hover:underline text-xs font-medium"
            >
              Add to cart
            </Link>
          </span>
        )}
      </div>
    </div>
  );
};

export default Card;
