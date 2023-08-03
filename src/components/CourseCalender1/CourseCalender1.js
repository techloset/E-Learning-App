import React from 'react'
import CalenderOptions from '../CalenderOptions'
import { GreenNav } from '../CalenderOptions'





const CourseCalender1 = () => {

  return (
    <div className='flex xl:flex-row flex-col'>
        
        <div className=' xl:w-[39%] '>
                <CalenderOptions/>
        </div>
                  
   
   <div className='xl:w-[70%] '>
    <GreenNav/>   
        <div className='bg-[#9DCCFF]  p-6'>
            <p className='text-2xl  font-semibold'>Create new event</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem</p>
            <br /><br />
            <div className='bg-white  rounded-xl p-6'>
                <label className='text-2xl  font-semibold' htmlFor="EventName">Event Name</label> <br /> <br />
                <input type="text" className='w-full rounded-xl border-2  p-4'   id="EventName" placeholder='Adobe XD Auto - Animate : YourGuide to Creating'/>
                <br /> <br />

                {/* =========two input ========== */}
                <div className='grid grid-cols-2 gap-6'>
                    <div className='w-full'>
                    <label className='text-2xl  font-semibold' htmlFor="EventName">Start date / Time</label> <br /> <br />
                <input type="text" className='w-full rounded-xl border-2  p-4'   id="EventName" placeholder='September 24, 2017 07:59 am'/>
                    </div>

                    <div className='w-full'>
                    <label className='text-2xl  font-semibold' htmlFor="EventName">End Date / Time</label> <br /> <br />
                <input type="text" className='w-full rounded-xl border-2  p-4'   id="EventName" placeholder='September 24, 2017 07:59 am'/>
               
                    </div>
                </div>


                <br />
                <label className='text-2xl  font-semibold' htmlFor="EventName">Location</label> <br /> <br />
                <input type="text" className='w-full rounded-xl border-2  p-4'   id="EventName" placeholder='2118 Thornridge Cir, Syracuse, Connecticut 35624'/>
                <br /> <br />


                    {/* =========two input ========== */}
                <div className='grid grid-cols-2 gap-6'>
                    <div className='w-full'>
                    <label className='text-2xl  font-semibold' htmlFor="EventName">Notification</label> <br /> <br />
                <input type="text" className='w-full rounded-xl border-2  p-4'   id="EventName" placeholder='30 minutes'/>
                    </div>

                    <div className='w-full'>
                    <label className='text-2xl  font-semibold' htmlFor="EventName">Email</label> <br /> <br />
                <input type="text" className='w-full rounded-xl border-2  p-4'   id="EventName" placeholder='jessica.hansome@example.com'/>
                    </div>

                    </div>
<br />
                    <div className='w-full'>
                    <label className='text-2xl  font-semibold' htmlFor="EventName">Event Description</label> <br /> <br />
              <textarea name="" className='w-full border resize-none p-4 rounded-xl'  placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur ' id="" cols="30" rows="8"></textarea>
                    </div>
<br />
                    <button className='text-white px-16 py-3 text-xl font-semibold bg-[#49BBBD] rounded-xl float-right '>Save Now</button>

            <br />
            <br /><br /><br />
            </div>
          
        </div>

         </div>
         
              
       

    </div>
  )
}

export default CourseCalender1
