import React from "react";
import CategoryBtn from "./categoryBtn";
import categories from "../gamesCategories";

const GameCategory =()=>{
    return (
        <>
           <div className="flex justify-between items-center">
            <h1 className="text-white font-bold">Games Categories</h1>
          </div>
          <div className="flex flex-row gap-5 justify-start items-start flex-wrap mt-4 mb-2">
            {categories.map((category, index) => (
              <CategoryBtn
                key={index}
                name={category.name}
                icon={category.icon}
              />
            ))}
          </div>
        </>
    )

}

export default GameCategory;