import React, { useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Hero from "../assets/Heroimage.jpeg";


const Testimonial = () => {
   return (
    <Splide aria-label="Testimonial">
      <SplideSlide>
        <img src={Hero} alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src={Hero} alt="Image 2"/>
      </SplideSlide>
    </Splide>
  )
}

export default Testimonial