import React from "react";

const SolutionsMenu = ({ icon, text, label }) => {
  return (
    <div className=" flex items-center space-x-2 m-2 hover:bg-gray-100 cursor-pointer ">
      {icon && <span className="text-2xl p-2">{icon}</span>}
      <div>
        <div className=" font-semibold text-l text-black whitespace-nowrap">
          {text}
        </div>
        <div className="text-gray-500 font-normal text-xs whitespace-nowrap ">
          {label}
        </div>
      </div>
    </div>
  );
};

export default SolutionsMenu;
