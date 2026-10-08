import React, { useEffect, useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Users, Search, GraduationCap, Award, Mail, Phone, BookOpen, ShieldCheck } from "lucide-react";
import principalImg from '../assets/school-material/principal_office.jpg';

// Standard faculty directory records representing the school's department structure
const fallbackFaculty = [
  {
    _id: "f1",
    name: "Dr. K.L. Meena",
    hindiName: "डॉ. के. एल. मीणा",
    Categoryname: "प्रधानाचार्य(principal)",
    degree: "M.A. (History), M.Ed, Ph.D",
    Designation: "Principal & Head of Institution",
    experience: "24+ Years Educational Leadership",
    department: "Institutional Administration",
    email: "principal@gsspeeth.gov.in",
  },
  {
    _id: "f2",
    name: "Rameshwar Sharma",
    hindiName: "रामेश्वर शर्मा",
    Categoryname: "कला वर्ग(Arts)",
    degree: "M.A. (Geography), B.Ed, NET",
    Designation: "Senior Lecturer (Geography)",
    experience: "16+ Years Mentoring State Toppers",
    department: "Geography & Cartography Lab",
    email: "rsharma@gsspeeth.gov.in",
  },
  {
    _id: "f3",
    name: "Dr. Sunita Choudhary",
    hindiName: "डॉ. सुनीता चौधरी",
    Categoryname: "विज्ञान वर्ग(Science)",
    degree: "M.Sc. (Physics), B.Ed, Ph.D",
    Designation: "Senior Lecturer (Physics)",
    experience: "14+ Years Board Exam Specialist",
    department: "Physics Practical Laboratory",
    email: "schoudhary@gsspeeth.gov.in",
  },
  {
    _id: "f4",
    name: "Mukesh Kumar Damor",
    hindiName: "मुकेश कुमार डामोर",
    Categoryname: "विज्ञान वर्ग(Science)",
    degree: "M.Sc. (Chemistry), B.Ed",
    Designation: "Senior Lecturer (Chemistry)",
    experience: "11+ Years Analytical Chemistry",
    department: "Chemistry & Reagents Hub",
    email: "mdamor@gsspeeth.gov.in",
  },
  {
    _id: "f5",
    name: "Priyanka Patidar",
    hindiName: "प्रियंका पाटीदार",
    Categoryname: "विज्ञान वर्ग(Science)",
    degree: "M.Sc. (Botany/Life Sciences), B.Ed",
    Designation: "Senior Lecturer (Biology)",
    experience: "9+ Years Life Sciences",
    department: "Biology & Specimen Center",
    email: "ppatidar@gsspeeth.gov.in",
  },
  {
    _id: "f6",
    name: "Dinesh Chandra Labana",
    hindiName: "दिनेश चंद्र लबाना",
    Categoryname: "व्यवसायिक शिक्षक(Vocational Teacher)",
    degree: "MBA (Retail Management), NSQF Certified",
    Designation: "Vocational Trainer (Retail Operations)",
    experience: "8+ Years Industry & Skill Training",
    department: "Retail Simulation Smart Lab",
    email: "dlabana@gsspeeth.gov.in",
  },
  {
    _id: "f7",
    name: "Shanti Lal Roat",
    hindiName: "शांति लाल रोत",
    Categoryname: "कला वर्ग(Arts)",
    degree: "M.A. (Political Science), B.Ed",
    Designation: "Senior Teacher (Political Science)",
    experience: "15+ Years Public Administration",
    department: "Humanities & Social Sciences",
    email: "sroat@gsspeeth.gov.in",
  },
  {
    _id: "f8",
    name: "Bhupendra Singh Chauhan",
    hindiName: "भूपेंद्र सिंह चौहान",
    Categoryname: "प्रयोगशाला सहायक(Lab Assistant)",
    degree: "B.Sc. (Science), Diploma in Lab Techniques",
    Designation: "Senior Lab Assistant (Science & Geography)",
    experience: "12+ Years Practical Coordination",
    department: "Integrated Science Laboratories",
    email: "bchauhan@gsspeeth.gov.in",
  },
  {
    _id: "f9",
    name: "Geeta Kumari Joshi",
    hindiName: "गीता कुमारी जोशी",
    Categoryname: "माध्यमिक एवं उ. मा. शिक्षा(secondary Education)",
    degree: "M.A. (Hindi Sahitya), B.Ed",
    Designation: "Senior Teacher (Hindi Literature)",
    experience: "18+ Years Language & Culture",
    department: "Secondary Foundation Wing",
    email: "gjoshi@gsspeeth.gov.in",
  },
];

const categoryTabs = [
  { key: "All", label: "All Faculty" },
  { key: "principal", label: "Principal's Office" },
  { key: "Science", label: "Science Department" },
  { key: "Arts", label: "Arts & Humanities" },
  { key: "Vocational", label: "Vocational Trainers" },
  { key: "secondary Education", label: "Secondary Wing" },
  { key: "Lab Assistant", label: "Lab Assistants" },
];

const Professor = () => {
  const { category } = useParams();
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract initial category if from URL
  useEffect(() => {
    if (category) {
      const extracted = category.match(/\(([^)]+)\)/)?.[1] || category;
      setSelectedCategory(extracted);
    } else {
      setSelectedCategory("All");
    }
  }, [category]);

  useEffect(() => {
    const fetchTeachers = async () => {
      setLoading(true);
      try {
        const baseUrl = import.meta.env.VITE_HOME_URL || "http://localhost:5000/";
        const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
        const url = selectedCategory !== "All"
          ? `${cleanBase}api/professor?category=${encodeURIComponent(selectedCategory)}`
          : `${cleanBase}api/professor`;

        const response = await axios.get(url, { timeout: 4000 });
        if (Array.isArray(response.data) && response.data.length > 0) {
          setTeachers(response.data);
        } else {
          setTeachers(fallbackFaculty);
        }
      } catch (error) {
        setTeachers(fallbackFaculty);
      } finally {
        setLoading(false);
      }
    };
    fetchTeachers();
  }, [selectedCategory]);

  const filteredTeachers = useMemo(() => {
    return teachers.filter((prof) => {
      const matchesSearch =
        prof.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.degree?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prof.Designation?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat =
        selectedCategory === "All" ||
        prof.Categoryname?.toLowerCase().includes(selectedCategory.toLowerCase());

      return matchesSearch && matchesCat;
    });
  }, [teachers, searchTerm, selectedCategory]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-16">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-bold px-3 py-1 rounded-full">
            <Users className="w-3.5 h-3.5" /> Academic & Administrative Directory
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Faculty Directory & Department Heads
          </h1>
          <p className="font-devanagari text-base sm:text-lg text-amber-300 font-semibold">
            राजकीय उच्च माध्यमिक विद्यालय पीठ — प्राध्यापक एवं व्याख्याता सूची
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Experienced gazetted educators holding advanced post-graduate and doctoral degrees dedicated to classroom excellence, scientific laboratories, and student mentorship.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-6">
        {/* Department Filter Tabs & Search Bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Department Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categoryTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategory(tab.key)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                  selectedCategory.toLowerCase().includes(tab.key.toLowerCase()) ||
                  (tab.key === "All" && selectedCategory === "All")
                    ? "bg-blue-900 text-white shadow"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, degree, subject..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />
          </div>
        </div>

        {/* Faculty Grid */}
        {loading ? (
          <div className="text-center py-20 text-slate-500">
            <div className="w-8 h-8 border-2 border-blue-900 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm">Loading faculty profiles...</p>
          </div>
        ) : filteredTeachers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeachers.map((prof) => {
              const imageSrc = prof.Image
                ? `data:${prof.mimeType || 'image/jpeg'};base64,${prof.Image}`
                : null;

              return (
                <div
                  key={prof._id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="p-6 space-y-4">
                    {/* Top Row: Avatar & Department Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-900 to-indigo-900 text-white flex items-center justify-center font-extrabold text-xl shadow-md border-2 border-white shrink-0 overflow-hidden">
                        {imageSrc ? (
                          <img src={imageSrc} alt={prof.name} className="w-full h-full object-cover" />
                        ) : (
                          <span>{prof.name.replace("Dr. ", "").charAt(0)}</span>
                        )}
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-1 rounded-full text-right truncate">
                        {prof.Categoryname?.replace(/\([^)]*\)/g, "") || "Faculty"}
                      </span>
                    </div>

                    {/* Faculty Name & Hindi */}
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {prof.name}
                      </h3>
                      {prof.hindiName && (
                        <p className="text-xs text-blue-900 font-devanagari font-semibold">
                          {prof.hindiName}
                        </p>
                      )}
                      <p className="text-xs font-semibold text-amber-700 mt-1">
                        {prof.Designation}
                      </p>
                    </div>

                    {/* Qualifications & Specs */}
                    <div className="space-y-1.5 text-xs text-slate-600 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate">{prof.degree}</span>
                      </div>
                      {prof.department && (
                        <div className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                          <span className="truncate">{prof.department}</span>
                        </div>
                      )}
                      {prof.experience && (
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-amber-500 shrink-0" />
                          <span>{prof.experience}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom Bar */}
                  <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" /> RBSE Certified
                    </span>
                    <a
                      href={`mailto:${prof.email || 'gsspeeth@gmail.com'}`}
                      className="text-blue-900 hover:text-blue-700 font-bold flex items-center gap-1"
                    >
                      <Mail className="w-3.5 h-3.5" /> Contact
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center text-slate-500 border border-slate-200">
            <p className="text-base font-semibold">No faculty members found in this category.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchTerm("");
              }}
              className="mt-3 text-xs font-bold text-blue-900 hover:underline"
            >
              Show All Faculty
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Professor;
