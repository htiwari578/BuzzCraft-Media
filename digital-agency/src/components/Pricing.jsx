import React, { useEffect } from 'react'
import AOS from 'aos';
import { FaChevronCircleRight } from 'react-icons/fa'

import 'aos/dist/aos.css'
import { pricingplan } from '../export';

const Pricing = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });

  }, [])
  return (
    <section id='plans' className='w-[90%] m-auto flex flex-col justify-between items-center gap-2 py-20'>

      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-lime-500 font-ubuntu
      text-[19px] font-semibold'>PRICING PLAN</h1>
      <h1 data-aos="zoom-in" data-aos-delay="400" className='text-black font-semibold
      lg:text-[60px] text-[50px] lg-leading-[70px] leading-[50px]  text-center font-ubuntu'>
        Choose your perfect plan
      </h1>
      <div data-aos="zoom-in" data-aos-delay="600" className='w-full flex lg:flex-row flex-col justify-between itens-center
       gap-10 mt-10'>

        {
          pricingplan.map((item, index) => (
            <div key={index} className='bg-black p-10 rounded-3xl flex flex-col justify-center items-start
              gap-3 lg:w-[35%] w-full'>
              <h1 className='text-white text-2xl font-semibold font-ubuntu'>{item.type}</h1>
              <p className='text-white text-lg font-ubuntu'>{item.about}</p>
              <h1 className='text-limegreen font-bold text-[55px] font-ubuntu'>{item.price}
                <span className='text-limegreen text-lg pl-2 font-ubuntu'>Monthly</span>
              </h1>
              <button className='w-full bg-limegreen font-semibold rounded-xl px-6 py-3 text-lg
              hover:bg-white hover:text-black font-ubuntu'>{item.label}</button>
              <p className='text-white text-lg font-semibold font-ubuntu '>{item.specs}</p>
              <div className="flex flex-col justify-center items-start gap-4">
                <p className='text-white flex justify-center items-center gap-4 font-ubuntu'>
                  <FaChevronCircleRight className='text-limegreen size-6' /> Power admin pannel

                </p>
                <p className='text-white flex justify-center items-center gap-4 font-ubuntu'>
                  <FaChevronCircleRight className='text-limegreen size-6' /> Native Android App

                </p>
                <p className='text-white flex justify-center items-center gap-4 font-ubuntu'>
                  <FaChevronCircleRight className='text-limegreen size-6' /> 24/7 Support Team

                </p>

              </div>

            </div>
          ))
        }
      </div>


    </section>
  )
}

export default Pricing