import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Testimonial = () => {
   return (
    <>
      <div className='text-center text-3xl font-bold'>What our shoppers are saying about us</div>
      <Splide aria-label="Testimonial">
        <SplideSlide>
          <div className='text-center justify-center m-10'>
            <p className='text-xl px-20 m-10'>i received my package. . .wow! i'm so impressed, the shirt fit perfectly! i'm speechless and so excited. Thank you, i will definitely patronize you guys again.</p>
            <p className='font-bold text-lg'>Ada</p>
            <p>Ikoyi, Lagos</p>
          </div>
        </SplideSlide>
        <SplideSlide>
        <div className='text-center justify-center m-10'>
            <p className='text-xl px-20 m-10'>i received my package. . .wow! i'm so impressed, the shirt fit perfectly! i'm speechless and so excited. Thank you, i will definitely patronize you guys again.</p>
            <p className='font-bold text-lg'>Ada</p>
            <p>Ikoyi, Lagos</p>
          </div>
        </SplideSlide>
      </Splide>
    </>
  )
}

export default Testimonial