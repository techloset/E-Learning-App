import React from 'react'
import Search from './Search'
import Navbar from '../BlogPage/Navbar'
import Footer from '../landingpage/Footer'

const MainSearch = () => {
  return (
    <div>
      <div className='relative z-10'>
        <Navbar/>
      </div>
      
      <Search/>
      <Footer/>
    </div>
  )
}

export default MainSearch
