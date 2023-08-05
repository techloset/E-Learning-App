import React from 'react'
import line from '../../images/line.png'
import testi from '../../images/testi.png'
import test_text from '../../images/test_text.png'

const Testimonial = () => {
  return (
    <div >
        <br /><br />
        <div className='flex flex-col lg:flex-row mx-5 lg:mx-[0px]  2xl:mx-[50px] '>

        
        {/* what they say */}
        <div className='mx-5 lg:mx-16  '>
            <div className='flex '>
                <img src={line} alt="" className='py-4' />
                <p className='text-xl text-[#525596]' >TESTIMONIAL</p>
            </div>            
            <br />
            <h1 className='text-6xl font-bold font-sans text-[#525596]'>What They Say?</h1><br />
            <p className='text-[#696984] text-[26px]'>TOTC has got more than 100k positive ratings from our users around the world. </p><br />
            <p className='text-[#696984] text-[26px]'>Some of the students and teachers were greatly helped by the Skilline.</p><br />
            <p className='text-[#696984] text-[26px]'>Are you too? Please give your assessment</p><br />
            <button className='text-[#49BBBD] pl-3 sm:pl-9 md:text-[22px] lg:text-[20px] xl:text-[22px]  font-semibold xl:text-base 2xl:text-[22px] border-[#49BBBD]  rounded-full border '> Write your assessment <button className='rounded-full ml-6 border-[#49BBBD] px-4 xl:px-4 2xl:py-4 border'>&#8594;</button> </button>
        </div>
        {/* testimonial review */}
        <div className='lg:mx-4  xl:mx-16  lg:w-1/2'>
            {/* arrow sign */}
            <div className='z-20 mt-[22%]  lg:mr-0  xl:mr-40 2xl:mr-72  md:mr-[210px]  md:right-0  absolute'>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="absolute text-[#49BBBD] bg-white rounded-full shadow-xl w-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>     
            </div>

<br /><br />
{/* girl with books in hand */}
            <img src={testi} className='lg:absolute' alt="" />
            
{/* testimonial */}
<div class="p-6  z-10 transform -mt-24 lg:mt-[500px] ml-[80px]  lg:w-[600px]  bg-white border-[#F67766] border-l-[14px]  border-r-0 border-t-0 border-b-0 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

<div className='flex '>
    <img src={test_text} className='h-fullmx-6 mr-6 ' alt="" />
    <p className='text-[22px] text-[#5F5F7E] '>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>

</div>
<br />
<div>
<div className='flex mx-6 '>
    <p>Gloria Rose</p> <br /> 
    <div className='flex-col lg:ml-64 '>
        <div class="flex">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        </div> 
    <p>12 reviews at Yelp</p>
    </div>
</div>
</div>

   
</div>

        </div>
        </div>
        <br /><br />
    </div>
  )
}

export default Testimonial
