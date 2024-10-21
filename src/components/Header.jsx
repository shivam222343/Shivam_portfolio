import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import img from "./logo.jpg"
import { NavLink } from 'react-router-dom';

export default function Header(style) {
  return (
    <>
      <div className="navbar h-24 w-screen bg-gradient-to-tl from-black to-blue-950 flex justify-between items-center p-[1vw] ">
        <div className='h-24 w-auto flex justify-center items-center'>
          <div className="logobox h-16 w-16 rounded-full overflow-hidden">
            <img src={img} alt="" />
          </div>
          <div className="text h-16 w-auto flex flex-col ml-3 justify-center text-xl text-white font-semibold ">
            <span>Shivam</span>
            <span>Dombe</span>
          </div>
        </div>
        <div className="text hidden xl:block md:items-center h-16 min-w-96 ml-3 md:justify-center text-xl text-white font-semibold ">
          <ul className='flex h-16 flex-row gap-[5vw] justify-center items-center'>
            <div className="Education cursor-pointer">Education</div>
            <div className="Projects cursor-pointer">Projects</div>
            <div className="Skills cursor-pointer">skills</div>
            <div className="Work-Experience cursor-pointer">Work Experience</div>
            <div className="Certificate cursor-pointer">Certificate</div>
          </ul>
        </div>
        <div className="text hidden sm:block h-16 min-w-96 ml-3 justify-center text-xl text-white font-semibold ">
          <ul className='flex h-16 flex-row gap-[3vw] justify-center items-center pr-4'>
            <div className="Github cursor-pointer">Github</div>
            <div className="YouTube cursor-pointer">Youtube</div>
            <div className="CodingHub cursor-pointer">Coding Hub</div>
          </ul>
        </div>
        <div className="menubox md:hidden h-16 w-16 pr-3 pt-2">
        <NavLink to="/Details" className="menu md:hidden text-white flex justify-center items-center cursor-pointer text-5xl"> <RiMenu3Line /></NavLink>
        </div>
      </div>
    </>
  )
}
