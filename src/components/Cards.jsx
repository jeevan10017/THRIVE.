import React from "react";
import Single from "../images/single.png";
import Double from "../images/double.png";
import Triple from "../images/triple.png";
const Cards = () => {
  return (
    <div className="w-full py-[10 rem] px-4 bg-white ">
      <div className="mx-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 " >
        <div className="w-full border shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 mt-[100px]">
          <img className="w-20 mx-auto mt-[-3rem] bg-white"src={Single}alt="/"/>
          <h2 className="text-2xl font-bold text-center py-7">Single User</h2>
          <p className="text-center text-3xl font-bold ">$149</p>
          <div className="text-center font-semibold">
            <p className="py-2 border-b mx-8 mt-7">500 GB Storage</p>
            <p className="py-2 border-b mx-8 ">1 User Allowed</p>
            <p className="py-2 border-b mx-8 ">Send up to 2 GB</p>
          </div>
          <button className=" bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trail</button>
        </div>
        <div className="w-full border shadow-xl flex flex-col p-4 bg-gray-100  my-8 rounded-lg hover:scale-105 duration-300 mt-[100px]">
          <img className="w-20 mx-auto mt-[-3rem] bg bg-white bg-transparent" src={Double}alt="/"/>
          <h2 className="text-2xl font-bold text-center py-7">Patnership</h2>
          <p className="text-center text-3xl font-bold ">$199</p>
          <div className="text-center font-semibold">
            <p className="py-2 border-b mx-8 mt-7">1 TB Storage</p>
            <p className="py-2 border-b mx-8 ">3 Users Allowed</p>
            <p className="py-2 border-b mx-8 ">Send up to 10 GB</p>
          </div>
          <button className=" text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black">Start Trail</button>
        </div>
        <div className="w-full border shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 mt-[100px]">
          <img className="w-20 mx-auto mt-[-3rem] bg-white"src={Triple}alt="/"/>
          <h2 className="text-2xl font-bold text-center py-7">Group Account</h2>
          <p className="text-center text-3xl font-bold ">$299</p>
          <div className="text-center font-semibold">
            <p className="py-2 border-b mx-8 mt-7">5 TB Storage</p>
            <p className="py-2 border-b mx-8 ">10 Users Allowed</p>
            <p className="py-2 border-b mx-8 ">Send up to 20 GB</p>
          </div>
          <button className=" bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Start Trail</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
