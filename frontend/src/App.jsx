import './App.css';

import Hero from './components/Hero';
import Mission from './components/Mission';
import Footer from './components/Footer/Footer.jsx';

import React from 'react';
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Admissions from "./pages/Admissions.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import TopperList from "./pages/TopperList.jsx";
import Professor from "./pages/Professor.jsx";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Carousel from './components/Carousel.jsx';
function App() {
  return (
    <div className="max-h-[100vh] ">
   
      
       <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Topper" element={<TopperList />} />
         {/* All professors */}
        <Route path="/professor" element={<Professor />} />

        {/* Professors by category */}
        <Route path="/professor/:category" element={<Professor />} />
      </Routes> 
      
    </div>
  );
}

export default App;
