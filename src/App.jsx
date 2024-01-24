import Hero from "./component/Hero"
import  NavBar  from "./component/NavBar"
import  arrival  from "../src/assets/Heroimage.jpeg"
import  arrival1  from "../src/assets/arrival1.jpeg"
import  arrival2  from "../src/assets/arrival2.jpeg"
import  arrival3  from "../src/assets/arrival3.jpeg"
import  arrival4  from "../src/assets/arrival4.jpeg"
import  arrival5  from "../src/assets/arrival5.jpeg"
import  arrival6  from "../src/assets/arrival6.jpeg"
import  arrival7  from "../src/assets/arrival7.jpeg"
import  promo  from "../src/assets/promo.jpg"
import Topcategory from "./component/Topcategory"
import About from "./component/About"
import Testimonial from "./component/Testimonial"
import Footer from "./component/Footer"


function App() {

    const products = [
        {
            id: 1,
            src: arrival,
            title:"Nicedayboutique",
            Price:"",
        },
        {
            id: 2,
            src: arrival1,
            title: "Nicedayboutique",
            Price:"",
        },
        {
            id: 3,
            src: arrival2,
            title: "Nicedayboutique",
            Price:"",
        },
        {
            id: 4,
            src: arrival3,
            title: "Nicedayboutique",
            Price:"",
        },
        {
            id: 5,
            src: arrival4,
            title: "Nicedayboutique",
            Price:"",
        },
        {
            id: 6,
            src: arrival5,
            title: "Nicedayboutique",
            Price:"",
        },
        {
            id: 7,
            src: arrival6,
            title: "Nicedayboutique",
            Price:"",
        },
        {
            id: 8,
            src: arrival7,
            title: "Nicedayboutique",
            Price:"",
        },
    ]


  return (
    <div>
      < NavBar />
      < Hero />
      <div className="m-16">
        <div className="items-center flex flex-col m-10 ">
          <p className="text-black font-medium text-2xl ">LATEST ARRIVAL</p>
          <p className="border-b-4 w-20 border-black "></p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-16'>
                  {
                    products.map(({ id, src, title, Price, href}) => (
                      <div key={id}>
                          <div>
                          <a  href="https://api.whatsapp.com/send?phone=%2B2348058572474&data=ARAuCcfC25bhvf4xrBI0DZGVS8FkXIwVzYMrMQhpKNExO6P9MtHTEzlwSekIvU4oARDrpfOSvhwbLxgSlZXkLtctzgaAUK6JsuRXHxh7vnJhzoSO_ofRDa1oeyW0D-ss79CkwW7PDrKwBVScVvJIX-G6aQ&source=FB_Page&app=facebook&entry_point=page_cta"
                          target="_blank"
                          rel="noopener noreferrer" >
                          <img src={src} alt='products' className='rounded-lg w-96 h-52' />
                          <p className='text-center '>{title}</p >
                          <p className='text-center '>{Price}</p >
                          </a>
                          </div>
                      </div>
                      ))}
        </div>
        <div className=" w-full p-16 mt-20">
          <img className="h-72 w-full rounded-lg" src={promo} alt="" />
        </div>
      </div>
      < Topcategory />
      < About />
      < Testimonial />
      < Footer />
    </div>
  )
}

export default App
