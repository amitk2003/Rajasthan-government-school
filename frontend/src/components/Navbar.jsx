import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [professorDropdownOpen, setProfessorDropdownOpen] = useState(false);

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Admissions", link: "/admissions" },
    { title: "Gallery", link: "/gallery" },
    { title: "Topper", link: "/Topper" },
  ];

  const professorCategories = [
    { title: "principal", link: "/professor/प्रधानाचार्य(principal)" },
    { title: "Lab Assistant", link: "/professor/प्रयोगशाला सहायक(Lab Assistant)" },
    { title: "Science", link: "/professor/विज्ञान वर्ग(Science)" },
    { title: "Arts", link: "/professor/कला वर्ग(Arts)" },
    { title: "Vocational Teacher", link: "/professor/व्यवसायिक शिक्षक(Vocational Teacher)" },
    { title: "secondary-Education", link: "/professor/माध्यमिक एवं उ. मा. शिक्षा(secondary Education)" },
  ];

  const handleLinkClick = () => {
    setMobileNavOpen(false);
    setProfessorDropdownOpen(false);
  };

  return (
    <>
      {/* Navbar below fixed Header */}
      <nav className="fixed top-[80px] left-0 w-full bg-white shadow-md z-50 px-6 py-3 max-w-screen-2xl mx-auto">
        <div className="flex items-center justify-between w-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-6 w-full">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                className="text-gray-800 hover:text-yellow-400 transition-all duration-300 font-medium text-sm lg:text-base whitespace-nowrap"
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            ))}

            {/* Professor Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfessorDropdownOpen(!professorDropdownOpen)}
                className="text-gray-800 hover:text-yellow-400 transition-all duration-300 font-medium text-sm lg:text-base"
                aria-haspopup="true"
                aria-expanded={professorDropdownOpen}
              >
                Professor ▾
              </button>

              {professorDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                  {professorCategories.map((prof, idx) => (
                    <Link
                      key={idx}
                      to={prof.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-100"
                      onClick={handleLinkClick}
                    >
                      {prof.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu Button Mobile */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden ml-auto text-gray-800 text-2xl hover:text-pink-600 transition-colors duration-300 p-2"
            aria-label="Toggle Menu"
          >
            {mobileNavOpen ? <FiX /> : <FaHamburger />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileNavOpen && (
        <div className="fixed inset-0 top-[130px] bg-white z-40 flex flex-col items-center justify-start space-y-6 md:hidden pt-6">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              onClick={handleLinkClick}
              className="text-gray-800 hover:text-yellow-600 transition-all duration-300 font-medium text-lg whitespace-nowrap"
            >
              {item.title}
            </Link>
          ))}

          {/* Professor Dropdown on Mobile */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setProfessorDropdownOpen(!professorDropdownOpen)}
              className="text-2xl text-gray-800 font-semibold hover:text-pink-600 transition-colors duration-300"
              aria-haspopup="true"
              aria-expanded={professorDropdownOpen}
            >
              Professor ▾
            </button>
            {professorDropdownOpen && (
              <div className="flex flex-col mt-2 space-y-2">
                {professorCategories.map((prof, idx) => (
                  <Link
                    key={idx}
                    to={prof.link}
                    onClick={handleLinkClick}
                    className="text-lg text-gray-700 hover:text-yellow-400 transition-colors duration-300"
                  >
                    {prof.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Background Overlay to close mobile menu */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Spacer to avoid content overlap below fixed header + navbar */}
      <div className="h-[160px] sm:h-[168px] md:h-[176px]" />
    </>
  );
}
