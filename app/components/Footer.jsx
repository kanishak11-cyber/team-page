"use client"
import React from 'react';
import { FaHome, FaFacebook, FaUsers, FaBookBookmark } from 'react-icons/fa';
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai';
import { BsDiscord, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import {BiMessageRounded} from 'react-icons/bi'
import { ImBook } from 'react-icons/im';
import {LuBookCopy} from 'react-icons/lu'
const Footer = () => {
  return (
    <div className="bg-[url('https://files.sciastra.com/footermain.jpg')] bg-cover bg-no-repeat text-white pt-3">
      <div className='px-20'>
        <img src='/img/newsciastra.jpg' alt='logo' width={130} />
        <h1>&copy; SciAstra</h1>
        <ul className='text-xl flex flex-col gap-4 pt-4'>
          <li className='text-start items-center text-md gap-2 flex flex-row'><FaHome />Home</li>
          <li className='text-start items-center text-md gap-2 flex flex-row'><ImBook /> Our Courses</li>
          <li className='text-start items-center text-md gap-2 flex flex-row'><BiMessageRounded /> Blog</li>
          <li className='text-start items-center text-md gap-2 flex flex-row'><LuBookCopy /> Free Material</li>
          <li className='text-start items-center text-md gap-2 flex flex-row'> <FaUsers />Our Team</li>
          <li className='text-start items-center text-md gap-2 flex flex-row'><BsFillTelephoneFill />Contact Us</li>
        </ul>
        <div className='flex flex-row justify-evenly text-xl py-10'>
          <div>SciAstra Education Pvt Ltd, Bhubaneswar, Odisha</div>
          <div>support@sciastra.com</div>
          <div>
            <ul className='flex flex-row gap-3'>
                <li><AiFillYoutube /></li>
                <li><FaFacebook /></li>
                <li><AiOutlineInstagram /></li>
                <li><BsDiscord /> </li>
                <li><BsLinkedin /></li>
            </ul>
          </div>
        </div>
      </div>

      <div className='text-center text-white bg-black py-4 '>
        &copy; Copyright 2023, SciAstra. All right Reserved
      </div>
    </div>
  )
}

export default Footer;
