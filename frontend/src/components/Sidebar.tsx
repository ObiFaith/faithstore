import { Btn } from "..";
import { sidebar } from "../store/db";
import { Link } from "react-router-dom";
import type { CartItem, FavouriteItem } from "../store/type";
import { arrowRight2, iconClose, chevron_right } from "../assets";

const Sidebar = ({
  toggleModal,
  cartItems,
  favourite,
}: {
  toggleModal: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  cartItems: Array<CartItem>;
  favourite: Array<FavouriteItem>;
}) => {
  return (
    <>
      <div className="flex items-center justify-end pr-5">
        <img
          alt="Close"
          src={iconClose}
          onClick={toggleModal}
          className="shadow-md cursor-pointer"
        />
      </div>
      <div className="flex-col flex justify-between h-[90%]">
        <div className="flex flex-col mt-8">
          {sidebar.map(item => (
            <div
              key={item.alt}
              className="flex justify-between px-5 py-2 hover:bg-[#f1f1f1]"
            >
              <div className="flex gap-2">
                <img className="relative" src={item.icon} alt={item.alt} />
                {cartItems.length > 0 && item.alt === "shopping-cart" && (
                  <div className="absolute px-1 rounded-[50%] text-white left-8 text-sm bg-[#ef0d04]">
                    {cartItems.length}
                  </div>
                )}
                {favourite.length > 0 && item.alt === "favourite" && (
                  <div className="absolute px-1 rounded-[50%] text-white left-8 text-sm bg-[#ef0d04]">
                    {favourite.length}
                  </div>
                )}
                {item.label !== "Cart" && item.label !== "Home" ? (
                  <h3
                    className={`${
                      item.label === "Home"
                        ? "text-[#EF0D04] font-medium"
                        : "text-[#323231]"
                    } w-full text-lg `}
                  >
                    {item.label}
                  </h3>
                ) : (
                  <Link
                    to={item.label === "Home" ? "/" : item.label}
                    className={`${
                      item.label === "Home"
                        ? "text-[#EF0D04] font-medium"
                        : "text-[#323231]"
                    }`}
                  >
                    {item.label === "Home" ? "Store" : "Order"}
                  </Link>
                )}
              </div>
              <img src={chevron_right} alt="chevron_right" />
            </div>
          ))}
        </div>
        <div className="px-5" onClick={() => localStorage.removeItem("isUser")}>
          <Btn to="/Login" text="Logout" rightIcon={arrowRight2} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
