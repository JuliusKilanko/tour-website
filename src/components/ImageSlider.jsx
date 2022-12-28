import React, {useState} from 'react'
import {BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs'
import { RxDotFilled} from 'react-icons/rx'

function ImageSlider() {
    const sliders=[
        {
            url:'https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2659&q=80',
            title: 'Lobster'
        },
        {
            url:'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title:'Sushi',
        },
        {
            url:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Pasta'
        },
        {
            url:'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Salmon'
        },
        {
            url:'https://images.unsplash.com/photo-1512132411229-c30391241dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title:'Sushi',
        },
        {
            url:'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Pasta'
        },
        {
            url:'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            title: 'Salmon'
        },
    ];

    const [currentImage, setCurrentImage]=useState(0);
    
    const preSlide =()=>{
        const isFirstImage = currentImage === 0
        const newImage = isFirstImage ? sliders.length -1 : currentImage -1;
        setCurrentImage(newImage);
    }
    const nextSlide =()=>{
        const isLastSlide = currentImage === sliders.length -1
        const newImage = isLastSlide ? 0 : currentImage + 1
        setCurrentImage(newImage);
    }
    const goToSlide = (slideIndex)=>{
        setCurrentImage(slideIndex)
    }
  return (
    <div className='max-w-[1200px] m-auto h-[540px] w-full py-16 px-4 relative group'>
      <div
      className='w-full h-full bg-center rounded-2xl bg-cover duration-1000 '
       style={{backgroundImage:`url(${sliders[currentImage].url})`}}>
      </div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer ml-[10px]'>
      <BsChevronCompactLeft onClick={preSlide}/>
      </div>
       {/* Right Arrow */}
       <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer mr-[10px]'>
      <BsChevronCompactRight onClick={nextSlide}/>
      </div>
      <div className='flex top-4 py-2 justify-center'>
        {sliders.map ((slide, slideIndex) =>(
            <div className='text-2xl cursor-pointer'
            key={slideIndex}
            onClick={()=>goToSlide (slideIndex)}>
            <RxDotFilled/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
