import React from 'react';
import { Link } from 'react-router-dom';
import {
  Server,
  ShieldCheck,
  Zap,
  GitBranch,
  ArrowRight,
  Database,
  Lock,
  Cpu,
  Layers,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

const pillars = [
  {
    icon: Server,
    color: "from-blue-600 to-indigo-600",
    badge: "Cloud Infrastructure",
    title: "AWS EC2 Full-Stack Deployment",
    description: "Designed, engineered, and deployed a production-grade full-stack school management system on AWS EC2 Ubuntu instances with NGINX reverse proxy and PM2 process resilience.",
    specs: ["AWS EC2 t2/t3 Instance", "NGINX Reverse Proxy & SSL", "Node.js / Express REST Engine", "MongoDB Atlas Clustered DB"],
  },
  {
    icon: ShieldCheck,
    color: "from-amber-500 to-orange-600",
    badge: "Access & Security",
    title: "JWT Authentication & RBAC",
    description: "Multi-tier Role-Based Access Control securing role-specific capabilities across Administrators (Principal/Clerks), Faculty Members, and Students/Parents with signed JWT claims.",
    specs: ["Stateless JWT Bearer Auth", "Granular RBAC Permission Gate", "Bcrypt Hashing (10 Rounds)", "Role-Restricted Dashboards"],
  },
  {
    icon: Zap,
    color: "from-emerald-500 to-teal-600",
    badge: "15% Latency Reduction",
    title: "Database Indexing & Pagination",
    description: "Optimized database query response times by 15% through compound index structures on high-cardinality fields and cursor-based pagination for large rosters and toppers lists.",
    specs: ["Compound Indexing on Models", "Pagination & Query Projections", "15% Lower API Response Times", "Sub-50ms Query Latency"],
  },
  {
    icon: GitBranch,
    color: "from-purple-600 to-pink-600",
    badge: "DevOps & Automation",
    title: "CI/CD with GitHub Actions",
    description: "Configured automated CI/CD pipelines via GitHub Actions orchestrating code linting, Vite production builds, automated tests, and zero-downtime SSH deployments to AWS EC2.",
    specs: ["GitHub Actions Workflows", "Automated Production Build", "EC2 Continuous Deployment", "Zero-Downtime Rollout"],
  },
];

export default function ArchitecturePillars() {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Cpu className="w-3.5 h-3.5" /> Full-Stack Production Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Reliability, Speed & Institutional Security
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            The GSS Peeth School Management ERP is designed to meet demanding public institution requirements with scalable cloud deployment, secure access control, and low-latency database queries.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between hover:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  {item.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-1.5 text-[11px] text-slate-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live ERP Portal Banner CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-900/60 via-slate-900 to-indigo-900/60 border border-blue-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" /> Interactive Demonstration
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Experience the Full-Stack School ERP System
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Log in directly with one-click test credentials to test the Admin, Teacher, and Student portals with JWT token verification and role-specific views.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/portal"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 text-sm transition-all"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Launch School ERP</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/Topper"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-4 py-2.5 rounded-xl border border-slate-700 text-sm transition-all"
            >
              <Database className="w-4 h-4 text-emerald-400" />
              <span>View Indexed Toppers</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
