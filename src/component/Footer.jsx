import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black text-white'>
        <div className='flex justify-center gap-5 text-xl p-10'>
            <p className='px-10 font-bold'>Get Exclusive Offers</p>
            <div className='w-96'>
                <p className='text-gray-400'>Enter your e-mail address here</p>
                <div className='border-b-2 border-gray-300 w-full'></div>
            </div>
            <button className='bg-gray-300 text-black px-7 py-1'>sign up</button>
        </div>
        <div className='border-b-2 border-white'></div>
        <div className='flex justify-between p-20 gap-5'>
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-2xl'>Contact Us</p>
               <div className='flex gap-2'>
                <p>Phone</p>
                <a href="">+234 805 857 2474</a>
               </div>
                <div className='flex gap-2'>
                    <p>Email</p>
                    <a href="mailto:nicedayboutique1@gmail.com"
                    target='_blank'
                    rel='noopener noreferrer'>nicedayboutique1@gmail.com
                    </a>
                </div>
                <div className='flex gap-2'>
                    <p>Address</p>
                    <a href="mailto:nicedayboutique1@gmail.com"
                    target='_blank'
                    rel='noopener noreferrer'>12 king george v road, <span>onikan opp.access bank, Lagos, Nigeria.</span>
                    </a>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-2xl'>Useful Links</p>
                <a href="">About Us</a>
                <a href="">Women</a>
                <a href="">Men</a>
                <a href="">New Arrival</a>
            </div>
            <div className='flex flex-col gap-3'>
                <p className='font-bold text-2xl'>Follow us</p>
                <div className='flex gap-3 text-2xl'>
                <a href="https://www.facebook.com/nicedayboutique.see.ng"
                    target='_blank'
                    rel='noopener noreferrer' >
                    <FaFacebookSquare />
                </a>
                <a href="https://twitter.com/nicedayboutique"
                    target='_blank'
                    rel='noopener noreferrer' >
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/nicedayboutique.see.ng/"
                    target='_blank'
                    rel='noopener noreferrer' >
                    <FaInstagram />
                </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer