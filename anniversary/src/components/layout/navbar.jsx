import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="container py-5">
        <div className="flex justify-between items-center">
          <div className="font-bold tracking-wide leading-10 text-center text-lg text-red-500">
            A - S
          </div>
          <div className="font-bold text-2xl text-red-500 w-4 h-4 bg-red-500 rounded-full cursor-pointer"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
