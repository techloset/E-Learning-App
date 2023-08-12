import React,{useState} from 'react'
import register from '../../images/register.png'
import { useNavigate } from 'react-router-dom';
const Register = () => {

    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const LoginForm =()=>{
        navigate('/login')
    }
    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
      }
    

  return (
    <div className='flex xl:flex-row  flex-col'> 
    <div className=' text-white hidden lg:block p-[38px] '>
        <img src={register}  alt=""  className='block  max-w-full max-h-[100%] '/>
        <div className='relative z-10 -mt-36 mb-12'>
        <h2 className='text-4xl font-bold  px-[69px]'>Lorem Ipsum is simply </h2><br />
        <p className='text-2xl  px-[69px]'>Lorem Ipsum is simply </p>
        </div>
    </div>

    <div className=' justify-center px-5 mx-auto xl:mx-10  lg:px-0 2xl:px-0 w-[454px] mb-[103px] lg:mb-16' > 

        <h4 className='text-center text-lg mt-20'>Welcome to Lorem..!</h4>

        <div className='text-lg w-[329px] justify-center content-center rounded-full px-3 my-6 py-2 text-white  bg-[#83d0d2] flex items-center text-center mx-auto'>
            <button onClick={LoginForm}  className=' rounded-full py-2 px-14'>Login</button>
            <button  className=' text-lg  font   px-10 rounded-full py-2 bg-[#49BBBD]' > Register</button>   
        </div>

      <p className='mt-6 text-lg text-[#5B5B5B] float-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <label className='float-left text-lg mt-4  mb-4'>Email Adress</label>
        <br /><br />
         <input  type="text" placeholder='Enter your Email Address' 
        className='w-full  h-[54px] p-5 border-[#49BBBD] border-2 rounded-full' /> 
        <br /> <br />
        <label className='float-left text-lg'>User name</label>
        
         <input  type="text" placeholder='Enter your User name' 
        className='w-full mt-4 h-[54px] p-5 border-[#49BBBD] border-2 rounded-full' /> 
        <br /> <br />
        <label className='float-left text-lg'>Password</label>
        <br /><br />       <div className="relative w-full container mx-auto ">
      <input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Enter Your Password"
        className="w-full
        border-[#49BBBD] border-2 rounded-full
        px-4
        h-[54px]
        py-2
        text-base
        outline-none
        focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
      />
      <button
        className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <g clip-path="url(#clip0_28_200)">
          <path d="M8.86328 6.14928L11.44 8.72597L11.4522 8.591C11.4522 7.2372 10.352 6.13701 8.99825 6.13701L8.86328 6.14928Z" fill="black"/>
          <path d="M8.99795 4.50094C11.2556 4.50094 13.0879 6.33326 13.0879 8.59093C13.0879 9.11854 12.9816 9.62161 12.7976 10.0838L15.1902 12.4764C16.4254 11.4457 17.3988 10.1124 18 8.59093C16.5808 4.99994 13.092 2.45596 8.99798 2.45596C7.85278 2.45596 6.75669 2.66045 5.73828 3.02855L7.50515 4.79132C7.96727 4.61137 8.47034 4.50094 8.99795 4.50094Z" fill="black"/>
          <path d="M0.817983 2.27202L2.68301 4.13706L3.05521 4.50926C1.70552 5.56447 0.638037 6.96735 0 8.59104C1.41515 12.182 4.90798 14.726 8.99797 14.726C10.2659 14.726 11.4765 14.4806 12.5849 14.0348L12.9326 14.3825L15.317 16.771L16.36 15.7321L1.86093 1.22908L0.817983 2.27202ZM5.34153 6.79146L6.60533 8.05527C6.56852 8.23115 6.54398 8.40699 6.54398 8.59104C6.54398 9.94484 7.64417 11.045 8.99797 11.045C9.18202 11.045 9.3579 11.0205 9.52968 10.9837L10.7935 12.2475C10.2495 12.5174 9.64421 12.681 8.99797 12.681C6.7403 12.681 4.90798 10.8487 4.90798 8.59104C4.90798 7.94484 5.07159 7.33951 5.34153 6.79146Z" fill="black"/>
          </g>
          <defs>
          <clipPath id="clip0_28_200">
          <rect width="18" height="18" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </button>
    </div>

        <div className="flex items-center justify-between mt-5">
            <label className="flex items-center">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 "/>
                <span className="ml-2 text-gray-700 text-xs font-light">Remember me</span>
            </label>
            <a href="hht" className="font-light text-gray-600 hover:text-gray-900  text-xs">Forgot Password?</a>
        </div>


           
            <button className='float-right text-xl text-white rounded-full bg-[#49BBBD] px-24 py-3 mt-10 '>Register</button>
            <div>
                
            </div>

           
    </div>

    </div> 
  )
}

export default Register
