import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Server,
  Zap,
  GitBranch,
  ExternalLink,
  ChevronRight,
  Award
} from "lucide-react";
import logo from "../../assets/gallery/logo.jpg";
import instagram from "./instagram.png";
import email from "./email.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-amber-500 relative overflow-hidden">
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Institute & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: School Emblem & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="School Emblem"
                className="h-16 w-16 object-contain rounded-xl p-1 bg-white border border-amber-500 shadow-md"
              />
              <div>
                <h3 className="text-white font-extrabold text-lg leading-tight tracking-tight">
                  Govt. Higher Secondary School, Peeth
                </h3>
                <p className="font-devanagari text-amber-400 text-sm font-medium">
                  राजकीय उच्च माध्यमिक विद्यालय पीठ, डूंगरपुर (राज.)
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  Estd. 1904 • Affiliated to RBSE Ajmer
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              Dedicated to delivering accessible, futuristic, and values-driven education to students from Class 1 to 12. Equipped with modern Science, Geography, and Retail Smart Labs fostering academic merit, discipline, and community leadership.
            </p>

            {/* Quick Accreditation Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1 text-[11px] bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                <Award className="w-3.5 h-3.5 text-amber-400" /> U-DISE+: 08260107204
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> Dept. of Secondary Education
              </span>
            </div>
          </div>

          {/* Col 3: Academic Wings */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Academic Wings
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/professor/विज्ञान वर्ग(Science)" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Science Stream (PCM / PCB)
                </Link>
              </li>
              <li>
                <Link to="/professor/कला वर्ग(Arts)" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Arts & Humanities Wing
                </Link>
              </li>
              <li>
                <Link to="/professor/व्यवसायिक शिक्षक(Vocational Teacher)" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Vocational Courses (Retail / IT)
                </Link>
              </li>
              <li>
                <Link to="/about#labs" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Geography & Science Labs
                </Link>
              </li>
              <li>
                <Link to="/professor/माध्यमिक एवं उ. मा. शिक्षा(secondary Education)" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Secondary Education (1-10)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Portals & Student Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Student & Portals
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/portal" className="text-amber-400 font-semibold hover:text-amber-300 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> School ERP Portal (RBAC)
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Online Admission Form
                </Link>
              </li>
              <li>
                <Link to="/Topper" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Board Merit & Toppers List
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Campus Media Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 flex items-center gap-1.5 transition">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Grievance & Nodal Officer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2.5">
              Campus Location
            </h4>
            <div className="flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Peeth - Sarthuna Main Road, Tehsil: Similwara, Dist: Dungarpur, Rajasthan - 314406</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <span>+91 9413282231</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:gsspeeth@gmail.com" className="hover:underline">gsspeeth@gmail.com</a>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-slate-400">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mon - Sat: 07:30 AM - 01:30 PM</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/gsss.peeth_1904/#"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 transition"
                aria-label="Instagram"
              >
                <img src={instagram} alt="Instagram" className="w-5 h-5" />
              </a>
              <a
                href="mailto:gsspeeth@gmail.com"
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 transition"
                aria-label="Email"
              >
                <img src={email} alt="Email" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Engineering Architecture & Production System Specs (User Key Resume Points) */}
        {/* <div className="my-8 p-4 rounded-xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-950 text-blue-400 border border-blue-900">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-semibold">AWS EC2 Deployment</div>
              <div className="text-slate-400 text-[11px]">Real Client Production System</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-950 text-amber-400 border border-amber-900">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-semibold">JWT + RBAC Authentication</div>
              <div className="text-slate-400 text-[11px]">Admin, Faculty, Student Roles</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-900">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-semibold">15% Latency Reduction</div>
              <div className="text-slate-400 text-[11px]">Compound Indexing & Pagination</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-950 text-purple-400 border border-purple-900">
              <GitBranch className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-semibold">GitHub Actions CI/CD</div>
              <div className="text-slate-400 text-[11px]">Automated Build & Deployment</div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-4 gap-3">
          <p>© {currentYear} Government Higher Secondary School, Peeth (Dungarpur). All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-600">Designed & Maintained for Govt. Higher Secondary School, Peeth</span>
            <span className="text-slate-700">|</span>
            <Link to="/portal" className="text-amber-500 hover:underline">ERP Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
