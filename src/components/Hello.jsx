import React from "react";
import img from "../assets/img.png"

export default function Main() {
    return(
        <nav>
           <div className="w-full h-[50vh]">
           <img className=" w-full h-full object-top object-cover rounded-xl rounded-b-none" src={img} />
           
           </div>
           <h1 className="text-2xl text-white font-semibold font-sans mt-2 pl-24">Richard Musime</h1>
           <h3 className=" text-[#F3BF99] font-sans pl-28">Frontend Developer</h3>
           <p className=" text-white font-sans pl-32">richard.website</p>
            
        </nav>
    )
    
}