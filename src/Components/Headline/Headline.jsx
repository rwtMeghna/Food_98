import React ,{useEffect} from 'react'
import Burger from "../../Assests/Burger.jpg";
import Noodles from "../../Assests/Noodle.jpg";
import Ice from "../../Assests/ICE.jpg";

import Aos from'aos';
import 'aos/dist/aos.css';


// useEffect(()=>{
//     Aos.init({duration:3000})
//   },[]);


function Headline() {
    useEffect(()=>{
        Aos.init({duration:3000})
      },[]);
    
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='font-bold text-2xl px-2 pt-4'>Through8/26</p>
                <button className='border-white text-black bg-white font-bold rounded-full p-2 absolute bottom-4 left-2 hover:bg-black hover:text-white hover:scale-110 duration-300 '>Order's Now</button>
                
            </div>
            <img data-aos="fade-up" className="max-h-[160px] md:max-h-[200px] lg:max-h-[450px] w-full object-cover rounded-xl hover:scale-110 duration-300cursor-pointer" src={Burger} alt="/" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='font-bold text-2xl px-2 pt-4'>Through8/26</p>
                <button className='border-white text-black bg-white font-bold rounded-full p-2 absolute bottom-4 left-2 hover:bg-black hover:text-white hover:scale-110 duration-300'>Order's Now</button>
                
            </div>
            <img data-aos="fade-up" className=" cursor-pointer max-h-[160px] md:max-h-[200px] lg:max-h-[450px] w-full object-cover rounded-xl hover:scale-110 duration-300" src={Noodles} alt="/" />
        </div>

        <div className='rounded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='font-bold text-2xl px-2 pt-4'>Through8/26</p>
                <button className='border-white text-black bg-white font-bold rounded-full p-2 absolute bottom-4 left-2 hover:bg-black hover:text-white hover:scale-110 duration-300 '>Order's Now</button>
                
            </div>
            <img data-aos="fade-up"className="max-h-[160px] md:max-h-[200px] lg:max-h-[450px] w-full object-cover rounded-xl hover:scale-110 duration-300 cursor-pointer" src={Ice} alt="/" />
        </div>



    </div>
  )
}

export default Headline