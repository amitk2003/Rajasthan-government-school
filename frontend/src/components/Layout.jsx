import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Fixed Navbar just below header */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow pt-[160px] px-6"> 
        {/* pt-[160px] = padding top so content doesn’t hide behind fixed header+navbar */}
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
