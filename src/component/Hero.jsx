import React from 'react'
import  Heroimage  from "../assets/Heroimage.jpeg";

const Hero = () => {
  return (
    <div>
        <img className="h-screen w-full"src={Heroimage} alt="" />
    </div>
  )
}

export default Hero