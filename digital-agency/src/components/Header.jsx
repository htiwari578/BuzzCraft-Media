import React, { useState } from 'react'
import { FaXmark, FaBars } from "react-icons/fa6"
import { Link } from 'react-scroll'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const navItems = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Plans', path: 'plans'
    },
    {
      link: 'Testimonials', path: 'testimonials'
    },
    {
      link: 'Contact', path: 'contact'
    },
  ]


  return (
    <nav className='w-full flex bg-black justify-between items-center gap-1 lg:px-16 px-6 py-4
   sticky top-0 z-50'>
      <h1 className='text-white md:tex-4xl font-bold font-ubuntut'>Buzz
        <span className='text-limegreen italic'>Craft Media</span>
      </h1>
      <ul className='lg:flex justify-center items-center gap-8 hidden'>
        {navItems.map(({ link, path }) => (
          <Link key={path}
            className='text-white uppercase font-semibold cursor-pointer p-3
        rounded-lg hover:bg-limegreen hover:text-black font-ubuntu text-[15px]'
            to={path}

            spy={true}
            offset={-100}
            smooth={true}>
            {link}</Link>
        ))}
      </ul>

      <button className='bg-limegreen font-ubuntu hover:bg-white text-black
      px-8 py-3 rounded-full font-bold transform hover:scale-105
      transition-transform duration-300 cursor-pointer md:flex hidden'>HIRE US</button>

      {/* mobile menu starts */}



      <div className='flex justify-center items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {isMenuOpen ? <FaXmark className='text-white text-3xl cursor-pointer' /> :
            <FaBars className='text-white text-3xl cursor-pointer' />}
        </div>

      </div>
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-black p-4
      absolute top-[72px] left-0`} onClick={closeMenu}>
        <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {navItems.map(({link, path})=>(
            <Link key={path}
            classID='text-white uppercase font-semibold cursor-pointer p-3 rounded-lg
            hover:bg-limegreen hover:text-black w-full text-center'
            to={path}
            offset={-100}
             smooth={true}>
              {link}</Link>
          ))}

        </ul>

      </div>

    </nav>


  )
}

export default Header;