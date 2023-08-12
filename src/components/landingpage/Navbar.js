import React,{useState} from 'react'
import './Navbar.css'
import Navlogo from '../../images/Navlogo.png'
import NavBg from '../../images/NavBg.png'
import nav_girl from '../../images/nav_girl.png'
import { Icon } from '@iconify/react';
import nav_prof from '../../images/nav_prof.png'
import nav_graph from '../../images/nav_graph.png'
import nav_mail from '../../images/nav_mail.png'
import nav_calendar from '../../images/nav_calendar.png';
import image from "../../images/image.png";
import image1 from "../../images/image1.png";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'



const Dropdown = ({ mainText, options }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 700); // Change this delay as needed
  };

  return (
    <div className="group inline-block relative">
      <div
        className="text-white px-3 py-2 rounded-md font-semibold cursor-pointer hover:bg-gray-700 transition duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {mainText}
      </div>
      <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'}  mt-0 lg:mt-2  py-2 bg-white mx-16 lg:mx-0 rounded-md shadow-lg text-gray-700`}>
        {options.map((option, index) => (
          <Link
            key={index}
            to={option.to}
            className="block px-4 py-2 hover:bg-gray-100 transition duration-300"
          >
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {

 
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const Register=()=>{
      navigate('/register');
    }
    const Login=()=>{
      navigate('/login');
    }
  
    const courseOptions = [
      { to: '/coursecalender', label: 'CourseCalender' },
      { to: '/coursecalender1', label: 'CourseCalender1' },
      { to: '/coursecalender2', label: 'CourseCalender2' },
      { to: '/coursefullview', label: 'CourseFullView' },
    ];
  
    const blogOptions = [
      { to: '/blog', label: 'Blog' },
      { to: '/blogdetail', label: 'BlogDetail' }
    ];

    const aboutOptions = [
      { to: '/membership', label: 'MemberShip' },
      { to: '/checkout', label: 'CheckOut' },
      { to: '/literature', label: 'Literature ' },
      { to: '/search', label: 'Search' },
      { to: '/meeting', label: 'Meeting' },
    ];

    const  careerOptions = [
      { to: '/course', label: 'Course' },
      { to: '/coursedetail', label: 'CourseDetail' }
    ];

  return (
    <div>
   <div className=' myapp bg-center bg-cover bg-no-repeat  px-10 lg:px-0' >
      {/* <img src={NavBg} alt=""  className=' lg:bg-center absolute sm:cover '/> */}
    <nav className="text-white relative pt-4 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12  xl:px-16 2xl:px-20">
        <div className="flex justify-between h-16 ">
          <div className="flex-shrink-0 flex ">
            <img className="" src={Navlogo} alt="Logo"  />
          </div>
          <div className="hidden lg:flex md:space-x-0  lg:space-x-1 xl:space-x-8  sm:-space-x-3 mt-3 lg:ml-3 text-[22px] justify-around">
            <Link  to="/" className="text-white  px-3 py-2 rounded-md font-semibold cursor-pointer">Home</Link>
            {/* <div href="#" className="text-white  px-3 py-2 rounded-md font-semibold">Courses</div> */}
            <Dropdown mainText="Courses" options={courseOptions} />
            <Dropdown mainText="Careers" options={careerOptions} />
            <Dropdown mainText="Blog" options={blogOptions} />
            <Dropdown mainText="About" options={aboutOptions} />
            <button href="#" className="text-black rounded-full  bg-white px-6 xl:px-12 py-2 cursor-pointer font-semibold" onClick={Login}>Login</button>
            <button href="#" className="text-white rounded-full px-6 xl:px-12  font-semibold bg-[#83d0d2] cursor-pointer" onClick={Register}>SignUp</button>
          </div>
          <div className=" flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white-100 focus:outline-none focus:bg-white-100 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className=" font-medium ">
            <div  className="block text-white px-8  py-2 rounded-md font-semibold text-lg">Home</div>
            <div  className="block text-white px-4 py-2 rounded-md  text-lg"><Dropdown mainText="Courses" options={courseOptions} /></div>
            <div  className="block text-white px-4 py-2 rounded-md  text-lg"><Dropdown mainText="Careers" options={careerOptions} /></div>
            <div  className="block text-white px-4 py-2 rounded-md  text-lg"><Dropdown mainText="Blog" options={blogOptions} /></div>
            <div  className="block text-white px-4 py-2 rounded-md  text-lg"><Dropdown mainText="About" options={aboutOptions} /></div>
          <div className="connect text-lg block py-4 px-4 bg-white  dark:text-white dark:hover:text-white font-semibold rounded-lg text-black font-sans cursor-pointer" onClick={Login} >Login</div>
          <div className="connect text-lg block py-4 px-4 dark:text-white dark:hover:text-white  rounded-lg text-white bg-[#83d0d2] font-sans cursor-pointer"  onClick={Register}>Register</div>
          </div>
        </div>
      )}
    </nav>
    <div className='hidden xl:block'>
    <br /><br /><br /><br />
    </div>
 <br /><br />

    <div className=" flex flex-col lg:flex-row lg:mx-12  ">
      <div className='px-4 sm:px-4 md:px-9  2xl:mt-16   '>
      <h1 className=' text-4xl xl:text-5xl 2xl:text-[54px] text-white font-bold'> <span className='text-orange-400'>Studying</span>  online is now much easier</h1>
      <br />
      <p className='text-white xl:w-11/12 2xl:w-3/4 text-xl xl:text-2xl font-sans font-normal'>TOTC is an interesting platform that will teach you in more an interactive way</p>
      <br /><br />
      <div className="flex flex-col xl:flex-row text-center center ">
        
      <button href="#" className="text-white rounded-full text-xl w-2/3`` xl:text-2xl px-6  2xl:px-10 py-4 font-semibold bg-[#83d0d2] ">Join for free</button>
     
      <button className=' mx-auto mt-4 xl:mt-0 xl:mx-8 w-12 2xl:hidden h-12 bg-white rounded-full text-center '>
      <svg className="h-4 w-12 text-[#23BDEE]  justify-center"  viewBox="0 0 24 24"  fill="#23BDEE"  stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
      </button>

      <button className='mx-8 bg-white hidden 2xl:block rounded-full'>
      <svg className="h-8 w-16 text-[#23BDEE]  "  viewBox="0 0 24 24"  fill="#23BDEE"  stroke="currentColor" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
      </button>

      
      
        <div className='mt-4'>
            <p className='text-center text-xl  xl:text-2xl'>Watch how it works</p>
        </div>

      </div>
      </div>
    
    <div className='mb-1  '>
      <img src={image} alt=""  />
    </div>

    </div>
      {/* <div className='px-10' >

      
         <div className='-mt-3'>
           <img src={nav_girl} alt="" />
         </div>

         <div className='-mt-[750px]'>

      <div className='graph float-right'>
        <img src={nav_graph} alt="" />
      </div>
      <br /><br />
      <br /><br /><br /><br /><br />

    <div class="-mx-32 w-[300px] h-[100px] float-left bg-white shadow-md rounded-2xl p-3 flex calendar backdrop-blur-sm bg-opacity-80">
        <div class="flex items-center mr-4 p-4">
          <img src={nav_calendar} alt=""  className='bg-blue-400 p-4 rounded-lg'/>
        </div>
        <div>
          <p class="text-gray-600 text-2xl font-bold">250k</p>
          <p class="text-gray-600 text-[20px] font-semibold">Assisted Student</p>
      </div>
 
    </div> 

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      
    
      
      <br />

      <div class="bg-white shadow-md rounded-lg p-3 flex w-3/5 mail float-right">

        <div class="flex items-center mb-3  p-4">
          <img src={nav_mail} alt=""  className='bg-yellow-400 p-4 rounded-lg'/>
        </div>
        <div>
          <p class="text-gray-600 text-2xl font-bold">Congratulations</p>
          <p class="text-gray-600 text-[20px] font-semibold">Your Addmission Completed</p>
        </div>
 
      </div>
      <br /><br /><br /><br />

<br />
      
<div class="bg-white shadow-md rounded-lg p-3  w-3/5 text-center profile">

<div className='flex'>
<div class="flex items-center mb-3  p-4">
  <img src={nav_prof} alt=""  className='p-4 rounded-lg'/>
</div>
<div>
  <p class="text-gray-600 text-2xl font-bold">Uer Experience Class</p>
  <p class="text-gray-600  text-[20px] font-semibold">Today at 12:00 PM</p>
</div>
</div>
<button className='bg-red-400 text-white py-2 px-5 center rounded-full'>
  Join Now  
</button>

</div> 

         </div>

      </div> */}


  </div >
  </div>
  )
}

export default Navbar


