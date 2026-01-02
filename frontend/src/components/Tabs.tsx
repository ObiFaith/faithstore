import { Link } from "react-router-dom";
import { useState, useEffect, type JSX } from "react";

type TabProps = {
  summary?: boolean;
  className: string;
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
  config: Array<{ header: string; component: JSX.Element; label?: string }>;
};

const Tabs = ({
  config,
  className,
  summary,
  setActiveTab,
  activeTab,
}: TabProps) => {
  const [pageTitle, setPageTitle] = useState(config[0].label);

  useEffect(() => {
    setPageTitle(config[activeTab].label);
  }, [activeTab, config]);

  return (
    <>
      {summary && (
        <div className="*:font-medium">
          <Link
            to="/"
            className="lg:text-lg text-[#151515] cursor-pointer hover:underline"
          >
            Store
          </Link>
          <span className="text-[#093459] text-xs"> &gt; </span>
          <span className="lg:text-lg text-[#151515]">Cart</span>
          <span className="text-[#093459] text-xs"> &gt; </span>
          <span className="text-[#EF0D04] lg:text-lg">{pageTitle}</span>
        </div>
      )}

      <div
        className={`flex gap-4 md:gap-10 lg:gap-12 *:cursor-pointer ${
          className ? className : ""
        }`}
      >
        {config.map((tab, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className="flex gap-2 items-center text-sm md:text-base"
          >
            {summary && (
              <span
                className={`py-0.5 px-2 font-medium rounded-full text-[#FCFCFD] ${
                  activeTab === index ? "bg-[#24A902]" : "bg-[#B8B7B7]"
                }`}
              >
                {index + 1}
              </span>
            )}
            <span
              className={`sm:font-medium ${
                summary
                  ? activeTab === index
                    ? "text-[#24A902]"
                    : "text-[#B1B5C3]"
                  : activeTab === index
                  ? "text-[#141212]"
                  : "text-[#858585]"
              }`}
            >
              {tab.header}
              <hr
                className={`mt-1.5 ${
                  summary
                    ? activeTab === index
                      ? "border-b-2 border-[#24A902]"
                      : ""
                    : activeTab === index
                    ? "border-[#141212]"
                    : "border-[#F6F7F9]"
                }`}
              />
            </span>
          </div>
        ))}
      </div>
      <>{config[activeTab].component}</>
    </>
  );
};

export default Tabs;
