import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Star, ArrowRight, Award } from 'lucide-react';

import topperSahishata from '../assets/class_12_arts/sahishata_bhanu_pathan.jpg';
import topperDhwani from '../assets/class_12_arts/dhwani_darji.jpg';
import topperDivyanshi from '../assets/class_12_arts/divyanshi_prajapat.jpg';
import topperMaya from '../assets/class_12_arts/maya_kumari_labana.jpg';

const featuredToppers = [
  {
    name: "Sahishata Bhanu Pathan",
    hindi: "साहिस्ता बानू पठान",
    stream: "Class 12th (Arts)",
    percentage: "94.60%",
    rank: "District Rank 1",
    image: topperSahishata,
    highlight: "100/100 in Geography Theory & Practical",
  },
  {
    name: "Dhwani Darji",
    hindi: "ध्वनि दर्जी",
    stream: "Class 12th (Arts)",
    percentage: "92.80%",
    rank: "Merit Rank 2",
    image: topperDhwani,
    highlight: "Distinction in English Literature & History",
  },
  {
    name: "Divyanshi Prajapat",
    hindi: "दिव्यांशी प्रजापत",
    stream: "Class 12th (Arts)",
    percentage: "91.20%",
    rank: "Merit Rank 3",
    image: topperDivyanshi,
    highlight: "Subject Topper in Political Science",
  },
  {
    name: "Maya Kumari Labana",
    hindi: "माया कुमारी लबाना",
    stream: "Class 12th (Arts)",
    percentage: "89.40%",
    rank: "Merit Rank 4",
    image: topperMaya,
    highlight: "Gold Medal in State Hindi Essay Symposium",
  },
];

export default function TopperSpotlight() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              <Trophy className="w-3.5 h-3.5 text-amber-600" /> Academic Hall of Fame
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Honoring Our Board Merit Rankers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 font-devanagari">
              सत्र 2024-25 बोर्ड परीक्षा में उत्कृष्ट प्रदर्शन करने वाले मेधावी विद्यार्थी
            </p>
          </div>

          <Link
            to="/Topper"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-lg text-xs sm:text-sm shadow transition"
          >
            <span>View Full Merit & Toppers List</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredToppers.map((student, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 bg-slate-100 overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
                {/* Score Pill */}
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-extrabold text-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Star className="w-3 h-3 fill-slate-950" />
                  <span>{student.percentage}</span>
                </div>
                {/* Rank Tag */}
                <div className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {student.rank}
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {student.name}
                  </h3>
                  <p className="text-xs text-blue-900 font-devanagari font-semibold">
                    {student.hindi}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    {student.stream}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">{student.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
