import React from "react";


const AuctionCard = ({img,name,rating}) => {
  return (
    <>
      <div
        className="mt-4 w-46 h-60 bg-white border-2 border-white rounded-[16px] shadow dark:bg-gray-800 dark:border-gray-700"
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="w-full h-60 p-2 flex flex-col justify-end   ">
          <a href="#">
            <h5 className="mb-2   tracking-tight text-white font-bold ">
             {name}
            </h5>
          </a>

          <p className="text-white">
            bid starting at <span className="text-[#eba142]">{rating}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuctionCard;
