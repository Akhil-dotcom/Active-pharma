import { FC, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";

const About: FC = () => {
  const [popup, setpopup] = useState<boolean>(false);
  return (
    <div className="bg-emerald-200 p-5 py-[6rem] relative">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h3 className="pb-2 font-medium">About Us</h3>
        <h1 className="text-3xl xl:text-5xl font-copse text-center">
          The herbal hub. Your health is our Priority.
        </h1>
        <p className="max-w-screen-lg pt-5 text-lg xl:text-xl text-center">
          We provide the best ayurvedic treatment. “The great thing about
          Ayurveda is that its treatments always yield side benefits, not side
          effects.”
        </p>
        <div className="pt-6">
          <button
            onClick={() => setpopup(true)}
            className="relative group font-semibold active:scale-95 duration-150"
          >
            Learn More{" "}
            <span className="absolute -right-3 top-3">
              <CgArrowLongRight
                size={28}
                className="relative z-40 group-hover:animate-pulse"
              />
              <div className="group-hover:bg-yellow-400 h-10 w-10 border-2 rounded-full border-gray-800 absolute -top-2 -right-7"></div>
            </span>
          </button>
        </div>
        {popup && (
          <div className="absolute z-50 bg-white p-10 rounded-md shadow-md">
            <h3 className="text-2xl text-center">About Us</h3>
            <p className="max-w-screen-lg pt-5 text-lg text-center">
              Founded in the year 1997, with the expertise of eminent Ayurveda
              doctors and traditional vaidyas, Active Pharma commenced its
              operations with a single unit in Kerala, manufacturing herbal oils
              and traditional ayurvedic preparations.
              <br /> As an Ayurvedic manufacturing company we stand out now with
              a wider portfolio covering Herbal patent medicines (both external
              and internal medicines), Ayurveda food, Nutraceutics, Health
              supplements, Herbal cosmetics, Skin care and Hair care products.
              <br /> A technical know-how about the active ingredients and
              specialty formulations backed up by the time tested Knowledge of
              Ayurveda makes us the unique one in the group. We are inclined to
              improve the quality of human life through innovative and advanced
              health care products.
              <br /> We collaborate with physicians and global innovators to
              identify unmet clinical needs and develop safe herbal medicines.
            </p>
          </div>
        )}
        <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 lg:grid-cols-3 gap-10 pt-16 w-full">
          <div className="h-40 md:h-56 lg:h-80 w-full border relative z-40">
            <img
              src=""
              alt=""
              className="relative h-full w-full bg-white z-40"
            />
            <div className="h-full w-full bg-gray-700 absolute left-2 top-2 z-30"></div>
          </div>
          <div className="h-40 md:h-56 lg:h-80 w-full border relative z-40">
            <img
              src=""
              alt=""
              className="relative h-full w-full bg-white z-40"
            />
            <div className="h-full w-full bg-gray-700 absolute left-2 top-2 z-30"></div>
          </div>
          <div className="h-40 md:h-56 lg:h-80 w-full border relative z-40">
            <img
              src=""
              alt=""
              className="relative h-full w-full bg-white z-40"
            />
            <div className="h-full w-full bg-gray-700 absolute left-2 top-2 z-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
