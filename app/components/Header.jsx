"use client"
import React, { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState(false);
  const [empty, setEmpty] = useState(false);
  
  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={`flex md:px-28 px-2 flex-row justify-between  fixed w-full bg-white z-10 shadow-xl py-3 items-center ${active ? 'h-auto' : 'h-20'}`}>
      <div>
        <img
          src='/img/newsciastra.jpg'
          alt='sci astra logo'
          className='rounded-full'
          width={80}
        />
      </div>

      {/* Navigation for medium and larger screens */}
      <div className={`lg:flex gap-4 items-center ${active ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col md:flex-row gap-4 md:gap-8 md:text-xl text-md p-1'>
          <li>Home</li>
          <li>Course</li>
          <li>Selection</li>
          <li className=''>Blogs</li>
          <li>Material</li>
          <li className='bg-gradient-to-r from-[#9a9ae9] to-[#9229ba] text-transparent text-2xl bg-clip-text underline-offset-auto'>
            Team
          </li>
          <li>Contact Us</li>
        </ul>
       
      </div><div className='lg:hidden'>
        <button onClick={toggleMenu}>
          <svg
            className={`w-8 h-8 ${active ? 'text-gray-500' : 'text-gray-900'}`}
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            {active ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>
 <button className='bg-gradient-to-tr md:text-2xl text-lg px-3 py-1 rounded-xl from-[#5907fe] to-[#e2a7cd] text-white'>
          Login
        </button>
      {/* Toggle button for smaller screens */}
      
    </div>
  );
};

export default Header;
