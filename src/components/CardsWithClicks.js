import React,{useState} from 'react'
import icon from "../images/profileBlogicon.png"
// import tablet from "../../images/tablet.png"
// import comp from "../../images/comp.png"
// import ui from "../../images/ui.png"
// import Rectangle from "../../images/Rectangle.png"
// import js from "../../images/js.png"
// import call1 from "../../images/call1.png"
import picture from "../images/news_big_picrure.png"
import computer from "../images/computer.jpg"
import comp from "../images/comp.png"
import react from "../images/react.png"

const CardsWithClicks = () => {
    const articles=[
      {
        img:picture,

        
    },
    {
       img:comp
    },
    {
        img:computer,

        
    },{

        img:react
    }, {
      img:computer,

      
  },
  {
     img:comp
  },
  {
      img:computer,

      
  },{

      img:react
  },

    
      ]

      const [startIndex, setStartIndex] = useState(0);
      const [visibleCards, setVisibleCards] = useState(articles.slice(0, 3));
    
  
      const handleNext = () => {
        if (startIndex + 3 < articles.length) {
          setStartIndex(startIndex + 1);
          setVisibleCards(articles.slice(startIndex + 1, startIndex + 4));
        }
      };
    
      const handlePrev = () => {
        if (startIndex > 0) {
          setStartIndex(startIndex - 1);
          setVisibleCards(articles.slice(startIndex - 1, startIndex + 2));
        }
      };
    
      const Card = ({ img }) => {
        return (
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <img className=" w-full w-[335px] h-[239px] rounded-xl" src={img} alt='myimageis here'  />
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
                  <img src={icon} alt="ProfilePicture" className="w-10 h-10 rounded-full" />
                  <p className='ml-4 mt-1'>Lina</p> 
            </div>

              <div className='flex  '>
                  <del className='mt-1'>$100</del>
                <p className='text-2xl ml-3 text-[#49BBBD] font-semibold '>$80</p> 
              </div>
            </div>
          </div>
        );
      };
    
      
  return (
    <div className=''>
      <div className="flex justify-end">

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
    <div className="flex justify-between">
<div className="items-center relative ">
<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
{visibleCards.map((testimonial) => (
<Card
key={testimonial.id}
img={testimonial.img}

/>
))}
</div>
</div>

</div>
    </div>
  )
}

export default CardsWithClicks
