import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  Calendar,
  FileText,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Quote,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import principalImg from '../assets/school-material/principal_office.jpg';

const notices = [
  {
    category: "admission",
    date: "15 Oct 2025",
    title: "Class 1st to 12th Admission Registration Guidelines for Session 2025-26",
    isNew: true,
    fileType: "PDF (240 KB)",
  },
  {
    category: "exam",
    date: "08 Oct 2025",
    title: "RBSE Board Examination 2025 Pre-Board Datesheet & Practical Timetable",
    isNew: true,
    fileType: "PDF (180 KB)",
  },
  {
    category: "general",
    date: "28 Sep 2025",
    title: "District Science Fair 2025: GSS Peeth Bags 1st Position in Geography & Physics Models",
    isNew: false,
    fileType: "Press Note",
  },
  {
    category: "admission",
    date: "14 Sep 2025",
    title: "National Means-cum-Merit Scholarship Scheme (NMMSS) Verification Notification",
    isNew: false,
    fileType: "PDF (310 KB)",
  },
  {
    category: "general",
    date: "02 Sep 2025",
    title: "Parent-Teacher Meeting (PTM) for Term 1 Performance Review",
    isNew: false,
    fileType: "Notice",
  },
];

export default function NoticesAndPrincipal() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredNotices =
    activeTab === "all"
      ? notices
      : notices.filter((n) => n.category === activeTab);

  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Notice Board & Announcements (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-900 border border-blue-100">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    Notice Board & Circulars
                  </h3>
                  <p className="text-xs text-slate-500 font-devanagari">
                    नवीनतम सूचनाएं एवं परिपत्र (राजकीय उच्च माध्यमिक विद्यालय पीठ)
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs font-semibold">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-3 py-1 rounded-md transition ${
                    activeTab === "all" ? "bg-white text-blue-950 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveTab("admission")}
                  className={`px-3 py-1 rounded-md transition ${
                    activeTab === "admission" ? "bg-white text-blue-950 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Admissions
                </button>
                <button
                  onClick={() => setActiveTab("exam")}
                  className={`px-3 py-1 rounded-md transition ${
                    activeTab === "exam" ? "bg-white text-blue-950 shadow-sm" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Exams
                </button>
              </div>
            </div>

            {/* Notices List */}
            <div className="divide-y divide-slate-100 mt-2">
              {filteredNotices.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 hover:bg-slate-50/80 px-2 rounded-lg transition-all group flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-500" />
                        {item.date}
                      </span>
                      {item.isNew && (
                        <span className="bg-rose-100 text-rose-700 text-[10px] font-extrabold px-1.5 py-0.2 rounded-full border border-rose-200 animate-pulse">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-900 transition leading-snug">
                      {item.title}
                    </p>
                  </div>

                  <span className="text-[11px] font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2 py-1 rounded shrink-0 flex items-center gap-1 group-hover:bg-blue-600 group-hover:text-white transition">
                    <FileText className="w-3 h-3" />
                    <span className="hidden sm:inline">{item.fileType}</span>
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">Official circulars under Department of Education, Rajasthan</span>
              <Link to="/contact" className="font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1">
                View All Circulars <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Principal's Desk & Leadership (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                <Quote className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  From the Principal's Desk
                </h3>
                <p className="text-xs text-slate-500 font-devanagari">
                  प्रधानाचार्य का संदेश
                </p>
              </div>
            </div>

            {/* Principal Image & Quote */}
            <div className="mt-4 space-y-4">
              <div className="relative rounded-xl overflow-hidden shadow border border-slate-200 h-48 bg-slate-100">
                <img
                  src={principalImg}
                  alt="Principal's Office, GSS Peeth"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <div className="text-white">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      Administrative Block
                    </div>
                    <div className="text-sm font-semibold">
                      Office of the Principal, GSS Peeth
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  "At Government Higher Secondary School Peeth, we are steadfastly committed to bridging the gap between rural potential and modern 21st-century excellence. Through our dedicated faculty, advanced laboratories, and digital systems, every child is nurtured with discipline, curiosity, and pride in national heritage."
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">
                      Office of the Head of Institution
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Govt. Higher Secondary School, Peeth (Dungarpur)
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> RBSE Verified
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Link
                  to="/professor/प्रधानाचार्य(principal)"
                  className="w-full text-center text-xs font-bold py-2 px-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  Principal's Profile & Administration
                </Link>
                <Link
                  to="/about"
                  className="w-full text-center text-xs font-bold py-2 px-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
                >
                  School History & Vision
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
