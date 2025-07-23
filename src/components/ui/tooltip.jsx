import React from "react";

const Tooltip = ({ children, text }) => {
  return (
    <div className="relative flex items-center">
      {children}
      <div className="absolute bottom-0 mb-10 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded hidden group-hover:block">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
