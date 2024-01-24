import React from 'react'
import hero from '../assets/Heroimage.jpeg'

const About = () => {
  return (
    <div className='m-20 flex flex-col items-center gap-5'>
        <div className='text-2xl self-start font-bold '>
            ABOUT US
        </div>
        <div className='flex gap-10 justify-between'>
            <div className='w-1/2 bg-gray-100 flex flex-col gap-5 text-lg'>
                <p>Discover a curated blend of timeless fashion at NiceDayBoutique. From premium men and women's shoes to accessories, our boutique in Lagos brings you quality and sophistication.</p>
                <p>While rooted in Lagos, we deliver fashion excellence across Nigeria. Explore our collections online or visit our physical store. Elevate your style with NiceDayBoutique - Where Fashion Meets Elegance. 🌹✨</p>
            </div>
            <img src={hero} alt="" className='h-96 w-1/2'/>
        </div>
    </div>
  )
}

export default About