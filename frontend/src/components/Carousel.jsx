import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Pause, Play, Award, Compass, ArrowRight } from 'lucide-react';

import schoolE1 from "../assets/school-material/school_entrance.jpg";
import GeoLab from "../assets/school-material/Geography_lab.jpg";
import retailLab from "../assets/school-material/Retail_lab.jpg";
import bioLab from "../assets/school-material/bio_lab.jpg";
import class12th from "../assets/school-material/class12th.jpg";
import greenery from "../assets/school-material/greenery_school.jpg";

const slidesData = [
  {
    image: schoolE1,
    badge: "Government Higher Secondary School • Estd. 1904",
    title: "120+ Years of Academic Excellence & Holistic Growth",
    subtitle: "A premier government model institution nurturing ethical leaders, scientific minds, and vocational champions in Peeth, Dungarpur.",
    primaryCta: { label: "Admissions 2025-26", link: "/admissions" },
    secondaryCta: { label: "Explore Campus", link: "/gallery" },
  },
  {
    image: GeoLab,
    badge: "State-of-the-Art Academic Infrastructure",
    title: "Modern Geography & Cartography Research Lab",
    subtitle: "Hands-on topographical modeling, GIS mapping instruments, and digital cartography for comprehensive humanities studies.",
    primaryCta: { label: "Learn About Labs", link: "/about#labs" },
    secondaryCta: { label: "Meet Department", link: "/professor/कला वर्ग(Arts)" },
  },
  {
    image: retailLab,
    badge: "Vocational & Skill Development Program",
    title: "Industry-Aligned Retail & Smart Trade Training",
    subtitle: "Practical point-of-sale systems, store inventory management, and customer service skills preparing youth for modern career opportunities.",
    primaryCta: { label: "Vocational Courses", link: "/professor/व्यवसायिक शिक्षक(Vocational Teacher)" },
    secondaryCta: { label: "Student Outcomes", link: "/Topper" },
  },
  {
    image: bioLab,
    badge: "Science & Innovation Wing",
    title: "Advanced Biology, Physics & Chemistry Laboratories",
    subtitle: "Equipped with high-precision microscopes, specimen collections, and experimental apparatus inspiring budding scientists and doctors.",
    primaryCta: { label: "Science Wing", link: "/professor/विज्ञान वर्ग(Science)" },
    secondaryCta: { label: "Admissions", link: "/admissions" },
  },
  {
    image: class12th,
    badge: "Merit & Board Results",
    title: "Consistent 95%+ Board Achievers & State Rankers",
    subtitle: "Personalized mentorship by experienced gazetted educators ensuring peak performance in Class 10th and 12th Board examinations.",
    primaryCta: { label: "Hall of Fame", link: "/Topper" },
    secondaryCta: { label: "School ERP", link: "/portal" },
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const prev = useCallback(() => {
    setCurrent((curr) => (curr === 0 ? slidesData.length - 1 : curr - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((curr) => (curr === slidesData.length - 1 ? 0 : curr + 1));
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, next]);

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 text-white select-none">
      {/* Slider Viewport */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[620px] w-full">
        {slidesData.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105 pointer-events-none"
              }`}
              style={{ transitionProperty: "opacity, transform", transitionDuration: "1000ms" }}
            >
              {/* Background Image with Dark Vignette & Gradient Overlays */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.05]"
              />

              {/* Multi-layered Gradient Overlays for High-Contrast Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />

              {/* Slide Content Box */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl sm:max-w-3xl space-y-4">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-amber-500/90 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
                      <Award className="w-3.5 h-3.5" />
                      <span>{slide.badge}</span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight sm:leading-tight">
                      {slide.title}
                    </h2>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-normal max-w-2xl">
                      {slide.subtitle}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <Link
                        to={slide.primaryCta.link}
                        className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-lg shadow-lg hover:shadow-amber-500/25 transition-all text-sm"
                      >
                        <span>{slide.primaryCta.label}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        to={slide.secondaryCta.link}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-lg backdrop-blur-md border border-white/20 hover:border-white/40 transition-all text-sm"
                      >
                        <Compass className="w-4 h-4 text-amber-400" />
                        <span>{slide.secondaryCta.label}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Control Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-sm border border-white/10 hover:border-amber-400 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-sm border border-white/10 hover:border-amber-400 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom Status Bar: Dots + Pause/Play */}
      <div className="absolute bottom-4 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-2">
            {slidesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? "w-8 bg-amber-400 shadow-md shadow-amber-400/50" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Autoplay Play/Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10"
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3 h-3 text-amber-400" />
                <span className="hidden sm:inline">Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-amber-400" />
                <span className="hidden sm:inline">Play</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;