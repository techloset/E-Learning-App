import React from 'react'
import Navbar from '../BlogPage/Navbar'
import Membership from './Membership'
import Footer from '../landingpage/Footer'
import card from '@material-tailwind/react/theme/components/card'
import Cards from '../CardsWithClicks'
const MainMembership = () => {
  return (
    <div>
      <Navbar />
      <Membership/>
      <Footer />
    </div>
  )
}

export default MainMembership
