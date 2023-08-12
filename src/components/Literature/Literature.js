import React, {useState, useEffect} from 'react'
import computer from "../../images/computer.jpg"
import call2 from   "../../images/call2.png"
import "./Literature.css"
import search1 from "../../images/search1.jpeg"
import search2 from "../../images/search2.png"
import search3 from "../../images/search3.jpeg"
import search4 from "../../images/search4.jpeg"
import search5 from "../../images/search5.jpeg"
import search6 from "../../images/search6.jpeg"


const cardData = [
    { id: 1, title: 'Card 1', img:search6 },
    { id: 2, title: 'Card 2', img: search1 },
    { id: 3, title: 'Card 3', img:search4 },
    { id: 4, title: 'Card 4', img:search3 },
    { id: 5, title: 'Card 5', img:search2 },
    { id: 6, title: 'Card 6', img: search1 },
    { id: 7, title: 'Card 7', img:search6 },
    { id: 8, title: 'Card 8', img: search1  },
    { id: 9, title: 'Card 9' , img:search4},
    { id: 10, title: 'Card 10', img:search3},
    { id: 11, title: 'Card 11' , img:search2 },
    { id: 12, title: 'Card 12' , img: search1},
    { id: 9, title: 'Card 13', img:search6 },
    { id: 10, title: 'Card 14' , img: search1 },
    { id: 11, title: 'Card 15' , img:search4},
    { id: 12, title: 'Card 16' , img:search3},
    { id: 11, title: 'Card 17' , img:search2 },
    { id: 12, title: 'Card 18' , img: search1},
    { id: 9, title: 'Card 19', img:search6 },
    { id: 10, title: 'Card 20' , img: search1 },
    { id: 11, title: 'Card 21' , img:search4},
    { id: 12, title: 'Card 22', img:search3},
    { id: 11, title: 'Card 23' , img:search2 },
    { id: 12, title: 'Card 24' , img: search1},
    { id: 9, title: 'Card 25', img:search6 },
    { id: 10, title: 'Card 26', img: search1  },
    { id: 11, title: 'Card 27' , img:search4},
    { id: 12, title: 'Card 28' ,img:search3},
    { id: 11, title: 'Card 29', img:search2  },
    { id: 12, title: 'Card 30', img: search1 },

  ];
const Literature = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [currentCards, setCurrentCards] = useState([]);
  
    const cardsPerPage = 6;
    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    const visiblePages = 2;
    const halfVisiblePages = Math.floor(visiblePages / 2);
  
    useEffect(() => {
      const fetchCards = () => {
        const indexOfLastCard = currentPage * cardsPerPage;
        const indexOfFirstCard = indexOfLastCard - cardsPerPage;
        const cardsToRender = cardData.slice(indexOfFirstCard, indexOfLastCard);
  
        setCurrentCards(cardsToRender);
      };
  
      fetchCards();
    }, [currentPage]);
  
    const handlePageClick = (page) => {
      setCurrentPage(page);
      setCurrentCards([])
    };
  
    const handlePrevClick = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
      setCurrentCards([])
    };
  
    const handleNextClick = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
      setCurrentCards([])
    };
  
    const getPageNumbers = () => {
      const pageNumbers = [];
      let startPage = Math.max(currentPage - halfVisiblePages, 1);
      let endPage = Math.min(startPage + visiblePages - 1, totalPages);
  
      if (endPage - startPage < visiblePages - 1) {
        startPage = Math.max(endPage - visiblePages + 1, 1);
      }
  
      for (let page = startPage; page <= endPage; page++) {
        pageNumbers.push(page);
      }
      return pageNumbers;
    };

  return (
    <div className='lg:mx-20 mx-5 font-poppins'>
 


{/*  lg:w-[420px] h-56 lg:h-[260px]  */}
      <div className='rounded-2xl flex-col flex xl:flex-row  p-10 justify-center mx-auto bg-center bg'>
        <div className="rounded-full border-white mr-8 lg:w-[45%] lg:h-[350px] xl:h-auto w-[250px] h-[250px] xl:w-[30%] 2xl:w-[21%]  border-8  ">
            <img className="rounded-full w-full h-full" src={call2} alt="" />
        </div>
<br />
        <div  className="bg-cover  bg-center mt-5 xl:w-[75%] lg:mt-0 rounded-lg overflow-hidden" style={{ backgroundImage: `${computer}` }}
    >
      <div className=" bg-white  bg-opacity-80 p-5 2xl:p-12 h-full flex flex-col justify-end">
      <div className='flex flex-col md:flex-row  justify-between'>
                <p className='text-3xl font-medium '>John Anderson</p>
                <button className='bg-[#49BBBD] mt-4  md:mt-0 px-6 py-3 text-white text-2xl font-semibold rounded-xl '>Enroll Now</button>
      </div>
              <p className='text-[#2D3436B2] mt-4  md:mt-0'>Assistant Professor at Mcmaster University</p> <br />
              <p className='text-lg mt-4 md:mt-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud</p>
<br />
              <div className='flex-col flex lg:flex-row justify-between text-[#2D3436CC] '>
                <div className='flex  justify-between'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<p>
4.9 instructor Rating</p>
                </div>
                
<div className='flex mt-3 lg:mt-0 justify-between'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<p>
1,592 Students</p>
</div>

<div className='flex mt-3 lg:mt-0  justify-between'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
</svg>
<p>
Courses
</p>
</div>

<div className='flex mt-3 lg:mt-0  justify-between'>
<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="  mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal  bg-[#49BBBD] text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  >
 <svg
    xmlns="http://www.w3.org/2000/svg"
    className="  h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
  </svg>
</button>

<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mx-4  mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal bg-[#49BBBD] text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
>
<svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
</button>

<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white  bg-[#49BBBD] shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
</button>


</div>
              </div>
        </div>
    </div>

      </div>
      <br /><br />
    <div className='flex font-bold flex-col xl:flex-row text-[#696969] '>
      <button className='bg-[#BBBBBB80] lg:mr-4  lg:mx-4 py-2 px-8 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 '>About</button>
      <button className='bg-[#BBBBBB80] xl:mx-4 py-2 px-8 lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 '>Courses</button>
      <button className='bg-[#BBBBBB80] xl:mx-4 py-2 px-8 lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 '>Notes</button>
      <button className='bg-[#BBBBBB80] xl:mx-4 py-2 px-8 lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 '>Project</button>
      <button className='bg-[#BBBBBB80] xl:mx-4 py-2 px-8 lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 '>Podcast</button>
      <button className='bg-[#49BBBD] text-white xl:mx-4 py-2 px-8 lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 '>Book</button>
      <button className='bg-[#BBBBBB80] xl:mx-4 py-2 px-8 lg:mx-4 rounded-xl text-xl 2xl:text-2xl font-bold mt-3 '>Review</button>
    </div>

<br />
<p className='text-3xl font-poppins font-medium'>Literature Course </p>
<br />
<div className=" grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-center gap-16">
      {currentCards.map((card) => (
        <div  key={card.id} className="">
          <div className="bg-white rounded-lg shadow-lg p-6">
           <img className='rounded-xl w-[450px] h-[518px] ' src={card.img} alt="" />
           <br />
<div className='flex justify-between'>
  <h1 className='text-[25px] '>All Benefits Of PLUS </h1>
  <h1 className='text-3xl font-extrabold text-[#49BBBD] '>$24</h1>
</div>
          </div>
        </div>
      ))}
      
    </div>
    <br />
<div className="w-full flex justify-center mt-4">
        <button
          className=" text-[#49BBBD] font-semibold py-2 px-4 rounded-l"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
          style={{backgroundColor:"rgba(73, 187, 189, 0.20)"}} 
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="#49BBBD" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

        </button>
        {getPageNumbers().map((page) => (
          <button
            key={page}
            className={`${
              currentPage === page ? 'bg-[#49BBBD]' : 'bg-gray-200'
            } hover:bg-[#49BBBD] text-black font-semibold py-2 px-4`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}

        <button
          className="font-extrabold text-[#49BBBD] py-2 px-4 rounded-r"
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
          style={{backgroundColor:"rgba(73, 187, 189, 0.20)"}} 
          
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>

        </button>

      </div>
<br /> <br />
    </div>
  )
}

export default Literature
