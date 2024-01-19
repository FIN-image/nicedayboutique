import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
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