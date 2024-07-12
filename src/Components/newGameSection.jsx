import games from "../cardobject";
import GameOption from "./gameOption";

const NewGameSection = () => {
    return (
      <div className="bg-[#2b2b2b] mt-8 mr-12 ml-6 mb-4 rounded-[25px] pt-8 pr-10 pl-10 pb-8">
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
    );
  };
  
  export default NewGameSection;