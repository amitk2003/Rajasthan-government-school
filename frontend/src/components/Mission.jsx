import React from "react";
import { Lightbulb, Users, Rocket, Target, ShieldCheck, HeartHandshake } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-200",
    title: "Inquiry & Scientific Curiosity",
    hindi: "जिज्ञासा एवं नवाचार",
    description: "Encouraging learners to question fearlessly, explore natural phenomena in laboratories, and develop empirical scientific mindsets.",
  },
  {
    icon: ShieldCheck,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    title: "Moral Integrity & Citizenship",
    hindi: "नैतिक मूल्य एवं नागरिक दायित्व",
    description: "Inculcating civic duties, national pride, environmental consciousness, and unshakeable ethical character across all grades.",
  },
  {
    icon: Rocket,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    title: "Vocational & Practical Mastery",
    hindi: "कौशल एवं व्यवसायिक दक्षता",
    description: "Bridging textbook knowledge with NSQF practical retail, computer literacy, and vocational acumen for self-reliant futures.",
  },
  {
    icon: HeartHandshake,
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-200",
    title: "Inclusive Community Learning",
    hindi: "समावेशी एवं समतामूलक शिक्षा",
    description: "Empowering every child from rural backgrounds with equal dignity, gender sensitivity, and subsidized welfare schemes.",
  },
];

const Mission = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Target className="w-3.5 h-3.5 text-blue-600" /> Core Pedagogical Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Vision, Mission & Institutional Charter
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-devanagari">
            हमारा ध्येय: उत्कृष्ट, समावेशी एवं भविष्योन्मुखी शिक्षा का केंद्र
          </p>
        </div>

        {/* 4 Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-900 font-devanagari mt-0.5 mb-2">
                    {item.hindi}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
