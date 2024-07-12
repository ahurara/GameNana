import AuctionCard from "./Components/auctionCard";
import MainScreenBanner from "./Components/mainScreenBanner";
import MainSection from "./Components/mainSection";
import Navbar from "./Components/navbar";
import mainImg from "./assets/mian.jpg";
import games from "./cardobject";

function App() {
  return (
    <>
      <Navbar />

      <div className="bg-cover bg-center h-auto md:h-auto flex items-center justify-center "style={{ backgroundImage: `url(${mainImg})` }} >
        <MainScreenBanner />
      </div>

    <MainSection/>

     
    </>
  );
}

export default App;
