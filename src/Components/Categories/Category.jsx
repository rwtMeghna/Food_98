import React from 'react'
import {categories} from "../../Components/Data/Data.js"

function Category() {
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 text-4xl font-bold py-3 text-center'>Top <span className='text-black'> Rated  </span>Menu's Item</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6'>
            {categories.map((item ,index)=>(
                <div key={index} className='bg-gray-300 rounded-lg p-4 flex justify-between items-center hover:scale-110 duration-300'>
                    <h2 className='font-bold text-center text-2xl text-orange-500 hover:scale-110 duration-300'>{item.name}</h2>
                    <img  className="w-[200px] h-[180px] " src={item.image} alt="" />
                    {/* <h2>{item.name}</h2> */}

                </div>
            ))}
        </div>
    </div>
  )
}

export default Category