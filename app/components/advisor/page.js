"use client"
import React,{useState} from 'react'

const advisorData = [
    {
        img: "https://www.sciastra.com/teams/dr_omkar.jpg",
        pronoun: "Dr.",
        name: "Omkar",
        designation: "Principal Project Scientist",
        university: "IIT Madras",
        links: "",
    },
    {
        img: "https://www.sciastra.com/teams/akhil_tripathi_niser.jpg",
        pronoun: "",
        name: "Akhil Tripathi",
        designation: "",
        university: "",
        links: "mailto:support@sciastra.com",
    },
    {
        img: "https://www.sciastra.com/teams/vivek_dwivedi_niser.jpg",
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
        <h1 className='text-center md:text-5xl text-3xl font-bold py-3  bg-gradient-to-t from-[#234eb0] to-[#ad56df] text-transparent  bg-clip-text'>
          Mentor & Advisor</h1>
          <hr/>
        <div className='grid lg:grid-cols-3  grid-cols-1 pt-8 gap-8 justify-center'>
          {advisorToDisplay.map((advisor) => (
            <div 
              key={advisor.name} 
              className='bg-gray-100 shadow-slate-500 hover:bg-white hover:cursor-pointer border-[#404040] rounded-lg shadow-xl flex flex-col p-4 '>
              <img src={advisor.img} alt={advisor.name} width={190} className='rounded-full mx-auto mb-3 object-cover' objectfill={'contain'} />
              <h1 className='text-lg font-bold'>{advisor.pronoun}{advisor.name}</h1>
              <h3 className='text-sm'> {advisor.designation}</h3>
              <h5 className='text-sm'>{advisor.university}</h5>
              <a href={advisor.links} target='_blank' className='text-blue-500 hover:underline text-center  '>
                <button onClick={()=> {`mailto:${advisor.links})`}} type='' className='bg-gradient-to-tr text-2xl px-3 py-1 my-4 rounded-xl from-[#5907fe] to-[#e2a7cd] text-white'>
                Message Now
                </button>
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={() => setLoadAdvisor(!loadAdvisor)}
          className='bg-gradient-to-tr text-2xl px-3 py-1 my-4 rounded-xl from-[#5907fe] to-[#e2a7cd] text-white'
        >
          {loadAdvisor ? 'Show Less' : 'Show All'}
        </button>
      </div>
  
    )
}

export default page