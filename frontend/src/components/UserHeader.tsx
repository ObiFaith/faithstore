import { useState } from "react";
import { useStore } from "../store";
import { Link } from "react-router-dom";
import { navIcons, navLinks } from "../store/db";
import { HashLink } from "react-router-hash-link";
import { Account, Dropdown, Modal, Sidebar } from "..";
import { chevron_down, iconMenu, searchImg } from "../assets";

const HeaderUsers = () => {
  const {
    state: { cart, favourite },
  } = useStore();
  const [style, setStyle] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalElements, setModalElements] = useState(<></>);

  const toggleModal = (e?: React.MouseEvent<HTMLElement>) => {
    setIsOpen(!isOpen);
    setStyle("top-20 right-4 rounded-lg");

    if (e) {
      const target = e.target as HTMLElement;
      const spanElem = target.closest("span") as HTMLSpanElement;

      if (spanElem.id === "user") setModalElements(<Account />);
      else if (spanElem.id === "shopping-cart" || spanElem.id === "favourite")
        setModalElements(
          <Dropdown
            name={spanElem.id === "shopping-cart" ? "Cart" : "Favourite"}
          />
        );
      else {
        setStyle("top-0 right-0 h-full pt-6");
        setModalElements(
          <Sidebar
            cartItems={cart}
            favourite={favourite}
            toggleModal={toggleModal}
          />
        );
      }
    }
  };

  return (
    <>
      <header className="py-8 flex justify-between items-center max-container relative">
        <nav className="flex gap-3 md:gap-6 items-center">
          <Link to="/" className="font-bold text-xl lg:text-2xl">
            FaithStore
          </Link>
          <ul className="lg:flex hidden items-center gap-3 md:gap-7">
            {navLinks.map(link => (
              <li
                key={link.href}
                className={`text-base max-md:text-sm list-none hover:text-[#ef0d04] ${
                  link.label === "Store" ? "text-[#ef0d04] font-medium" : ""
                }`}
              >
                <HashLink to={link.href}>{link.label}</HashLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:flex hidden md:flex-1 justify-between items-center">
          <div className="md:block relative mx-auto">
            <img
              className="absolute top-4 left-3"
              src={searchImg}
              alt="Search Icon"
            />
            <input
              type="text"
              name="nav-search"
              className="input ps-10"
              placeholder="Search for an item"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between lg:gap-1 cursor-pointer">
            {navIcons.map((img, index) => (
              <span key={index} id={img.alt} onClick={toggleModal}>
                {img.alt !== "user" ? (
                  <div className="bg-[#FAFAFA] relative hover:bg-transparent border-2 border-[#F1F1F1] p-1.5 rounded-full">
                    <img src={img.icon} alt={img.alt} />
                    {cart && cart.length > 0 && img.alt === "shopping-cart" && (
                      <div className="absolute px-2 rounded-[50%] text-white -top-2 -right-2 bg-[#ef0d04] font-medium">
                        {cart.length}
                      </div>
                    )}
                    {favourite &&
                      favourite.length > 0 &&
                      img.alt === "favourite" && (
                        <div className="absolute px-2 rounded-[50%] text-white -top-2 -right-2 bg-[#ef0d04] font-medium">
                          {favourite.length}
                        </div>
                      )}
                  </div>
                ) : (
                  <div className="flex justify-center gap-1">
                    <img src={img.icon} alt={img.alt} className="w-5/12" />
                    <img src={chevron_down} alt="profile" />
                  </div>
                )}
              </span>
            ))}
            <span onClick={toggleModal}>
              <img src={iconMenu} alt="Menu Icon" className="ml-2" />
            </span>
          </div>
        </div>
      </header>
      {isOpen && (
        <Modal isOpen={isOpen} style={style} toggleModal={toggleModal}>
          {modalElements}
        </Modal>
      )}
    </>
  );
};

export default HeaderUsers;
