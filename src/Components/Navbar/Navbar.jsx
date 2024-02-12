import React ,{useState} from 'react'
import {AiOutlineMenu ,AiOutlineSearch , AiOutlineClose ,AiFillTag} from "react-icons/ai";
import {BsFillCartFill , BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb";
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'


function Navbar() {

  const [nav  , setNav]=useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        {/* left */}
        <div className='flex items-center gap-3'>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={30}/>
            </div>
           <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>Best <span className='font-bold'>Eats</span></h1>
           <div className='hidden lg:flex items-center bg-gray-200 p-1 border-black rounded-full text-[14px] font-bold'>
            <p className='bg-black text-white rounded-full p-2'>Delivery</p>
            <p className='p-2'>Pickup</p>
           </div>
        </div>



        {/* serach */}
        <div className='flex items-center px-3 bg-gray-300 rounded-full w-[220px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25}/>
        <input  className="bg-transparent p-2 focus:outline-none w-full h-22" type="text" placeholder='Search Food' />
        </div>

        <div>
          <button className= 'bg-black text-white font-bold flex items-center gap-3 rounded-xl px-5 py-2'>
            <BsFillCartFill className='size{50}'/>Cart
          </button> 
        </div>



        {/* mobile menu */}
{nav ?    <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
        </div>:''}
       

        <div className={nav ? 'fixed top-0 left-0 bg-white w-[300px] h-screen z-10 duration-300' :"fixed top-0 left-[-100%]  bg-white w-[300px] h-screen z-10 duration-300"}>
            <AiOutlineClose onClick={()=>setNav(!nav)} className='size={30} absolute top-6 right-4 cursor-pointer font-extrabold'/>

            <h2 className='text-2xl p-4 bg-black-800'>
              Best <span className='font-bold'>Food</span>
            </h2>
            <nav>
              <ul className='flex flex-col p-5 text-gray-800  cursor-pointer' >
                <li className='text-xl py-4 flex hover:text-yellow-400'><TbTruckDelivery size={30} className='mr-4 hover:text-red-400'/> Orders</li>
                <li className='text-xl py-4 flex hover:text-yellow-400'><MdFavorite size={30} className='mr-4 hover:text-red-400'/>Favrites</li>
                <li className='text-xl py-4 flex hover:text-yellow-400'><FaWallet size={30} className='mr-4 hover:text-red-400'/>Wallet</li>
                <li className='text-xl py-4 flex hover:text-yellow-400'><MdHelp size={30} className='mr-4 hover:text-red-400'/>Help</li>
                <li  className='text-xl py-4 flex hover:text-yellow-400'><AiFillTag size={30} className='mr-4 hover:text-red-400'/>Promotion</li>
                <li className='text-xl py-4 flex hover:text-yellow-400'><BsFillSaveFill size={30} className='mr-4 hover:text-red-400'/> Best one</li>
                <li className='text-xl py-4 flex hover:text-yellow-400'><FaUserFriends size={30} className='mr-4 hover:text-red-400'/>Invite Friends</li>
              </ul>
            </nav>
            </div>
    </div>
  )
}

export default Navbar;