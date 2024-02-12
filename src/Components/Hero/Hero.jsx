import React  ,{useEffect} from 'react'
import hero_IM from "../../Assests/hero.jpg"
import Aos from'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  return (
    <div className='max-w-[1640px]  mx-auto p-4'>
        <div className=' max-h-[500px] relative'>
            {/* overlay */}
            <div className=' text-gray-400 max-h-[500px] absolute w-full h-full bg-black/400 flex flex-col  justify-center  mx-auto'>
                <h1   data-aos="fade-up" className='px-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white'>The <span className='text-orange-500 lg:text-8xl'>Best</span></h1>
                <h1  data-aos="fade-up"className='px-4 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white'>      Foods <span className='text-orange-500 lg:text-8xl'>Delivery...</span>
                </h1>
            </div>
            <img  className="w-full max-h-[500px] object-cover rounded-xl" src={hero_IM} alt="" />
        </div>
    </div>
  )
}

export default Hero