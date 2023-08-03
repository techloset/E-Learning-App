import React from 'react'
import login from '../../images/login.png'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import { app } from '../../Firebase';
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const db = getDatabase(app);
    const auth = getAuth(app);
    

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
      }

      const Register=()=>{
        // history.push('/register');
        navigate('/register');
      
      }

      const LoginUser =  () => {
        createUserWithEmailAndPassword(auth, email, password ).then((value)=>
        console.log(value)
      );};
      
      const conect=()=>{
        set(ref(db, 'users/' ), {
    username: "tab",
    email: "noo",
    profile_picture : "why"
  });
      }
      
    

  return (
    <div className='flex  xl:flex-row  flex-col '>

        <div className='text-white hidden lg:block py-[38px] pl-[38px] text-center mx-auto  '>
            <img src={login}  alt=""  className='block max-w-full max-h-[100%]'/>
            <div className='relative z-10 -mt-36 mb-12'>
            <h2 className='text-4xl font-bold  px-[69px]'>Lorem Ipsum is simply </h2><br />
            <p className='text-2xl  px-[69px]'>Lorem Ipsum is simply </p>
            </div>
        </div>

        <div className=' justify-center px-5  w-[454px]  mx-auto mb-36 lg:mb-16' > 

            <h4 className='text-center text-lg mt-36'>Welcome to Lorem..!</h4>

            <div className='text-lg w-[329px] justify-center content-center rounded-full px-3 my-6 py-2 text-white  bg-[#83d0d2] flex items-center text-center mx-auto'>
                <button className=' rounded-full py-2 bg-[#49BBBD] px-14'>Login</button>
                <button   onClick={Register} className=' text-lg  font bg-[#83d0d2]  py-[10px] px-10' > Register</button>   
            </div>

            <p className='my-14 text-lg float-left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <label className='float-left text-lg mb-6'>User name</label>
             <input
              onChange={(e)=>setEmail(e.target.value)} 
              value={email}
            type="text" placeholder='Enter your User name' 
            className='w-full  h-[54px] p-5 border-[#49BBBD] border-2 rounded-full' /> 
            <br /> <br />
            <label className='float-left text-lg'>Password</label>
            <br /><br />
            <div className="relative w-full container mx-auto ">
      <input
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
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
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
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
            <br /><br />


            <div className="flex items-center justify-between">
                <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 "/>
                    <span className="ml-2 text-gray-700 text-xs font-light">Remember me</span>
                </label>
                <a href="hht" className="font-light text-gray-600 hover:text-gray-900  text-xs">Forgot Password?</a>
            </div>


                <br /><br />
                <button onClick={LoginUser} className='float-right text-xl text-white rounded-full bg-[#49BBBD] px-24 py-3 '>Login</button>
               
        </div>

        </div> 
         )
}

export default Login
