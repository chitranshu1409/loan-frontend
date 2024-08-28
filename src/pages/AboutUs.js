import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import Cards from '../components/Cards/Cards'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import { Advantages } from '../components/Advantages/Advantages'
const AboutUs = () => {
  return (
    <>
        <Navbar/>
        <WhoWeAre/>
        <Cards/>
        <Advantages/>
        <Features/>
        <Footer/>
    </>
  )
}

export default AboutUs