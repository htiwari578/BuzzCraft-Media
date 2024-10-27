import React, { useEffect } from 'react'
import about from '../assets/about.png';
import { FaChevronCircleRight } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css'


const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });

  }, [])

  return (
    <section id='about' className='w-[90%] m-auto flex lg:flex-row flex-col justify-between
  items-center gap-28 py-20'>
      <div>
        <img data-aos='zoom-in' data-aos-delay="200" src={about} alt="" classNmae='lg:w-[1000px] lg:h-[550px]' />
      </div>
      <div data-aos='zoom-in' data-aos-delay='400' className='flex flex-col
      justify-center items-start gap-4'>
        <h1 className='text-lime-500 font-ubuntu text-[19px] font-semibold'>WHO WE ARE</h1>
        <h1 className='text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px]
        leading-[60px] font-ubuntu'>The leading social media Marketting agency</h1>
        <p className="font-ubuntu text-[18px] text-slate-700">This highlights the agency’s expertise, approach, and the value it offers to its clients. If you want it tailored for a specific industry or with a different focus, just let me know!</p>

        <div className='flex flex-col justify-center items-start gap-4' >

          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />
            Through meticulous market research and trend analysis, we help brands stay ahead of the curve, engaging their target audience with meaningful and visually captivating content.
          </p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />
            Driven by a passion for innovation and a commitment to excellence, we’re not just a service provider—we’re a partner in our clients’ success.
          </p>
          <p className='text-black flex justify-center items-center gap-4 font-ubuntu'><FaChevronCircleRight className='text-limegreen size-6' />
            With a client-centric focus and a reputation for delivering exceptional ROI, we pride ourselves on being a trusted, dynamic force in the social media marketing landscape.
          </p>
        </div>
        <button className='bg-limegreen px-6 py-4 rounded-full text-[17px]
        font-semibold font-ubuntu hover:bg-black hover:text-white'>Discover More</button>

      </div>

    </section>
  )
}

export default About