import { FC, useState } from "react";
import NavButton from "./NavButton";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import DropdownMenu from "./DropdownMenu";

const Header: FC = () => {
  const [dropMenu, setdropMenu] = useState<boolean>(false);
  return (
    <div className="fixed top-0 left-0 w-full p-5 pb-0 z-50">
      <div className="relative flex max-w-screen-xl mx-auto items-center justify-between border border-gray-100 p-3 px-4 shadow-sm bg-white">
        <div className="text-xl font-medium">Active Pharma</div>
        <div className="hidden md:flex items-center space-x-8">
          <NavButton
            label="About Us"
            className="text-gray-600 hover:text-gray-700"
          />
          <NavButton
            label="Products"
            className="text-gray-600 hover:text-gray-700"
          />
          <NavButton
            label="Services"
            className="text-gray-600 hover:text-gray-700"
          />
          <NavButton
            label="Contact Us"
            className="text-gray-600 hover:text-gray-700"
          />
          <NavButton
            label="Book Now"
            className="bg-[#072227] text-white p-2 px-4 shadow-md active:scale-95"
          />
        </div>
        {/* mobile */}
        <div
          onClick={() => setdropMenu(!dropMenu)}
          className="md:hidden p-3 bg-gray-50 rounded-md cursor-pointer"
        >
          {dropMenu ? <IoClose size={20} /> : <HiMenu size={20} />}
        </div>
        <DropdownMenu {...{ dropMenu, setdropMenu }} />
      </div>
    </div>
  );
};

export default Header;
