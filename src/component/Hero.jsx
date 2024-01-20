import React from 'react'
import  Heroimage  from "../assets/Heroimage.jpeg";

const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/Heroimage.jpeg')] h-screen object-center text-white p-16 gap-10 flex flex-col justify-end" >
        <p className='font-bold text-3xl'>NEW STREETWEAR OUTFITS</p>
        <button className='border-2 self-center py-2 w-1/6'> SHOW MORE </button>
    </div>
  )
}

export default Hero