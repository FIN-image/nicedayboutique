import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className='text-sm '>
      <div className='flex bg-black pr-32'>
        <div className=' w-full h-10 text-white flex gap-1 justify-end items-center'>
            <h2>Need help?</h2>
            <a href="https://api.whatsapp.com/send?phone=%2B2348058572474&data=ARAuCcfC25bhvf4xrBI0DZGVS8FkXIwVzYMrMQhpKNExO6P9MtHTEzlwSekIvU4oARDrpfOSvhwbLxgSlZXkLtctzgaAUK6JsuRXHxh7vnJhzoSO_ofRDa1oeyW0D-ss79CkwW7PDrKwBVScVvJIX-G6aQ&source=FB_Page&app=facebook&entry_point=page_cta" 
              target='_blank'
              rel='noopener noreferrer'
              className='border-b'>contact us on whatsapp</a>
            <h2>or</h2>
            <a href="" className='border-b' >contact us</a>
        </div>
        <div className='bg-blue-600 text-white  gap-1 mx-5 flex items-center p-2'>
        <BsCart2 /> 0
        </div>
      </div>
      <div className='bg-white w-full h-10 flex items-center justify-between'>
          <h1 className='border-r-2 mx-5'>NICEDAYBOUTIQUE</h1>
          <div className='mx-10 flex gap-4 items-center pr-10 '>
            <a href="">WOMEN</a>
            <a href="">MEN</a>
            <a href="">NEW ARRIVAL</a>
            <a href="">DEALS</a>
            <a href="">CONTACT</a>
            <IoSearch />
          </div>
      </div>
    </div>
  );
};

export default NavBar;