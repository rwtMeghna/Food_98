import React  ,{useState ,useEffect} from 'react'
import {data} from "../../Components/Data/Data.js";
import Aos from'aos';
import 'aos/dist/aos.css';


function Food() {
    const[foods , setFoods]=useState(data);
    // console.log(data);

const FilterType=(category)=>{
    setFoods(
        data.filter((item)=>{
            return item.category===category;
        })
    )
}


const filterPrice=(price)=>{
    setFoods(
        data.filter((item)=>{
            return item.price===price;
        })
    )
}
useEffect(()=>{
    Aos.init({duration:3000})
  },[]);

  return (
    
    
    <div className='max-w-[1640px] m-auto px-4 py-12'>

        <h1 className='text-orange-600 text-6xl text-center font-bold'>
            Top <span className='text-black '>Rated </span>Menu's Items
        </h1>

        {/* filter */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* filer food */}
            <div>  
                <p className='font-bold text-black-600 m-auto text-3xl py-4 '>Filter Type</p>
                <div className='flex justify-between flex-wrap gap-4'>
                    <button onClick={()=>setFoods(data)} className='bg-orange-500 text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer '>ALL</button>
                    <button  onClick={()=>FilterType('burger')} className='bg-orange-500 text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer'>BURGER</button>
                    <button onClick={()=>FilterType('pizza')} className='bg-orange-500 text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer'>PIZZA</button>
                    <button onClick={()=>FilterType('salad')} className='bg-orange-500 text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer'>Salad</button>
                    <button onClick={()=>FilterType('chicken')} className='bg-orange-500 text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer'>Salad</button>
                </div>
            </div>
           {/* filter price */}
           <div>
         <p className='font-bold text-black-600 m-auto text-3xl py-4 max-w-[390px] w-full'>Filter Price</p>
         <div className='flex justify-between flex-wrap gap-4'>
            <button onClick={()=>filterPrice('$')} className='bg-orange-500  text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer'>$</button>
            <button onClick={()=>filterPrice('$$')} className='bg-orange-500 text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer'>$$</button>
            <button onClick={()=>filterPrice('$$$')} className='bg-orange-500 text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer'>$$$</button>
            <button onClick={()=>filterPrice('$$$$')} className='bg-orange-500 text-white rounded-xl px-5 py-1 hover:bg-black hover:text-white cursor-pointer'>$$$$</button>
         </div>
           </div>
        </div>



        {/* food */}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 '>
{
    foods.map((item, index)=>(
     <div key={index} className='border  rounded-lg shadow-lg hover:scale-105 duration-300 cursor-pointer'>
        <img className="w-full h-[280px] rounded-t-lg" src={item.image} alt="" />
        <div className='flex justify-between px-2 py-4'>
            <p className=' font-bold'>{item.name}</p>
            <p><span className='bg-orange-500 text-white rounded-lg px-2 py-1'>{item.price}</span></p>
        </div>
     </div>
    ))
} 
        </div>
    </div>
  )
}

export default Food