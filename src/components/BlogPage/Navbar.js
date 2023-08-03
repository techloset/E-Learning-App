import React,{useState, useNavigate} from 'react'
import NavLogoBgbl from "../../images/NavLogoBgbl.png"
import iconnav from "../../images/profileBlogicon.png"
import { Link } from 'react-router-dom'


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
    }, 700); 
  };

  return (
    <div className="group inline-block relative">
      <div
        className=" px-3  rounded-md font-semibold cursor-pointer hover:bg-blue-200 transition duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {mainText}
      </div>
      <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} mt-2 py-2 bg-white mx-20 lg:mx-0 rounded-md shadow-lg text-gray-700`}>
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
      { to: '/meeting', label: 'Meeting' }
    ];

    const  careerOptions = [
      { to: '/course', label: 'Course' },
      { to: '/coursedetail', label: 'CourseDetail' }
    ];
    const  profileOptions = [
      { to: '/login', label: 'Login' },
      { to: '/register', label: 'Register' }
    ];


  return (
    <div>
      <nav className="relative py-6">
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex justify-between h-16 ">
          <div className="flex-shrink-0 flex ">
            <img className="" src={NavLogoBgbl} alt="Logo"  />
          </div>
          <div className="hidden lg:flex md:space-x-0  lg:space-x-1 xl:space-x-8  sm:-space-x-3 mt-3 lg:ml-3  text-[22px] justify-around">
            <Link to="/" className=" px-3 py-2 text-[#5B5B5B] rounded-md font-semibold">Home</Link>
            <div className=" px-3 py-2 text-[#5B5B5B] rounded-md font-semibold">  <Dropdown mainText="Courses" options={courseOptions} /></div>
            <div className=" px-3 py-2 text-[#5B5B5B] rounded-md font-semibold"><Dropdown mainText="Career" options={careerOptions} /></div>
            <div className=" px-3 py-2 text-[#5B5B5B] rounded-md font-semibold"><Dropdown mainText="Blog" options={blogOptions} /></div>
            <div className=" px-3 py-2 text-[#5B5B5B] rounded-md font-semibold"><Dropdown mainText="About Us" options={aboutOptions} /></div>
            <div className="flex px-3 py-2 rounded-md font-semibold">
            <img className="w-10 h-10 rounded-full " src={iconnav} alt="Rounded avatar"/>
            <p className='text-[#5B5B5B] mx-4'><Dropdown mainText="Lina" options={profileOptions} /></p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mt-2">
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
</svg>

              </div>

          </div>
          <div className=" flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-500 hover:bg-white-100 focus:outline-none  transition duration-150 ease-in-out"
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
            <Link to="/" className="block text-[#5B5B5B] px-8 py-2 rounded-md font-semibold  text-lg">Home</Link>
            <div  className="block text-[#5B5B5B] px-4 py-2 rounded-md  text-lg"> <Dropdown mainText="Courses" options={courseOptions} /></div>
            <div  className="block text-[#5B5B5B] px-4 py-2 rounded-md  text-lg"><Dropdown mainText="Career" options={careerOptions} /></div>
            <div  className="block text-[#5B5B5B] px-4 py-2 rounded-md  text-lg"><Dropdown mainText="Blog" options={blogOptions} /></div>
            <div  className="block text-[#5B5B5B] px-4 py-2 rounded-md  text-lg"><Dropdown mainText="About Us" options={aboutOptions} /></div>
            <div href="#" className="flex  py-2 rounded-md font-semibold">
            <img  className="w-10 h-10 mx-4 rounded-full" src={iconnav} alt="Rounded avatar"/>
            <p className='text-[#5B5B5B] '><Dropdown mainText="Lina" options={profileOptions} /></p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mx-4 w-5 h-5">
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
</svg>

              </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Navbar