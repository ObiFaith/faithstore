import { Btn, Input } from "..";
import { searchImg } from "../assets";
import { navLinks } from "../store/db";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const GuestHeader = () => {
  return (
    <header className="py-8 flex justify-between items-center max-container relative">
      <nav className="flex gap-3 md:gap-6 items-center">
        <Link to="/" className="font-bold text-xl lg:text-2xl">
          FaithStore
        </Link>
        <ul className="hidden lg:flex items-center gap-3 md:gap-7">
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
      <div className="flex md:flex-1 justify-between items-center">
        <div className="hidden md:block relative mx-auto">
          <img
            className="absolute top-4 left-3"
            src={searchImg}
            alt="Search Icon"
          />
          <Input
            className="input ps-10"
            type="search"
            name="nav-search"
            placeholder="Search for an item"
          />
        </div>
        <div className="flex gap-2 lg:gap-4">
          <Btn btn="btn_light" to="/login" text="Login" />
          <Btn btn="btn_dark" to="/signup" text="Signup" />
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;
