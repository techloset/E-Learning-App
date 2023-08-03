
import React, { useState } from 'react';
import news_big_picrure from '../../images/news_big_picrure.png'
const Card = ({ cards }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  return (
  <div  > 
{/* Heading for the latest News */}
 <div className='mx-auto text-center ' style={{ fontFamily: 'Poppins' }}>
<p className='text-[#2F327D] text-4xl   font-bold py-5'>
    Latest News and Resources
</p>
<p className='text-[#696984] text-2xl'>See the developments that have occurred to TOTC in the world</p>       
</div>


<div className='justify-evenly flex px-[100px] py-5 mx-auto  flex-col lg:flex-row '>

      <div
  class="py-5 lg:w-[50%]  ">
  <img
    class=""
    src={news_big_picrure}
    alt="" />

<br />
   
  <div class="flex flex-col justify-start ">
  <button className='bg-[#49BBBD] text-white text-xl py-2 px-4 rounded-full w-1/4'>NEWS</button>
    <h5
      class="mb-2 text-[26px] font-medium text-neutral-800 dark:text-neutral-50">
      Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution
    </h5>
    <p class="mb-4 text-xl text-neutral-600 dark:text-neutral-200">
    Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...
    </p>
    <a class="text-xl text-neutral-500 dark:text-neutral-300" href='..'>
      Read more
    </a>
  </div>
</div>


    <div className="  lg:w-[50%] ">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-white mt-6  cursor-pointer 
           ${
            expandedCard === index ? '' : ''
          }`}
          // onClick={() => toggleExpanded(index)}
        >
          <div className='flex flex-col sm:flex-row  px-18 '>
            <div>
               <button className='bg-[#49BBBD] mt-28 ml-28 absolute text-white py-2 px-4 rounded-full'>{card.buttonText}</button>
                <img
            src={card.image}

            alt={card.title}
            className="w-[500px] h-[180px]  rounded-md  mx-12 " 
          />
         
            </div>
          <div className=' flex-col  ml-14 '>
          <h2 className="text-[22px] font-medium">{card.title} <br /></h2>
          
          <p className="text-gray-600 text-xl">{card.description}</p>
          </div>
          </div>          
        </div>
      ))}
 
    </div>
    

  </div>

    </div>
  );
};

const LatestNews = () => {
  const [card,setCard] = useState(
    {
      image:"http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png",
      buttonText: 'PRESS RELEASE',
      title:"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      description:"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      
    }
   )
  const cards = [
    {
      image: 'http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png',
      title: 'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
      description: 'Class Technologies Inc., the company that created Class,...',
      buttonText: 'PRESS RELEASE',
    },
    {
      image: 'http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png',
      title: 'Zoom’s earliest investors are betting millions on a better Zoom for schools',
      description: 'Zoom was never created to be a consumer product. Nonetheless, the...',
      buttonText: 'NEWS',
    },
    
    {
      image: 'http://localhost:3000/static/media/news_big_picrure.af412a83ab12d3a41f54.png',
      title: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
      description: 'This year, investors have reaped big financial returns from betting on Zoom...',
      buttonText: 'NEWS',
    }
  ];

  return <Card cards={cards} />;
};

export default LatestNews;
