import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import img from "./logo.jpg"

export default function Header(style) {
  return (
    <>
     <div className="navbar h-24 w-screen bg-gradient-to-tl from-black to-blue-950 flex justify-between items-center p-5 ">
       <div className='h-24 w-auto flex justify-center items-center'> 
        <div className="logobox h-16 w-16 rounded-full overflow-hidden">
            <img src={img} alt="" />
        </div>
        <div className="text h-16 w-auto flex flex-col ml-3 justify-center text-xl text-white font-semibold ">
            <span>Shivam</span> 
            <span>Dombe</span>
        </div></div>
        <div className="menubox md:hidden h-16 w-16 pt-2">
           <div onClick={""} className="menu md:hidden text-white flex justify-center items-center cursor-pointer text-5xl"> <RiMenu3Line/></div>
        </div>
     </div>
    </>
  )
}
