import React from 'react'
import Navlogo from '../../images/Navlogo.png'
import line_footer from '../../images/line_footer.png'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      
      <div className='px-5 py-5 bg-[#252641] text-center justify-center mx-auto center items-center content-center '  style={{ fontFamily: 'Poppins' }} >
        <div className='flex justify-center mx-auto '>
            <img src={Navlogo} alt="" className='' />
            <img src={line_footer} alt=""  className='mx-16' />
            <p className='sm:text-[22px] font-semibold text-white '>
                Virtual Class <br />
                for Zoom
            </p>
        </div>
        <br /><br /><br />

<div>
    <p className='sm:text-[26px] text-[#B2B3CF] font-medium'>
        Subscribe To get our Newsletter
    </p>
</div>
<br />
<div className='flex-row'>
        <input type="text" className='mx-5 sm:my-0 mb-6  rounded-full border font-normal px-7 py-3 sm:text-[20px] border-slate-100 bg-[#252641] text-[#83839A]' name="" id=""  placeholder='Your Email'/>
    
        <button className='sm:text-[22px]  font-semibold text-white bg-[#49BBBD]  rounded-full px-8 py-3'>Subscribe</button>
</div>

<br /><br />
<div className='flex mx-auto justify-center font-normal'>
    <p className='sm:text-[22px] text-[#B2B3CF] '>Careers</p>
    <p className='sm:text-[22px] text-[#B2B3CF] mx-5 '>|</p>
    <p className='sm:text-[22px] text-[#B2B3CF] mx-5'>Privacy Policy</p>
    <p className='sm:text-[22px] text-[#B2B3CF] mx-5'>|</p>
    <p className='sm:text-[22px] text-[#B2B3CF] '>Terms & Conditions</p>
</div>
<br />
<div>
    <p className='sm:text-[22px] text-[#B2B3CF] mx-5 font-normal'>&copy; 2021 Class Technologies Inc.</p>
</div>

      </div>
    </div>
  )
}

export default Footer
