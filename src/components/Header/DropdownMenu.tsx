import React, { Dispatch, SetStateAction } from "react";
import NavButton from "./NavButton";

interface DropdownMenuProps {
  dropMenu: boolean;
}

const DropdownMenu = ({ dropMenu }: DropdownMenuProps) => {
  return (
    <div
      className={`absolute left-0 z-50 bg-white border border-gray-100 shadow-sm w-full p-5 transform duration-200 ease-in ${
        dropMenu ? "translate-y-44 opacity-1" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex flex-col items-start space-y-5">
        <NavButton
          label="About Us"
          className="text-gray-600 hover:text-gray-700 font-semibold"
        />
        <NavButton
          label="Products"
          className="text-gray-600 hover:text-gray-700 font-semibold"
        />
        <NavButton
          label="Services"
          className="text-gray-600 hover:text-gray-700 font-semibold"
        />
        <NavButton
          label="Contact Us"
          className="text-gray-600 hover:text-gray-700 font-semibold"
        />
        <NavButton
          label="Book Now"
          className="bg-[#072227] text-white p-3 px-4 shadow-md active:scale-95 w-full"
        />
      </div>
    </div>
  );
};

export default DropdownMenu;
