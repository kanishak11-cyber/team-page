"use client"
import React,{useState} from 'react'

const advisorData = [
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "Dr.",
        name: "Omkar",
        designation: "Principal Project Scientist",
        university: "IIT Madras",
        links: "",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "",
        name: "Akhil Tripathi",
        designation: "",
        university: "",
        links: "",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "",
        name: "Vivek Dwivedi",
        designation: "",
        university: "",
        links: "",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "Dr.",
        name: "Omkar",
        designation: "Principal Project Scientist",
        university: "IIT Madras",
        links: "",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "",
        name: "Akhil Tripathi",
        designation: "",
        university: "",
        links: "",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "",
        name: "Vivek Dwivedi",
        designation: "",
        university: "",
        links: "",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "Dr.",
        name: "Omkar",
        designation: "Principal Project Scientist",
        university: "IIT Madras",
        links: "",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "",
        name: "Akhil Tripathi",
        designation: "",
        university: "",
        links: "",
    },
    {
        img: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693036513~exp=1693037113~hmac=301298cf2ecc82bc2e4290a515238ddcc256e9f9b7a1c2a0f18b350ae7283c99",
        pronoun: "",
        name: "Vivek Dwivedi",
        designation: "",
        university: "",
        links: "",
    },
    
    
]

const page = () => {
    const [loadAdvisor, setLoadAdvisor] = useState(false);
    const advisorToDisplay = loadAdvisor ? advisorData : advisorData.slice(0, 3)
    return (
        <div className='text-center align-center '>
        <h1 className='text-center text-3xl font-bold py-3'>Mentor & Advisor</h1>
        <div className='grid lg:grid-cols-3  grid-cols-1 pt-8 gap-8 justify-center'>
          {advisorToDisplay.map((advisor) => (
            <div key={advisor.name} className='bg-white rounded-lg shadow-md flex flex-col p-4 '>
              <img src={advisor.img} alt={advisor.name} width={190} className='rounded-full mx-auto mb-3' />
              <h1 className='text-lg font-bold'>{advisor.pronoun}{advisor.name}</h1>
              <h3 className='text-sm'> {advisor.designation}</h3>
              <h5 className='text-sm'>{advisor.university}</h5>
              <a href={advisor.links} className='text-blue-500 hover:underline text-center '>
                Message Now
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={() => setLoadAdvisor(!loadAdvisor)}
          className='bg-blue-400 rounded-xl my-6 hover:bg-blue-800 text-white px-3 py-1'
        >
          {loadAdvisor ? 'Show Less' : 'Show All'}
        </button>
      </div>
  
    )
}

export default page