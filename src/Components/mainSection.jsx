import React from "react";
import AuctionCard from "./auctionCard";
import games from "../cardobject";
import GameOption from "./gameOption";

const MainSection = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 bg-[#212020] ">
        <div className=" col-span-2 mr-6 md:col-span-4 mt-8 ml-8  mb-20   ">
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold">FEATURED AUCTIONS</h1>
            <h1 className="text-[#eba142] font-bold">VIEW ALL</h1>
          </div>

          <div className="flex flex-row gap-5 flex-wrap">
            {games.map((game, index) => (
              <AuctionCard
                key={index}
                img={game.img}
                name={game.name}
                rating={game.rating}
              />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 ">
        
        <div className="bg-[#2e2d2d] mt-8 mr-12 ml-6 mb-20 rounded-[25px] pt-8 pr-10 pl-10 pb-8 ">

        <div className="flex justify-between items-center mb-6">
            <h1 className="text-white font-bold text-xl">New Games</h1>
            <h1 className="text-gray-600 font-bold text-xl">GO</h1>
          </div>

          <div className="flex flex-col">

         {games.map((game, index) => (
              <GameOption
                key={index}
                img={game.img}
                name={game.name}
                rating={game.rating}
              />
            ))}

          </div>



        </div>

        </div>
       
      </div>
    </>
  );
};

export default MainSection;
