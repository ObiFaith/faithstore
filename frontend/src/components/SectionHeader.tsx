import { arrow } from "../assets";

const SectionHeader = ({
  heading,
  isProduct,
}: {
  heading: string;
  isProduct: boolean;
}) => {
  return (
    <div className="border-[#EF0D04] border-s-4 ps-4 mb-12 flex justify-between items-center">
      <h2 className="lg:text-3xl text-2xl font-bold text-[#3C4242]">
        {heading}
      </h2>
      {isProduct && (
        <a
          href="#"
          className="underline hover:text-[#ef0d04] underline-offset-2 flex gap-1"
        >
          More Products{" "}
          <span>
            <img src={arrow} alt="arrow-right icon" />
          </span>
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
