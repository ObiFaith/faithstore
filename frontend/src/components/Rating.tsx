import { noStar, starFilled } from "../assets";

const Rating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) =>
        rating > i ? (
          <img key={i} src={starFilled} alt="star icon" />
        ) : (
          <img key={i} src={noStar} alt="star icon" />
        )
      )}
    </div>
  );
};

export default Rating;
