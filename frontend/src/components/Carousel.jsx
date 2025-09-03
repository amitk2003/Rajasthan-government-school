import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

import bioLab from "../assets/school-material/bio_lab.jpg";
import GeoLab from "../assets/school-material/Geography_lab.jpg";
import schoolE1 from "../assets/school-material/school_entrance.jpg";
import schoolE2 from "../assets/school-material/school_entrance2.jpg";
import retailLab from "../assets/school-material/Retail_lab.jpg";
import principalOffice from "../assets/school-material/principal_office.jpg";
import class11th from "../assets/school-material/class_11th.jpg";
import class12th from "../assets/school-material/class12th.jpg";

// Carousel Display Component
const Caro_display = ({ slides, autoSlide = true, autoSlideInterval = 4000 }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, curr]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={prev}
        >
          <ChevronLeft size={32} />
        </button>
        <button
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          onClick={next}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurr(i)}
            className={`cursor-pointer transition-all w-3 h-3 rounded-full ${
              curr === i ? "bg-white p-2" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Carousel Component
const Carousel = () => {
  const images = [
    schoolE1, class11th, schoolE2, class12th,
    bioLab, GeoLab, retailLab, principalOffice
  ];

  const slides = images.map((image, index) => (
    <img
      key={index}
      src={image}
      alt={`Slide ${index + 1}`}
      className="w-full h-[400px] md:h-[500px] object-cover"
    />
  ));

  return (
    <div className="py-8">
      <Caro_display slides={slides} autoSlide={true} autoSlideInterval={4000} />
    </div>
  );
};

export default Carousel;