import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LatestNews from './LatestNews'
import Blogs from './Blogs'
import Latest from './Latest'
import Testimonial from  './Testimonial'
import Explore from './Explore'
import Success from './Success'


const Mainlanding = () => {
 
  
  return (
    <div>
      <Navbar/>
      <Success/>
      < Explore/>
      <Testimonial/>
      <Latest/>
      <Footer />
    </div>
  )
}

export default Mainlanding
