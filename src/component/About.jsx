import React from 'react'
import hero from '../assets/Heroimage.jpeg'

const About = () => {
  return (
    <div className='m-16 flex flex-col items-center gap-5'>
        <div>
            ABOUT US
        </div>
        <div className='flex gap-10 justify-between'>
            <div className='w-1/2'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ex, quo error voluptatibus ad vero in enim nam commodi fugit soluta itaque. Debitis neque exercitationem iste nulla voluptas eveniet ab hic repellendus temporibus alias! Accusantium, placeat tempore. Enim consectetur sint dolor autem odio corrupti modi facilis dolorem natus, a nesciunt inventore quo veniam vero blanditiis quod voluptate, saepe laboriosam temporibus eum labore voluptas optio. Nulla alias molestias, obcaecati, beatae fugit cupiditate ab vero reprehenderit voluptas pariatur quis aliquid officiis et veritatis repellendus doloribus mollitia dolore, omnis necessitatibus voluptates? Accusantium voluptatum, deleniti suscipit illum numquam distinctio sapiente odit quae, quaerat impedit libero pariatur itaque, nostrum perspiciatis minima officia quod. Dolorum architecto culpa labore quam rerum illo consectetur! Velit maxime quasi quod voluptatem illo, totam adipisci, sed ratione ipsum deleniti labore odio harum optio dignissimos, amet ab tempore! Quidem aut adipisci perspiciatis sint a quo ullam quam, laudantium nihil qui temporibus illo culpa harum in modi ducimus nostrum fugit maxime ipsam, sed, quod repellat. Nihil ut odio qui dolorum iste, excepturi labore voluptas quod laborum animi magni sed nostrum quam commodi eaque possimus? Amet alias provident consectetur! Excepturi veniam nobis pariatur! Illo quis aut voluptas blanditiis laudantium veniam deserunt. Nihil, laboriosam cum!</p>
            </div>
            <img src={hero} alt="" className='h-96 w-1/2'/>
        </div>
    </div>
  )
}

export default About