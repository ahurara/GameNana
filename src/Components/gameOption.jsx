import React from "react";

const GameOption = ({img,name,rating}) => {
  return (
    <>
      <div className="flex flex-row gap-2 mb-4">
        <div>
            <img src={img}  className="w-14 h-14 rounded-[12px] bg-contain bg-center"  />
        </div>

        <div className="flex flex-col justify-center items-start">
            <h1 className="text-white font-semibold text-xl">{name}</h1>
            <h1 className="text-gray-600">{rating}</h1>
        </div>
      </div>
    </>
  );
};

export default GameOption;
