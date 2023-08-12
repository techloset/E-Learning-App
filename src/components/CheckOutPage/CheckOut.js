import React from 'react'
import search from "../../images/search.jpg"
import pic from "../../images/news_big_picrure.png"
import girl from "../../images/girl.png"
import pay from "../../images/paypal.png"
import am from "../../images/am.png"
import visa from "../../images/visa.png"
const CheckOut = () => {
  return (
    <div className=' mx-10 md:mx-20'>
      <br /><br />
      <div className='flex 2xl:flex-row flex-col justify-between'>

        {/* ===================checkout======================= */}
        <div className='px-10 shadow-xl  2xl:w-[750px] rounded-2xl '>
        <h1 className='font-semibold text-2xl md:text-4xl'>Checkout</h1><br />
        <p className='font-semibold text-[#5B5B5B] sm:text-xl'>Cart Type</p><br />
        <div className='flex md:flex-row flex-col gap-y-2'>
          

            <div className='rounded-lg mr-3  '>
            <img className='rounded-lg ' src={pay} alt="" />
            </div>

            <div className='rounded-lg  w-[139px]  md:mx-3'>
            <img className='rounded-lg h-[93px] ' src={am} alt="" />
            </div>

            <div className='rounded-lg  w-[139px] border-bro md:mx-3'>
            <img className='rounded-lg  h-[93px]' src={visa} alt="" />
            </div>

          
            <div className='rounded-lg h-[93px] w-[139px] border-[#5B5B5B] border-2 md:ml-3 flex items-center justify-center'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" className="h-8">
    <circle cx="30" cy="30" r="30" fill="#FF5F00" />
    <circle cx="70" cy="30" r="30" fill="#FFCC00" />
  </svg>
</div>

           



        </div>
<br /><br /><br />
        

        <label className='text-xl font-semibold text-[#5B5B5B] ' htmlFor="Name">Name on Card</label><br /><br />
        <input className='font-normal border-gray-300 border-2 rounded-2xl w-full px-12 py-4  text-xl ' type="text" name="" id="" placeholder='Enter name on Card' />
        <br /><br />
        <label className='text-xl font-semibold text-[#5B5B5B] ' htmlFor="cardNumber">Card Number</label><br /><br />
        <input className='font-normal border-2 border-gray-300 rounded-2xl w-full px-12 py-4 text-xl ' type="number" name="" id="" placeholder='Enter Card Number'/>
        <br />

        <div className='flex md:flex-row flex-col justify-between mx-auto w-full gap-5 '>

          <div className='w-full'>
            <br />
          <label className='text-xl font-semibold text-[#5B5B5B] ' htmlFor="expiryDate">Enter Expiration Date (MM/YY)</label><br /> <br />
        <input className='font-normal border-2 w-full  border-gray-300 rounded-2xl  px-12 py-4  text-xl ' placeholder='Enter Expiration Date' type="text" name="" id=""/>
          </div>

          <div className='w-full'>
            <br />
          <label className='text-xl font-semibold w-full  text-[#5B5B5B] ' htmlFor="expiryDate">CVC</label><br /><br />
        <input className='font-normal border-2 w-full border-gray-300 rounded-2xl   px-12 py-4  text-xl ' type="number" name="" id="" placeholder='Enter CVC'/>
          </div>

       </div>
<br />
        <div  className='text-[#5B5B5B]'> 
          <input type="checkbox" name="" id="" className='mx-1' />
           Save my information for faster checkout
        </div>

        <br />

        <button className='rounded-xl md:text-2xl text-white w-full bg-[#49BBBD] py-4 '>Confirm Payment</button>
        <br /><br /><br />
        </div>



        {/* ===============summary========================== */}
        <div className='bg-[#9DCCFF] bg-opacity-20 p-5 2xl:max-w-xl 2xl:h-[636px] mt-10 2xl:mt-0  rounded-2xl'>
          <h1 className='text-2xl'>Summary</h1>
          <br /><br />
          <div className='flex flex-col md:flex-row mx-2 '>
            <img className='w-[160px] h-[100px] rounded-xl ' src={search} alt="" />
              <div className='px-3'>
             <p>adipising elit, sed do eiusmod tempor</p>
            <p className='text-[#5B5B5B]'>Lorem ipsum dollar...</p>
            <p className='text-2xl'>$24.69</p>
              </div>
            <br />
          </div>
            <br />
          <hr className=' bg-[#5B5B5B] h-[1.5px]' />
          <br />
          <div className='flex flex-col md:flex-row mx-2 '>
            <img className='w-[160px] h-[100px] rounded-xl ' src={search} alt='' />
              <div className='px-3'>
             <p>adipising elit, sed do eiusmod tempor</p>
            <p className='text-[#5B5B5B]'>Lorem ipsum dollar...</p>
            <p className='text-2xl'>$24.69</p>
              </div>
            <br />
          </div>
            <br />
          <hr className=' bg-[#5B5B5B] h-[1.5px]' />
         

          <div className='flex justify-between mt-3 text-[#5B5B5B] font-semibold '> 
          <p>Subtotal</p>
          <p>$51.38</p>
          </div>

          <hr className='bg-[#5B5B5B] h-[1.5px] mt-3 ' />
        

          <div className='flex justify-between mt-3 text-[#5B5B5B] font-semibold'> 
          <p>Coupon Discount</p>
          <p>0 %</p>
          </div>

          <hr className='bg-[#5B5B5B] h-[1.5px] mt-3' />
        
          <div className='flex justify-between mt-3 text-[#5B5B5B] font-semibold'> 
          <p>TAX</p>
          <p>5</p>
          </div>
        
          <hr className='bg-[#5B5B5B] h-[2px] mt-3' />
        
          <div className='flex justify-between mt-3 font-semibold'> 
          <p>Total</p>
          <p>$51.38</p>
          </div>



        </div>
      </div>

<br /><br /><br />


{/* ========================================top eduaction=================================================== */}
      <div className=' '>
          <div className='flex md:flex-row flex-col justify-between'>
              <p className='md:text-3xl text-xl font-medium'>Top Education offers and deals are listed here</p>
              <p className='text-[#49BBBD] text-xl font-bold  '>See all</p>
          </div>
          <br /><br />

          <div>
       


  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10  w-full">

  
  <div class="relative  rounded-xl  shadow-lg cursor-pointer">
    <div className='bg-gray-900 rounded-xl'>
      <img className="object-cover w-full rounded-xl h-[400px] " src={pic} alt='iki'/>
    </div>
	  <div className="absolute inset-0 bg-gray-900  rounded-xl opacity-40"></div>
  <div className="absolute inset-0 top-0 left-0 px-6 py-4  ">
  <button className=' text-white bg-[#49BBBD] px-8 py-8 rounded-lg  my-5 text-2xl font-bold '>50%</button> <br />

	  <h4 className="mb-3 text-xl font-semibold text-white ">Lorem ipsum dolor</h4>
	  <p className=" leading-8   text-gray-100">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
	</div>
  </div>



  <div className="relative  rounded-xl  shadow-lg cursor-pointer">
    <div className='bg-gray-900 rounded-lg'>
      <img className="object-cover rounded-xl w-full   h-[400px]" src={girl} alt='iki'/>
    </div>
	  <div className="absolute rounded-xl inset-0 "></div>
  <div className="absolute inset-0 top-0 left-0 px-6 py-4 ">
  <button className=' text-white bg-[#49BBBD] px-8 py-8 rounded-lg my-5 text-2xl font-bold '>50%</button><br />

	  <h4 className="mb-3 text-xl font-semibold tracking-tight text-white ">Lorem ipsum dolor</h4>
	  <p className="leading-8  text-gray-100">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
	</div>
  </div>



 <div className="relative  rounded-xl  shadow-lg cursor-pointer">
    <div className='bg-gray-900 rounded-lg'>
    <img className="object-cover rounded-xl w-full  h-[400px] " src={pic} alt='iki'/>
    </div>
	  <div className="absolute inset-0 rounded-xl bg-gray-900 opacity-40"></div>
  <div className="absolute inset-0 top-0 left-0 px-6 py-4 ">
  <button className=' text-white bg-[#49BBBD] px-8 py-8 rounded-lg my-5 text-2xl font-bold '>50%</button>

	  <h4 className="mb-3 text-xl font-semibold tracking-tight text-white ">Lorem ipsum dolor</h4>
	  <p className="leading-8  text-gray-100">Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor <br />
Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
	</div>
  </div>


</div>

<br /><br /><br />

          </div>

      </div>
    </div>
  )
}

export default CheckOut
