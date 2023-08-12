import React from 'react'
import card from "../../images/card.png"
import card2 from "../../images/card2.png"
import call1 from "../../images/call1.png"
import call2 from "../../images/call2.png"
import call3 from "../../images/call3.png"
import call5 from "../../images/call5.png"
import call4 from "../../images/call4.png"
import tools from "../../images/tools.png"
import assess from "../../images/assess.png"
import gradebook from "../../images/gradebook.png"
import discussion from "../../images/discussion.png"
import play from "../../images/play.png"
import call from "../../images/Group 71 (1).png"
import tomjerry from "../../images/tomjerry.mp4"
import { useRef , useState } from 'react'
import group from "../../images/group.png"
import everything from "../../images/everything.png"
// import "../Literature/Literature.css"


const Icon1 = () =><svg xmlns="http://www.w3.org/2000/svg" width="33" height="46" viewBox="0 0 33 46" fill="none">
<g clip-path="url(#clip0_10_961)">
  <path d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z" fill="white"/>
</g>
<defs>
  <clipPath id="clip0_10_961">
    <rect width="33" height="46" fill="white"/>
  </clipPath>
</defs>
</svg>
const Icon2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
<g clip-path="url(#clip0_10_918)">
  <path d="M12.0005 0C11.0536 0 10.2861 0.767511 10.2861 1.71432V5.14285H13.7147V1.71432C13.7147 0.767511 12.9472 0 12.0005 0Z" fill="#F5F5FC"/>
  <path d="M36.0005 0C35.0536 0 34.2861 0.767511 34.2861 1.71432V5.14285H37.7147V1.71432C37.7148 0.767511 36.9473 0 36.0005 0Z" fill="#F5F5FC"/>
  <path d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z" fill="#F5F5FC"/>
  <path d="M13.7141 23.9999H10.2856C9.3388 23.9999 8.57129 24.7674 8.57129 25.7142C8.57129 26.661 9.3388 27.4285 10.2856 27.4285H13.7141C14.6609 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.6609 23.9999 13.7141 23.9999Z" fill="#F5F5FC"/>
  <path d="M25.7141 23.9999H22.2856C21.3388 23.9999 20.5713 24.7674 20.5713 25.7142C20.5713 26.661 21.3388 27.4285 22.2856 27.4285H25.7141C26.661 27.4285 27.4285 26.661 27.4285 25.7142C27.4285 24.7674 26.661 23.9999 25.7141 23.9999Z" fill="#F5F5FC"/>
  <path d="M37.7141 23.9999H34.2856C33.3388 23.9999 32.5713 24.7674 32.5713 25.7142C32.5713 26.661 33.3388 27.4285 34.2856 27.4285H37.7141C38.661 27.4285 39.4285 26.661 39.4285 25.7142C39.4285 24.7674 38.6609 23.9999 37.7141 23.9999Z" fill="#F5F5FC"/>
  <path d="M13.7141 30.8571H10.2856C9.3388 30.8571 8.57129 31.6246 8.57129 32.5714C8.57129 33.5182 9.3388 34.2857 10.2856 34.2857H13.7141C14.6609 34.2857 15.4285 33.5182 15.4285 32.5714C15.4285 31.6246 14.6609 30.8571 13.7141 30.8571Z" fill="#F5F5FC"/>
  <path d="M25.7141 30.8571H22.2856C21.3388 30.8571 20.5713 31.6246 20.5713 32.5714C20.5713 33.5182 21.3388 34.2857 22.2856 34.2857H25.7141C26.661 34.2857 27.4285 33.5182 27.4285 32.5714C27.4285 31.6246 26.661 30.8571 25.7141 30.8571Z" fill="#F5F5FC"/>
  <path d="M37.7141 30.8571H34.2856C33.3388 30.8571 32.5713 31.6246 32.5713 32.5714C32.5713 33.5182 33.3388 34.2857 34.2856 34.2857H37.7141C38.661 34.2857 39.4285 33.5182 39.4285 32.5714C39.4284 31.6246 38.6609 30.8571 37.7141 30.8571Z" fill="#F5F5FC"/>
  <path d="M13.7141 37.7142H10.2856C9.3388 37.7142 8.57129 38.4817 8.57129 39.4286C8.57129 40.3754 9.3388 41.1428 10.2856 41.1428H13.7141C14.6609 41.1428 15.4285 40.3753 15.4285 39.4284C15.4285 38.4816 14.6609 37.7142 13.7141 37.7142Z" fill="#F5F5FC"/>
  <path d="M25.7141 37.7142H22.2856C21.3388 37.7142 20.5713 38.4817 20.5713 39.4285C20.5713 40.3754 21.3388 41.1429 22.2856 41.1429H25.7141C26.661 41.1429 27.4285 40.3754 27.4285 39.4285C27.4285 38.4817 26.661 37.7142 25.7141 37.7142Z" fill="#F5F5FC"/>
  <path d="M37.7141 37.7142H34.2856C33.3388 37.7142 32.5713 38.4817 32.5713 39.4285C32.5713 40.3754 33.3388 41.1429 34.2856 41.1429H37.7141C38.661 41.1429 39.4285 40.3754 39.4285 39.4285C39.4285 38.4817 38.6609 37.7142 37.7141 37.7142Z" fill="#F5F5FC"/>
</g>
<defs>
  <clipPath id="clip0_10_918">
    <rect width="48" height="48" fill="white"/>
  </clipPath>
</defs>
</svg>
;
const Icon3 = () => <svg xmlns="http://www.w3.org/2000/svg" width="55" height="44" viewBox="0 0 55 44" fill="none">
<path d="M8.25 19.25C11.2836 19.25 13.75 16.7836 13.75 13.75C13.75 10.7164 11.2836 8.25 8.25 8.25C5.21641 8.25 2.75 10.7164 2.75 13.75C2.75 16.7836 5.21641 19.25 8.25 19.25ZM46.75 19.25C49.7836 19.25 52.25 16.7836 52.25 13.75C52.25 10.7164 49.7836 8.25 46.75 8.25C43.7164 8.25 41.25 10.7164 41.25 13.75C41.25 16.7836 43.7164 19.25 46.75 19.25ZM49.5 22H44C42.4875 22 41.1211 22.6102 40.1242 23.5984C43.5875 25.4977 46.0453 28.9266 46.5781 33H52.25C53.7711 33 55 31.7711 55 30.25V27.5C55 24.4664 52.5336 22 49.5 22ZM27.5 22C32.8195 22 37.125 17.6945 37.125 12.375C37.125 7.05547 32.8195 2.75 27.5 2.75C22.1805 2.75 17.875 7.05547 17.875 12.375C17.875 17.6945 22.1805 22 27.5 22ZM34.1 24.75H33.3867C31.5992 25.6094 29.6141 26.125 27.5 26.125C25.3859 26.125 23.4094 25.6094 21.6133 24.75H20.9C15.4344 24.75 11 29.1844 11 34.65V37.125C11 39.4023 12.8477 41.25 15.125 41.25H39.875C42.1523 41.25 44 39.4023 44 37.125V34.65C44 29.1844 39.5656 24.75 34.1 24.75ZM14.8758 23.5984C13.8789 22.6102 12.5125 22 11 22H5.5C2.46641 22 0 24.4664 0 27.5V30.25C0 31.7711 1.22891 33 2.75 33H8.41328C8.95469 28.9266 11.4125 25.4977 14.8758 23.5984Z" fill="white"/>
</svg>



const successPoints=[
  { 
  
  img:<Icon1 />,
    color:"#5B72EE",
    title:"Online Billing, Invoicing, & Contracts",
    describer:"Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts",

    
  },
  {
    img:<Icon2 />,
      color:"#00CBB8",
      title:"Easy Scheduling & Attendance Tracking",
      describer:"Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",

      
    },
    {
      img:<Icon3 />,  
        color:"#29B9E7",
        title:"Customer Tracking",
        describer:"Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ",
  
        
      },

]
const Success = () => {
  
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
    <div>
      <br /><br /><br /><br />
        <div className='sm:mx-16 mx-10 '>
            <h1 className='text-[#010514] text-4xl lg:text-5xl font-bold justify-center text-center'>Our Success</h1>
            <br />
            <p className=' text-center font-buenos-aires-trial justify-center mx-auto  text-lg md:w-3/4 lg:w-2/3 xl:w-1/2'  >Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec <br /> nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
            <br /><br />


            <div className='flex flex-col sm:flex-row justify-between text-center '>
                <div className='xl:text-8xl md:text-3xl text-2xl lg:text-5xl flex flex-col  text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 '>
                    15K+  <span className='xl:text-3xl text-lg md:text-xl lg:text-2xl text-[#010514] font-buenos-aires-trial'>Students</span>
                </div>
                <div className='xl:text-8xl md:text-3xl text-2xl lg:text-5xl flex flex-col  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
                    75% <span className='xl:text-3xl text-lg md:text-xl lg:text-2xl text-[#010514] font-buenos-aires-trial'>Total success</span>
                </div>
                <div className='xl:text-8xl md:text-3xl text-2xl lg:text-5xl flex flex-col  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
                    35 <span className='xl:text-3xl text-lg md:text-xl lg:text-2xl text-[#010514] font-buenos-aires-trial'>Main questions</span>
                </div>
                <div className='xl:text-8xl md:text-3xl text-2xl lg:text-5xl flex flex-col  text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
                    26 <span className='xl:text-3xl text-lg md:text-xl lg:text-2xl text-[#010514] font-buenos-aires-trial'>Chief experts</span>
                </div>
                <div className='xl:text-8xl md:text-3xl text-2xl lg:text-5xl flex flex-col  text-transparent  bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>
                    16 <span className='xl:text-3xl text-lg md:text-xl lg:text-2xl text-[#010514] font-buenos-aires-trial'>Years of experience</span>
                </div>
            </div>

{/* all in one  */}
<br /><br /><br /><br />
<h1 className='text-[#2F327D] text-3xl lg:text-4xl font-bold justify-center text-center'>All-In-One <span className='text-[#00CBB8]'>Cloud Software.</span></h1>
            <br />
            <p className=' text-[#696984] text-center justify-center mx-auto w-3/4 lg:w-2/3 xl:w-1/2'>TOTC is one powerful online software suite that combines all the tools <br /> needed to run a successful school or office.</p>
            <br /><br />
  <br />
<br />

{/* <div className=" items-center justify-center ">
  <div className="relative flex flex-col lg:flex-row gap-14 mx-20">
    {successPoints.map((value, index) => (
      <div key={index} className="relative px-4 rounded-xl py-12 shadow-2xl rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
        <div style={{ backgroundColor: value.color }} className="w-16 h-16 mb-2 mx-auto rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className='flex items-center justify-center'> 
            {value.img}
          </div>
        </div>
        <br /><br />
        <p className="relative px-6 py-1 text-xl font-medium text-center text-blue-900">
          {value.title}
        </p> <br />
        <p className='justify-center'>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
      </div>
    ))}
  </div>
</div> */}

<div className=" items-center justify-center text-[#696984]   bg-white ">
<div className="relative grid md:grid-cols-2 xl:grid-cols-3 gap-14">
  {successPoints.map((value, index )=>(
  <div key={index} className="relative px-4 rounded-xl py-12 shadow-xl rounded-t-lg sm:px-8 md:px-10 ">

    <div style={{backgroundColor:value.color}} className="w-20 h-20 mb-2 mx-auto   rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2 text-white flex items-center justify-center ">
      <div className='mx-auto  justify-center text-center flex items-center text-4xl font-bold '>
      {value.img}
      </div>
    
    </div>
    <br /><br />
    <p className="relative py-1 text-2xl font-medium text-center text-blue-900">
      {value.title}
    </p> <br />
    <p className='text-center'> {value.describer} </p>
  </div>))}
</div>
	</div>



<br /> <br /><br /> <br /><br />
<h1 className='text-[#2F327D] text-3xl lg:text-4xl font-bold justify-center text-center'>What is <span className='text-[#00CBB8]'>TOTC?</span></h1>
<br />
<p className='xl:w-2/3 text-[#696984]  md:w-3/4 lg:w-3/4 justify-center text-center mx-auto'>TOTC is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; monitor <br />
 due dates; grade results and provide students with feedback all in one place.</p>
<br /><br />

   <div className='grid lg:grid-cols-2 gap-16 '>
    <div className="flex items-center w-full  justify-center">
        <img src={card} alt="CardImage" className="xl:h-[400px]" />
        <div className='absolute'>
           <h2 className="text-2xl text-white text-center font-bold mb-2 ">FOR INSTRUCTORS</h2><br />
        <button className="text-[22px] border-white border-2 rounded-full px-8 py-2  text-white hover:bg-blue-600">Start a class today</button>
        </div>
    </div>
    <div className="flex items-center w-full  justify-center">
        <img src={card2} alt="CardImage" className="xl:h-[400px]" />
        <div className='absolute'>
           <h2 className="text-2xl text-white text-center font-bold mb-2 ">FOR STUDENTS</h2><br />
        <button className="text-[22px] rounded-full px-8 py-2   text-white bg-[#23BDEEE5]">Enter access code</button>
        </div>
    </div>
   </div>
   <br /><br />


{/* <div className='flex justify-between mx-16'>
  
<div className=" items-center w-[50%] mt-10">
<h1 className='text-[#2F327D] text-4xl font-bold '>Everything you can do in a physical classroom, <span className='text-[#00CBB8]'> you can do with TOTC</span></h1>
      <br />
     
      <p className=' text-2xl text-[#696984] '>
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

<div className="relative  w-[50%]">
      {showButton && (
        
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
      </video>
    </div>
</div> */}

<br /><br />
<div className=' grid lg:grid-cols-2 gap-10 justify-between'>
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
<br />


<br /><br /><br />
        {/* -------------------------------our Features----------------------------------- */}
<h1 className='text-[#2F327D] text-3xl lg:text-4xl font-bold text-center justify-center '>Our<span className='text-[#00CBB8]'> Features</span></h1>
            <br />
            <p className=' text-xl xl:text-2xl text-center justify-center mx-auto text-[#696984] '>This very extraordinary feature, can make learning activities more efficient </p>
            <br /><br />


{/* ==========================user interface designed for the classroom ================================== */}

<div className='grid lg:grid-cols-2 2xl:gap-12 xl:gap-x-28  gap-6  '>        
    {/* <div className="  bg-gray-100 w-[60%] rounded-3xl shadow-xl overflow-hidden ">
      <div className="md:flex   justify-between ">
        <div className='my-9 mx-12'>
    
        <div className="relative">
              <img
                className=""
                src={call1}
                alt="Image1"
              />
              <div className="absolute ml-6 rounded-lg  py-1 -mt-10 px-4 bg-gray-400 bg-opacity-75 text-white">
              Eveny Howard
              </div>
            </div>
    <br />  
    <div className='flex justify-between text-white'>
        <button className='text-center mr-3 w-full py-3 font-medium text-xl bg-blue-600 rounded-full'>Present</button>
        <button className='text-center ml-3 w-full py-3 font-medium text-xl bg-pink-600 rounded-full'>Call</button>
    </div>
  
       
        </div>
        <div className="mx-8 py-8">
            <div className="grid grid-cols-2 gap-y-10">
            <div className="relative ">
              <img
                className="  rounded-md"
                src={call2}
                alt="Image1"
              />
              <div className="absolute ml-6 rounded-lg  py-1 -mt-10 px-4 bg-gray-400 bg-opacity-75 text-white">
              Tamara Clarke
              </div>
            </div>
            <div className="relative">
              <img
                className=" rounded-md"
                src={call4}
                alt="Image2"
              />
              <div className="absolute ml-6 rounded-lg  py-1 -mt-10 px-4 bg-gray-400 bg-opacity-75 text-white">
              Adam Levin
              </div>
            </div>
            
            <div className="relative">
              <img
                className="  rounded-md"
                src={call3}
                alt="Image3"
              />
              <div className="absolute ml-2 rounded-lg  py-1 -mt-10 px-4 bg-gray-400 bg-opacity-75 text-white">
              Humbert Holland
              </div>
            </div>
            <div className="relative">
              <img
                className="  rounded-md"
                src={call5}
                alt="Image4"
              />
              <div className="absolute ml-6 rounded-lg  py-1 -mt-10 px-4 bg-gray-400 bg-opacity-75 text-white">
              Patricia Mendoza
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div> */}
    <img src={group}  className='' alt="" />
    <div className=''>

    <h1 className='text-[#2F327D] text-2xl xl:text-4xl font-semibold 2xl:mx-20 '>A <span className='text-[#00CBB8]'>user interface </span>designed <br />for the classroom</h1><br /><br />
        <div className='flex justify-between '>
          <div className=' bg-white  rounded-full w-16 h-12 items-center flex mx-auto  text-center  shadow-2xl '>
          <svg className='mx-auto ' xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
  <rect width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
  <rect y="14.1819" width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
  <rect x="14.7734" width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
  <rect x="14.7734" y="14.1819" width="11.8182" height="11.8182" rx="2" fill="#F48C06"/>
</svg>
          </div>
          <p className=' 2xl:w-3/5 w-3/4  2xl:mr-24 text-lg text-[#696984] '>Teachers don’t get lost in the grid view  and have a dedicated Podium space.</p>
        </div><br /><br />

        <div className='flex justify-between '>
        <div className=' bg-white  rounded-full w-16 h-12 items-center flex mx-auto  text-center  shadow-2xl '>
        <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 28 26" fill="none">
  <rect x="8" y="6" width="20" height="20" rx="2" fill="#2F327D"/>
  <rect width="21.2245" height="21.2245" rx="2" fill="#F48C06"/>
</svg>
          </div>
          <p className=' 2xl:w-3/5 w-3/4 2xl:mr-24 text-lg text-[#696984] '>TA’s and presenters can be moved to the front of the class.</p>
        </div><br /><br />

        <div className='flex -between '>
        <div className=' bg-white rounded-full w-16 h-12 items-center flex mx-auto  text-center  shadow-2xl '>
        <svg className='mx-auto' xmlns="http://www.w3.org/2000/svg" width="30" height="26" viewBox="0 0 30 26" fill="none">
  <path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z" fill="#2F327D"/>
</svg>
          </div>
          <p className=' 2xl:w-3/5 w-3/4 2xl:mr-24 text-lg text-[#696984] '>Teachers can easily see all students and class data at one time.</p>
        </div>
      
    </div>
    </div>


<br /><br /><br />
{/* -----------------------------------------------------------tools for teachers and learners-------------------------------------------------------------- */}
<div className='grid lg:grid-cols-2 '> 
<div className='mx-4 my-auto p-4'>

<h1 className='text-[#2F327D] text-2xl xl:text-4xl  font-bold  mt-4 sm:w-2/3'><span className='text-[#00CBB8]'>Tools</span> For Teachers <br /> And Learners</h1><br /><br />
    
<p className=' w-4/5 text-xl text-[#696984] '>Class has a dynamic set of teaching tools built to be deployed and used during class.
Teachers can handout assignments in real-time for students to complete and submit.</p>
   
</div>       
    <div className=" ">
      <img src={tools} alt="" />
    </div>
   
    </div>
    <br /><br /><br />


    {/* -----------------------------------------------------------Assessments Quizes And Tests-------------------------------------------------------------- */}
<div className='grid lg:grid-cols-2 gap-6 '> 
     
    <div className=" ">
      <img src={assess} alt="" />
    </div>
    <div className='mx-4 my-auto '>

<h1 className='text-[#2F327D] text-3xl xl:text-4xl font-bold  w-2/3 xl:w-1/2'>Assessments,  <br /> <span className='text-[#00CBB8]'>Quizzes</span>, Tests </h1><br /><br />
    
<p className='text-[#696984]  xl:w-3/5'>Easily launch live assignments, quizzes, and tests.
Student results are automatically entered in the online gradebook.</p>
   
</div>  
    </div>

    <br /><br /><br />
    {/* ----------------------------------------------------------class management -------------------------------------------------------------- */}
<div className='grid lg:grid-cols-2 2xl:mx-10 2xl:gap-x-12 '> 
<div className='mx-4 my-auto p-4'>

<h1 className=' text-3xl xl:text-4xl leading-8 font-bold text-[#00CBB8] mt-4 xl:w-2/3'>Class Management <br /><span className='text-[#2F327D] '>Tools for Educators </span> </h1><br /><br />
    
<p className='sm:w-4/5 text-[#696984] '>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
</p>
   
</div>       
    <div className="">
      <img src={gradebook} alt="" />
    </div>
   
    </div>
<br /><br />
      {/* -----------------------------------------------------------One to one discussions-------------------------------------------------------------- */}
<div className='grid lg:grid-cols-2 gap-16  2xl:gap-x-24 2xl:mx-20'> 
     
     <div className=" ">
       <img src={discussion} alt="" />
     </div>

     <div className='mx-4 my-auto  p-4'>
 
 <h1 className='text-[#2F327D] text-3xl xl:text-4xl md:w-2/3 font-bold  mt-4 xl:w-1/2'>One-on-One   <span className='text-[#00CBB8]'>Discussions</span></h1><br /><br />
     
 <p className='lg:w-3/4  text-[#696984] '>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
 <br /><br /><br />
 </div> 
     </div>

<button className='text-[#49BBBD] border-2 border-[#49BBBD] rounded-full py-2 sm:py-4 px-5 sm:px-10 mx-auto justify-center text-xl flex sm:text-2xl ' >See more features</button>
       <br /><br />
        </div>
    </div>
  )
}

export default Success