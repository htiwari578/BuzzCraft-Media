import React, { useEffect } from 'react'

import herobanner from '../assets/herobanner.png';
import clients from '../assets/clients.png'
import AOS from 'aos';
import 'aos/dist/aos.css'


const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });

  }, [])
  return (
    <section id='hero' className='w-[90%] m-auto flex lg:flex-row flex-col
     justify-between items-center gap-28 py-20'>

      <div className='flex flex-col justify-center items-start gap-8'>
        <h1 data-aos="zoom-in" data-aos-delay="" className='text-black font-semibold 
      lg:text-[90px] text-[65px] lg-leading-[100px] leading-[80px] font-ubuntu'>Social Media Marketting</h1>
        <p data-asos="zoom-in" data-aos-delay="400" className='font-ubuntu text-[20px] text-slate-700'>We design exceptional brands, products, web apps
          <br></br> websites for startups and enterprises.</p>
        <button data-aos="zoom-in" data-aos-delay="600"
          className='bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white'>Get Started Now</button>

        <div data-aos="zoom-in" data-aos-delay="600" className='flex lg:flex-row flex-col justify-center lg:items-center items-start gap-10'>

          <img src={clients} alt="clients" />
          <p className='font-ubuntu text-[19px] font-bold text-black'>Trusted by 5000+ Worldwide Brand & Customer</p>

        </div>

      </div>
      <div>
        <img data-aos="zoom-in" data-aos-delay="1000" src={herobanner}
          className='lg:w-[750px] lg:h-[550px]' alt="Hero Banner" />
      </div>

    </section>
  )
}

export default Hero