import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/gallery/logo.jpg'
const Header = () => {
  return (
    <div className='fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-3 flex items-center justify-between'>
       {/* Logo */}
        <img src={logo} alt="Logo" className="h-16 w-20 ml-5" />
          <Link to="/" className="flex flex-col justify-between align-items: center mr-36">
            <h1 className="text-lg md:text-2xl font-bold text-blue-900">
              Government Higher Secondary School, Peeth , Dist: Dungarpur (Rajasthan)
            </h1>
            <p className="text-xs md:text-sm text-gray-600">
              राजकीय उच्च माध्यमिक विद्यालय पीठ ,ज़िला: डूंगरपुर  (राजस्थान)
            </p>
          </Link>

    </div>
  )
}

export default Header
