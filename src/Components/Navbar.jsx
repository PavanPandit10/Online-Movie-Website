
import React, { useState } from 'react';
import vedulogo from '../Assets/vedulogo.png'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {

    setIsOpen(!isOpen);
  };

  return (
    
    <nav className=" py-2 backdrop-filter backdrop-blur-sm fixed w-full top-0 left-0 ">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-7 ">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <img className='h-[50px] md:h-[80px]' src={vedulogo} alt="" />
            <span className=" font-semibold ml-[-10px] text-[15px] md:text-[18px] text-white lg:font-medium lg:text-[20px] ">VEDU</span>
          </div>
        </div>
        <div className="">
          <div className=" flex space-x-4 md:mr-5 lg:mr-8  ">
            <a href="/" className="text-white  hover:text-blue-500 px-3  font-semibold text-[15px] md:text-[18px] lg:text-[20px]">HOME</a>
            <a href="/signin" className="text-white  hover:text-blue-500 px-3 lg:text-[20px]   font-medium">SIGN IN</a>
          </div>
        </div>
       
      </div>
    </div>
    
  </nav>


  )
}

export default Navbar