import React from "react";
import { Link } from "react-router-dom";
import instagram from "./instagram.png";
import LinkedIn from "./linkedin.png";
import email from "./email.png";
import github from "./github.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-700 text-white py-10 mt-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-amber-400">GSS School, Peth</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Nurturing young minds from Std. 1 to Std. 12 with academic excellence, 
            sports, and holistic development. Our vision is to inspire curiosity, 
            creativity, and leadership in every student.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-amber-400 mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-amber-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-400">About Us</Link></li>
            <li><Link to="/admissions" className="hover:text-amber-400">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400">Contact</Link></li>
          </ul>
        </div>

        {/* Contact + Socials */}
        <div>
          <h2 className="text-xl font-semibold text-amber-400 mb-3">Get in Touch</h2>
          <p className="text-gray-300 text-sm"> Peth,Rajasthan </p>
          <p className="text-gray-300 text-sm">+91 9413282231</p>
          <p className="text-gray-300 text-sm"> gsspeeth@gmail.com</p>

          {/* Socials */}
          <div className="mt-4 flex space-x-4">
            <Link to="https://www.instagram.com/gsss.peeth_1904/#">
              <img src={instagram} alt="Instagram" className="w-8 h-8 hover:scale-110 transition" />
            </Link>
            <Link to="mailto: gsspeeth@gmail.com">
              <img src={email} alt="Email" className="w-8 h-8 hover:scale-110 transition" />
            </Link>
            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-sm text-gray-400">
        © {year} GSS School, Peth. All rights reserved.
      </div>
    </footer>
  );
}
