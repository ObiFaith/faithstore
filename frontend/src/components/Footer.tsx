import { footer } from "../store/db";
import { Link } from "react-router-dom";
import { mastercard, paypal, visa } from "../assets";

const Footer = () => {
  return (
    <footer className="max-container pt-10 lg:pt-20">
      <div className="relative max-md:mb-10 text-[#323231] flex max-md:flex-col justify-between pb-10 max-md:gap-3 max-lg:gap-6">
        <div className="md:w-1/2">
          <Link to="/" className="font-bold text-xl lg:text-2xl text-[#121212]">
            FaithStore
          </Link>
          <p className="py-5 lg:w-3/5 w-11/12">
            We give you wears that keeps you looking glamorous and trendy,
            providing everything of your outfit with well thought out designs
            for all your ocassions.
          </p>
          <div className="flex items-center gap-3 cursor-pointer max-md:absolute bottom-0">
            {footer.socials.map(img => (
              <span
                key={img.alt}
                className="border-[#D4D4D8] hover:bg-[#D4D4D8] border p-3 rounded-full"
              >
                <img src={img.icon} alt={img.alt} />
              </span>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 max-md:pb-8 flex justify-between gap-4">
          {footer.links.map((link, index) => (
            <div key={index}>
              <h3 className="font-display font-semibold pb-6">
                {link.heading}
              </h3>
              <ul className="text-sm space-y-4">
                {link.links.map(link => (
                  <li key={link}>
                    <Link className="hover:underline" to="#">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="bg-[#E2E8F0]" />
      <div className="md:flex justify-between max-md:text-center py-10">
        <p className="text-[#71717A] max-md:pb-4">
          © Copyright {new Date().getUTCFullYear()}, All Rights Reserved by
          FaithStore
        </p>
        <div className="flex gap-4 lg:gap-7 max-md:justify-center">
          <img src={visa} alt="Visa Icon" />
          <img src={mastercard} alt="mastercard Icon" />
          <img src={paypal} alt="paypal Icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
