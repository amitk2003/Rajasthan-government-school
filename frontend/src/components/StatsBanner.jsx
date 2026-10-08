import React from 'react';
import { Users, GraduationCap, Award, BookOpen, Clock } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    number: "1904",
    label: "Year Established",
    desc: "120+ Years of Public Service",
    accent: "text-amber-500",
  },
  {
    icon: GraduationCap,
    number: "1,250+",
    label: "Enrolled Students",
    desc: "Classes 1st to 12th Standard",
    accent: "text-blue-500",
  },
  {
    icon: Users,
    number: "45+",
    label: "Dedicated Educators",
    desc: "Gazetted & Specialized Mentors",
    accent: "text-emerald-500",
  },
  {
    icon: Award,
    number: "98.4%",
    label: "Highest Board Result",
    desc: "Consistent State & District Rankers",
    accent: "text-amber-500",
  },
  {
    icon: BookOpen,
    number: "6+",
    label: "Advanced Smart Labs",
    desc: "Geography, Retail, Science & ICT",
    accent: "text-purple-500",
  },
];

export default function StatsBanner() {
  return (
    <section className="bg-slate-900 border-y border-slate-800 py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    <Icon className={`w-5 h-5 ${item.accent}`} />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {item.number}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-200 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
