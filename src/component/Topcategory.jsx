import React from 'react'
import Fishfeed from '../assets/Heroimage.jpeg'

const Topcategory = () => {

    const TopCategory = [
        {
            id: 1,
            src: Fishfeed,
            title:"BLACK JACKET",
        },
        {
            id: 2,
            src: Fishfeed,
            title: "BLACK JACKET",
        },
        {
            id: 3,
            src: Fishfeed,
            title: "BLACK JACKET",
        },
        {
            id: 4,
            src: Fishfeed,
            title: "BLACK JACKET",
        },
    ]

  return (
    <div className='flex flex-col gap-8 items-center'>
        <div>
            TOP CATEGORY
        </div>
        <div className='flex gap-8 px-12 sm:px-16'>
        {
            TopCategory.map(({ id, src, title,}) => (
            <div key={id} className='relative '>
                <a  href=" " target="_blank" rel="noopener noreferrer" className=''>
                <div className='absolute inset-0 bg-white/50 flex justify-center'>
                <p className='self-center border-y-4  border-y-black '>{title}</p >
                </div>
                <img src={src} alt='products' className='rounded-lg' />
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