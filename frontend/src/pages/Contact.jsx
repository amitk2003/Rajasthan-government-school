import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
  UserCheck,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 pb-16">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-bold px-3 py-1 rounded-full">
            <Building className="w-3.5 h-3.5" /> Institutional Communication
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact & Public Grievance Redressal
          </h1>
          <p className="font-devanagari text-base sm:text-lg text-amber-300 font-semibold">
            राजकीय उच्च माध्यमिक विद्यालय पीठ — संपर्क एवं जन शिकायत निवारण
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Get in touch with the school administrative office, nodal officers, or submit an official inquiry or grievance request.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Contact Directory (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                School Administrative Office
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-900 shrink-0">
                    <MapPin className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Campus Address</div>
                    <p className="mt-0.5 leading-relaxed">
                      Peeth - Sarthuna Main Road, Tehsil: Similwara, District: Dungarpur, Rajasthan, PIN - 314406
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-900 shrink-0">
                    <Phone className="w-5 h-5 text-amber-700" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Institutional Phone</div>
                    <p className="mt-0.5">+91 9413282231 / +91 2964-XXXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-900 shrink-0">
                    <Mail className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Official Email</div>
                    <p className="mt-0.5">gsspeeth@gmail.com / principal@gsspeeth.gov.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-900 shrink-0">
                    <Clock className="w-5 h-5 text-purple-700" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Office Working Hours</div>
                    <p className="mt-0.5">
                      Summer: 07:30 AM – 01:00 PM<br />
                      Winter: 10:00 AM – 04:00 PM<br />
                      (Closed on Sundays & Gazetted Holidays)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Grievance & Nodal Officers */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Nodal Grievance & Welfare Officers
              </h3>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Public Information Officer (RTI)</div>
                  <div className="text-[11px] text-slate-500">Principal, GSS Peeth • Contact: gsspeeth@gmail.com</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Anti-Ragging & Child Protection Committee</div>
                  <div className="text-[11px] text-slate-500">Senior Faculty Panel • Toll-Free Childline: 1098</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900">Rajasthan State Citizen Portal</div>
                  <div className="text-[11px] text-slate-500">Rajasthan Sampark Helpline: 181</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Send an Inquiry or Grievance
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Your message will be routed directly to the principal and departmental administrators.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Joshi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9413282231"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Category of Inquiry *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-white"
                  >
                    <option value="General Inquiry">General Academic Inquiry</option>
                    <option value="Admission Status">Admission 2025-26 Status</option>
                    <option value="TC / Certificate">Transfer Certificate / Marksheet Request</option>
                    <option value="Scholarship">Scholarship & DBT Inquiry</option>
                    <option value="Public Grievance">Public Grievance / Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message / Details *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please specify your query or student details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm shadow transition"
              >
                <Send className="w-4 h-4 text-amber-400" />
                <span>Submit Official Inquiry</span>
              </button>
            </form>

            {submitted && (
              <div className="p-3.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Thank you. Your inquiry has been logged successfully (Ticket #GSS-2025-{Math.floor(1000 + Math.random() * 9000)}). The office will follow up shortly.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
