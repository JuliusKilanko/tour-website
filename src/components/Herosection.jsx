import React from 'react'
import Banner from '../images/banner.jpeg'

function Herosection() {
  return (
    <div className='w-full h-sceen'>
  
        <img src={Banner} alt="/" className='w-full h-screen object-cover top-0 left-0 right-0'/>
        <div className='w-full h-full group-[1]:'>
        <div className='top-0 right-0 left-0 w-full h-screen absolute bg-black/70'/>
        </div>
        <div className='top-0 w-full h-full left-0 right-0 absolute flex justify-center items-center flex-col text-white'>
          <div className='md: left[10%] max-w-[1100px] m-auto absolute p-4'>
          <p>All Inclusive</p>
          <h1 className='font-bold text-4xl py-4 md:text-6xl drop-shadow-2xl shadow-red'>Private Beaches & Getaways</h1>
          <p className='max-w-[600px] drop-shadow-2xl py-4 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi ducimus nisi sint voluptates esse
          nihil, numquam deleniti aperiam ipsa atque voluptatum iste tempore?</p>
          <button className='bg-white text-black'>Shedule Now</button>
          </div>
        </div>
    </div>
  )
}

export default Herosection
