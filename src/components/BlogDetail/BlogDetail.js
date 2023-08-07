import React,{useState} from 'react'
import "../CourseDetail/CourseDetail.css"
import icon from "../../images/profileBlogicon.png"
import card from "../../images/card.png"
import card2 from "../../images/news_big_picrure.png"
import card3 from "../../images/card2.png"

const BlogDetail = () => {

    const [viewsOpen, setViewsOpen] = useState(true);
 

    const toggleViews = () => {
      setViewsOpen(!viewsOpen);
    };
  
    const [cards, setCards] = useState([
      {
          id : 1,
          image:card,
          title:" Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
          descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
          descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
          views:"251232"
      },
      {
          id : 2,
          image:card2,
          title:" Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
          descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
          descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
          views:"251232"
      }, {
          id : 3,
          image:card3,
          title:" Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
          descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
          descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
          views:"251232"
      }, {
          id : 4,
          image:card,
          title:" Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
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
        <div className="bg-cover h-[652px] bgimg bg-center flex items-center justify-center" >
       </div><br /><br />
       
       <div className='md:mx-14 mx-8 lg:mx-20 xl:mx-28'>
            <p className='font-semibold  text-4xl text-[#2F327D] '>Why Swift UI Should Be on the Radar of Every Mobile Developer</p>
            <br />
            <p className='text-[#696984] text-xl '>
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            <br /><br />
            TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.  <br />
TOTC is a platform 
<br /><br />
TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage 
            </p>
            
            <br />
            <div className='flex flex-col sm:flex-row '>
                <button className='bg-[#49BBBD1A] text-[#696984] px-6 py-3 mx-4 my-2 sm:my-0  rounded-full '>affordable</button>
                <button className='bg-[#49BBBD1A] text-[#696984] px-6 py-3 mx-4 my-2 sm:my-0 rounded-full '>Stunning</button>
                <button className='bg-[#49BBBD1A] text-[#696984] px-6 py-3 mx-4 my-2 sm:my-0 rounded-full '>making</button>
                <button className='bg-[#49BBBD1A] text-[#696984] px-6 py-3 mx-4 my-2 sm:my-0 rounded-full '>madbrawns</button>
            </div>

            <br />

            <hr className='border-2 border-gray-500' />

            <br />
{/* <img src="../../images/card2.png" alt="" /> */}

            <div className='flex justify-between'>
                <div className='flex'>
                    <img src={icon} className='rounded-xl mr-3 w-10 bg-gray-300  h-10' alt="" />
                    <div>
                        <p>Written by</p>
                        <b>Lina</b>
                    </div>
                </div>
               <button className='py-3  text-[#49BBBD] font-semibold px-16 sm:px-20 border-[#49BBBD] rounded-xl border'>Follow</button>
            </div>
       </div>


       <br /><br /><br />

       {/* =================================related blog================================== */}

 <div className='bg-[#9DCCFF] bg-opacity-20 ' style={{fontFamily:"poppins"}}>
        <br /> <br />
        <div className='lg:mx-20 md:mx-14 mx-8 xl:mx-28'>
            <div className='flex justify-between'>
            <div className='font-medium text-[30px] '>Related Blog</div>
            <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
            </div>
            <br /><br />
    

            {/* two cards design  */}

<div  className='grid lg:grid-cols-2  lg:gap-x-10 xl:gap-x-24 gap-y-12 '>
      {currentCards.map((card, index) => (
        <div className="mx-auto  bg-white shadow-md overflow-hidden px-3 sm:px-7 py-6 sm:py-12 rounded-xl" key={index}>
          <img src={card.image} alt={card.title} className="rounded-xl h-80 w-full " />
          <div className="p-4">
            <h2 className="sm:text-2xl text-xl font-bold mb-2">{card.title}</h2>
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
          <div className="text-gray-600  flex items-center">
            <button className="focus:outline-none" onClick={(index)=>toggleViews(index)}>
              {viewsOpen ? (
                <svg className="h-5  w-5 text-[#49BBBD] hover:text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg>
                
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>


        </button>
        <button
          className="bg-[#49BBBD] hover:bg-[#49BBBD80] text-white py-2 px-4 rounded font-bold"
          onClick={handleNextPage}
          disabled={indexOfLastCard >= cards.length}
        >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>


          
        </button>
      </div>

      <br /> <br />
        </div>
       
 </div>



    </div>
  )
}

export default BlogDetail
