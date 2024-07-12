import React from "react";

const CategoryBtn = ({ name, icon: Icon }) => {
  return (
    <div className="pl-0 pb-0 md:pb-6">
      <button className="bg-white text-black hover:bg-[#36d1a8] rounded-[120px] pr-6 pl-6 py-2 font-bold flex items-center transition-colors duration-200 group">
        <div className="flex flex-row justify-center gap-2 items-center">
          <span className="text-[#36d1a8] group-hover:text-white transition-colors duration-200">
            <Icon />
          </span>
          <span className="text-black group-hover:text-white transition-colors duration-200">
            {name}
          </span>
        </div>
      </button>
    </div>
  );
};

export default CategoryBtn;
