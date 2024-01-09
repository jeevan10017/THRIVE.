import React from 'react'
import Image from '../images/laptop.jpg'
const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
<div className='max-w-[1240px] mx-auto grid sm:grid-cols-2'>
<img className='w-[500px] mx-auto'src={Image} alt="/" />
<div className='flex flex-col justify-center'>
  <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
  <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
  <p className='text-[gray]'>Data analytics is the transformative process of collecting, processing, and interpreting data to derive actionable insights. By leveraging statistical analysis and machine learning, it empowers informed decision-making and enhances business efficiency.</p>
  <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto sm:mx-0 py-3 bg-black">Get Started</button>
</div>
</div>
    </div>
  )
}

export default Analytics