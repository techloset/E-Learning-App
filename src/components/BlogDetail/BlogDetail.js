import React,{useState} from 'react'
import "../CourseDetail/CourseDetail.css"
import icon from "../../images/profileBlogicon.png"
import card from "../../images/card.png"
import card2 from "../../images/news_big_picrure.png"
import card3 from "../../images/card2.png"

const BlogDetail = () => {

    const [viewsOpen, setViewsOpen] = useState(false);
 

    const toggleViews = () => {
      setViewsOpen(!viewsOpen);
    };
  
    const articles=[
      {
          img:"https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1688342400&Signature=OzEgcImasDBEmvqlqbTCv8345j72PvfOQmt39Ou5lJ8322L4CubGxKGgmb2ibnTSHj-jcNm5v-lx1DjLzdaC7jShO6NVW5zC5f5anr~4xsHMUDxlPR1hdTsJ0vHuo7a2RKdOjrUWwHECOSztK-NJ7zyqQBq7jdi7FJWwfas~0~jS67ktm4H0BVPp-1oVuMqMVhptixDxOsK~JrtddTaCsUWG~QSGaNiSd~AKf6ccPtXKWwO2AiyWfS4I5hvU9L--NXyE8fUujWWW5rgcY12rlXLAHE7pi~PLs6Jp6gwFgSEDtn4idPM8d6Q~hJvzJyb7af5KduNBVzhDKFml-sKNuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  
          
      },
      {
         img:"https://s3-alpha-sig.figma.com/img/9150/3c25/c25d4396ab15991e79418fb801fd5efa?Expires=1688342400&Signature=HGzYZVOvKvFvOfc1VfwNGYGZy9XOBFBo6E9FXrlmZwYQ1tU6RpOkXdhgw3-MLS~1W-kCzPEXeYqt4-MH5qyjTi88dhBbgzop4BWLVLyUcz1CVU9ZLeeysQgS1-TVqAIF9liR3ms8c2czGSVq913YGCXQnq8-dOyAkCK294VLheaV~Jeq-F3OkaOwJ59hwco6--8z3AB8F2LoZts02DWCAryyXMTb6Couo~IE2tnYUA2i-n5fYdHEb7X5oBO-B9TgWmJD8tv8ypYiA5Uc8FryM4LIPlmi5pLgZ~vaFaBrYTSoFYWFm2unPV6tofZQqUQ6VhNguQj2XGXemxqysE1GIg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      },
      {
          img:"https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1688342400&Signature=V5xWUmzGtCwxwvdl-7lBecAcRZb7J7sIoL603CIofgvu~mPL5QrcrMKdKLz9oUu7KCv2BDhjPxtrMIfo-QU8EaauSA9QHVcvdFBXrRCqLm7Dgo4Y8aDyva17NwmhbqhArySOTt0nu7Jldj-zbnga~rBl4LgjoCt0hxZJ9flkahUkyQzDw0DyvSIWquDeCUVLngfw4SzgD8d7OsFlkgNUI6aHtnGAAyQ0tOSEa8ZqC-Vz1pB-cx2kWYkV0FJ9g2UDLCGrOiNrBY~UMDYBlGkQciNHMd5JdaEAhIqB35NdBq8DaQ0ml1Icfz-LkLEh9d7RHUeZe~gKjCA3eaYY1Rs03w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  
          
      },{
  
          img:"https://s3-alpha-sig.figma.com/img/e4c7/276a/25a9cc6960c67cafa4666142463a3cc6?Expires=1688342400&Signature=p1a7XLq4~svUz2zwnKiJFg3Bp2iRuJHQyE84C2tnVvvIGBO3fiIv7ZoonVXrGaMFXC-rc9Ig19qmVMes1FjKbIRcTEi3j-uStiTYsBS6M5UtjwKkRdVtzssV4mz3-3IZSqE37AzdjU0yFpx1wMn1y1UatV1tZ29nBmKk1puK5JO~jr3BGAID5GxddHqpZhwDmSOqM~KKegaUcqEAu4Cs9zkvQO9f1dydyP74VQDOWpJ2hrE0~5XYXQ76X615MDKVhqWa3AZMTThmppyx-4eVrShYt8AdIwdtLRvxU6z8Du-S2cDRJMW5QaMsEjDC-KHE3V8691vwSur5mlJHtfOWig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
          
      },
  
    ]
  
    const [cards, setCards] = useState([
      {
          id : 1,
          image:"http://localhost:3000/static/media/card.b48975627affe1ff4c71.png",
          title:" Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
          descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
          descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
          views:"251232"
      },
      {
          id : 2,
          image:"http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png",
          title:" Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
          descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
          descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
          views:"251232"
      }, {
          id : 3,
          image:"http://localhost:3000/static/media/card2.c21177d59ce5309e4373.png",
          title:" Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
          descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
          descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
          views:"251232"
      }, {
          id : 4,
          image:"http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png",
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
            <p>{card.descriptionmore}</p>
          ) : (
            <p>{card.descriptionless}</p>
          )}
          <br />
        <div className="flex items-center justify-between">
          <button className='underline' onClick={() => handleToggleReadMore(index)}>
            {card.showMore ? 'Read Less' : 'Read More'}
          </button>
          <div className="text-gray-600">
          <div className="text-gray-600 flex items-center">
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
            {viewsOpen && <span className="ml-1">{card.views}</span>}
            
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
