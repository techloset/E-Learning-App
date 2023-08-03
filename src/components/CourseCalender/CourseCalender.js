import React,{useState} from 'react'
import CalenderOptions from '../CalenderOptions'
import { GreenNav } from '../CalenderOptions'

const CourseCalender = () => {


  const [currentDate, setCurrentDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1);
      return prevMonthDate;
    });
  };

  const nextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonthDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1);
      return nextMonthDate;
    });
  };

  const getMonthName = (date) => {
    const options = { month: 'long', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 2).getDay();
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      blanks.push(<div key={`blank-${i}`} className="calendar-day empty"></div>);
    }

    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div key={`day-${day}`} className="calendar-day">
          {day}
        </div>
      );
    }

    return [...blanks, ...days];
  };

  return (
    <div className='flex xl:flex-row flex-col bg-[#9DCCFF] '>
        
        <div className=' xl:w-[39%] '>
                <CalenderOptions/>
        </div>

            
   
   <div className='xl:w-[70%] '>
    <GreenNav/>   
        <div className='bg-[#9DCCFF] p-6'>
            <p className='text-2xl  font-semibold'>Share and refer</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem <br />Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <br /><br />


            {/* complete white calender area */}
            <div className='bg-white  rounded-xl p-6 flex md:flex-row flex-col'>
              {/* calender  */}

            <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <button className="px-2 py-1" onClick={prevMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

        </button>
        <h1 className="text-xl font-bold">{getMonthName(currentDate)}</h1>
        <button className="px-2 py-1" onClick={nextMonth}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

        </button>
      </div>
      <div className="grid grid-cols-7 font-semibold gap-8">
       
        {renderCalendar()}
      </div>
    </div>

    <div className='border-r border-gray-300 '></div>     
{/* second section of the calender */}
 <div className="container mx-auto p-4">
      <div className=" items-center justify-between mb-4">
        <div className='mx-auto text-center'>
                 <h1 className="text-xl font-bold">{getMonthName(currentDate)}</h1>
        </div>
 
       <div className='flex justify-between '>
        <p className='mr-4 font-semibold '>2PM</p>
        <hr className='border mt-3 bg-[#696984] w-full h-[0.3px] text-[#696984] ' />
       </div>
       <div className='bg-[#edafab] px-5 py-4 xl:w-56 w-48 sm:text-base text-sm   md:w-3/4  mx-12 rounded-xl font-semibold text-[#EE645B]'>
        Adobe XD Live Class
       </div>
       <div className='flex justify-between '>
        <p className='mr-4 font-semibold '>3PM</p><br /><br />
        <hr className='border mt-3 bg-[#696984] w-full h-[0.3px] text-[#696984] ' />
       </div>

       <div className='flex justify-between '>
        <p className='mr-4 font-semibold '>4PM</p><br /><br />
        <hr className='border mt-3 bg-[#696984] w-full h-[0.3px] text-[#696984] ' />
       </div>

       <div className='flex justify-between '>
        <p className='mr-4 font-semibold '>5PM</p><br /><br />
        <hr className='border mt-3 bg-[#696984] w-full h-[0.3px] text-[#696984] ' />
       </div>

       <div className='flex justify-between '>
        <p className='mr-4 font-semibold '>6PM</p>
        <hr className='border mt-3 bg-[#696984] w-full h-[0.3px] text-[#696984] ' />
       </div>
      </div>
      
    
    </div>

            </div>



         
        </div>

         </div>
            <br /><br /><br />  <br /><br /><br />    <br /><br /><br />  <br /><br /><br />    <br /><br /><br />  <br /><br /><br />    
              
       

    </div>
  )
}

export default CourseCalender
