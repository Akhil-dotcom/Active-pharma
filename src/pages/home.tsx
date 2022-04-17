import { FC } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Product from "../components/Product/Product";

const Home: FC = () => {
  return (
    <div className="bg-emerald-200">
      <Header />
      <div className="max-w-screen-xl mx-auto p-5 py-[10rem] flex flex-col xl:flex-row gap-10">
        <div className="flex-1 flex flex-col justify-center max-w-xl xl:max-w-none mx-auto">
          <h1 className="text-5xl xl:text-6xl font-medium font-copse text-[#072227]">
            Ayurveda, There is always a better way for cure.
          </h1>
          <p className="pt-5 pb-8 text-base xl:text-xl text-gray-600 font-normal w-10/12">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate.
          </p>
          <div className="relative">
            <button className="relative z-40 bg-[#072227] text-white p-4 w-[200px] font-semibold shadow-md active:scale-95">
              Book Now
            </button>
            <div className="bg-white w-[200px] h-14 absolute left-2 top-2 z-30"></div>
          </div>
        </div>
        <div className="flex-1">
          <p></p>
        </div>
      </div>
      <Product />
      <About />
    </div>
  );
};

export default Home;
