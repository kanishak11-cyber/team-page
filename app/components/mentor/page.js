"use client"
import React, { useState } from 'react'


const mentorData = [
  {
    name: 'Mandar Tornekar',
    img: 'http://sciastra.com/new_admin//teams/files/Kedar_Tornekar1.jpg',
    university: 'GMC Dhule',
  },
  {
    name: 'Sehasree Mohanta',
    img: 'http://sciastra.com/new_admin//teams/files/Sehasree_Mohanta.jpg',
    university: 'IACS',
  },
  {
    name: 'Piyush Verma',
    img: 'http://sciastra.com/new_admin//teams/files/Piyush_Verma_biology.jpg',
    university: 'IISER Pune',
  },
  {
    name: 'Aditya Nayak',
    img: 'http://sciastra.com/new_admin//teams/files/Aditya Nayak_Biology.jpeg',
    university: 'IISER Mohali',
  },
  {
    name: 'Tiasha Das',
    img: 'http://sciastra.com/new_admin//teams/files/TIASHA_DAS_Biology.jpg',
    university: 'IISER Berhampur',
  },
  {
    name: 'Siddharth Bhatt',
    img: 'http://sciastra.com/new_admin//teams/files/Siddharth_Bhatt_physics.jpg',
    university: 'IISER Thiruvananthapuram',
  },
  {
    name: 'Ripunjay Dwiedi',
    img: 'http://sciastra.com/new_admin//teams/files/Ripunjay.JPG',
    university: 'CMI',
  },
  {
    name: 'Tanmay',
    img: 'http://sciastra.com/new_admin//teams/files/Screenshot(49).png',
    university: 'NISER',
  },
  {
    name: 'Sagar Rathore',
    img: 'http://sciastra.com/new_admin//teams/files/Sagar_Rathore_physics.jpg',
    university: 'IISER Berhampur',
  },
  {
    name: 'Abhay Gupta',//10
    img: 'http://sciastra.com/new_admin//teams/files/Abhay_Gupta_physics.jpg',
    university: 'IIT Bombay',
  },
  {
    name: 'Saumya Prakash',
    img: 'http://sciastra.com/new_admin//teams/files/Saumya_Sharma_mathematics.png',
    university: 'NISER',
  },
  {
    name: 'Saumya Shisodiya',
    img: 'http://sciastra.com/new_admin//teams/files/Saumya_Shisodiya_mathematics.jpg',
    university: 'HBTU Kanpur',
  },
  {
    name: 'Veena Sri',
    img: 'http://sciastra.com/new_admin//teams/files/Veena_Sri_mathematics.jpg',
    university: 'IISER TVM',
  },
  {
    name: 'Adityarup Laha',
    img: 'http://sciastra.com/new_admin//teams/files/Adityarup_Laha_mathematics.jpg',
    university: 'ISI, Kolkata',
  },
  {
    name: 'MD JAVED AKHTAR',
    img: 'http://sciastra.com/new_admin//teams/files/Md_Akhtar_mathematics.jpg',
    university: 'IISER , Kolkata',
  },
  {
    name: 'Parth Singh',//16
    img: 'http://sciastra.com/new_admin//teams/files/Parth_Singh.jpg',
    university: 'IIT Jodhpur',
  },
  {
    name: 'Mandar Tornekar',
    img: 'http://sciastra.com/new_admin//teams/files/Mandar_Tornekar_chemistry.jpg',
    university: 'GMC Dhule',
  },
  {
    name: 'Vivek Dwivedi',
    img: 'http://sciastra.com/new_admin//teams/files/Vivek.jpg',
    university: 'NISER ',
  },
  {
    name: 'Shruti',
    img: 'http://sciastra.com/new_admin//teams/files/SHRUTI_GUPTA_chemistry.jpg',
    university: 'CEBS Mumbai',
  },
  {
    name: 'Anshuman Patra',
    img: 'http://sciastra.com/new_admin//teams/files/Anshuman_Patra_chemistry.jpg',
    university: 'IISER Berhampur',
  },
  {
    name: 'Kanishak Chaurasia',
    img: 'https://avatars.githubusercontent.com/u/87654321?v=4',
    university: 'ABESIT',
  },
  

]

const page = () => {
  const [loadAllMentors, setLoadAllMentors] = useState(false); // State to determine whether to load all mentors

  // Filter mentors based on loadAllMentors state
  const mentorsToDisplay = loadAllMentors ? mentorData : mentorData.slice(0, 5);

  return (
    <div className='text-center gap-2'>
    <h1 className='text-center text-5xl font-bold  bg-gradient-to-t from-[#234eb0] to-[#ad56df] text-transparent  bg-clip-text'>Meet Your Mentors</h1>
    <div className={`grid lg:grid-cols-5  md:grid-cols-3 grid-cols-1 pt-8 gap-8 transition-all ease-in-out duration-500 `}>
      {mentorsToDisplay.map((mentor) => (
        <div className='flex flex-col items-center bg-slate-100 hover:bg-slate-200 hover:cursor-pointer border-2 border-slate-50 rounded-2xl p-2 shadow-xl shadow-[#404040]
         justify-center' key={mentor.name}>
          <img src={mentor.img} alt={mentor.name} className='rounded-full h-40 w-40 object-cover ' width={80}/>
          <h1 className='text-xl font-bold'>{mentor.name}</h1>
          <h1 className='text-md'>{mentor.university}</h1>
        </div>
      ))}
    </div>
    {/* Button to toggle displaying all mentors */}
    <button
      onClick={() => setLoadAllMentors(!loadAllMentors)}
      className='bg-gradient-to-tr text-2xl px-3 py-1 my-4 rounded-xl from-[#5907fe] to-[#e2a7cd] text-white'
    >
      {loadAllMentors ? 'Show less' : 'Show All'}
    </button>
  </div>
  );
}

export default page