import React from "react";

const Header = () => {
  return (
    <div className="p-4 bg-amber-400 flex justify-between items-center shadow-lg w-full">
      <a
        href="/"
        className="focus:outline-none focus-visible:ring-4 ring-neutral-900 rounded-sm ring-offset-4 ring-offset-amber-400 "
      >
        <div className="flex justify-center items-center space-x-4">
          <p className="text-[25px] font-bold  ">Public Forums</p>
          <img className="w-14" src="./assets/logoforum.png" alt="" />
        </div>
      </a>
    </div>
  );
};

export default Header;
