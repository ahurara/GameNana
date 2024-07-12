import React from "react";
import AuctionCard from "./auctionCard";
import games from "../cardobject";
import GameOption from "./gameOption";
import AuctionSection from "./auctionSection";
import NewGameSection from "./newGameSection";
import categories from "../gamesCategories";
import CategoryBtn from "./categoryBtn";
import GameCategory from "./gameCategory";
import HowGameWorks from "./howGameWorks";
import GamePosts from "./gamePosts";
import userPosts from "./postData";

const MainSection = () => {
  return (
    <>
      {/* auctions  */}
      <div className="grid grid-cols-2 lg:grid-cols-6 bg-[#212020] ">
        <div className=" col-span-2 mr-6 lg:col-span-4 mt-8 ml-8 mb-10 lg:mb-20   ">
          <AuctionSection />

          {/* game category */}
          <GameCategory />

            {/* gaming post */}
            {userPosts.map((data,index)=>(<GamePosts key={index} name={data.name} time={data.time} profile={data.profile} post={data.post}  />))}

        </div>

        {/* new games */}
        <div className="col-span-2 ">
          <NewGameSection />

          {/* how game wrok section */}
          <HowGameWorks />
        </div>
      </div>
    </>
  );
};

export default MainSection;
