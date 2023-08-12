import React from 'react'
import "./CourseDetail.css"
import icon from "../../images/profileBlogicon.png"
import Card from '../Card';
import tomjerry from "../../images/tomjerry.mp4"
import blogdetail from "../../images/blogdetail.png"
import { useRef , useState } from 'react'
import play from "../../images/play.png"
import card from "../../images/card.png"
import everything from "../../images/everything.png"

const CourseDetail = () => {
    const [showButton, setShowButton] = useState(true);
    const videoRef = useRef(null);
  
   
      const [showMore, setShowMore] = useState(false);
    
      const handleToggleText = () => {
        setShowMore(!showMore);
      };
  
  
    const handleButtonClick = () => {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
        setShowButton(false);
      } else {
        video.pause();
        setShowButton(true);
      }
    };
  return (
    <div style={{fontFamily:"poppins"}}>
        {/* -----------------baclground image is here---------------------------- */}
       <div className="bg-cover h-[652px] bgimg bg-center flex items-center justify-center" >
       </div>
       <br /><br /><br />
       {/* =====================main section============================= */}
       <div className='md:mx-28 mx-10 flex xl:flex-row flex-col justify-between'>

        {/* section with buttons and stars */}
            <div className='xl:w-[55%] '>

                <div className='flex md:flex-row flex-col justify-between'>
                    <button className=' bg-[#0000001A] px-5 lg:px-8 py-3  mt-3 rounded-xl'>Overview</button>
                    <button className=' bg-[#0000001A] px-5 lg:px-8 py-3  mt-3 rounded-xl'>Overview</button>
                    <button className=' bg-[#0000001A] px-5 lg:px-8 py-3  mt-3 rounded-xl'>Overview</button>
                    <button className=' bg-[#49BBBD] px-5 lg:px-8 py-3  mt-3 text-white rounded-xl'>Overview</button>
                </div>
                <br /> <br />

                <div className='bg-[#9DCCFF4D] rounded-xl p-8 '>
                        <div className='flex flex-col md:flex-row'>
                        
                            
                            

<div className='flex'>
<div className="bg-white rounded-lg shadow-md p-8 h-[150px]  ">
                                <div className="font-bold text-lg opacity-50">4 out of 5 </div>
                             
<div className="flex items-center my-3 ">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>

                                <div className="text-gray-600 ">Top Rating</div>
                               
                            </div> 
<div className='opacity-50  mx-10'>
                                <p className='mt-1.5'>5Stars</p>
                                <p className='mt-1.5'>4Stars</p>
                                <p className='mt-1.5'>3Stars</p>
                                <p className='mt-1.5'>2Stars</p>
                                <p className='mt-1.5'>1Stars</p>
                        
                        {/* <div class="w-[70%] ml-3 mt-2 bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
  <div class="bg-[#49BBBD] h-2.5 rounded-xl dark:bg-gray-300  w-[75%] " ></div>
</div>   */}
  </div>

</div>
<div className='w-[100%]  flex flex-col'>
 <div className='w-[100%] '>
                                 <div class="w-[100%] mt-2 bg-gray-200 rounded-sm h-2.5 mb-4 ">
  <div class="bg-[#49BBBD] h-2.5 rounded-sm dark:bg-gray-300  w-[75%] " ></div>
</div>  
                            </div>
                            <div className='w-[100%] '>
                                 <div class="w-[100%] mt-2 bg-gray-200 rounded-sm h-2.5 mb-4 ">
  <div class="bg-[#49BBBD] h-2.5 rounded-sm dark:bg-gray-300  w-[75%] " ></div>
</div>  
                            </div>

                            <div className='w-[100%] '>
                                 <div class="w-[100%] mt-2 bg-gray-200 rounded-sm h-2.5 mb-4 ">
  <div class="bg-[#49BBBD] h-2.5 rounded-sm dark:bg-gray-300  w-[75%] " ></div>
</div>  
                            </div>

                            <div className='w-[100%] '>
                                 <div class="w-[100%] mt-2 bg-gray-200 rounded-sm h-2.5 mb-4 ">
  <div class="bg-[#49BBBD] h-2.5 rounded-sm dark:bg-gray-300  w-[75%] " ></div>
</div>  
                            </div>

                            <div className='w-[100%] '>
                                 <div class="w-[100%] mt-2 bg-gray-200 rounded-sm h-2.5 mb-4 ">
  <div class="bg-[#49BBBD] h-2.5 rounded-sm dark:bg-gray-300  w-[75%] " ></div>
</div>  
                            </div>
</div>
                           
                          
<br />

<br />         
                       
                        </div>
<br /><br />
{/* =======================================================comments================================================================= */}


<div>
    <div className='flex md:flex-row flex-col justify-between'>
    <div className='flex'>
     <img src={icon} alt="" />
    <div className='mx-3'>
         <p className='text-xl'>Lina</p>
        <div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
    </div>
       
       
    </div>
    <div className='flex mt-3 text-[#696984] '>
        <p>3 Month</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

    </div>   
</div>

<br />
<p className='text-[#5B5B5B] '>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>

<br />
   <hr className='bg-gray-400 h-[2px]'/>


</div>



<br /><br />


<div>
    <div className='flex justify-between'>
    <div className='flex'>
     <img src={icon} alt="" />
    <div className='mt-3'>
         <p className='text-lg mx-3'>Lina</p>
    </div>
       
       
    </div>
    <div className='flex mt-3 text-[#696984]'>
        <p>3 Month</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

    </div>   
</div>


<p className='text-[#5B5B5B] '>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>

<br />

</div>

  
           
                      



                </div>

            </div>


            {/* ==========================================long card containing background image ===================================================== */}
                <div className='p-7 rounded-2xl bg-white xl:-mt-96 xl:w-[35%] '>
                <img className='h-[268px] ' src={blogdetail} alt="" />
               <br />
                <div className='flex justify-between'>
                    <p className='font-semibold text-2xl md:text-[45px] '>$49.65</p>
                    <del className='font-semibold text-xl  md:text-[28px]  opacity-50 '>S99.99</del>
                    <p  className='font-semibold text-xl md:text-[28px] opacity-50  ' >50% Off</p>
                </div>
                <br />
                <p className='text-center  text-[#49BBBD] text-xl font-semibold'> 11 hour left at this price</p>
                <br />
                <button className='bg-[#49BBBD] w-full text-white text-center py-3  text-[20px]  font-semibold rounded-2xl'>Buy Now</button>
                <br /> <br />
                {/* <hr  className='h-[4px] bg-[#696984'/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="442" height="1" viewBox="0 0 442 1" fill="none">
  <path d="M0 0.5H442" stroke="#696984"/>
</svg>
                <br />
                <p className='text-xl md:text-3xl font-semibold'>This Course included</p>
                <br />
                <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#49BBBD] " >
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>

                   <p className='font-semibold opacity-50'>Money Bank Guarantee</p>
                </div>
                <br />

                <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 text-[#49BBBD] ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
</svg>

                   <p className='font-semibold opacity-50'>Access on All devices</p>
                </div>
                <br />

                <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 text-[#49BBBD] ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>


                   <p className='font-semibold opacity-50'>Certificate of completion</p>
                </div>
                <br />



                <div className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 text-[#49BBBD] ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>


                   <p className='font-semibold opacity-50'>32 Modules</p>


                   <br /><br />
               
               

                </div>
                {/* <hr  className='h-1 bg-gray-600'/> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="442" height="1" viewBox="0 0 442 1" fill="none">
  <path d="M0 0.5H442" stroke="#696984"/>
</svg>
               <br />
               <p className='text-xl md:text-3xl font-semibold'>Training 5 or more people</p>
               <br />
               <p className='opacity-50'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
               <br />
               {/* <hr  className='h-1 bg-gray-600'/> */}
               <svg xmlns="http://www.w3.org/2000/svg" width="442" height="1" viewBox="0 0 442 1" fill="none">
  <path d="M0 0.5H442" stroke="#696984"/>
</svg>
<br />

<p className='text-xl md:text-3xl font-semibold '>Share this course</p>
<br />
<div className='flex justify-between'>
    

<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
 <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
</button>  


<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
</button>

<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-red-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
</button>


<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
</button>

<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
 <svg
    className="h-4 w-4"
    fill="currentColor"
    viewbox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <path
      id="telegram-1"
      d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" />
  </svg>
</button>


<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white bg-[#696984] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
 <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
</button>


</div>
                <br />

                
                </div>
       </div>
       <br /><br /><br />
       <div className='bg-[#9DCCFF]  bg-opacity-20'>
        <br /><br /><br />
        <div className='flex justify-between mx-10 md:mx-28'>
            <div className='font-medium text-xl md:text-3xl '>Marketing Articles</div>
            <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
            </div>
            <br /> <br />
            <Card/>
            <br /> <br /><br />
       </div>


       <br /><br /><br /><br />
{/* ===================================everything you can do==================================== */}
         {/* <div className='mx-10 md:mx-28 grid lg:grid-cols-2 gap-10 justify-between'>
            <div className=" items-center  xl:mt-5">
              
             
            <div className='bg-[#33EFA0] text-2xl xl:text-4xl font-bold h-12 text-[#2F327D]  absolute transition   w-12   rounded-full '> Eve</div>
<h1 className='text-[#2F327D] text-2xl xl:text-4xl font-bold '>Everything you can do in a physical classroom, <span className='text-[#00CBB8]'> you can do with TOTC</span></h1>
      
     
      <p className='xl:text-lg mt-5'>
      TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.{' '} <br />
        {showMore ? (
          <>
            Suspendisse efficitur fringilla consequat. Maecenas condimentum dictum mauris, id sagittis lacus dapibus eu. Nam convallis diam sed nisi condimentum euismod. Phasellus vitae diam turpis. Mauris consequat gravida pharetra. Integer sollicitudin rutrum nisl id tempor.
            <button className=" float-left underline" onClick={handleToggleText}><br />
              Learn Less
            </button>
          </>
        ) : (
          <button className=" underline" onClick={handleToggleText}><br />
            Learn More
          </button>
        )}
      </p>
      <br />
     
    </div>

<div className="relative  ">
      
      <img src={play} alt="" />
    </div>
         </div> */}
         


         <div className=' grid lg:grid-cols-2 gap-10 justify-between mx-10 md:mx-20'>
            <div className=" items-center   xl:mt-10">

            {/* <div className="relative flex items-center">
  <div className="bg-[#33EFA0] h-12 w-12 rounded-full flex items-center justify-center">
    <span className="text-white text-2xl font-bold">Eve</span>
  </div>
  <h1 className="ml-4 text-[#2F327D] text-2xl xl:text-4xl font-bold">
    rything you can do in a physical classroom,{' '}
    <span className="text-[#00CBB8]">you can do with TOTC</span>
  </h1>
</div> */}

              
              <div className='bg-[#33EFA0] text-2xl xl:text-4xl font-bold h-12 text-[#2F327D]  absolute transition  w-12   rounded-full '> Ever</div>
<h1 className='text-[#2F327D] text-2xl xl:text-4xl font-bold relative z-10'>Everything you can do in a physical classroom, <span className='text-[#00CBB8]'> you can do with TOTC</span></h1>
      
     
      <p className='xl:text-lg 2xl:w-3/4   w-11/12 text-[#696984]  mt-5'>
      TOTC’s school management software helps traditional and online schools manage scheduling, attendance 
      <div className='bg-[#33EFA0] text-2xl xl:text-4xl font-bold h-6 mx-28 right-0 lg:left-1/3  absolute transition  w-6  rounded-full '> </div>

      
      
        , payments and virtual classrooms all in one secure cloud-based system.{' '} <br />
        {showMore ? (
          <>
            Suspendisse efficitur fringilla consequat. Maecenas condimentum dictum mauris, id sagittis lacus dapibus eu. Nam convallis diam sed nisi condimentum euismod. Phasellus vitae diam turpis. Mauris consequat gravida pharetra. Integer sollicitudin  nisl id tempor.
            <button className=" float-left underline" onClick={handleToggleText}><br />
              Learn Less
            </button>
          </>
        ) : (
          <button className=" underline" onClick={handleToggleText}><br />
            Learn More
          </button>
        )}
      </p>
      <br />
     
    </div>

<div className="relative  ">
      {/* {showButton && (
        
        <svg xmlns="http://www.w3.org/2000/svg"onClick={handleButtonClick} fill="currentColor" viewBox="0 0 24 24" className="h-24 w-24 absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center cursor-pointer text-[#23BDEE]">{showButton ? 'Play Video' : 'Pause Video'}
        <path strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" strokeWidth="2" d="M10 4l6 8-6 8V4z" />
      </svg>
          
         )}
      <video
        ref={videoRef}
        className=""
        
        onClick={handleButtonClick}
      >
        <source src={tomjerry} type="video/mp4" />
      </video> */}
      <div className=' '>
      <img src={everything} alt="" />

      </div>
    

{/* <div className="relative">
  <div className="absolute top-0 left-0 -ml-16 -mt-16 rounded-xl bg-[#23BDEE]  w-[128px] h-[128px]"></div>
  <img src={play} className='' alt="" />
  <div className="absolute bottom-0 right-0 -mr-16  -mb-16 rounded-xl bg-[#33EFA0] w-[231px] h-[231px]"></div>
</div> */}


{/* <div className="relative">
  <img src={play} alt=""  className='z-30'/>
  <div className="absolute top-0 left-0 -ml-16 -mt-16 rounded-xl bg-[#23BDEE] w-[128px] translate-x-10 h-[128px]"></div>
  <div className="absolute bottom-0 right-0 -mr-16 -mb-16 rounded-xl bg-[#33EFA0] w-[231px] h-[231px]"></div>
</div> */}



    </div>
         </div>


         {/* <div className=' grid lg:grid-cols-2 mx-10 md:mx-20 gap-10 justify-between'>
            <div className=" items-center   xl:mt-10">

           
              
              <div className='bg-[#33EFA0] text-2xl xl:text-4xl font-bold h-12 text-[#2F327D]  absolute transition  w-12   rounded-full '> Eve</div>
<h1 className='text-[#2F327D] text-2xl xl:text-4xl font-bold '>Everything you can do in a physical <br />classroom, <span className='text-[#00CBB8]'> you can do with TOTC</span></h1>
      
     
      <p className='xl:text-lg w-4/5 mt-5'>
      TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.{' '} <br />
      {showMore ? (
          <>
            Suspendisse efficitur fringilla consequat. Maecenas condimentum dictum mauris, id sagittis lacus dapibus eu. Nam convallis diam sed nisi condimentum euismod. Phasellus vitae diam turpis. Mauris consequat gravida pharetra. Integer sollicitudin rutrum nisl id tempor.
            <button className=" float-left underline" onClick={handleToggleText}><br />
              Learn Less
            </button>
          </>
        ) : (
          <button className=" underline" onClick={handleToggleText}><br />
            Learn More
          </button>
        )}
      </p>
      <br />
     
    </div>

<div className="relative  ">
      
      <div className=' '>
      <img src={everything} alt="" />

      </div>
    





    </div>
         </div> */}




         <br /><br /><br />
         <div className='mx-8 md:mx-16 lg:mx-28'>
          <div className='flex justify-between'>
             <div className='font-medium text-xl md:text-2xl xl:text-3xl '>Top  Education offers and deals are listed here</div>
            <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
          </div>
           
            <br /> <br /><br />
    <div className='grid xl:grid-cols-3 md:grid-cols-2  gap-8'>
              {/* =================================1========================= */}
              <div class="relative  rounded-xl  shadow-lg cursor-pointer">
    <div className='bg-gray-900 rounded-xl'>
      <img className="object-cover w-full rounded-xl h-[400px] " src={card} alt='iki'/>
    </div>
	  <div className="absolute inset-0 bg-gray-900  rounded-xl opacity-40"></div>
  <div className="absolute inset-0 top-0 left-0 px-6 py-4  ">
  <button className=' text-white bg-[#FF0000] px-8 py-8 rounded-lg  my-5 text-2xl font-bold  '>50%</button> <br />

	  <h4 className="mb-3 font-semibold text-3xl  text-white ">For Instructors</h4>
	  <p className=" leading-8  text-2xl text-gray-100">TOTC’s school management software helps traditional and online schools manage scheduling,</p>
	</div>
  </div>
{/* ======================2==================== */}
<div class="relative  rounded-xl  shadow-lg cursor-pointer">
    <div className='bg-gray-900 rounded-xl'>
      <img className="object-cover w-full rounded-xl h-[400px] " src={card} alt='iki'/>
    </div>
	  <div className="absolute inset-0 bg-gray-900  rounded-xl opacity-40"></div>
  <div className="absolute inset-0 top-0 left-0 px-6 py-4  ">
  <button className=' text-white bg-[#FF0000] px-8 py-8 rounded-lg  my-5 text-2xl font-bold  '>50%</button> <br />

	  <h4 className="mb-3 font-semibold text-3xl  text-white ">For Instructors</h4>
	  <p className=" leading-8  text-2xl text-gray-100">TOTC’s school management software helps traditional and online schools manage scheduling,</p>
	</div>
  </div>
<div class="relative  rounded-xl  shadow-lg cursor-pointer">
    <div className='bg-gray-900 rounded-xl'>
      <img className="object-cover w-full rounded-xl h-[400px] " src={card} alt='iki'/>
    </div>
	  <div className="absolute inset-0 bg-gray-900  rounded-xl opacity-40"></div>
  <div className="absolute inset-0 top-0 left-0 px-6 py-4  ">
  <button className=' text-white bg-[#FF0000] px-8 py-8 rounded-lg  my-5 text-2xl font-bold  '>50%</button> <br />

	  <h4 className="mb-3 font-semibold text-3xl  text-white ">For Instructors</h4>
	  <p className=" leading-8  text-2xl text-gray-100">TOTC’s school management software helps traditional and online schools manage scheduling,</p>
	</div>
  </div>

    </div>
<br /><br /><br />
<br /><br /><br />
            </div>

    </div>
  )
}

export default CourseDetail
