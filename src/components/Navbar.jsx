import React from "react";
import ThemeToggle from "./SliderToggle";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex sm:flex-row flex-col space-y-3  justify-between items-center p-5">
      <div>
        <h1 className="sm:text-4xl text-xl text-black font-bold dark:text-white ">
          Code Editor
        </h1>
      </div>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
