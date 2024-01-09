import React from "react";
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[850px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold sm:py-3">Grow with data.</h1>
        <div className="flex justify-center items-center">
            <p className="md:text-4xl sm:text-2xl text-xl  sm:py-2 font-semibold">Fast , flexible financing for</p>
            <Typed
            className="md:text-4xl sm:text-2xl text-xl  sm:py-2 pl-2" 
            strings ={['BTB','BTC','SASS']} 
            typeSpeed={150} 
            backSpeed={180} 
            loop/>
        </div>
        <p className="md:text-2xl sm:text-xl text-xl font-semibold  sm:py-1.5 text-gray-500">Monitor your Data analytics to increase revenue for BTB ,BTC ,& SASS Platforms. </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
