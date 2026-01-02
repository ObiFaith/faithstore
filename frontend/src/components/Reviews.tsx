import { Rating } from "..";
import { useState } from "react";
import { reviews } from "../store/db";
import { arrow_down } from "../assets";
import { Link } from "react-router-dom";

const Reviews = ({ id }: { id: string }) => {
  const [load, setLoad] = useState(false);
  const len = !load ? 3 : 5;

  return (
    <div className="flex flex-col gap-5">
      {reviews.map(
        review =>
          review.id <= len && (
            <div
              key={review.id}
              className="flex border-b border-[#E8ECEF] gap-5 lg:gap-10 items-start"
            >
              <img src={review.img} width={48} alt={review.name} />
              <div>
                <h3 className="text-[#141212] pb-2 font-medium">
                  {review.name}
                </h3>
                <Rating rating={review.rating} />
                <p className="text-[#858585] pt-4 pb-5">{review.comment}</p>
              </div>
            </div>
          )
      )}
      <div className="flex items-center justify-center">
        <Link
          to={`/product/${id}`}
          onClick={() => setLoad(!load)}
          className="text-[#141212] flex gap-1 border border-[#141212] font-medium rounded-full px-8 py-2 hover:bg-[#F6F7F9]"
        >
          {len < reviews.length ? "load more" : "load less"}
          <img src={arrow_down} width={10} alt="arrow down" />
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
