import React,{useState,useEffect} from 'react'
import myimg from "../../images/nav_girl.png"
import news_big_picrure from "../../images/news_big_picrure.png"
import apple from "../../images/apple.png"
import android from "../../images/android.png"
import nav_girl from "../../images/nav_girl.png"


const Card = ({ img,title, content }) => {
    return (
      <div className="bg-white rounded-3xl w-[324px] h-[375px] shadow-lg p-9">
        <img src={myimg} alt="" className='  w-[118px] h-[118px] bg-[#D9D9D9] justify-center mx-auto ' />
        <br />
        <h3 className="text-center text-xl font-semibold mb-2">{title}</h3>
        <p className='justify-center text-[#696984] text-base text-center'>{content}</p>
      </div>
    );
  };

const Accordion = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className="border-b border-gray-300 rounded mb-4">
      <div
        className="flex items-center justify-between py-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex">
          <div className="w-5 h-5 bg-[#55EFC4] rounded-full mr-5 "></div>
          <h2 className="text-lg font-semibold">{question}</h2>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`w-6 h-6 transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          {isOpen ? (
            <path d="M18 15L12 9L6 15" />
          ) : (
            <path d="M6 9L12 15L18 9" />
          )}
        </svg>
      </div>
      {isOpen && (
        <div className="p-4">
          <p className='text-[#696984] '>{answer}</p>
        </div>
      )}
    </div>
      );
    };
const Membership = () => {


    const testimonials = [
        {
          id: 1,
          img:nav_girl,

          title: 'Bulkin Simons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
        },
        {
          id: 2,
          title: 'Bulkin Simons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:nav_girl

        },
        {
          id: 3,
          title: 'Bulkin Simons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:nav_girl

        },
        {
          id: 4,
          title: 'Bulkin Simons',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:nav_girl

        },

        {
            id: 5,
            title: 'Bulkin Simons',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:nav_girl

          }, {
            id: 6,
            title: 'Bulkin Simons',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod',
          img:nav_girl

          },
        
      ];


      const [currentIndex, setCurrentIndex] = useState(0);

    //   const handleNext = () => {
    //     setCurrentIndex((currentIndex + 1) % testimonials.length);
    //   };
    
    //   const handlePrev = () => {
    //     setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
    //   };



  //     const [startIndex, setStartIndex] = useState(0);
  // const [visibleCards, setVisibleCards] = useState(testimonials.slice(0, 4));

  // const handleNext = () => {
  //   if (startIndex + 4 < testimonials.length) {
  //     setStartIndex(startIndex + 1);
  //     setVisibleCards(testimonials.slice(startIndex + 1, startIndex + 5));
  //   }
  // };

  // const handlePrev = () => {
  //   if (startIndex > 0) {
  //     setStartIndex(startIndex - 1);
  //     setVisibleCards(testimonials.slice(startIndex - 1, startIndex + 3));
  //   }
  // };
    
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);

  const updateVisibleCards = () => {
    if (window.innerWidth >= 1500) {
      setVisibleCards(testimonials.slice(startIndex, startIndex + 4));
    } else if (window.innerWidth >= 1280)
    {
      setVisibleCards(testimonials.slice(startIndex, startIndex + 3));
    }
    else if (window.innerWidth >= 1024) {
      setVisibleCards(testimonials.slice(startIndex, startIndex + 2));
    }
      else if (window.innerWidth >= 768) {
      setVisibleCards(testimonials.slice(startIndex, startIndex + 2));
    }
    else {
      setVisibleCards(testimonials.slice(startIndex, startIndex + 1));
    }
  };


  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, [startIndex]);

  const handleNext = () => {
    if (startIndex + 1 < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };


    const Questions=[
        {
            question:"Lorem ipsum dolor sit amet",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
        {
            question:"Consectetur adipiscing elit, sed do ",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },{
            question:"Eiusmod tempos Lorem ipsum",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },{
            question:"Lorem ipsum dolor sit amet",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },{
            question:"Lorem ipsum dolor sit amet",
            answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor , consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor"
        },
    ]
  return (
    <div>
        <br /> <br />
        <h1 className='text-center text-[#49BBBD] text-[64px]  font-extrabold '>Affordable pricing</h1>
        {/* ============================pricing tags=============================== */}
        <section className="bg-white  mx-8 md:mx-16 xl:mx-20 ">
  <div className="py-8 px-4 mx-auto  lg:py-16 lg:px-6">
      <div className="space-y-8 lg:grid lg:grid-cols-3 gap-0 lg:space-y-0">
        
      <div className="flex flex-col p-6  mx-auto max-w-lg text-gray-900 bg-white py-8  dark:bg-gray-800 dark:text-white">
          
                <p className='text-[#49BBBD] font-semibold text-xl '>Like a pussy</p>
                <br />
              <h3 className="mb-4 text-5xl font-bold">Free <span className='text-xs font-bold '>/FOREVER</span></h3>
    
                            <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#C2C2C2] bg-opacity-40 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Components-driven system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#C2C2C2] bg-opacity-40 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Sales-boosting landing pages</span>
                  </li>
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#C2C2C2] bg-opacity-40 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Awesome Feather icons pack </span>
                  </li>
                
              </ul>
              <div className="mt-auto">
    <button className="text-[#49BBBD] text-lg font-bold border-gray-400 py-3 rounded-xl border-2 w-full">Try for free</button>
  </div>

          </div>
        
          <div className="flex flex-col p-6 mx-auto max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <div className='flex justify-between'>
                    <div className='flex'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg> */}
                       <p className='text-[#49BBBD] font-semibold text-xl'>👤 Individual</p> 
                    </div>
                    <button className='text-black px-4 rounded-full border-2 border-blue-600'>BEST!</button>
                </div>
                <br />
              <h3 className="mb-4 text-5xl font-bold">$24 <span className='text-xs'>/MONTH</span></h3>
    
                            <ul className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#FDCB6E] text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Components-driven system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#FDCB6E] text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Sales-boosting landing pages</span>
                  </li>
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#FDCB6E] text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Awesome Feather icons pack </span>
                  </li>
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#FDCB6E] text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Themed into 3 different styles  </span>
                  </li> 
                   <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#FDCB6E] text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Will help to learn Figma </span>
                  </li>
                 
              </ul>

              <button href="#" className=" bg-[#49BBBD] rounded-xl text-white py-3   text-whiterounded-xl border-2 "> Regular liscence</button>

          </div>
        
          <div className="flex flex-col p-6 mx-auto max-w-md text-gray-900 bg-white rounded-lg xl:py-8 dark:bg-gray-800 dark:text-white">
          <div className='flex'>
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg> */}
                       <p className='text-[#49BBBD] font-semibold text-xl'>👥 Corporate</p>
                        
                    </div>
                    <br />
              <h3 className="mb-4 text-5xl font-bold">$12 <span className='text-xs'>/EDITOR</span></h3>
    
                            <ul  className="mb-8 space-y-4 text-left">
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#55EFC4] bg-opacity-40 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Components-driven system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#55EFC4] bg-opacity-40 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Sales-boosting landing pages</span>
                  </li>
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#55EFC4] bg-opacity-40 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Awesome Feather icons pack </span>
                  </li>
                  <li className="flex items-center space-x-3">
                                            <svg className="flex-shrink-0 w-8 h-8 p-1 rounded-full bg-[#55EFC4] bg-opacity-40 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Themed into 3 different styles  </span>
                  </li> 
                  
              </ul>
              <div className="mt-auto">
    <button className="text-[#49BBBD] text-lg font-bold border-gray-400 py-3 rounded-xl border-2 w-full">Extended license</button>
  </div>
          </div>

      </div>
  </div>
</section>


{/* ========================================================end pricing================================================ */}

<br />
<div className='bg-[#252641] text-white text-center  md:mx-16 mx-10 lg:mx-20 rounded-xl px-8 lg:px-16 '>
    <br /><br />
    <h1 className='xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold'>Online coaching lessons for remote learning.</h1> <br />
    <p className=' md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p> <br /><br />
    <button className='bg-[#49BBBD] px-8 md:px-12 py-3 rounded-xl'>Start learning now</button>
    <br /><br /> <br />
</div>
<br /><br /> <br />
<h1 className='text-center text-xl sm:text-2xl mx-12 md:mx-0  lg:text-4xl font-semibold'>Online coaching lessons for remote learning</h1> <br /> <br />

{/* =====================================accordian---------------------------------- */}
     
        <div className=" mx-8 lg:mx-20 p-4">
     {Questions.map((question, index) => (
        <Accordion
          key={index}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
    <br />
    {/* =====================================================================what our students have to say ================================================================================ */}
    <div className='bg-[#9DCCFF] bg-opacity-20 relative'>
        <br /> <br /> <br />
        <div className='sm:mx-10 lg:mx-16 xl:mx-20  '>
            <h1 className='mx-10 font-bold text-2xl'>What our students have to say</h1>
            <br /><br /><br />
            
   <div className="flex justify-between">
   <div className="mx-auto justify-center relative ">
   <button
    className="absolute top-1/2  text-white left-0 transform -translate-y-1/2 -translate-x-1/2 p-2 w-10 h-10 bg-[#49BBBD] rounded-full"
    onClick={handlePrev}
  >
    &lt;
  </button>       
  <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-14 2xl:grid-cols-4  2xl:gap-8">
    {visibleCards.map((testimonial) => (
      <Card
        key={testimonial.id}
        img={testimonial.img}
        title={testimonial.title}
        content={testimonial.content}
      />
    ))}
  </div>
  <button
    className="absolute top-1/2 right-0 text-white transform -translate-y-1/2 translate-x-1/2 p-2 w-10 h-10 bg-[#49BBBD] rounded-full"
    onClick={handleNext}
  >
    &gt;
  </button>
</div>

    </div>
        </div>
        <br /><br /><br /><br /> <br /><br /><br />
    </div>  
    {/* =========================app is vailable for freee=================================================================== */}

<div className=' mx-10 xl:mx-28 relative -top-16'>
<div className='bg-[#252641] text-white rounded-xl px-12 xl:px-24 '>
    <br /><br />
    <div className='flex flex-col xl:flex-row justify-between font-bold'>
      <h1 className='xl:text-3xl sm:text-2xl text-center font-bold '>APP is available or free </h1>
      <div className='flex flex-col md:flex-row justify-center text-xl  sm:mt-0 '>
        <div className='w-full justify-center mx-2 flex flex-col p-5 h-14 md:w-60 md:flex-row  text-center rounded-xl 2xl:mx-8 font-bold  bg-[#29B9E7]'>
          <img src={android} className='w-7 h-4 mt-1 justify-center mx-auto md:mx-2' alt="" />
        {/* <svg className="h-8 w-8 text-center justify-center mx-auto "   width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="3" y1="10" x2="3" y2="16" />  <line x1="21" y1="10" x2="21" y2="16" />  <path d="M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0" />  <line x1="8" y1="3" x2="9" y2="5" />  <line x1="16" y1="3" x2="15" y2="5" />  <line x1="9" y1="18" x2="9" y2="21" />  <line x1="15" y1="18" x2="15" y2="21" /></svg> */}
          <button className=''>Android APP</button>
        </div>
        
        <div className='flex sm:px-14 justify-center ml-3 sm:ml-0 py-4 h-14 md:w-60 rounded-xl text-center bg-[#49BBBD] mt-3 font-bold md:mt-0 '>
          <img src={apple} alt="" className='' />
        {/* <svg className="h-8 w-8"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 7c-3 0-4 3-4 5.5 0 3 2 7.5 4 7.5 1.088-.046 1.679-.5 3-.5 1.312 0 1.5.5 3 .5s4-3 4-5c-.028-.01-2.472-.403-2.5-3-.019-2.17 2.416-2.954 2.5-3-1.023-1.492-2.951-1.963-3.5-2-1.433-.111-2.83 1-3.5 1-.68 0-1.9-1-3-1z" />  <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" /></svg> */}
        <button className=''>IOS APP</button>
        </div>

      </div>
    </div>

    <br /><br />
</div>
</div>
   
<br />

<div className='grid xl:grid-cols-2 mx-8 md:mx-16  2xl:mx-20 gap-12'>
<div className=''>
<div className="card rounded-xl  bg-base-100 shadow-xl px-8 py-12">
  <img className='rounded-xl' src={news_big_picrure} alt="Shoes" />
  <div className="card-body"> <br /> 
    <h2 className="card-title font-bold text-xl ">Become a Teacher </h2> <br />
    <p  className='text-[#696984]' >Class, launched less than a year ago by Blackboard co-founder <br/> Michael Chasen, integrates exclusively...</p>
    <div className="card-actions justify-end"> <br />
      <button className="btn btn-primary float-right bg-[#49BBBD] rounded-xl  text-white  px-6 py-2 " >Apply as a Teacher</button>
      <br /><br />
    </div>
  </div>
</div>
</div>
<div className=''>
<div className="card rounded-xl bg-base-100 shadow-xl px-8 py-12">
  <img className='rounded-xl' src={news_big_picrure} alt="Shoes" />
  <div className="card-body"> <br /> 
    <h2 className="card-title font-bold text-xl ">Become a Customer </h2> <br />
    <p className='text-[#696984]'>Class, launched less than a year ago by Blackboard co-founder <br /> Michael Chasen, integrates exclusively...</p>
    <div className="card-actions justify-end"> <br />
      <button className="btn btn-primary float-right bg-[#49BBBD] rounded-xl  text-white  px-6 py-2 " >Apply as a Customer</button>
      <br /><br />
    </div>
    </div>
</div>
</div>
</div>

<br /><br /><br /><br />
 

    </div>
  )
}

export default Membership
