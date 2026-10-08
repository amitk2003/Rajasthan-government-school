import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Globe, ShoppingBag, Cpu, ArrowRight, Check } from 'lucide-react';

import GeoLab from "../assets/school-material/Geography_lab.jpg";
import RetailLab from "../assets/school-material/Retail_lab.jpg";
import BioLab from "../assets/school-material/bio_lab.jpg";
import ScienceLab from "../assets/gallery/science_lab.jpg";
import VocLab from "../assets/gallery/voc_lab.jpg";

const labs = [
  {
    title: "Geography & Cartography Lab",
    hindi: "भूगोल प्रयोगशाला",
    icon: Globe,
    image: GeoLab,
    accent: "border-blue-500",
    description: "Fully equipped with topographical 3D relief maps, weather observation instruments, survey prismatic compasses, and GIS cartographic charts for senior secondary practical examinations.",
    highlights: ["3D Topographical Models", "Prismatic Compass & Survey Chains", "Meteorological Instruments", "RBSE Practical Curriculum"],
    link: "/professor/कला वर्ग(Arts)",
  },
  {
    title: "Retail & Commerce Vocational Lab",
    hindi: "व्यवसायिक खुदरा (Retail) प्रयोगशाला",
    icon: ShoppingBag,
    image: RetailLab,
    accent: "border-amber-500",
    description: "A simulated retail shopping environment with barcode scanners, POS counter displays, product merchandising racks, and customer service simulations under the National Skill Qualification Framework (NSQF).",
    highlights: ["Simulated POS Billing System", "Merchandising & Inventory Racks", "Customer Service Training", "NSQF Industry Certified"],
    link: "/professor/व्यवसायिक शिक्षक(Vocational Teacher)",
  },
  {
    title: "Biology & Life Sciences Lab",
    hindi: "जीव विज्ञान प्रयोगशाला",
    icon: FlaskConical,
    image: BioLab,
    accent: "border-emerald-500",
    description: "Equipped with compound and dissecting monocular microscopes, preserved biological specimens, human anatomical models, and botanical taxonomy displays fostering empirical biological understanding.",
    highlights: ["Compound & Dissecting Microscopes", "Botanical & Zoological Specimens", "Anatomical Human Skeleton Models", "Staining & Slide Mount Stations"],
    link: "/professor/विज्ञान वर्ग(Science)",
  },
  {
    title: "Physics & Chemistry Science Hub",
    hindi: "भौतिकी एवं रसायन विज्ञान प्रयोगशाला",
    icon: Cpu,
    image: ScienceLab,
    accent: "border-indigo-500",
    description: "Safety-equipped chemical reagent stations, titration assemblies, optical benches, resistance bridges, and digital multimeters enabling thorough hands-on physical science experiments.",
    highlights: ["Fume Extraction Safety Reagent Racks", "Optical Benches & Spectrometers", "Titration & Salt Analysis Stations", "Electrical Circuit & Ohm's Law Kits"],
    link: "/professor/विज्ञान वर्ग(Science)",
  },
];

export default function LabsShowcase() {
  return (
    <section className="py-16 bg-white" id="labs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              <FlaskConical className="w-3.5 h-3.5 text-amber-600" /> Practical Learning Centers
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              State-of-the-Art Smart & Vocational Labs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-devanagari">
              आधुनिक विज्ञान, भूगोल एवं व्यवसायिक कौशल प्रयोगशालाएं
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-900 hover:text-blue-700 shrink-0"
          >
            <span>Explore All Labs in Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {labs.map((lab, idx) => {
            const Icon = lab.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image View */}
                <div className="relative h-56 sm:h-64 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <span className="font-devanagari text-xs text-amber-300 font-semibold block">
                        {lab.hindi}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                        {lab.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {lab.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200">
                    {lab.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Link CTA */}
                  <div className="pt-2">
                    <Link
                      to={lab.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-blue-700 hover:underline"
                    >
                      <span>View Faculty & Timetable</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
