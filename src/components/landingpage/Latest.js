import React from 'react'
import { useState } from 'react'
import login from '../../images/login.png'
// import { dialogBody } from '@material-tailwind/react'
import tablet from "../../images/tablet.png"
import comp from "../../images/comp.png"
import ui from "../../images/ui.png"
import Rectangle from "../../images/Rectangle.png"
import js from "../../images/js.png"
import call1 from "../../images/call1.png"
import picture from "../../images/news_big_picrure.png"


const Latest = () => {
   
    const [isShowMore, setIsShowMore] = useState(false);
    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
      };

    
    const [card,setCard] = useState({
        image:picture,
        buttonText: 'NEWS',
        title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
        description:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        readMore:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
        
        
    })

    const diplayCard=(image,buttonText,title,description,readMore)=>{
        setCard((prevDetails)=>{
            return {
                ...prevDetails,
                 buttonText,
                image,
                title,
                description,
                readMore
                }
        })

    }

    
    const Card = ({ image, title, buttonText, description, onClick }) => (


        

        <div>
    <div className="bg-white rounded-lg px-4 md:px-6 cursor-pointer md:flex" onClick={onClick}>
      <div className="mb-4 md:mb-0 md:mr-4 lg:mr-5 relative w-full md:w-[50%] xl:w-[100%] 2xl:w-[80%]">
        <img src={image} alt="" className="w-full lg:w-[300px] xl:w-[400px] xl:h-[170px] 2xl:w-[450px]" />
        <button className="absolute bottom-4 right-4 bg-[#49BBBD] rounded-full px-3 py-1 text-white">
          {buttonText}
        </button>
      </div>

      <div className="flex flex-col mt-2 md:mt-0">
        <p className="mb-1 font-semibold text-xl text-neutral-600 dark:text-neutral-200">
          {title}
        </p>
        <p className="mb-2 text-lg text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
      </div>
    </div>
  </div>

















)

  return (
    <div className='2xl:mx-20 mx-10'  >

{/* Heading for the latest News */}
        <div className='text-center ' >
            <p className='text-[#2F327D] text-4xl sm:text-4xl   font-bold py-5'>Latest News and Resources</p>
            <br />
            <p className='text-[#696984]  text-2xl'>See the developments that have occurred to TOTC in the world</p>  
            <br /><br /><br />     
        </div>

    <div className='grid xl:grid-cols-2 gap-6 2xl:gap-12  '>


        <div className=''>    
           
               <img src={card.image} className='md:w-[640px]  sm:w-[500px]  sm:h-[340px] ' alt="" /> 
            <br />
            <button className='bg-[#49BBBD] text-white  text-xl py-2 px-9 rounded-full '>{card.buttonText}</button> 
        <br />
            <div className=''>
               <p      className="mb-2 mt-4 text-2xl md:text-[26px] font-semibold sm:w-auto text-neutral-800 dark:text-neutral-50"> {card.title}</p>
{isShowMore && (
  <p className='text-xl  sm:w-auto text-neutral-600 dark:text-neutral-200'>
   Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
   </p>
)}

             
                <p className="mb-4 text-xl  sm:w-auto text-neutral-600 dark:text-neutral-200">{card.description}</p> 
              

<button onClick={toggleReadMoreLess} className='underline '>
  {isShowMore ? "Read Less" : "Read More"}
</button>
<br /><br /><br />
                 
            </div>
            

        </div>
    
            
        <div className=' grid gap-y-6 '>
           <Card
                image={tablet}
                buttonText= 'PRESS RELEASE'
                title="Class Technologies Inc. Closes $30 Million Series A Financing to Meet High "
                description="Class Technologies Inc., the company that created class..."
               onClick={()=>{
                diplayCard(
                  `${tablet}`,
                   " PRESS RELEASE",
                   "Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand ",
                   "Class Technologies Inc., the company that created Class is this "

                )
               }}

                />



<Card
                image={comp}
                buttonText= 'NEWS'
                title="Zoom’s earliest investors are betting millions on a better Zoom for schools"
                description="Zoom was never created to be a consumer product. Nonetheless..."
               onClick={()=>{
                diplayCard(
                  `${comp}`,
                   " NEWS",
                   "Zoom’s earliest investors are betting millions on a better Zoom for schools",
                   "Zoom was never created to be a consumer product. Nonetheless, and given by that"

                )
               }}/>
               

      <Card
                image={ui}
                buttonText= 'NEWS'
                title="Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"
                description="This year, investors have reaped big financial returns from betting... "
               onClick={()=>{
                diplayCard(
                    `${ui}`,
                   " NEWS",
                   "Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms",
                   "This year, investors have reaped big financial returns from betting on Zoom  "

                )
               }}/>
        </div>

    </div>
    <br /><br />
    </div> 
  )
}

export default Latest
