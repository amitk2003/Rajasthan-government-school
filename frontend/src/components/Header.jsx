import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/gallery/logo.jpg'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-3 max-w-screen-2xl mx-auto">
        {/* Logo */}
        

        {/* Title */}
        <Link
          to="/"
          className="text-center md:text-left mt-2 md:mt-0 max-w-xs sm:max-w-md md:max-w-3xl break-words"
        >
          <h1 className="text-sm sm:text-base md:text-2xl font-bold text-blue-900 leading-snug">
            Government Higher Secondary School, Peeth, Dist: Dungarpur (Rajasthan)
          </h1>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight">
            राजकीय उच्च माध्यमिक विद्यालय पीठ , ज़िला: डूंगरपुर (राजस्थान)
          </p>
        </Link>
      </div>
    </header>
  )
}

export default Header
