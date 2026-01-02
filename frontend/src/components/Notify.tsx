import { useEffect } from "react";
import { remove } from "../assets";

const Notify = ({
  message,
  onHide,
}: {
  message: string;
  onHide: () => void;
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onHide();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onHide]);

  return (
    <p className="absolute top-10 right-0 flex gap-1 transition-transform transform translate-x-0 bg-white drop-shadow-md rounded-md text-[#222] font-medium px-4 py-2">
      <img src={remove} alt="Del Icon" />
      {message}
    </p>
  );
};

export default Notify;
