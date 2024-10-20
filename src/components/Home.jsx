import React from 'react'
import logo from "./Port.jpg"
import "./style/animate.css"

export default function Home() {
  return (
<div className="screen h-[90vh] w-screen bg-gradient-to-tl flex-col from-black to-blue-950 flex justify-between items-center p-5 ">
  <div className="pairbox h-[90vh] w-[90vw] ">
         <div className="title h-[50%] w-[90vw] flex flex-col justify-center items-center">
          <div className="welcome text-xl text-white">Welcome to my</div>
          <div className='reletive'>
          <div className="box1 overflow-hidden absolute text-5xl text-rose-700 font-semibold">PORTFOLIO</div>
          <div className="box2 text-5xl text-slate-600 font-semibold">PORTFOLIO</div>
          </div>
         </div>
         <div className="logobox h-[50%] w-[90vw]">
         <div className="logo rounded-full overflow-hidden">
          <img src={logo} alt="" />
         </div>
         </div>
  </div>
</div>
  
  )
}
