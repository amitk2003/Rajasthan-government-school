import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, ZoomIn, Sparkles } from "lucide-react";

import Glab from "../assets/school-material/Geography_lab.jpg";
import Rlab from "../assets/school-material/Retail_lab.jpg";
import Poffice from "../assets/school-material/principal_office.jpg";
import fest from "../assets/gallery/fest.jpg";
import yoga from "../assets/gallery/yoga.jpg";
import greenery from "../assets/school-material/greenery_school.jpg";
import entrance from "../assets/school-material/school_entrance.jpg";
import entrance2 from "../assets/school-material/school_entrance2.jpg";
import voc_lab from "../assets/gallery/voc_lab.jpg";
import science_lab from "../assets/gallery/science_lab.jpg";
import student from "../assets/gallery/student.jpg";
import schoolA from "../assets/gallery/school_activity.jpg";
import class11th from "../assets/school-material/class_11th.jpg";
import class12th from "../assets/school-material/class12th.jpg";

const galleryImages = [
  { id: 1, src: Glab, category: "Laboratories", title: "Geography & Cartography Research Lab", desc: "Topographical relief models and map survey instruments" },
  { id: 2, src: Rlab, category: "Laboratories", title: "Retail Management Vocational Lab", desc: "Point-of-Sale billing counter and retail display setup" },
  { id: 3, src: science_lab, category: "Laboratories", title: "Chemistry & Physics Practical Lab", desc: "Experiment stations with safety apparatus and glassware" },
  { id: 4, src: voc_lab, category: "Laboratories", title: "Vocational Skills & ICT Laboratory", desc: "Hands-on vocational trades and IT learning facility" },
  { id: 5, src: entrance, category: "Campus Grounds", title: "Main School Entrance Gate", desc: "Historic gateway established in 1904, Peeth" },
  { id: 6, src: entrance2, category: "Campus Grounds", title: "Secondary & High School Courtyard", desc: "Spacious assembly ground and central corridors" },
  { id: 7, src: greenery, category: "Campus Grounds", title: "Lush Eco-Greenery & Trees", desc: "Clean and green campus environment fostering wellbeing" },
  { id: 8, src: Poffice, category: "Campus Grounds", title: "Administrative Block & Principal Office", desc: "Headquarters of school administration and governance" },
  { id: 9, src: fest, category: "Events & Culture", title: "Annual Cultural Fest & Performances", desc: "Students performing traditional Rajasthani folk dances" },
  { id: 10, src: yoga, category: "Events & Culture", title: "International Yoga Day & Physical Fitness", desc: "Mass yoga sessions on the school sports grounds" },
  { id: 11, src: student, category: "Academic Life", title: "Interactive Student Group Activities", desc: "Collaborative learning and classroom seminar sessions" },
  { id: 12, src: schoolA, category: "Academic Life", title: "School Assembly & Special Symposium", desc: "Morning assembly, national anthem, and student talks" },
  { id: 13, src: class11th, category: "Academic Life", title: "Class 11th Senior Secondary Wing", desc: "Smart classroom equipped for board syllabus lectures" },
  { id: 14, src: class12th, category: "Academic Life", title: "Class 12th Board Examination Hall", desc: "Focused academic environment for senior board candidates" },
];

const categories = ["All", "Laboratories", "Campus Grounds", "Events & Culture", "Academic Life"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-16">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full">
            <ImageIcon className="w-3.5 h-3.5 text-amber-400" /> Campus Media Gallery
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Campus Life, Labs & Event Visuals
          </h1>
          <p className="font-devanagari text-base sm:text-lg text-amber-300 font-semibold">
            राजकीय उच्च माध्यमिक विद्यालय पीठ — छायाचित्र वीथिका
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Explore authentic photographs of our historic school campus, modern laboratories, academic symposiums, sports celebrations, and cultural festivals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        {/* Category Filter Pills */}
        <div className="flex justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-blue-900 text-white shadow-md shadow-blue-900/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 cursor-pointer group hover:shadow-xl transition-all duration-300 flex flex-col"
              onClick={() => setSelectedImage(img)}
            >
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/40">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                </div>
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {img.category}
                </div>
              </div>

              <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-900 transition">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {img.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition"
              onClick={handlePrev}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image & Caption Box */}
            <motion.div
              className="max-w-4xl w-full flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl shadow-2xl object-contain border border-slate-800"
              />
              <div className="mt-4 text-center text-white space-y-1">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold">{selectedImage.title}</h3>
                <p className="text-xs text-slate-300 max-w-xl">{selectedImage.desc}</p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition"
              onClick={handleNext}
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
