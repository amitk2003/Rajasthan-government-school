import './App.css';


import Header from './components/Header.jsx';
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
import Footer from './components/Footer/Footer.jsx';
import Notfound from './pages/Notfound.jsx';
function App() {
  return (
    <div className="max-h-[100vh] ">
       <Header/>
       <Navbar/>
       <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/gallery" element={<Gallery />} />
      
        <Route path="/Topper" element={<TopperList />} />
         {/* All professors */}
        <Route path="/professor" element={<Professor />} />

        {/* Professors by category */}
        <Route path="/professor/:category" element={<Professor />} />
        <Route path="*" element={<Notfound />} />
      </Routes> 
      <Footer/>
      
    </div>
  );
}

export default App;
