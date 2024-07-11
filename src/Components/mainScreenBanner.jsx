import React from "react";
import characterImg from '../assets/pngegg.png';

const MainScreenBanner = () =>{
    return(
        <>
            <div className="w-[80%] mt-10 mb-10  md:w-[90%]  grid grid-cols-1 my-10  md:grid-cols-3   rounded-[15px]  z-10 " style={{ background: 'rgba(85,  26, 219 ,0.8)' }}>
           
            <div className=" hidden md:col-span-1  md:block">
                <img src={characterImg} className="h-80 " />
            </div>
            
            <div className=" col-span-1   md:col-span-2">
                
                <h1 className="text-white pt-6 pl-4 pb-4 text-4xl font-extrabold md:pr-20 md:pt-6 md:pb-4" > WELCOME TO GAMENANA!</h1>
                <p className="pl-4 pb-4  pr-2 font-bold text-white md:pr-20 md:text-2xl md:pb-4">Come and join our social and networking marketplace community for gamers.Expand your network and earn rewards</p>
           <div className="pl-4 pb-6 md:pb-6">
            <button className=" bg-yellow-500 text-black rounded-[120px] pr-6 pl-6 py-2 font-bold " >SEE HOW IT WORKS</button>
            </div>
                
            </div>
            
            </div>
           
        </>
    )

}

export default MainScreenBanner;