import { useState } from "react";
import { faqs } from "../store/db";
import { chevron_down, chevron_up } from "../assets";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleClick = (index: number) =>
    setActiveIndex(activeIndex === index ? null : index);

  return (
    <>
      <div className="pb-10">
        <h2 className="text-[#323539] font-bold lg:text-2xl text-xl">
          Frequently Asked Questions
        </h2>
        <p className="text-[#858C95] pt-4">
          Our FAQ area is the best place to look to find answers to your
          questions. Our community and support team constantly updates the
          questions and answers.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <ul
            key={index}
            className="border border-[#E5E5E7] rounded-md px-5 py-4"
          >
            <li
              className="flex justify-between cursor-pointer text-[#323539] font-medium"
              onClick={() => handleClick(index)}
            >
              {faq.question}
              <img
                src={activeIndex !== index ? chevron_down : chevron_up}
                alt={activeIndex !== index ? "chevron_down" : "chevron_up"}
              />
            </li>
            <li
              className={`pb-4 text-[#858C95] pt-2 ${
                activeIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Questions;
