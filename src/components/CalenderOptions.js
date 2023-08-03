import React from 'react'
import { Link } from 'react-router-dom'

export const GreenNav=()=>{
    return(
        <div className='  bg-[#49BBBD] h-[163px] px-14  py-5 text-white'>
        <h1 className='lg:text-4xl text-2xl'>Learn about Adobe XD & Prototyping</h1>
        <br />
        <div className='flex justify-between flex-col md:flex-row '>
            <p className=' lg:text-2xl '>Introduction about XD</p>

<div className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
            <p> 1 hour</p> 
</div>
           
        </div>
    </div>

    )
}


 export const Green=()=>{
    return (
        <div className='w-full rounded-2xl p-4 bg-[#49BBBD] mt-4 justify-between flex '> 
    <div className='flex '>
       <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
    <p className='text-white mx-4'>Lesson 01: Introduction about XD</p> 
    </div>
    <p className='text-black'>30 mins</p>
</div>

    )
}


export const Sky=()=>{
    return( 
        <div className='w-full rounded-2xl p-4 bg-[#9DCCFF4D] mt-4 justify-between flex'>
    
        <div className='flex '>
           <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
    
        <p className=' mx-4'>Lesson 01: Introduction about XD</p> 
        </div>
    
        <p className='text-black'>30 mins</p>
    
    </div>
    )
}


export const Skin=()=>{
    return( 
        <div className='w-full rounded-2xl p-4 bg-[#F48C064D]  mt-4 justify-between flex'>
    
        <div className='flex '>
           <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
    
        <p className=' mx-4'>Lesson 01: Introduction about XD</p> 
        </div>
    
        <p className='text-black'>30 mins</p>
    
    </div>
    )
}

export const Pink=()=>{
    return( 
        <div className='w-full rounded-2xl p-4 bg-[#EE645B4D] mt-4 justify-between flex'>
    
    <div className='flex '>
       <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>

    <p className=' mx-4'>Lesson 01: Introduction about XD</p> 
    </div>

    <p className='text-black'>30 mins</p>

</div>
    )
}

const CalenderOptions = () => {
  return (
   
      <div className='bg-white p-6'>
        <Link to="/">
<button className='text-white bg-[#49BBBD] px-3  w-[50px] h-[50px] '>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

</button>
</Link>
<br /><br />
<h1 className='text-3xl font-semibold'>Change Simplification </h1>
<Green/>

<Skin/>

<Sky/>

<Pink/>
<br />
<br />
<h1  className='text-3xl font-semibold'>PRACTICE QUIZ</h1>
<Sky/>
<Skin/>
<Sky/>
<Pink/>
<Sky/>
<Skin/>
<Sky/>
<Pink/>
<Sky/>
<Skin/>
<Sky/>
<Pink/>
<br />
</div>

  
  )
}

export default CalenderOptions
