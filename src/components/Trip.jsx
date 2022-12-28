import React from 'react'
import Image1 from '../images/grid.avif'
import Image2 from '../images/grid-image.avif'
import Image3 from '../images/grid-image2.avif'
import Image4 from '../images/grid-image3.avif'
import Image5 from '../images/grid-image4.avif'

const Trip = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>

    {/* Left Side Section */}
      <div className='grid grid-cols-2 grid-rows-6 h-[100vh]'>
      <img className='row-span-3 w-full h-full object-cover p-2' src={Image1} alt="/" />
      <img className='row-span-2 w-full h-full object-cover p-2' src={Image2} alt="/" />
      <img className='row-span-2 w-full h-full object-cover p-2' src={Image3} alt="/" />
      <img className='row-span-3 w-full h-full object-cover p-2' src={Image4} alt="/" />
      <img className='row-span-2 w-full h-full object-cover p-2' src={Image5} alt="/" />
      </div>

      {/* Right Side Section Design */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-4xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
        <p className='py-6 text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quos.</p>
        <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          voluptates nostrum dolorum reprehenderit error! Doloribus est illo
          eius saepe? Molestias sapiente perspiciatis doloribus consectetur
          nihil facilis aliquid eaque vel quisquam.</p>

          <div className='flex gap-4'>
            <button className='border-black text-black hover:shadow-2xl'>Learn More</button>
            <button className='border-black text-white bg-black hover:shadow-2xl'>Book Now</button>
          </div>
      </div>
    </div>
  )
}

export default Trip
