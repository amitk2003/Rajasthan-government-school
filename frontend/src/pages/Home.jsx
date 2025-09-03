import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Carousel from '../components/Carousel.jsx'
import Mission from '../components/Mission.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Header from '../components/Header.jsx'
const Home = () => {
  return (
    <div className='max-h-[100%] max-w-full '>
      <Header/>
      <Navbar/>
      <Carousel/>
      <Mission/>
      <Footer/>
    </div>
  )
}

export default Home
