import React,{useState} from 'react'
import icon from "../images/profileBlogicon.png"
import picture from "../images/news_big_picrure.png"
import computer from "../images/computer.jpg"
import comp from "../images/comp.png"
import react from "../images/react.png"


const CardsClicks = () => {
    const articles=[
      {
        img:picture

        
    },
    {
       img:computer
    },
    {
        img:picture

        
    },{

        img:comp
    },
    {
      img:picture

      
  },
  {
     img:computer
  },
  {
      img:picture

      
  },{

      img:comp
  },

    
      ]

      const [startIndex, setStartIndex] = useState(0);
      const [visibleCards, setVisibleCards] = useState(articles.slice(0, 4));
    
  
      const handleNext = () => {
        if (startIndex + 4 < articles.length) {
          setStartIndex(startIndex + 1);
          setVisibleCards(articles.slice(startIndex + 1, startIndex + 5));
        }
      };
    
      const handlePrev = () => {
        if (startIndex > 0) {
          setStartIndex(startIndex - 1);
          setVisibleCards(articles.slice(startIndex - 1, startIndex + 3));
        }
      };
    
      const Card = ({ img }) => {
        return (
          <div className="bg-white rounded-lg shadow-lg p-5">
          {/* w-[335px] h-[239px] width and height of the image */}
          <img className=" w-full  h-[239px] rounded-xl" src={img} alt='myimageis here'  />
            <br />
            <div className='flex justify-between'>
                <div className='flex justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#696984]">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

                    <p className='ml-1 text-[#696984]'> Design</p>
                </div>
                <div className='flex justify-between'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#696984]">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                <p className='ml-1 text-[#696984]'>3 Months</p>
                </div>
                </div>
                <br />
                <p className='font-bold text-xl '>AWS Certified solutions Architect</p>
                <br />
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
            <br />
         <div className='flex justify-between'>
            <div className='flex'>
                <img src={icon} alt="ProfilePicture" className="w-10 h-10 rounded-full" />
                <p className='ml-4 mt-1'>Lina</p> 
          </div>

            <div className='flex  '>
                <del className='mt-1 text-[#696984]'>$100</del>
              <p className='text-2xl ml-1 text-[#49BBBD] font-semibold '>$80</p> 
            </div>
          </div>


       
        </div>
//           <div className="bg-white rounded-2xl shadow-lg p-4">
//             <img className=" w-[335px] h-[239px] rounded-xl" src={img} alt='myimageis here'  />
//               <br />
//               <div className='flex justify-between'>
//                   <div className='flex justify-between'>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
// </svg>

//                       <p className='ml-1'> Design</p>
//                   </div>
//                   <div className='flex justify-between'>
//                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
// <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
// </svg>

//                   <p className='ml-1'>3 Months</p>
//                   </div>
//                   </div>
//                   <br />
//                   <p className='font-bold text-xl '>AWS Certified solutions Architect</p>
//                   <br />
//                   <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
//               <br />
//               <div className='flex justify-between'>
//               <div className='flex'>
//                   <img src={icon} alt="ProfilePicture" className="w-10 h-10 rounded-full" />
//                   <p className='ml-4 mt-1'>Lina</p> 
//             </div>

//               <div className='flex  '>
//                   <del className='mt-1'>$100</del>
//                 <p className='text-2xl ml-1 text-[#49BBBD] font-semibold '>$80</p> 
//               </div>
//             </div>
//           </div>
        );
      };
    
      
  return (
    <div className=''>
     

    <div className="flex justify-between">
<div className="items-center relative ">
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
{visibleCards.map((testimonial) => (
<Card
key={testimonial.id}
img={testimonial.img}

/>
))}
</div>
</div>

</div>
<br /><br />
<div className="flex  justify-end">

<button
className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold mr-2"
onClick={handlePrev}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


</button>
<button
className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold"
onClick={handleNext}
>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>   
</button>
</div>
<br /><br />
    </div>
  )
}

export default CardsClicks
