import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Award, Server, ShieldCheck, ExternalLink, Sparkles } from 'lucide-react';
import logo from '../assets/gallery/logo.jpg';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 shadow-sm relative z-40">
      {/* Top Utility & Notification Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Live Notification Marquee Ticker */}
          <div className="flex items-center gap-2 overflow-hidden w-full sm:w-auto">
            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider flex items-center gap-1 shrink-0 animate-pulse">
              <Sparkles className="w-3 h-3" /> Notice
            </span>
            <div className="overflow-hidden whitespace-nowrap relative w-full sm:max-w-xl">
              <div className="animate-ticker text-slate-300">
                <span className="mx-4">🔔 Admissions Open for Session 2025–26 (Classes 1st to 12th)</span>
                <span className="mx-4">🏆 Congratulations to Board Merit Holders: 90%+ in 12th Arts & Science</span>
                {/* <span className="mx-4">💻 AWS EC2 Hosted Full-Stack ERP System Live with JWT Role-Based Security</span> */}
                <span className="mx-4">🧪 State-of-the-Art Geography, Retail & Science Labs Open for Tours</span>
              </div>
            </div>
          </div>

          {/* Quick Institutional Meta Links */}
          <div className="hidden lg:flex items-center gap-4 text-slate-300 shrink-0">
            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              <span className="text-amber-400 font-semibold">U-DISE+</span> 08260107204
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              <span className="text-emerald-400 font-semibold">Code:</span> 1904
            </span>
            <span className="text-slate-600">|</span>
            <a href="tel:+919413282231" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Phone className="w-3 h-3 text-amber-400" /> +91 9413282231
            </a>
            <span className="text-slate-600">|</span>
            <a href="mailto:gsspeeth@gmail.com" className="flex items-center gap-1 hover:text-amber-400 transition-colors">
              <Mail className="w-3 h-3 text-amber-400" /> gsspeeth@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Brand Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Institute Title */}
          <Link to="/" className="flex items-center gap-4 group text-decoration-none">
            <div className="relative">
              <img
                src={logo}
                alt="Rajasthan Government School Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain rounded-xl p-1 bg-white border-2 border-amber-500/50 shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute -bottom-1 -right-1 bg-blue-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow border border-blue-700">
                1904
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="bg-blue-100 text-blue-900 text-[11px] font-bold px-2 py-0.5 rounded-full border border-blue-200">
                  Government of Rajasthan
                </span>
                <span className="hidden sm:inline-block bg-amber-100 text-amber-800 text-[11px] font-semibold px-2 py-0.5 rounded-full border border-amber-200">
                  RBSE Affiliated
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Government Higher Secondary School, Peeth
              </h1>
              <p className="font-devanagari text-sm sm:text-base font-semibold text-blue-900 mt-0.5">
                राजकीय उच्च माध्यमिक विद्यालय पीठ, ज़िला डूंगरपुर (राजस्थान)
              </p>
              <p className="text-xs text-slate-500 hidden sm:block">
                Department of Secondary Education • Recognized Center of Academic & Vocational Excellence
              </p>
            </div>
          </Link>

          {/* Quick Action & Engineering Showcase Badges */}
          <div className="flex items-center flex-wrap gap-2 md:gap-3 self-center md:self-auto">
            {/* AWS EC2 System Badge */}
            {/* <div className="hidden xl:flex flex-col items-end text-right p-2 rounded-lg bg-slate-50 border border-slate-200">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                <Server className="w-3.5 h-3.5 text-emerald-600" /> AWS EC2 Deployed
              </span>
              <span className="text-[10px] text-slate-500">
                CI/CD • JWT RBAC Secured
              </span>
            </div> */}

            {/* Quick ERP Portal Link */}
            <Link
              to="/portal"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white text-xs sm:text-sm font-semibold px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>School ERP Portal</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </Link>

            {/* Admission CTA */}
            <Link
              to="/admissions"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs sm:text-sm font-bold px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <Award className="w-4 h-4" />
              <span>Apply Online</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
