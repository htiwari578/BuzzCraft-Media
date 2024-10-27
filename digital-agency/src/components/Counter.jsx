import React, {useEffect}from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css'
import { counts } from '../export';



const Counter = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });

  }, [])
  return (
    <section className='w-[90%] m-auto lg:flex-row flex-col justify-between item-center gap-28 py-10'>
      <div data-aos="zoom-in" data-aos-delay="200" className='bg-black w-full
      lg:p-20 p-10 flex lg:flex-row flex-col justify-between items-center gap-20 rounded-3xl'>
        {
          counts.map((item, index)=>(
            <div key={index} className='flex flex-col justify-center items-center gap-6'> 
            <h1 className='text-limegreen font-ubuntu text-7xl font-semibold '>{item.value}</h1>
            <p className='text-white font-ubuntu text-xl font-semibold'>{item.title}</p>
            </div>

          ))
        }
         
      </div>
    </section>
  )
}

export default Counter