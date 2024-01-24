import React from 'react'
import Fishfeed from '../assets/Heroimage.jpeg'
import belt from '../assets/belt.jpg'
import shoe from '../assets/arrival7.jpeg'

const Topcategory = () => {

    const TopCategory = [
        {
            id: 1,
            src: shoe,
            title:"SHOES",
        },
        {
            id: 2,
            src: Fishfeed,
            title: "MEN",
        },
        {
            id: 3,
            src: Fishfeed,
            title: "WOMEN",
        },
        {
            id: 4,
            src: belt,
            title: "ACCESSORY",
        },
    ]

  return (
    <div className='flex flex-col gap-8 items-center'>
        <div className="items-center flex flex-col m-10 ">
            <p className='text-2xl font-bold'>TOP CATEGORY</p>
            <div className='border-b-2 w-1/2 border-black'></div>
        </div>
        <div className='flex gap-8 px-12 sm:px-16'>
        {
            TopCategory.map(({ id, src, title,}) => (
            <div key={id} className='relative '>
                <a  href=" " target="_blank" rel="noopener noreferrer" className=''>
                <div className='absolute inset-0 bg-white/50 flex justify-center'>
                <p className='self-center border-y-4  border-y-black '>{title}</p >
                </div>
                <img src={src} alt='products' className='rounded-lg w-96 h-72' />
                </a>
            </div>
            ))}
        </div>
        <div>
            <button className='border-4 border-black p-2'>see more</button>
        </div>
    </div>
  )
}

export default Topcategory