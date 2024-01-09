import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-beteen items-center h-24 max-w-[1500px] px-4 text-white">
      <h1 className="w-full text-4xl font-bold text-[#00df9a]">THRIVE</h1>
      <ul className="hidden sm:flex text-xl ">
        <li className="p-5 mt-1">Home</li>
        <li className="p-5 mt-1">Company</li>
        <li className="p-5 mt-1">Resources</li>
        <li className="p-5 mt-1">About</li>
        <li className="p-5 mt-1">Contact</li>
      </ul>
      <div onClick={handleNav} className=' sm:hidden'>
        {nav ? <AiOutlineClose size={25}  />: <AiOutlineMenu size={25} />}
        {/* if nav is not true we want to show that AiOutlineClose else show AiOutlineMenu     */}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-300": 'fixed left-[-100%]'}>
        <h1 className="w-full text-2xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
