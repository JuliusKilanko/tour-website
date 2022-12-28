import React from 'react'
import Image1 from '../images/interior1.avif'
import Image2 from '../images/interior2.avif'
import Image3 from '../images/interior3.avif'

function Interior() {
  return (
    <div className=' h-[500px] max-w-[1200px] mx-auto my-20 lg:mb[20%] bg-blue-100 md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-28 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia atque expedita 
        animi adipisci non. Sapiente id, magni libero perspiciatis harum error laborum eius nesciunt quos, 
        architecto ipsum accusantium! Ex, consectetur.</p>
      </div>
      <div className='grid grid-cols-2 col-span-2 gap-2 pt-16'>
      <img className='w-full h-full object-cover' src={Image1} alt="" />
      <img className='row-span-2 w-full h-full object-cover' src={Image2} alt="" />
      <img className='w-full h-full object-cover' src={Image3} alt="" />
      </div>
    </div>
  )
}

export default Interior
