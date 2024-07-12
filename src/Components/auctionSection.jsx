import React from "react";
import AuctionCard from "./auctionCard";
import games from "../cardobject";

const AuctionSection =()=>{

    return(
        <>
            
          <div className="flex justify-between items-center">
            <h1 className="text-white font-bold">FEATURED AUCTIONS</h1>
            <h1 className="text-[#eba142] font-bold">VIEW ALL</h1>
          </div>

          <div className="flex flex-row gap-5 justify-between items-start overflow-auto whitespace-nowrap mb-4">
            {games.map((game, index) => (
              <AuctionCard
                key={index}
                img={game.img}
                name={game.name}
                rating={game.rating}
              />
            ))}
          </div>
        
        </>
    )
}
export default AuctionSection;