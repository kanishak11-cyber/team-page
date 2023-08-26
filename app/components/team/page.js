"use client"
import React, { useEffect, useState } from 'react'

const collegeData = [

    {
        name: 'Cambridge University',
        img: 'https://www.cam.ac.uk/sites/www.cam.ac.uk/themes/fresh/images/interface/cambridge_university2.svg',
        link: 'https://www.cam.ac.uk/',
        class: 'bg-white p-2 rounded-sm'
    },
    {
        name: 'Harvard University',
        img: 'https://www.harvard.edu/wp-content/themes/core/assets/img/theme/branding-assets/footer-logo.svg',
        link: 'https://www.harvard.edu/',
        class: 'bg-black rounded-2xl p-2 '
    },
    {
        name: 'University of California, Berkeley',
        img: 'https://www.berkeley.edu/wp-content/themes/berkeleygateway/img/logo-ucberkeley-white.png',
        link: 'https://www.berkeley.edu/',
        class: 'bg-black p-2 rounded-2xl'
    },
    {
        name: 'ETH Zurich',
        img: 'https://ethz.ch/etc/designs/ethz/img/header/ethz_logo_black.svg',
        link: 'https://ethz.ch/en.html',
        class: 'bg-white p-2 rounded-sm'
    },
    {
        name: 'Max Planck Society',
        img: 'https://logo.clearbit.com/mpg.de',
        link: 'https://www.mpg.de/en',
        class: 'bg-white p-2 rounded-sm'
    },
    {
        name: 'University of Edinburgh',
        img: 'https://logo.clearbit.com/universityofedinburgh.org.uk',
        link: 'https://www.ed.ac.uk/',
        class: 'bg-white p-2 rounded-sm'
    },
    {
        name: 'University of Oxford',
        img: 'https://logo.clearbit.com/ox.ac.uk',
        link: 'https://www.ox.ac.uk/',
        class: 'bg-white p-2 rounded-sm'
    },
    {
        name: 'University of Illinois ',
        img: 'https://illinois.edu/assets/img/branding/illinois_primary_wordmark_reversed_orange.svg',
        link: 'https://illinois.edu/',
        class: 'bg-white p-2 rounded-sm'
    },
    {
        name: "Jon's Hopkins University",
        img: 'https://www.jhu.edu/assets/themes/machado/assets/images/logos/university-logo-small-horizontal-white-no-clear-space-372b7d3d35.svg',
        link: 'https://www.jhu.edu/',
        class: 'bg-black p-2 rounded-2xl'
    },
    {
        name: 'Midigan state University',
        img: 'https://msu.edu/-/media/assets/global/images/msu_logo_white.svg',
        link: 'https://msu.edu/',
        class: 'bg-black p-2 rounded-2xl'

    },
    {
        name: 'University of Chicago',
        img: 'https://mc-1b49d921-43a2-4264-88fd-647979-cdn-endpoint.azureedge.net/-/jssmedia/project/uchicago-tenant/intranet/test-images/footerlogo.jpg',
        link: 'https://www.uchicago.edu/'
    },
    
  ]

const page = () => {
  const [college, setCollege] = useState(collegeData[6]);
  const [loadAllColleges, setLoadAllColleges] = useState(false); // State to determine whether to load all colleges

  useEffect(() => {
    const interval = setInterval(() => {
      setCollege(collegeData[Math.floor(Math.random() * collegeData.length)]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Filter colleges based on loadAllColleges state
  const collegesToDisplay = loadAllColleges ? collegeData : collegeData.slice(0, 4);

  return (
    <div className='text-center justify-center flex flex-col py-10 gap-5'>
      <h1 className='text-center text-3xl font-bold'>Team Page</h1>
      <div>
        <p className='text-xl font-semibold py-3'>Learn from scientists, research scholars from the top institutes in the world.</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 pt-8 gap-8'>
          {collegesToDisplay.map((college) => (
            <div className={`flex flex-col justify-center items-center gap-5 padding-2`} key={college.name}>
              <a href={college.link} target='_blank' className={college.class}>
                <img src={college.img} width={150} alt={college.name} />
              </a>
            </div>
          ))}
        </div>
        {/* Button to toggle displaying all colleges */}
        <button 
          onClick={() => setLoadAllColleges(!loadAllColleges)} 
          className='bg-blue-400 rounded-xl my-6 hover:bg-blue-800 text-white px-3 py-1'
        >
          {loadAllColleges ? 'show less' : 'Show All '}
        </button>
      </div>
    </div>
  );

}

export default page