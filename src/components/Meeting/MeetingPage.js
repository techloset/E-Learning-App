import React from 'react'
import meet from "../../images/meeting.png"
import tablet from "../../images/tablet.png"
import Rectangle from "../../images/Rectangle.png"
import { Link } from 'react-router-dom'

const MeetingPage = () => {
  return (
    <div className='bg-[#9DCCFF] p-8 flex xl:flex-row flex-col  font-poppins'>
    
        {/* =====================ist section===================== */}
        <div className='xl:w-[70%] xl:mr-10 mt-8 ' >

             <div className='flex'>
              
             <button  className='text-white m-auto  bg-[#49BBBD] px-3 mr-4 w-[50px] h-[50px] '>
              <Link to="/">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />

</svg>
</Link>
</button>
   
   <div className=' bg-[white] w-full  rounded-2xl p-6 '> 
   <div className='flex justify-between '>
     <p className='text-3xl font-bold '>UX/UI Design Conference Meeting</p> 
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

   </div><br />
      <p className="text-2xl ">9 Lesson 6h 30min</p>
   </div>
  

             </div>
             <br />
        <img src={meet} className='justify-center ' alt="" />
            
        </div>
      {/* ======================course contentss========================== */}
      <div className='xl:w-[30%] bg-[#9DCCFF]  mt-8'>
      <div className=' bg-[white]  rounded-2xl p-5'>
           <p className='text-3xl font-bold'>Course Contents</p>
            <div className='flex justify-between mt-1'>
              <p className='text-lg text-[#49BBBD] '>2/5 COMPLETED</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#49BBBD]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>

            </div>
          
  {/* <!--Carousel controls - next item--> */}
  <div
    className="w-full flex list-none justify-center  mt-2 p-0"
    data-te-carousel-indicators>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="0"
      data-te-carousel-active
      className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="1"
      className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 2"></button>
    <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
       <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
       <button
      type="button"
      data-te-target="#carouselExampleCaptions"
      data-te-slide-to="2"
      className="mx-[3px] box-content h-[3px] w-[80px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-[#49BBBD] bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-label="Slide 3"></button>
  </div> 

  <div className='border-2 p-3 rounded-2xl border-[#49BBBD] mt-3'>
    <div className='flex justify-between '>
       <p className='text-xl font-medium'>Get Started</p>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6 font-medium">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    </div>
    <div className='flex justify-between   '>
      <div className='flex mt-2'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>1 Hour</p>
      </div>
   
   <div className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
<p>5 Lessons</p>
   </div>

    </div>
  </div>

{/* ================================= */}

<div className='border-2 p-5 rounded-2xl border-[#49BBBD] mt-3'>
    <div className='flex justify-between '>
       <p className=' text-[#49BBBD] font-medium text-xl'>Illstarator Structuors</p>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6 text-[#49BBBD]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
    </div>
  
    <div className='flex justify-between  mt-3 '>
      <div className='flex  '>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>1 Hour</p>
      </div>
  
   <div className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
<p>5 Lessons</p>
   </div>
    </div>
    <hr  className='mt-3' />
<div className='flex justify-between mt-3 text-[#49BBBD]'>
    <p>1. lorem ipsumm dolor </p>
    <p>65:00</p>
</div>
<hr  className='mt-3' />

<div className='flex justify-between mt-3'>
    <p>2. lorem ipsumm dolor </p>
    <div className='flex '>
    <p>65:00</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

</div>


</div> 
<hr  className='mt-3' />

<div className='flex justify-between mt-3'>
    <p>3. lorem ipsumm dolor sit amet </p>
    <div className='flex '>
    <p>65:00</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
</svg>

</div>


</div>  


</div>
  
  {/* ============================ */}
  <div className='border-2 p-3 rounded-2xl border-[#49BBBD] mt-3'>
    <div className='flex justify-between '>
       <p className='text-xl font-medium'>using Illustrator</p>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    </div>
    <div className='flex justify-between   '>
      <div className='flex '>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>1 Hour</p>
      </div>
   
   <div className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
<p>5 Lessons</p>
   </div>

    </div>
  </div>

  {/* =================== */}
  <div className='border-2 p-3 rounded-2xl border-[#49BBBD] mt-3'>
    <div className='flex justify-between '>
       <p className='font-medium text-xl'>What is Pandas?</p>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    </div>
    <div className='flex justify-between   '>
      <div className='flex '>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>1 Hour</p>
      </div>
   
   <div className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
<p>5 Lessons</p>
   </div>

    </div>
  </div>

  {/* ==================== */}
  <div className='border-2 p-3 rounded-2xl border-[#49BBBD] mt-3'>
    <div className='flex justify-between '>
       <p className='font-medium text-xl'>Work with Numpy</p>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

    </div>
    <div className='flex justify-between   '>
      <div className='flex '>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<p>1 Hour</p>
      </div>
   
   <div className='flex'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
<p>5 Lessons</p>
   </div>

    </div>
  </div>




        </div>
        <br />
        <div className='bg-white  rounded-2xl p-5 text-center  '> 
      <div className='flex justify-between'>
        <p className='text-3xl font-semibold'>Book for you</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#49BBBD]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>

      </div> <br />
      {/* <div className='grid grid-cols-2 gap-6'>
          <div className='p-4 rounded-xl shadow-2xl '>
            <img className='rounded-2xl xl:w-44 xl:h-36 '  src={tablet} alt="" />
              <p className='text-2xl font-medium'>All Benefits of PLUS</p>
               <p className='text-3xl font-semibold text-[#49BBBD]'>$24</p>
          </div>
          <div className='p-4 rounded-xl shadow-2xl '>
            <img className='rounded-2xl xl:w-44 xl:h-36 ' src={Rectangle} alt="" />
              <p className='text-2xl font-medium'>All Benefits of PLUS</p>
               <p className='text-3xl text-[#49BBBD] font-bold '>$24</p>
          </div>
      </div> */}

<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
  <div className='p-4 rounded-xl shadow-2xl'>
    <img className='object-cover w-full h-[250px] 2xl:h-[150px] rounded-2xl' src={tablet} alt="" />
    <p className='text-2xl font-medium'>All Benefits of PLUS</p>
    <p className='text-3xl font-semibold text-[#49BBBD]'>$24</p>
  </div>
  <div className='p-4 rounded-xl shadow-2xl'>
    <img className='object-cover w-full h-[250px] 2xl:h-[150px] rounded-2xl' src={Rectangle} alt="" />
    <p className='text-2xl font-medium'>All Benefits of PLUS</p>
    <p className='text-3xl text-[#49BBBD] font-bold'>$24</p>
  </div>
</div>
</div>
      </div>
      
       
    </div>
  )
}

export default MeetingPage
