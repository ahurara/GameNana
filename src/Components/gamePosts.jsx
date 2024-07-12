import React from "react";

const GamePosts = ({ time, name , profile,post}) => {
  return (
    <>
      <div className="bg-[#2b2b2b] mt-6 mr-6 ml-6 mb-8 rounded-[10px] pt-8  pb-0 ">
        <div className="flex flex-col  justify-between items-start  mb-6">
          <div className="flex flex-row gap-2 mb-4 w-full pr-10 pl-10">
            <div>
              <img
                src={profile}
                className="w-14 h-12 rounded-[42px] border-2 border-white bg-contain bg-center"
              />
            </div>

            <div className="flex flex-col justify-center items-start w-full">
              <h1 className="text-white font-semibold text-xl">{name}</h1>
              <h1 className="text-gray-600">{time}</h1>
            </div>
            <h1 className="text-white items-end">&#xFE19;</h1>
          </div>
          <img
            src={post}
            className=" bg-contain m-auto w-full h-fit rounded-bl-[10px] rounded-br-[10px]"
          />
        </div>
      </div>
    </>
  );
};

export default GamePosts;
