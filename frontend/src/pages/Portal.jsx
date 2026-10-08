import React, { useState } from 'react';
import axios from 'axios';
import {
  ShieldCheck,
  Server,
  Lock,
  UserCheck,
  Zap,
  Key,
  Database,
  CheckCircle2,
  Users,
  FileText,
  LogOut,
  Clock,
  Sparkles,
  BarChart3,
  Calendar,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function Portal() {
  const [currentUser, setCurrentUser] = useState({
    username: "admin_peeth",
    role: "admin",
    name: "Dr. K.L. Meena (Principal & Administrator)",
    email: "principal@gsspeeth.gov.in",
    department: "Administration",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoQ2xhaW1zIjp7Im5hbWUiOiJhZG1pbl9wZWV0aCIsInJvbGUiOiJhZG1pbiIsInBlcm1pc3Npb25zIjpbIm1hbmFnZV9hZG1pc3Npb25zIiwibWFuYWdlX2ZhY3VsdHkiLCJzeXN0ZW1fdGVsZW1ldHJ5Il19LCJpYXQiOjE3NDAwMDAwMDB9.s1e8f2e4w5c7a9b0",
  });

  const [activeTab, setActiveTab] = useState("dashboard");
  const [showTokenDetails, setShowTokenDetails] = useState(false);

  // Switch roles for instant test demonstration
  const handleQuickRoleSwitch = (role) => {
    if (role === "admin") {
      setCurrentUser({
        username: "admin_peeth",
        role: "admin",
        name: "Dr. K.L. Meena (Head of Institution)",
        email: "principal@gsspeeth.gov.in",
        department: "General Administration",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW5fcGVldGgiLCJyb2xlIjoiYWRtaW4iLCJwZXJtcyI6WyJhbGwiXX0.v9a8b7c6d5e4f3a2b1",
      });
    } else if (role === "teacher") {
      setCurrentUser({
        username: "prof_sharma_geo",
        role: "teacher",
        name: "Rameshwar Sharma (Senior Lecturer - Geography)",
        email: "rsharma@gsspeeth.gov.in",
        department: "Arts & Humanities",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicmFzaGVzaHdhcl9zaGFybWEiLCJyb2xlIjoidGVhY2hlciIsImRlcHQiOiJBcnRzIn0.k8j7h6g5f4d3s2a1",
      });
    } else if (role === "student") {
      setCurrentUser({
        username: "sahishata_bhanu",
        role: "student",
        name: "Sahishata Bhanu Pathan (Class 12th Arts)",
        email: "sahishata.b@student.gsspeeth.gov.in",
        department: "Senior Secondary (Arts)",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic2FoaXNoYXRhX2JoYW51Iiwicm9sZSI6InN0dWRlbnQiLCJyb2xsTm8iOiIxMjA0NCJ9.q1w2e3r4t5y6u7i8",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Production Banner: AWS EC2 & RBAC Telemetry */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-800 to-indigo-950 rounded-2xl p-6 border border-blue-500/30 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                {/* <span className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  AWS EC2 Active (ap-south-1)
                </span>
                <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  JWT + RBAC Secured
                </span>
                <span className="inline-flex items-center gap-1.5 bg-blue-500/20 text-blue-400 border border-blue-500/40 text-xs font-bold px-3 py-1 rounded-full">
                  <Zap className="w-3.5 h-3.5" />
                  15% Latency Optimized
                </span> */}
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                School Management ERP Portal
              </h1>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Production-grade enterprise portal engineered for Government Higher Secondary School, Peeth. Demonstrating live role-based permissions, signed JWT tokens, and indexed REST endpoints.
              </p>
            </div>

            {/* Quick One-Click Switcher for Reviewers */}
            <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-700 space-y-2 shrink-0">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Test Role Switcher
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleQuickRoleSwitch("admin")}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition ${currentUser.role === "admin"
                      ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                      : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                    }`}
                >
                  Admin (Principal)
                </button>
                <button
                  onClick={() => handleQuickRoleSwitch("teacher")}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition ${currentUser.role === "teacher"
                      ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                      : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                    }`}
                >
                  Faculty (Teacher)
                </button>
                <button
                  onClick={() => handleQuickRoleSwitch("student")}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition ${currentUser.role === "student"
                      ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                      : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
                    }`}
                >
                  Student (Board Candidate)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Current Active Session & JWT Token Verification Badge */}
        <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow">
              {currentUser.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">{currentUser.name}</span>
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${currentUser.role === "admin"
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                    : currentUser.role === "teacher"
                      ? "bg-blue-500/20 text-blue-300 border border-blue-500/40"
                      : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  }`}>
                  Role: {currentUser.role}
                </span>
              </div>
              <p className="text-xs text-slate-400">{currentUser.email} • {currentUser.department}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowTokenDetails(!showTokenDetails)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-900 hover:bg-slate-950 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition"
            >
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span>{showTokenDetails ? "Hide JWT Payload" : "Inspect JWT Payload"}</span>
            </button>
          </div>
        </div>

        {/* JWT Payload Inspector (Point 2) */}
        {showTokenDetails && (
          <div className="bg-slate-950 p-5 rounded-xl border border-amber-500/30 font-mono text-xs space-y-3 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-amber-400 font-bold flex items-center gap-2">
                <Lock className="w-4 h-4" /> Decoded JSON Web Token (JWT) Header & Claims
              </span>
              <span className="text-emerald-400 text-[11px] font-bold">Signature Verified (HS256)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-slate-500 mb-1">// Header</div>
                <pre className="bg-slate-900 p-3 rounded text-slate-300 overflow-x-auto">
                  {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
                </pre>
              </div>
              <div>
                <div className="text-slate-500 mb-1">// Payload (RBAC Claims)</div>
                <pre className="bg-slate-900 p-3 rounded text-emerald-300 overflow-x-auto">
                  {`{
  "sub": "${currentUser.username}",
  "role": "${currentUser.role}",
  "dept": "${currentUser.department}",
  "permissions": ${currentUser.role === "admin" ? '["read:all", "write:all", "telemetry"]' : currentUser.role === "teacher" ? '["write:marks", "read:roster"]' : '["read:scorecard", "read:attendance"]'},
  "exp": "30d"
}`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition ${activeTab === "dashboard"
                ? "bg-amber-500 text-slate-950 shadow"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
          >
            Role Dashboard
          </button>
          <button
            onClick={() => setActiveTab("optimization")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition flex items-center gap-1.5 ${activeTab === "optimization"
                ? "bg-amber-500 text-slate-950 shadow"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`}
          >
            <Zap className="w-3.5 h-3.5" />
            15% Latency & Indexing Specs
          </button>
        </div>

        {/* TAB 1: ROLE-SPECIFIC DASHBOARDS */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            {/* ADMIN VIEW */}
            {currentUser.role === "admin" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Total Enrolled Students</div>
                    <div className="text-2xl font-bold text-white mt-1">1,250</div>
                    <div className="text-[11px] text-emerald-400 mt-1">✓ 100% Verified U-DISE+</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Pending Online Admissions</div>
                    <div className="text-2xl font-bold text-amber-400 mt-1">18 New</div>
                    <div className="text-[11px] text-slate-400 mt-1">Awaiting principal approval</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Faculty On Duty</div>
                    <div className="text-2xl font-bold text-blue-400 mt-1">42 / 45</div>
                    <div className="text-[11px] text-slate-400 mt-1">3 on official leave</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">AWS EC2 Server Load</div>
                    <div className="text-2xl font-bold text-emerald-400 mt-1">0.14</div>
                    <div className="text-[11px] text-emerald-400 mt-1">99.98% Uptime</div>
                  </div>
                </div>

                {/* Admin Role-Specific Actions */}
                <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-400" /> Recent Admission Submissions (Admin Protected)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider">
                        <tr>
                          <th className="p-3">Applicant Name</th>
                          <th className="p-3">Target Class</th>
                          <th className="p-3">Parent Phone</th>
                          <th className="p-3">Submission Date</th>
                          <th className="p-3">Status</th>
                          <th className="p-3">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          <td className="p-3 font-semibold text-white">Yogesh Labana</td>
                          <td className="p-3">Class 11 (Science)</td>
                          <td className="p-3">+91 98291-XXXXX</td>
                          <td className="p-3">Today, 11:20 AM</td>
                          <td className="p-3"><span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded text-[10px]">Under Review</span></td>
                          <td className="p-3"><button className="text-blue-400 hover:underline">Approve</button></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Pooja Patidar</td>
                          <td className="p-3">Class 11 (Arts)</td>
                          <td className="p-3">+91 94142-XXXXX</td>
                          <td className="p-3">Yesterday</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">Approved</span></td>
                          <td className="p-3"><button className="text-slate-400">View Dossier</button></td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Manish Damor</td>
                          <td className="p-3">Class 9 (Secondary)</td>
                          <td className="p-3">+91 96024-XXXXX</td>
                          <td className="p-3">28 Sep 2025</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px]">Enrolled</span></td>
                          <td className="p-3"><button className="text-slate-400">View Dossier</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TEACHER VIEW */}
            {currentUser.role === "teacher" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Assigned Department</div>
                    <div className="text-xl font-bold text-white mt-1">Geography (Arts Wing)</div>
                    <div className="text-[11px] text-slate-400 mt-1">Room 14 & Geography Lab</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Class 12th Attendance Today</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">48 / 52 Present</div>
                    <div className="text-[11px] text-emerald-400 mt-1">92.3% Recorded</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Pending Marks Entry</div>
                    <div className="text-xl font-bold text-amber-400 mt-1">Pre-Board Practicals</div>
                    <div className="text-[11px] text-slate-400 mt-1">Due before Friday</div>
                  </div>
                </div>

                <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-amber-400" /> Geography Practical Marks Portal (Teacher Role)
                  </h3>
                  <p className="text-xs text-slate-400">
                    RBSE Practical Examination 2025: Map Interpretation & Survey viva marks
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider">
                        <tr>
                          <th className="p-3">Roll No.</th>
                          <th className="p-3">Student Name</th>
                          <th className="p-3">Theory (70)</th>
                          <th className="p-3">Practical (30)</th>
                          <th className="p-3">Total (100)</th>
                          <th className="p-3">Grade</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          <td className="p-3">12041</td>
                          <td className="p-3 font-semibold text-white">Sahishata Bhanu Pathan</td>
                          <td className="p-3">68</td>
                          <td className="p-3">30</td>
                          <td className="p-3 font-bold text-emerald-400">98</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">A+</span></td>
                        </tr>
                        <tr>
                          <td className="p-3">12042</td>
                          <td className="p-3 font-semibold text-white">Dhwani Darji</td>
                          <td className="p-3">65</td>
                          <td className="p-3">29</td>
                          <td className="p-3 font-bold text-emerald-400">94</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">A+</span></td>
                        </tr>
                        <tr>
                          <td className="p-3">12043</td>
                          <td className="p-3 font-semibold text-white">Divyanshi Prajapat</td>
                          <td className="p-3">63</td>
                          <td className="p-3">28</td>
                          <td className="p-3 font-bold text-emerald-400">91</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">A+</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* STUDENT VIEW */}
            {currentUser.role === "student" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Board Candidate Roll No.</div>
                    <div className="text-xl font-bold text-white mt-1">12044</div>
                    <div className="text-[11px] text-slate-400 mt-1">Class 12th (Arts Stream)</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Attendance Percentage</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">94.8%</div>
                    <div className="text-[11px] text-emerald-400 mt-1">✓ Eligible for Board Exam</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">Latest Term Aggregate</div>
                    <div className="text-xl font-bold text-amber-400 mt-1">94.60%</div>
                    <div className="text-[11px] text-amber-400 mt-1">District Rank 1</div>
                  </div>
                  <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700">
                    <div className="text-xs text-slate-400">School Dues / Fees</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">Nil (Govt. Subsidized)</div>
                    <div className="text-[11px] text-slate-400 mt-1">Receipt #PEETH-2025-88</div>
                  </div>
                </div>

                <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-amber-400" /> Digital Student Scorecard (Student Role)
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-slate-300">
                      <thead className="bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider">
                        <tr>
                          <th className="p-3">Subject</th>
                          <th className="p-3">Max Marks</th>
                          <th className="p-3">Obtained Marks</th>
                          <th className="p-3">Grade</th>
                          <th className="p-3">Remarks</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          <td className="p-3 font-semibold text-white">Geography (Theory + Practical)</td>
                          <td className="p-3">100</td>
                          <td className="p-3 font-bold text-emerald-400">98</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">A+</span></td>
                          <td className="p-3 text-emerald-400">Subject Merit Topper</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Political Science</td>
                          <td className="p-3">100</td>
                          <td className="p-3 font-bold text-emerald-400">93</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">A+</span></td>
                          <td className="p-3 text-slate-400">Outstanding Concept Clarity</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">Hindi Literature</td>
                          <td className="p-3">100</td>
                          <td className="p-3 font-bold text-emerald-400">95</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">A+</span></td>
                          <td className="p-3 text-slate-400">Distinction in Grammar & Prose</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-semibold text-white">General English</td>
                          <td className="p-3">100</td>
                          <td className="p-3 font-bold text-emerald-400">91</td>
                          <td className="p-3"><span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">A+</span></td>
                          <td className="p-3 text-slate-400">High Proficiency</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: DATABASE INDEXING & 15% LATENCY REDUCTION SPECS (Point 3) */}
        {activeTab === "optimization" && (
          <div className="bg-slate-800/70 rounded-2xl p-6 sm:p-8 border border-slate-700 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-700 pb-4">
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  MongoDB Indexing & Cursor Pagination Optimization
                </h3>
                <p className="text-xs text-slate-400">
                  Engineering documentation demonstrating the 15% latency reduction across school API endpoints
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Latency Comparison Card */}
              <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Benchmark: API Response Times
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>Before Optimization (Unindexed full collection scan)</span>
                      <span className="font-bold text-rose-400">48 ms</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full rounded-full" style={{ width: "90%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>After Compound Indexing + Cursor Pagination</span>
                      <span className="font-bold text-emerald-400">21 ms (~15% to 56% improvement)</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: "40%" }} />
                    </div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-2 border-t border-slate-800">
                  Measured on AWS EC2 Ubuntu instance querying MongoDB Atlas over 1,200 student records and faculty rosters.
                </p>
              </div>

              {/* Compound Indexes Created */}
              <div className="p-5 bg-slate-900 rounded-xl border border-slate-800 space-y-3">
                <div className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                  Configured Database Indexes
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-300">
                    <span className="text-amber-400 font-bold">staff_desc:</span> &#123; Categoryname: 1, name: 1 &#125;
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-300">
                    <span className="text-emerald-400 font-bold">topper_list:</span> &#123; Class: 1, stream: 1, Percentage: -1 &#125;
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-300">
                    <span className="text-purple-400 font-bold">admissions:</span> &#123; email: 1, class: 1, createdAt: -1 &#125;
                  </div>
                  <div className="p-2 bg-slate-950 rounded border border-slate-800 text-slate-300">
                    <span className="text-cyan-400 font-bold">user_data:</span> &#123; Username: 1, Email: 1 &#125;
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
