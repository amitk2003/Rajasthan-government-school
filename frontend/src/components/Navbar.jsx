import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Info,
  GraduationCap,
  Users,
  Trophy,
  Image as ImageIcon,
  ShieldCheck,
  PhoneCall,
  BookOpen,
  FlaskConical,
  Award,
  Layers
} from "lucide-react";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [professorDropdownOpen, setProfessorDropdownOpen] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileNavOpen(false);
    setAboutDropdownOpen(false);
    setProfessorDropdownOpen(false);
    setAcademicsDropdownOpen(false);
  }, [location.pathname]);

  const professorCategories = [
    { title: "All Faculty & Staff", link: "/professor", desc: "Complete academic and administrative directory" },
    { title: "Principal's Office (प्रधानाचार्य)", link: "/professor/प्रधानाचार्य(principal)", desc: "Institutional leadership & administration" },
    { title: "Science Department (विज्ञान वर्ग)", link: "/professor/विज्ञान वर्ग(Science)", desc: "Physics, Chemistry, Biology & Mathematics" },
    { title: "Arts & Humanities (कला वर्ग)", link: "/professor/कला वर्ग(Arts)", desc: "Geography, History, Literature & Social Sciences" },
    { title: "Vocational Trainers (व्यवसायिक शिक्षक)", link: "/professor/व्यवसायिक शिक्षक(Vocational Teacher)", desc: "Retail operations, IT & Skill trades" },
    { title: "Secondary Education (माध्यमिक शिक्षा)", link: "/professor/माध्यमिक एवं उ. मा. शिक्षा(secondary Education)", desc: "Secondary wing foundation faculty" },
    { title: "Lab Assistants (प्रयोगशाला सहायक)", link: "/professor/प्रयोगशाला सहायक(Lab Assistant)", desc: "Practical lab instructors and custodians" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#0b2545] text-white shadow-lg border-b border-blue-950/60 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-medium">
            {/* Home */}
            <Link
              to="/"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-all ${
                isActive("/")
                  ? "bg-blue-900/80 text-amber-400 font-semibold shadow-inner"
                  : "text-slate-200 hover:text-white hover:bg-blue-900/40"
              }`}
            >
              <Home className="w-4 h-4 text-amber-400" />
              <span>Home</span>
            </Link>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all ${
                  location.pathname.startsWith("/about")
                    ? "bg-blue-900/80 text-amber-400 font-semibold"
                    : "text-slate-200 hover:text-white hover:bg-blue-900/40"
                }`}
              >
                <Info className="w-4 h-4 text-amber-400" />
                <span>About Us</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <Link
                    to="/about"
                    className="block px-4 py-2.5 text-xs hover:bg-blue-50 hover:text-blue-900 font-semibold transition"
                  >
                    <div className="text-slate-900 font-bold">Institute Overview</div>
                    <div className="text-slate-500 text-[11px] font-normal">Legacy since 1904, vision, and campus facilities</div>
                  </Link>
                  <Link
                    to="/about#vision"
                    className="block px-4 py-2.5 text-xs hover:bg-blue-50 hover:text-blue-900 transition"
                  >
                    <div className="text-slate-900 font-bold">Vision & Mission</div>
                    <div className="text-slate-500 text-[11px]">Empowering rural learners with futuristic skills</div>
                  </Link>
                  <Link
                    to="/about#labs"
                    className="block px-4 py-2.5 text-xs hover:bg-blue-50 hover:text-blue-900 transition border-t border-slate-100"
                  >
                    <div className="text-slate-900 font-bold">Smart Labs & Infrastructure</div>
                    <div className="text-slate-500 text-[11px]">Geography, Retail & Science research facilities</div>
                  </Link>
                </div>
              )}
            </div>

            {/* Academics & Faculty Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProfessorDropdownOpen(true)}
              onMouseLeave={() => setProfessorDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all ${
                  location.pathname.startsWith("/professor")
                    ? "bg-blue-900/80 text-amber-400 font-semibold"
                    : "text-slate-200 hover:text-white hover:bg-blue-900/40"
                }`}
              >
                <Users className="w-4 h-4 text-amber-400" />
                <span>Faculty Directory</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${professorDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {professorDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="px-4 py-1.5 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Academic Departments & Staff
                  </div>
                  {professorCategories.map((prof, idx) => (
                    <Link
                      key={idx}
                      to={prof.link}
                      className="block px-4 py-2 text-xs hover:bg-blue-50 hover:text-blue-900 transition"
                    >
                      <div className="text-slate-900 font-semibold">{prof.title}</div>
                      <div className="text-slate-500 text-[11px] truncate">{prof.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Admissions */}
            <Link
              to="/admissions"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-all ${
                isActive("/admissions")
                  ? "bg-blue-900/80 text-amber-400 font-semibold shadow-inner"
                  : "text-slate-200 hover:text-white hover:bg-blue-900/40"
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Admissions</span>
            </Link>

            {/* Topper / Merit List */}
            <Link
              to="/Topper"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-all ${
                isActive("/Topper")
                  ? "bg-blue-900/80 text-amber-400 font-semibold shadow-inner"
                  : "text-slate-200 hover:text-white hover:bg-blue-900/40"
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Hall of Fame</span>
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-all ${
                isActive("/gallery")
                  ? "bg-blue-900/80 text-amber-400 font-semibold shadow-inner"
                  : "text-slate-200 hover:text-white hover:bg-blue-900/40"
              }`}
            >
              <ImageIcon className="w-4 h-4 text-amber-400" />
              <span>Campus Gallery</span>
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md transition-all ${
                isActive("/contact")
                  ? "bg-blue-900/80 text-amber-400 font-semibold shadow-inner"
                  : "text-slate-200 hover:text-white hover:bg-blue-900/40"
              }`}
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Contact</span>
            </Link>
          </div>

          {/* Right Action: School Management ERP (RBAC + JWT) */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/portal"
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-3.5 py-1.5 rounded-lg text-xs tracking-wide shadow-md hover:shadow-lg transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>School ERP (RBAC)</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden w-full justify-between">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-tight text-amber-400">
                GSS Peeth Portal
              </span>
            </div>
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-blue-900/60 focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileNavOpen && (
        <div className="lg:hidden bg-slate-900/98 border-t border-blue-950 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl animate-in slide-in-from-top duration-200 shadow-2xl">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-100 hover:bg-blue-900/60 text-sm font-medium"
          >
            <Home className="w-4 h-4 text-amber-400" />
            Home
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-100 hover:bg-blue-900/60 text-sm font-medium"
          >
            <Info className="w-4 h-4 text-amber-400" />
            About Institute & Labs
          </Link>

          {/* Mobile Faculty Categories */}
          <div className="border-t border-slate-800 pt-2">
            <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
              <span>Faculty & Departments</span>
            </div>
            <div className="pl-3 space-y-1 mt-1">
              {professorCategories.map((prof, idx) => (
                <Link
                  key={idx}
                  to={prof.link}
                  className="block px-3 py-1.5 text-xs text-slate-300 hover:text-amber-400 rounded-md"
                >
                  {prof.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-2 space-y-1">
            <Link
              to="/admissions"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-100 hover:bg-blue-900/60 text-sm font-medium"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              Admissions 2025-26
            </Link>

            <Link
              to="/Topper"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-100 hover:bg-blue-900/60 text-sm font-medium"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              Hall of Fame & Toppers
            </Link>

            <Link
              to="/gallery"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-100 hover:bg-blue-900/60 text-sm font-medium"
            >
              <ImageIcon className="w-4 h-4 text-amber-400" />
              Campus Gallery
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-100 hover:bg-blue-900/60 text-sm font-medium"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              Contact & Grievance
            </Link>

            <Link
              to="/portal"
              className="flex items-center justify-center gap-2 mt-3 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-md"
            >
              <ShieldCheck className="w-4 h-4" />
              Access School ERP System (JWT / RBAC)
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
