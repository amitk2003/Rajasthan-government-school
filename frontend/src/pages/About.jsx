import React from "react";
import {
  BookOpen,
  Users,
  FlaskConical,
  Globe,
  Trophy,
  Volleyball,
  ShoppingBag,
  Award,
  CheckCircle2,
  Clock,
  Building,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import principalImg from '../assets/school-material/principal_office.jpg';
import entranceImg from '../assets/school-material/school_entrance.jpg';
import campusGreenery from '../assets/school-material/greenery_school.jpg';
import geoLabImg from '../assets/school-material/Geography_lab.jpg';
import retailLabImg from '../assets/school-material/Retail_lab.jpg';
import bioLabImg from '../assets/school-material/bio_lab.jpg';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full mb-3">
            <Clock className="w-3.5 h-3.5" /> Established 1904 • 120+ Years Legacy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Government Higher Secondary School, Peeth
          </h1>
          <p className="font-devanagari text-lg sm:text-xl text-amber-300 mt-2 font-semibold">
            राजकीय उच्च माध्यमिक विद्यालय पीठ (डूंगरपुर, राजस्थान)
          </p>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto mt-3 leading-relaxed">
            A center of public academic distinction affiliated with the Rajasthan Board of Secondary Education (RBSE), dedicated to transforming rural education through cutting-edge smart laboratories and holistic learning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Section 1: Legacy & Overview with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-wider">
              <Building className="w-4 h-4" /> Institutional Heritage
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              More Than A Century of Shaping Leaders and Innovators
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in 1904 in the historic town of Peeth (Tehsil Similwara, District Dungarpur), Government Higher Secondary School has stood as an educational beacon in Southern Rajasthan for over twelve decades.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From its humble origins to becoming an integrated modern educational institution serving over 1,200 learners across Primary, Upper Primary, Secondary, and Senior Secondary levels, the school blends traditional values with National Education Policy (NEP 2020) principles.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-xs text-slate-500">Affiliation</div>
                <div className="text-sm font-bold text-slate-900">RBSE (Ajmer)</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-xs text-slate-500">U-DISE+ Code</div>
                <div className="text-sm font-bold text-slate-900">08260107204</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-80 sm:h-96">
              <img
                src={entranceImg}
                alt="School Entrance Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">Main Campus Gateway</span>
                  <p className="text-sm font-semibold">Government Higher Secondary School, Peeth</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Vision & Mission Cards */}
        <div id="vision" className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Vision & Institutional Mission
            </h2>
            <p className="text-slate-500 text-sm mt-1 font-devanagari">
              हमारा दृष्टिकोण एवं उद्देश्य
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3">
              <h3 className="text-xl font-bold text-amber-900">Our Vision</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                To emerge as a premier model government institution in Rajasthan, empowering rural learners with world-class scientific, humanistic, and vocational competencies, fostering ethical leadership and nation-building values.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-3">
              <h3 className="text-xl font-bold text-blue-900">Our Mission</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                To deliver inclusive, barrier-free education blending rigorous board academics with hands-on laboratory experiences, skill trades, sportsmanship, and civic ethics—ensuring every student reaches their full potential.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Smart Labs & Infrastructure */}
        <div id="labs" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Learning Facilities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Campus Infrastructure & Smart Laboratories
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Providing practical exposure that rivals top institutions across Rajasthan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              <img src={geoLabImg} alt="Geography Lab" className="h-48 w-full object-cover" />
              <div className="p-5 space-y-2">
                <Globe className="w-6 h-6 text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">Geography Lab</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped with 3D physical relief globes, GIS topographic maps, weather recording thermometers, and survey compasses.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              <img src={retailLabImg} alt="Retail Lab" className="h-48 w-full object-cover" />
              <div className="p-5 space-y-2">
                <ShoppingBag className="w-6 h-6 text-amber-600" />
                <h3 className="text-base font-bold text-slate-900">Retail & Smart Trade Lab</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real simulated retail storefront with barcode billing scanners, inventory racks, and customer service counters.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition">
              <img src={bioLabImg} alt="Biology Lab" className="h-48 w-full object-cover" />
              <div className="p-5 space-y-2">
                <FlaskConical className="w-6 h-6 text-emerald-600" />
                <h3 className="text-base font-bold text-slate-900">Biology & Science Hub</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped with compound microscopes, botanical herbarium specimens, anatomical models, and chemistry apparatus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Leadership & Principal's Office */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-72">
              <img src={principalImg} alt="Principal's Office" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Institutional Administration
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Leadership Committed to Academic Discipline
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our administrative council, led by the Head of Institution and senior faculty committees, oversees continuous curriculum enrichment, state exam preparation, laboratory upgrades, and student safety.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Strict Anti-Ragging Policy</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent Public Grievance Portal</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Full Digital Records on AWS EC2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
