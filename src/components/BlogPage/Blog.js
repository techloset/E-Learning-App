import React, {useState} from 'react'
import pic from "../../images/news_big_picrure.png"
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import picture from "../../images/news_big_picrure.png"
import js from "../../images/js.png"
import php from "../../images/php.png"
import react from "../../images/react.png"
import ui from "../../images/ui.png"
import card from "../../images/card.png"
import icon from "../../images/nav_girl.png"
import Card from "../Card"

const bloglist=[
    {
        img:ui,
        title:"UX/UI",
    },
    {
        img:react,
        title:"React",
    }, {
        img:php,
        title:"PHP",
    }, {
        img:js,
        title:"JavaScript",
    },
]
const Blog = () => {
    const [viewsOpen, setViewsOpen] = useState(true);
 

  const toggleViews = () => {
    setViewsOpen(!viewsOpen);
  };


  const [cards, setCards] = useState([
    {
        id : 1,
        image:card,
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
        views:"251232"
    },
    {
        id : 2,
        image:pic,
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
        views:"251232"
    }, {
        id : 3,
        image:pic,
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
        views:"251232"
    }, {
        id : 4,
        image:card,
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
        views:"251232"
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(2);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard); 

  const handleToggleReadMore = (index) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      updatedCards[index] = { ...updatedCards[index], showMore: !updatedCards[index].showMore };
      return updatedCards;
    });
  };

   
  return (
    <div>
        <div className=' bg-[#9DCCFF] bg-opacity-20' >
        <br /> <br />                               
                                                     {/* why swift ui should be on the radar */}
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-12 lg:mx-16 xl:mx-20 gap-8 xl:gap-16  ' style={{fontFamily:"poppins"}}>
                <div className='' >
                    <p className='text-black text-2xl ' >  By Themadbrains in <span className='text-[#49BBBD]'>inspiration</span> </p>
                    <br />
                    <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-[#2F327D]'>Why Swift UI Should Be on the <br /> Radar of Every Mobile <br /> Developer</h1>
                    <br />
                    <p className=' text-lg xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempos Lorem ipsum dolor sitamet, <br /> consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <br />
                    <button className='bg-[#49BBBD] text-white rounded-2xl px-11 py-4 text-base font-bold'>Start learning now</button>
                </div>
                <div className='lg:mt-4 xl:mt-0'>
                    <img  className='rounded-xl  lg:h-[350px]  xl:h-[390px]  ' src={picture} alt="" />
                </div>
            </div>
            <br /> <br />
        </div>  
        <br /> <br /> 
       

        
{/* reading blog list  */}

      <div className='lg:mx-16 mx-12 xl:mx-20 flex-col ' style={{fontFamily:"poppins"}}>
    
        <div className='flex justify-between'>
        <div className='font-bold text-xl md:text-[30px] '>Reading blog list</div>
        {/* <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div> */}
        </div>
        <br /> <br />

 {/* <div className='flex  justify-between'> */}
  <div className="grid grid-cols-1 xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 gap-8">
    {bloglist.map((val, index) => (
      <div className="relative w-full " key={index}>
        <img src={val.img} className='w-full lg:w-[300px] lg:h-[260px] rounded-xl' alt='myImage' />
        <div className='absolute  top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <button className="text-2xl bg-[#FFFFFFB2] text-black rounded-xl py-2 px-12  h-14 w-56 text-center justify-center mx-auto  font-bold">{val.title}</button>
        </div>
      </div>
    ))}
  </div>
{/* </div> */}
    </div>
 <br /> <br />
{/* =================================related blog================================== */}

 <div className='bg-[#9DCCFF] bg-opacity-20 ' style={{fontFamily:"poppins"}}>
        <br /> <br />
        <div className='lg:mx-16 mx-12 xl:mx-20'>
            <div className='flex justify-between'>
            <div className='font-medium text-xl md:text-[30px]  '>Related Blog</div>
            <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
            </div>
            <br /><br />
    

            {/* two cards design  */}

<div  className='grid md:grid-cols-2  gap-x-12 xl:gap-x-24 gap-y-12 '>
      {currentCards.map((card, index) => (
        <div className="mx-auto  bg-white shadow-md overflow-hidden px-4 sm:px-7 py-7 sm:py-12 rounded-xl" key={index}>
          <img src={card.image} alt={card.title} className="rounded-xl w-full  h-[300px] " />
          <div className="p-4">
            <h2 className="text-xl lg:text-2xl font-bold mb-2">{card.title}</h2>
            <div className="flex items-center space-x-4 mb-4">
              <img src={icon} alt="ProfilePicture" className="w-10 h-10 rounded-full" />

              <span className="text-gray-700">Lina</span>
            </div>
            
            {card.showMore ? (
            <p className='text-[#696984] '>{card.descriptionmore}</p>
          ) : (
            <p className='text-[#696984] '>{card.descriptionless}</p>
          )}
          <br />
        <div className="flex items-center justify-between">
          <button className='underline text-[#696984] ' onClick={() => handleToggleReadMore(index)}>
            {card.showMore ? 'Read Less' : 'Read More'}
          </button>
          <div className="text-gray-600">
          <div className="text-gray-600 flex items-center">
            <button className="focus:outline-none" onClick={(index)=>toggleViews(index)}>
              {viewsOpen ? (
                <svg className="h-5 w-5 text-[#49BBBD] hover:text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg>
                
              ) : (
                <svg className="h-5 w-5 text-[#49BBBD] hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
              </svg>
              
              )}
            </button>


            {/* view button  */}
            {viewsOpen && <span className="ml-1 text-[#696984] ">{card.views}</span>}
            
          </div>
          </div>
          </div>
          </div>
        </div>
        
      ))}
    
     
    </div>

    <br /> <br />
    <div className="flex justify-end">
        
        <button
          className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold mr-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


        </button>
        <button
          className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold"
          onClick={handleNextPage}
          disabled={indexOfLastCard >= cards.length}
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>


          
        </button>
      </div>

      <br /> <br />
        </div>
       
 </div>


                {/* ======================================================marketing articles==================================================== */}

<br /><br />
<div className='mx-16 lg:mx-16 xl:mx-20' style={{fontFamily:"poppins"}}>
    <div className=''>
    <div className='flex justify-between'>
            <div className='font-medium text-xl md:text-[30px]  '>Marketing Articles</div>
            <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
    </div> 
    <br /> <br /> 
   

    </div>
</div>
<Card/>

<br /><br /> <br /><br />
    </div>
  )
}

export default Blog