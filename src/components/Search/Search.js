import React,{useState} from 'react'
import "../../components/Literature/Literature.css"
import Card from '../Card'
import pic from "../../images/Group 71.png"
import student from "../../images/student.png"
import call1 from "../../images/call1.png"

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPartner, setSelectedParnter] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [selectedLearning, setSelectedLearning] = useState('');



  const educational=[
    {
      title:"Lorem ipsum dolor",
      description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      percent:"50%"
    },
    {
      title:"Lorem ipsum dolor",
      description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      percent:"10%"
    }, {
      title:"Lorem ipsum dolor",
      description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
      percent:"50%"
    },
    
  ]

  const creators=[
    {
      img:"https://s3-alpha-sig.figma.com/img/4364/3df7/a0cddfa0ae7c584b93b20c53a064580a?Expires=1691366400&Signature=Cx5RkIE8jTKhy3RJkOuRHZoU4HDDuMFsaM6OTZerICvDmMX-T9O6~x1oM4Ip5Zhdz8pnjHfdJaalTS9Y7EtJtQYGtmPe6QY4U07fxaa29EzuiBBYCMnIyQYgPI4g5Su2bCWJOdHiKE1tGC8Ke50vbiQet3AR20dBdW5LaPbikA9qEAw~ccS3v4-ta4VezZCZ9scJwpCi1zJidkqPVDT3uVrPcWvIjEOU3LiWhqJZSEsrmVYgKOTwlLmbrinAXpTEtIhlsnuNn1lYRQctVGgl26rH9ODSvW13-Evebvaa5BiyoNPqi63MfnEIXxYkhMc3vV11Okwlg4jmZSo7rRfjGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Jane Cooper",
      profession:'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    },
    {
      img:"https://s3-alpha-sig.figma.com/img/6a32/4de5/c94a9ba1a6d453c5348b067f8698108b?Expires=1691366400&Signature=UxQd7~qVqiuh0nxE8guxgskZSnZO3mWcpmU50wZpDd-agsx0mg8WDK0V8KWzXzlFgJpo6YWkFv09ob29XJ5A8ivwlS-50Yb1FoPNSCXi3ReZuiB5QgnC~2sXZb0Sn-jvInc3MsqBK-cvdCZ-c42l3UHa4t9X5lA-7Tnc7KQMRD~MhbwsOXQ3JjeFWmGmGo6nni0HBmzcU4h4JY1cB8iZWYAVONaFIPahBpZCYyz9tBmFMi1G5oL21p~N71TedhH6tqtKo3QS5c~tC6wPgf9qsvu7iW5jK6lDuqURcabVpWprAXUYtk1PnK8OdzlPe8PMXuTU849GvL4ZMYEfuBRk0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Adam",
      profession:'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    }, {
      img:"https://s3-alpha-sig.figma.com/img/ada9/8f21/b111783e76881ec5644408bdde7b0edd?Expires=1691366400&Signature=C3jtuonX~ZEPmHLcdnVt9UlJOUcMtL~OVZJbK9~YpKwCgW1I9GyFYTm1QdRzqiGe4-xLChaOS5ez8arzBt74EpjusLp1Xclaq0Ckfem8TXVkJmqruLr69okFFri8mWBOBbE8RTx1kRfgvp9epAh28A2II~44tKlrv3etI8XJwvWEHrVBbf-f~xTgXbhAqILJX0vElscn-yfZtIKtu4r0JVKqCpl9aAa6CVOKKGxnH~kTSBEHmieVHiiKMi0yl12Ln2QJ3Jm1Vv1mbYfgT5qrxOQB9WjqadzKpdNja1xaC1mHDOfu4XZQzsfXGZwOPg1W5ANIlBcVUPbCXPZqXxNzLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Tomara",
      profession:'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    }, {
      img:"https://s3-alpha-sig.figma.com/img/4364/3df7/a0cddfa0ae7c584b93b20c53a064580a?Expires=1691366400&Signature=Cx5RkIE8jTKhy3RJkOuRHZoU4HDDuMFsaM6OTZerICvDmMX-T9O6~x1oM4Ip5Zhdz8pnjHfdJaalTS9Y7EtJtQYGtmPe6QY4U07fxaa29EzuiBBYCMnIyQYgPI4g5Su2bCWJOdHiKE1tGC8Ke50vbiQet3AR20dBdW5LaPbikA9qEAw~ccS3v4-ta4VezZCZ9scJwpCi1zJidkqPVDT3uVrPcWvIjEOU3LiWhqJZSEsrmVYgKOTwlLmbrinAXpTEtIhlsnuNn1lYRQctVGgl26rH9ODSvW13-Evebvaa5BiyoNPqi63MfnEIXxYkhMc3vV11Okwlg4jmZSo7rRfjGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Jane Cooper",
      profession:'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    }, {
      img:"https://s3-alpha-sig.figma.com/img/4364/3df7/a0cddfa0ae7c584b93b20c53a064580a?Expires=1691366400&Signature=Cx5RkIE8jTKhy3RJkOuRHZoU4HDDuMFsaM6OTZerICvDmMX-T9O6~x1oM4Ip5Zhdz8pnjHfdJaalTS9Y7EtJtQYGtmPe6QY4U07fxaa29EzuiBBYCMnIyQYgPI4g5Su2bCWJOdHiKE1tGC8Ke50vbiQet3AR20dBdW5LaPbikA9qEAw~ccS3v4-ta4VezZCZ9scJwpCi1zJidkqPVDT3uVrPcWvIjEOU3LiWhqJZSEsrmVYgKOTwlLmbrinAXpTEtIhlsnuNn1lYRQctVGgl26rH9ODSvW13-Evebvaa5BiyoNPqi63MfnEIXxYkhMc3vV11Okwlg4jmZSo7rRfjGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Jane Cooper",
      profession:'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    }, {
      img:"https://s3-alpha-sig.figma.com/img/4364/3df7/a0cddfa0ae7c584b93b20c53a064580a?Expires=1691366400&Signature=Cx5RkIE8jTKhy3RJkOuRHZoU4HDDuMFsaM6OTZerICvDmMX-T9O6~x1oM4Ip5Zhdz8pnjHfdJaalTS9Y7EtJtQYGtmPe6QY4U07fxaa29EzuiBBYCMnIyQYgPI4g5Su2bCWJOdHiKE1tGC8Ke50vbiQet3AR20dBdW5LaPbikA9qEAw~ccS3v4-ta4VezZCZ9scJwpCi1zJidkqPVDT3uVrPcWvIjEOU3LiWhqJZSEsrmVYgKOTwlLmbrinAXpTEtIhlsnuNn1lYRQctVGgl26rH9ODSvW13-Evebvaa5BiyoNPqi63MfnEIXxYkhMc3vV11Okwlg4jmZSo7rRfjGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      name: "Jane Cooper",
      profession:'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
    },
  ]

  // Sample data - Replace this with your actual data
  const learningOptions = ['Good', 'Very Good', 'Moderate'];
  const languageOptions = ['Urdu', 'English','punjabi'];
  const programOptions = ['BSSE', 'MPHIL','PHD'];
  const subjectOptions = ['English', 'Math', 'Physics'];
  const partnerOptions =['Teacher','student','principal','monitor']
  const availabilityOptions =['day','night','noon','aftermoon']


  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCourseChange = (partner) => {
    setSelectedParnter(partner);
    setSearchTerm(partner);
  };

  const handleFunctionChange = (func) => {
    setSelectedProgram(func);
    setSearchTerm(func);
  };

  const handleClassChange = (classItem) => {
    setSelectedLanguage(classItem);
    setSearchTerm(classItem);
  };

  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    setSearchTerm(subject);
  };

  const handleAvailChange = (availability) => {
    setSelectedAvailability(availability);
    setSearchTerm(availability);
  };

  const handleLearning = (learning) => {
    setSelectedLearning(learning);
    setSearchTerm(learning);
  };



  return (
    <div>

<div className="bg-image h-[500px] lg:h-[326px] relative bg-center py-24">
  <div className=" absolute inset-0 bg-[#49BBBD] bg-opacity-40 flex  py-28 flex-col items-center">
    

    <div className="w-4/5  relative">
      <div className=" flex flex-col space-y-4 md:space-y-0 md:flex-row ">
        <div className="relative flex-grow">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="Search your favourite course"
            className="w-full h-14  pl-6 md:pl-16 pr-16 py-2 border text-base md:text-xl border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button className="absolute lg:text-2xl font-bold right-1 h-12 top-1 px-4 lg:px-10 bg-[#49BBBD] text-white rounded-md">
            Search
          </button>
        </div>

        
      </div>
      <br />
    </div>



{/* options */}
    <div className="flex w-4/5 flex-col lg:flex-row justify-between mt-4 md:mt-0 ">
      
    <div className="relative  mx-1">
          <select
            value={selectedSubject}
            onChange={(e) => handleSubjectChange(e.target.value)}
            className="block font-semibold w-full  py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" disabled>
              Subject
            </option>
            {subjectOptions.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

      <div className="relative mx-1">
        <select
          value={selectedPartner}
          onChange={(e) => handleCourseChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm  md:mt-0"
        >
          <option value="" disabled>
            partner
          </option>
          {partnerOptions.map((partner, index) => (
            <option key={index} value={partner}>
              {partner}
            </option>
          ))}
        </select>
      </div>

      <div className="relative mx-1">
        <select
          value={selectedProgram}
          onChange={(e) => handleFunctionChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            Program
          </option>
          {programOptions.map((func, index) => (
            <option key={index} value={func}>
              {func}
            </option>
          ))}
        </select>
      </div>

      <div className="relative mx-1">
        <select
          value={selectedLanguage}
          onChange={(e) => handleClassChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            Language
          </option>
          {languageOptions.map((classItem, index) => (
            <option key={index} value={classItem}>
              {classItem}
            </option>
          ))}
        </select>
      </div>

      <div className="relative mx-1">
        <select
          value={selectedAvailability}
          onChange={(e) => handleAvailChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            Availability
          </option>
          {availabilityOptions.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="relative mx-1 ">
        <select
          value={selectedLearning}
          onChange={(e) => handleLearning(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            Learning Type
          </option>
          {learningOptions.map((learning, index) => (
            <option key={index} value={learning}>
              {learning}
            </option>
          ))}
        </select>
      </div>
    </div>
    

  </div>
</div>


{/* <div className="bg-image relative bg-center py-24">
  <div className="px-56 absolute inset-0 bg-[#49BBBD] bg-opacity-40 flex flex-row items-center">
    <div className="w-full relative">
     
    <div className="p-4 flex flex-col space-x-4">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
          placeholder="Search your favourite partner"
          className="w-full h-14 pl-16 pr-16 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button className="absolute text-2xl font-bold right-1 h-12 top-1  px-10  bg-[#49BBBD] text-white rounded-md">
          Search
        </button>
      </div>

<br />

<div className='flex flex-col  justify-between'>
      <div className="relative">
        <select
          value={selectedSubject}
          onChange={(e) => handleSubjectChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value=""  disabled>
            Subject
          </option>
          {subjectOptions.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <select
          value={selectedPartner}
          onChange={(e) => handleCourseChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            partner
          </option>
          {partnerOptions.map((partner, index) => (
            <option key={index} value={partner}>
              {partner}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <select
          value={selectedProgram}
          onChange={(e) => handleFunctionChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            Program
          </option>
          {programOptions.map((func, index) => (
            <option key={index} value={func}>
              {func}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <select
          value={selectedLanguage}
          onChange={(e) => handleClassChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            Language
          </option>
          {languageOptions.map((classItem, index) => (
            <option key={index} value={classItem}>
              {classItem}
            </option>
          ))}
        </select>
      </div>


      <div className="relative">
        <select
          value={selectedAvailability}
          onChange={(e) => handleAvailChange(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="" disabled>
            Availability
          </option>
          {availabilityOptions.map((subject, index) => (
            <option key={index} value={subject}>
              {subject}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <select
          value={selectedLearning}
          onChange={(e) => handleLearning(e.target.value)}
          className="block font-semibold w-full py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
        >
          <option value="" disabled>
            Learning Type
          </option>
          {learningOptions.map((learning, index) => (
            <option key={index} value={learning}>
              {learning}
            </option>
          ))}
        </select>
      </div>

      </div>
    </div>
    </div>
  </div>
</div> */}
<br /><br />
<div className=''>
  <Card/>
<br /><br />
<Card/>
<br /><br />
</div>

<div className='bg-[#9DCCFF] mx-12 lg:mx-28 lg:p-14  p-6 rounded-2xl flex-col xl:flex-row justify-between flex'>

    <div >
      
    <p className='font-semibold lg:text-3x text-2xl '>Know about learning<br/> learning platform</p>
<br />
    <div className='flex'>
    <div className='bg-[#55EFC4] mt-2 mx-2 rounded-full w-5 h-3 lg:w-4 lg:h-4  md:w-4 md:h-4'></div>
    <p className='lg:text-2xl text-xl '>Free E-book, video & consolation</p>

    </div>
<br />
    <div className='flex'>
    <div className='bg-[#55EFC4] mt-2 mx-2 rounded-full w-5 h-3  md:w-4 md:h-4 lg:w-4 lg:h-4'></div>
    <p className='lg:text-2xl text-xl '>Top instructors from around world</p>

    </div>
<br />
    <div className='flex'>
    <div className='bg-[#55EFC4] mt-2 mx-2 rounded-full w-4 h-3  md:w-4 md:h-4 lg:w-4 lg:h-4'></div>
    <p className='lg:text-2xl text-xl '>Top courses from your team</p> <br />

    </div>
<br />
    <button className='lg:text-2xl text-xl font-extrabold text-white px-6 rounded-xl py-3 bg-[#49BBBD] '>Start learning now</button>
    </div>
<br />

    <div className='xl:w-1/2'>
        <img src={pic}  alt="" />
    </div>
</div>  
<br /><br />

<div className='bg-[#9DCCFF]'>
  <br /><br />
  <div className='md:mx-16 mx-12  lg:mx-28 flex justify-between '>
    <p className='lg:text-3xl  font-semibold'>Recommended for you</p>
    <p className='text-[#49BBBD] font-semibold '>See all</p>
  </div>
  <br /><br />
      <Card/>
      <br /><br /><br /><br /><br />
</div>
<br /><br /><br />
{/*   course taught by real creators */}
    <div className='lg:mx-28  mx-12'>
    <div className=' flex justify-between '>
    <p className='lg:text-3xl font-semibold'>Classes taught by real creators</p>
    <p className='text-[#49BBBD] font-semibold '>See all</p>
  </div>
  </div>
  <div>
<br /><br /><br /><br /><br /><br />
<div className='grid xl:grid-cols-3 md:grid-cols-2  gap-y-36  gap-x-6  mx-8 lg:mx-28'>
    {creators.map((card)=>{
      return(
        <div class="relative max-w-md mx-auto h-[300px] lg:w-[400px] xl:w-[400px] md:w-[350px] w-[300px] ">

<div class="bg-white rounded-lg shadow-xl p-6">
  <br /><br /><br /><br /><br />
  <h2 class="text-xl text-center font-semibold mb-4">{card.name}</h2>
  <p className='text-center text-[#696984] '>{card.profession}</p>
  </div>


<div class="absolute inset-x-0 -top-1/3 flex justify-center">
  <img src={card.img} alt="Imagme" class="w-[258px] h-[230px] border-white"/>
</div>
</div>
        );
    })}</div>

    <br /><br />

    </div>
<br /><br />
    {/* what our students have to say  */}
    <div className='bg-[#9DCCFF] '>
  <br /><br />
  <div className='xl:mx-28 lg:mx-16  mx-10'>
    <p className='lg:text-3xl font-semibold '>What our students have to say</p>
    <br /><br />
    <div className='flex flex-col  lg:flex-row justify-between bg-white  rounded-2xl p-12'>
      <img src={student} alt="" className='lg:w-1/3' />
      <div className='lg:w-1/2'>
        <p className='lg:text-3xl font-bold'>Savannah Nguyen</p><br />
        <p className='lg:text-2xl '>tanya.hill@example.com</p><br />
        <p className='text-[#696984] text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
<br />
<div className='flex'>
<button
className="mb-2 inline-block bg-[#49BBBD] rounded-full p-3 mx-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
>
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-4 w-4"
fill="currentColor"
viewBox="0 0 24 24">
<path
d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
</svg>
</button>

<button
className="mb-2 inline-block bg-[#49BBBD] rounded-full p-3 mx-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
>
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-4 w-4"
fill="currentColor"
viewBox="0 0 24 24">
<path
d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
</svg>
</button>

<button
className="mb-2 inline-block bg-[#49BBBD] rounded-full p-3 mx-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
>
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-4 w-4"
fill="currentColor"
viewBox="0 0 24 24">
<path
d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
</svg>
</button>
</div>
      </div>





<div className='lg:flex lg:flex-col'>
<img alt="images" src='https://s3-alpha-sig.figma.com/img/6a32/4de5/c94a9ba1a6d453c5348b067f8698108b?Expires=1691366400&Signature=UxQd7~qVqiuh0nxE8guxgskZSnZO3mWcpmU50wZpDd-agsx0mg8WDK0V8KWzXzlFgJpo6YWkFv09ob29XJ5A8ivwlS-50Yb1FoPNSCXi3ReZuiB5QgnC~2sXZb0Sn-jvInc3MsqBK-cvdCZ-c42l3UHa4t9X5lA-7Tnc7KQMRD~MhbwsOXQ3JjeFWmGmGo6nni0HBmzcU4h4JY1cB8iZWYAVONaFIPahBpZCYyz9tBmFMi1G5oL21p~N71TedhH6tqtKo3QS5c~tC6wPgf9qsvu7iW5jK6lDuqURcabVpWprAXUYtk1PnK8OdzlPe8PMXuTU849GvL4ZMYEfuBRk0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
className="mb-2 w-20 h-20 inline-block rounded-full p-3 lg:mx-3 "
/>
<img alt="images" src='https://s3-alpha-sig.figma.com/img/4364/3df7/a0cddfa0ae7c584b93b20c53a064580a?Expires=1691366400&Signature=Cx5RkIE8jTKhy3RJkOuRHZoU4HDDuMFsaM6OTZerICvDmMX-T9O6~x1oM4Ip5Zhdz8pnjHfdJaalTS9Y7EtJtQYGtmPe6QY4U07fxaa29EzuiBBYCMnIyQYgPI4g5Su2bCWJOdHiKE1tGC8Ke50vbiQet3AR20dBdW5LaPbikA9qEAw~ccS3v4-ta4VezZCZ9scJwpCi1zJidkqPVDT3uVrPcWvIjEOU3LiWhqJZSEsrmVYgKOTwlLmbrinAXpTEtIhlsnuNn1lYRQctVGgl26rH9ODSvW13-Evebvaa5BiyoNPqi63MfnEIXxYkhMc3vV11Okwlg4jmZSo7rRfjGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
className="mb-2 w-20 h-20 inline-block rounded-full p-3 lg:mx-3 "
/>

    <img alt="images" src='https://s3-alpha-sig.figma.com/img/ada9/8f21/b111783e76881ec5644408bdde7b0edd?Expires=1691366400&Signature=C3jtuonX~ZEPmHLcdnVt9UlJOUcMtL~OVZJbK9~YpKwCgW1I9GyFYTm1QdRzqiGe4-xLChaOS5ez8arzBt74EpjusLp1Xclaq0Ckfem8TXVkJmqruLr69okFFri8mWBOBbE8RTx1kRfgvp9epAh28A2II~44tKlrv3etI8XJwvWEHrVBbf-f~xTgXbhAqILJX0vElscn-yfZtIKtu4r0JVKqCpl9aAa6CVOKKGxnH~kTSBEHmieVHiiKMi0yl12Ln2QJ3Jm1Vv1mbYfgT5qrxOQB9WjqadzKpdNja1xaC1mHDOfu4XZQzsfXGZwOPg1W5ANIlBcVUPbCXPZqXxNzLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
className="mb-2 w-20 h-20 inline-block rounded-full p-3 lg:mx-3 "
/>

<img alt="images" src='https://s3-alpha-sig.figma.com/img/c975/507a/b8fc3e147dca2c0bccccbead1c14ebb6?Expires=1691366400&Signature=moIRXPtLE4gAoJuaVPlUo9Fd6Ue8LSZKT9E4j~dKwF~2KgFzn-MaAx1FskoauXHYuTeQIKlCrf0V2wive3mqfRyShcmjWvD9ce6lHiYUzgnXOxBPBcEbvo7aS22skKxOoKBXND48ru2USEloB0-U3ssxZiCxRSPL1R8g4C9JAROL-kj9SMeltBKhtmiAkPVbc8IubYSlpYqyhrbysdHl6XJMSLCzFGrjk8xrekKqJxYHmKtxE8S9auZ-wvWDihGcj1i3TuGhHNuN8L-Gtb1i6ICTp90Y7ISzCsjGqNZz7Aexa3y9UQg9g4AYPROCr1qlo8KayuYqLckBJt3zcbKbeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
className="mb-2 w-20 h-20 inline-block rounded-full p-3 lg:mx-3 "
/>
</div>


     
    </div>
  </div>
      <br /><br /><br />


</div>


<br /> <br />
<div className='lg:mx-28 mx-12 flex justify-between '>
    <p className='lg:text-3xl font-semibold'>Top Education offers an deals are listed here</p>
    <p className='text-[#49BBBD] font-semibold '>See all</p>
  </div>
  
<div className='lg:mx-28 mx-12 '>

  <br /><br />
  {/* -==============================top education section======================= */}
  <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10  w-full'>
    {educational.map((obj)=>{
  return (
  <div class="relative  rounded-xl  shadow-lg cursor-pointer">
    <div className='bg-gray-900 rounded-xl'>
      <img class="object-cover w-full rounded-xl h-[400px] " src="https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1691366400&Signature=IL5tt4hNIWBrrCuwcLPRaWLiNP7L3zyrEPl81L5PQrcWfULBag~GA6QE360FkXHgeJ-4R2FWJSd05LXWRgWX087Z3Y42cypHE~lxmH64ebmxt6cwoYEsrwfkjkUtOadG609jDcWbTLuvOv3Din~Lf-5fuA0eP3RPWgwWle66azxnHGZf1bflM-PbEfuq4h7OvV-EXwBYwNopXJ3LXkLppyG3SX6x4-Faw78s4nLhlaFSnQ8lfU6ADelerRKeNm7iMChSFt8mEGbiGUyV15y4TFroTGf39XBwlPvu-W7n6zuSvs1MPGHQxe1uGCVe4GOSatZECF9B~-xXRuehOqzzGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt='iki'/>
    </div>
	  <div class="absolute inset-0 bg-gray-900  rounded-xl opacity-40"></div>
  <div class="absolute inset-0 top-0 left-0 px-10 py-4  ">
  <button className=' text-white bg-[#49BBBD] px-4 py-6 rounded-lg  font-extrabold text-5xl my-5'>{obj.percent}</button> <br />

	  <h4 class="mb-3 text-xl font-semibold text-white ">{obj.title}</h4>
	  <p class="sm:leading-6  sm:w-3/4 text-gray-100 ">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>

	</div>
  </div>
  )
})}
  </div>





</div>
<br /><br /><br />
    </div>
  )
}

export default Search
