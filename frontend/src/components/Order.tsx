import { Btn } from "..";
import { naira } from "../assets";
import type { CartItem } from "../store/type";

const Order = ({
  cart,
  setActiveTab,
  subTotal,
}: {
  subTotal: string;
  cart: Array<CartItem>;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="bg-white lg:w-1/2 md:w-3/4 mx-auto py-10 rounded-[20px]">
      {cart.length > 0 ? (
        <>
          <h2 className="md:text-xl lg:text-2xl text-center text-[#121212] font-medium text-lg">
            Confirm your Order
          </h2>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-4 py-10">
            {cart.map((item, index) => (
              <img
                key={index}
                className="rounded-md object-cover"
                width={80}
                src={`/src/assets/images/${item.imagePath}`}
                alt={item.name}
              />
            ))}
          </div>
          <div className="flex justify-center gap-6 font-medium">
            <div className="flex flex-col gap-2 text-[#6C7275]">
              <p>Order code:</p>
              <p>Date:</p>
              <p>Total:</p>
              <p>Payment method:</p>
            </div>
            <div className="flex flex-col gap-2 text-[#141212]">
              <p>#0123_45678</p>
              <p>April 30, 2024</p>
              <p className="flex gap-1">
                <img src={naira} alt="naira" />
                {subTotal}
              </p>
              <p>Debit Card</p>
            </div>
          </div>
          <div onClick={() => setActiveTab(2)} className="w-3/5 mx-auto pt-10">
            <Btn to="/cart" text="Confirm Purchase" />
          </div>
        </>
      ) : (
        <div className="font-medium text-center lg:text-lg">No Order yet!</div>
      )}
    </div>
  );
};

export default Order;
