import React from "react";

const Product = () => {
  const productList = [
    {
      name: "",
      image: "",
    },
  ];
  return (
    <div className="bg-[#072227] p-5 py-[6rem]">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h3 className="text-emerald-200 pb-2">Product</h3>
        <h1 className="text-white text-3xl xl:text-4xl font-copse">
          Our Product List
        </h1>
        <div>
          {productList.map((item, index) => (
            <div>
              <img />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
