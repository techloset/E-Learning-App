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
        img:"http://localhost:3000/static/media/ui.53c5360ad09f11e0be55.png",
        title:"UX/UI",
    },
    {
        img:"http://localhost:3000/static/media/php.7242cb76dfe8e2754bde.png",
        title:"React",
    }, {
        img:"http://localhost:3000/static/media/react.88dace5b30857ac592bf.png",
        title:"PHP",
    }, {
        img:"http://localhost:3000/static/media/js.bc7202374b7dfc1d04e9.png",
        title:"JavaScript",
    },
]
const Blog = () => {
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
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
        views:"251232"
    },
    {
        id : 2,
        image:"http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png",
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
        views:"251232"
    }, {
        id : 3,
        image:"http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png",
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        descriptionless:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        descriptionmore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively",
        views:"251232"
    }, {
        id : 4,
        image:"http://localhost:3000/static/media/card.b48975627affe1ff4c71.png",
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
            <div className='grid grid-cols-1 lg:grid-cols-2 mx-12 lg:mx-16 xl:mx-20 gap-8 xl:gap-16   bg-[#9DCCFF]' style={{fontFamily:"poppins"}}>
                <div className='' >
                    <p className='text-black text-2xl ' >  By Themadbrains in <span className='text-[#49BBBD]'>inspiration</span> </p>
                    <br />
                    <h1 className='font-semibold text-2xl md:text-3xl xl:text-4xl text-[#2F327D]'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                    <br />
                    <p className=' text-lg xl:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
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
        <div className='font-medium text-xl md:text-[30px] '>Reading blog list</div>
        <div className='text-[#49BBBD] text-[20px] font-bold'>See all</div>
        </div>
        <br /> <br />

 {/* <div className='flex  justify-between'> */}
  <div className="grid grid-cols-1 xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 gap-8">
    {bloglist.map((val, index) => (
      <div className="relative w-full " key={index}>
        <img src={val.img} className='w-full lg:w-[300px] lg:h-[260px] rounded-xl' alt='myImage' />
        <div className='absolute  top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <button className="text-2xl bg-[#FFFFFFB2] text-black rounded-xl py-2 px-12  text-center justify-center mx-auto  font-bold">{val.title}</button>
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
                <svg className="h-5 w-5 text-[#49BBBD] hover:text-gray-700"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />  <circle cx="12" cy="12" r="3" /></svg>
                
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
    {/* <div  className='grid   2xl:grid-cols-4  lg:grid-cols-3  md:grid-cols-2 gap-x-8 gap-y-16 '>
        {articles.map((val)=>{
    return(
        <div className="mx-auto grid  bg-white shadow-md overflow-hidden px-7 py-12 rounded-xl" >
        <img className=" w-[335px] h-[239px] rounded-xl" src={val.img} alt='myimageis here'  />
              <br />
              <div className='flex justify-between'>
                  <div className='flex justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
</svg>

                      <p className='ml-3'> Design</p>
                  </div>
                  <div className='flex justify-between'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

                  <p className='ml-3'>3 Months</p>
                  </div>
                  </div>
                  <br />
                  <p className='font-bold text-xl '>AWS Certified solutions Architect</p>
                  <br />
                  <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
              <br />
           <div className='flex justify-between'>
              <div className='flex'>
                  <img src="https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1688342400&Signature=RTQdQ1lfg48W9SuIszsFDalJqHktTqfSi5MOmOPzu-H6V~3EXyISuhw9nd3MWLb59oGeDReiYuoXmCvYBNiK1eBt55VdQluB1TQFALwtxV1xGeAHL3ihmOC90d0wS68Elds2kmayvHfBtY3xywoXYSoWV5wBPmbMTFQHLsfbXz1nu7XAhbaKNkLFPtGd3xNbB1aThMXBx3d1FDLizFeQm-32098qWxkcte8VxLBmitte4JiZAlCHs1CTMyVI79tMmsgCPct47v5S4CBEgEIUKDR8TGU6viyNrnJjGKrGQRqzrYbmq2Cr1f5dzqZvKQ7aXi5rHptOrGcAmgw326P8Bg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="ProfilePicture" className="w-10 h-10 rounded-full" />
                  <p className='ml-4 mt-1'>Lina</p> 
              </div>
              <div className='flex'>
                  <del className='mt-1 mr-4'>$100</del>
                  <p className='text-[#49BBBD] font-bold text-2xl'>$80</p> 
              </div>
           </div>
      </div>
    )
   })}

    </div>
         */}
   

    </div>
</div>
<Card/>

<br /><br /> <br /><br />
    </div>
  )
}

export default Blog