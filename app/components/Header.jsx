"use client"
import React, { useState } from 'react';

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };
  
  

  return (
    <div className={`flex px-28 flex-row justify-between fixed w-full bg-white z-10 shadow-xl py-3 items-center ${active ? 'h-auto' : 'h-20'}`}>
      <div>
        <img
          src='/img/newsciastra.jpg'
          alt='sci astra logo'
          className='rounded-full'
          width={80}
        />
      </div>

      <div className={`lg:flex ${active ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col md:flex-row gap-4 md:gap-8 text-xl'>
          <li>Home</li>
          <li>Course</li>
          <li>Selection</li>
          <li>Blogs</li>
          <li>Material</li>
          <li className='bg-gradient-to-r from-[#9a9ae9] to-[#9229ba] text-transparent text-2xl bg-clip-text'>
            Team
          </li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <button className='bg-gradient-to-tr text-2xl px-3 py-1 rounded-xl from-[#5907fe] to-[#e2a7cd] text-white'>
          Login
        </button>
      </div>

      {/* Toggle button for smaller screens */}
      <div className='md:hidden'>
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
    </div>
  );
};

export default Header;
