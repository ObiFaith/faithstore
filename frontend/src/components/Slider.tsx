import { useState, useEffect } from "react";

interface Slide {
  image: string;
  text: string;
  color: string;
}

const Slider = ({
  text,
  image,
  slides,
}: {
  text?: boolean;
  image?: boolean;
  slides: Array<Slide>;
}) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <>
      {image && (
        <img src={slides[slideIndex].image} alt={`Slide ${slideIndex}`} />
      )}
      {text && (
        <span className={slides[slideIndex].color}>
          {slides[slideIndex].text}
        </span>
      )}
    </>
  );
};

export default Slider;
