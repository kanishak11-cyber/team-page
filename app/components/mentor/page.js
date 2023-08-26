"use client"
import React, { useState } from 'react'


const mentorData = [
  {
    name: 'Shubham',
    img: 'https://avatars.githubusercontent.com/u/56189262?v=4',
    university: 'Cambridge',
  },
  {
    name: 'Alice',
    img: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    university: 'Harvard',
  },
  {
    name: 'Bob',
    img: 'https://avatars.githubusercontent.com/u/87654321?v=4',
    university: 'MIT',
  },
  {
    name: 'Shubham Kumar',
    img: 'https://avatars.githubusercontent.com/u/56189262?v=4',
    university: 'IIT Madras',
  },
  {
    name: 'Alice',
    img: 'https://avatars.githubusercontent.com/u/12345678?v=4',
    university: 'IIT kanpur',
  },
  {
    name: 'Kanishak ',
    img: 'https://avatars.githubusercontent.com/u/87654321?v=4',
    university: 'ABESIT',
  },
  

]

const page = () => {
  const [loadAllMentors, setLoadAllMentors] = useState(false); // State to determine whether to load all mentors

  // Filter mentors based on loadAllMentors state
  const mentorsToDisplay = loadAllMentors ? mentorData : mentorData.slice(0, 4);

  return (
    <div className='text-center gap-2'>
    <h1 className='text-center text-3xl font-bold'>Meet Your Mentors</h1>
    <div className={`grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 pt-8 gap-8 transition-all ease-in-out duration-500 `}>
      {mentorsToDisplay.map((mentor) => (
        <div className='flex flex-col items-center justify-center' key={mentor.name}>
          <img src={mentor.img} alt={mentor.name} className='rounded-full h-40 w-40' />
          <h1 className='text-2xl font-bold'>{mentor.name}</h1>
          <h1 className='text-xl'>{mentor.university}</h1>
        </div>
      ))}
    </div>
    {/* Button to toggle displaying all mentors */}
    <button
      onClick={() => setLoadAllMentors(!loadAllMentors)}
      className='bg-blue-400 rounded-xl my-6 hover:bg-blue-800 text-white px-3 py-1'
    >
      {loadAllMentors ? 'Show less' : 'Show All'}
    </button>
  </div>
  );
}

export default page