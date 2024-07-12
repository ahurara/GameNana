import React from "react";
import img from '../assets/main.jpeg';

const HowGameWorks = () => {
    return (
      <div className="bg-[#2b2b2b] mt-0 mr-12 ml-6 mb-20 rounded-[25px] pt-8 pr-10 pl-10 pb-8">
        <div className="flex flex-col  justify-between items-start  mb-6">
          <h1 className="text-white font-bold text-xl pb-6">New Games</h1>
          <img src={img} className="rounded-[25px] pb-4 m-auto" />
          <h1 className="text-white font-bold">lorem ipsum dlor sit lorem dlor sit ipsum dlor sit</h1>
          <h1 className="mt-2 text-gray-400">01:08</h1>
         
        </div>
      </div>
    );
  };
  
  export default HowGameWorks;