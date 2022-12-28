import React, {useState} from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {RiMenu4Fill} from 'react-icons/ri'

function NavBar() {
    const [nav, setNav]=useState(false)

    const handleNav =()=>{
        setNav(!nav);
        if(!nav){
            document.body.style.overflow='hidden'
        }else{
            document.body.style.overflow='scroll'
        }
    }
  return (
    <div className='flex absolute justify-between  w-full p-4'>
      <h1 className='text-white font-bold text-2xl z-20'>iWealth</h1>
      <RiMenu4Fill size='25px' className='z-20 cursor-pointer text-white'
        onClick={handleNav}
      />

      <div className={nav 
      ? 'ease-in duration-500 fixed w-full h-screen bg-black/80 z-10 text-white left-0 top-0' 
      : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
      <ul className=' flex flex-col fixed w-full h-full items-center justify-center'>
        <li className='font-bold text-3xl p-8'>Home</li>
        <li className='font-bold text-3xl p-8'>Destination</li>
        <li className='font-bold text-3xl p-8'>Reservation</li>
        <li className='font-bold text-3xl p-8'>Amenities</li>
        <li className='font-bold text-3xl p-8'>Rooms</li>
      </ul>
      </div>
    </div>
  )
}

export default NavBar
