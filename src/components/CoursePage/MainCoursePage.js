import React from 'react'
import CoursePage from './CoursePage'
import Navbar from '../BlogPage/Navbar'
import Footer from '../landingpage/Footer'
import CardsClicks from '../CardsClicks'
import CardsWithClicks from '../CardsWithClicks'
import Card from '../Card'

const MainCoursePage = () => {
  return (
    <div>
      <Navbar/>
      <CoursePage/>
      <Footer/>
      {/* <CardsClicks/> */}
      {/* <CardsWithClicks/> */}
      {/* <Card/> */}
    </div>
  )
}

export default MainCoursePage
