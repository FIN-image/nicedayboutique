import React, { useEffect } from 'react'
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

const Testimonial = () => {

    useEffect(() => {

        const splide = new Splide('.splide', {
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 2,
          breakpoints: {
            640: {
              perPage: 1,},
            },
          autoScroll: {
            speed: 1,
          },
        });

        splide.mount({ AutoScroll });
      }, []);


  return (
    <div>
        <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide px-5">
            <div className=''>
                <p>I have been involved in the fishery class for years, but I had never had the opportunity to see an aquarium in person, let alone construct one myself. However, thanks to Sourcerflect. I had the privilege of building and decorating a small-scale aquarium with my own hands. </p>
                <div className='flex flex-col text-xs'>
                <p className='text-gray-200'>Usman Abubakar</p>
                <p>Koramo secondary school</p>
                </div>
            </div>
          </li>
          <li className="splide__slide px-5">
            <div className=''>
                <p>The teacher and the students of fishery unit in the Science department of Kuramo Senior College, Victoria Island, wish to express our profound gratitude to Mr Samson and his team for the assistance rendered in the past. </p>
                <div className='flex flex-col text-xs'>
                <p className='text-gray-200'>Mr Orowale Clement</p>
                <p>Koramo secondary school</p>
                </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial