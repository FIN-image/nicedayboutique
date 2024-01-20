import Hero from "./component/Hero"
import  NavBar  from "./component/NavBar"
import  Fishfeed  from "../src/assets/Heroimage.jpeg"
import  promo  from "../src/assets/promo.png"
import Topcategory from "./component/Topcategory"
import About from "./component/About"
import Testimonial from "./component/Testimonial"
import Footer from "./component/Footer"


function App() {

    const products = [
        {
            id: 1,
            src: Fishfeed,
            title:"nicce BLACK JACKET",
            Price:"#1,000"
        },
        {
            id: 2,
            src: Fishfeed,
            title: "nicce BLACK JACKET",
            Price:"#1,000"
        },
        {
            id: 3,
            src: Fishfeed,
            title: "nicce BLACK JACKET",
            Price:"#1,000"
        },
        {
            id: 4,
            src: Fishfeed,
            title: "nicce BLACK JACKET",
            Price:"#1,000"
        },
        {
            id: 5,
            src: Fishfeed,
            title: "nicce BLACK JACKET",
            Price:"#1,000"
        },
        {
            id: 6,
            src: Fishfeed,
            title: "nicce BLACK JACKET",
            Price:"#1,000"
        },
        {
            id: 7,
            src: Fishfeed,
            title: "nicce BLACK JACKET",
            Price:"#1,000"
        },
        {
            id: 8,
            src: Fishfeed,
            title: "nicce BLACK JACKET",
            Price:"#1,000"
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
                    products.map(({ id, src, title,Price}) => (
                      <div key={id}>
                          <div>
                          <a  href=" " target="_blank" rel="noopener noreferrer" >
                          <img src={src} alt='products' className='rounded-lg' />
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
