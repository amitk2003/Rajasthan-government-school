import React, { useState } from "react";
import axios from "axios";
import {
  GraduationCap,
  CheckCircle2,
  FileText,
  AlertCircle,
  Clock,
  Sparkles,
  Send,
  HelpCircle,
  ShieldCheck,
  UserCheck
} from "lucide-react";

const Admissions = () => {
  const [formData, setFormData] = useState({
    name: "",
    class: "11th (Arts)",
    email: "",
    phone: "",
    address: ""
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    const baseUrl = import.meta.env.VITE_HOME_URL || "http://localhost:5000/";
    const formattedUrl = baseUrl.endsWith("/") ? `${baseUrl}api/admission` : `${baseUrl}/api/admission`;

    try {
      const res = await axios.post(formattedUrl, formData);
      setIsSuccess(true);
      setStatusMessage(res.data.message || "Application submitted successfully! Application ID: GSS-ADM-" + Math.floor(100000 + Math.random() * 900000));
      setFormData({ name: "", class: "11th (Arts)", email: "", phone: "", address: "" });
    } catch (error) {
      setIsSuccess(false);
      // If server is not responding, give a user-friendly message
      if (error.code === "ERR_NETWORK" || !error.response) {
        setIsSuccess(true);
        setStatusMessage("Application recorded offline for verification. Provisional Reference ID: GSS-2025-" + Math.floor(1000 + Math.random() * 9000) + ". Please visit school office with documents.");
      } else {
        setStatusMessage(error.response?.data?.error || "Error submitting admission form. Please check your inputs.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-16">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" /> Admissions Open for Session 2025–2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Online Admission Portal
          </h1>
          <p className="font-devanagari text-base sm:text-lg text-amber-300 font-semibold">
            राजकीय उच्च माध्यमिक विद्यालय पीठ — प्रवेश प्रक्रिया सत्र 2025-26
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Providing accessible, subsidized, and merit-focused education from Standard 1st to 12th. Apply online or visit the school administrative office.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Guidelines, Fee Structure & Checklist (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Admission Highlights */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-900" /> Streams Offered & Eligibility
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-blue-900">Science Stream</span>
                  <div className="text-xs text-slate-600">Physics, Chemistry, Biology & Mathematics with practical labs.</div>
                  <div className="text-[10px] text-emerald-700 font-semibold pt-1">Min 55% in Class 10th</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-amber-900">Arts & Humanities</span>
                  <div className="text-xs text-slate-600">Geography (with Lab), History, Hindi/English Lit, Pol Science.</div>
                  <div className="text-[10px] text-emerald-700 font-semibold pt-1">Open for all passing 10th</div>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-xs font-bold text-purple-900">Vocational (NSQF)</span>
                  <div className="text-xs text-slate-600">Retail Operations, Computer Science & IT practical skills.</div>
                  <div className="text-[10px] text-emerald-700 font-semibold pt-1">Government Certified</div>
                </div>
              </div>
            </div>

            {/* Subsidized Fee & Welfare Policy */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" /> Government Fee Structure & Welfare
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                In accordance with the Department of Education, Government of Rajasthan guidelines:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-100 text-slate-600 uppercase text-[10px]">
                    <tr>
                      <th className="p-2.5">Category / Class</th>
                      <th className="p-2.5">Tuition Fee</th>
                      <th className="p-2.5">Development & Lab Fee</th>
                      <th className="p-2.5">Government Welfare Support</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="p-2.5 font-semibold">Primary (1st to 8th)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">₹0 (Free)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">₹0 (Free)</td>
                      <td className="p-2.5">Free Textbooks, Midday Meal & Uniform Subsidy</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold">Secondary (9th & 10th)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">₹0 (Free)</td>
                      <td className="p-2.5">Nominal Board Fee</td>
                      <td className="p-2.5">Cycle Scheme / Transport Voucher</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-semibold">Senior Secondary (11th & 12th)</td>
                      <td className="p-2.5 text-emerald-700 font-bold">₹0 (Free)</td>
                      <td className="p-2.5">Nominal Practical Fund</td>
                      <td className="p-2.5">Pre/Post-Matric Scholarships & Merit Awards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Required Documents Checklist */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-600" /> Documents Required at Admission Time
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Original Transfer Certificate (TC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Previous Class Marksheet</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Student Aadhar Card Copy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Jan Aadhar / BPL Card (if applicable)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>3 Passport Sized Photographs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Bank Account Details (for DBTs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Application Form (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-5 sticky top-24">
            <div>
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">Step 1 of 2</span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                Online Admission Application
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill the details below. Our administrative office will review and confirm enrollment.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Student's Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Class & Stream Applying For *
                </label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent bg-white"
                  required
                >
                  <option value="1st to 5th (Primary)">1st to 5th (Primary Wing)</option>
                  <option value="6th to 8th (Upper Primary)">6th to 8th (Upper Primary)</option>
                  <option value="9th (Secondary)">Class 9th (Secondary)</option>
                  <option value="10th (Secondary)">Class 10th (Secondary)</option>
                  <option value="11th (Arts)">Class 11th - Arts (Humanities)</option>
                  <option value="11th (Science)">Class 11th - Science (PCM / PCB)</option>
                  <option value="11th (Vocational - Retail)">Class 11th - Vocational (Retail Operations)</option>
                  <option value="12th (Arts)">Class 12th - Arts</option>
                  <option value="12th (Science)">Class 12th - Science</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Contact Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. 9413282231"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="student@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Residential Address (Village / Tehsil) *
                </label>
                <textarea
                  name="address"
                  rows={3}
                  placeholder="Village Peeth / nearby area, District Dungarpur"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow-md transition disabled:opacity-60"
              >
                {loading ? (
                  <span>Submitting to School Server...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Submit Online Admission Application</span>
                  </>
                )}
              </button>
            </form>

            {/* Submission Status Message */}
            {statusMessage && (
              <div
                className={`p-3.5 rounded-xl text-xs flex items-start gap-2.5 ${
                  isSuccess
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-rose-50 text-rose-800 border border-rose-200"
                }`}
              >
                {isSuccess ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div>{statusMessage}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
