import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Admissions from "./pages/Admissions.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import TopperList from "./pages/TopperList.jsx";
import Professor from "./pages/Professor.jsx";
import Portal from "./pages/Portal.jsx";
import Notfound from './pages/Notfound.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased selection:bg-amber-500 selection:text-white">
      {/* Institutional Top Header */}
      <Header />

      {/* Sticky Primary Mega-Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Hall of Fame & Toppers List */}
          <Route path="/Topper" element={<TopperList />} />
          <Route path="/topper" element={<TopperList />} />

          {/* Academic Faculty Directory */}
          <Route path="/professor" element={<Professor />} />
          <Route path="/professor/:category" element={<Professor />} />

          {/* School ERP Full-Stack Management System (JWT + RBAC) */}
          <Route path="/portal" element={<Portal />} />

          {/* 404 Route */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}

export default App;
