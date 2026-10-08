import React from 'react';
import { GraduationCap, Award, Mail } from 'lucide-react';

const TeacherCard = ({ teacher }) => {
  const imageSrc = teacher.Image
    ? `data:${teacher.mimeType || 'image/jpeg'};base64,${teacher.Image}`
    : null;

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-3">
        <div className="w-16 h-16 rounded-xl bg-blue-900 text-white flex items-center justify-center font-bold text-xl overflow-hidden shadow">
          {imageSrc ? (
            <img src={imageSrc} alt={teacher.name} className="w-full h-full object-cover" />
          ) : (
            <span>{teacher.name?.charAt(0) || "T"}</span>
          )}
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-900">{teacher.name}</h3>
          <p className="text-xs font-semibold text-amber-600">{teacher.Designation}</p>
          <span className="inline-block mt-1 text-[10px] font-bold uppercase bg-blue-50 text-blue-900 px-2 py-0.5 rounded-full border border-blue-100">
            {teacher.Categoryname}
          </span>
        </div>

        <div className="text-xs text-slate-500 space-y-1 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
            <span className="truncate">{teacher.degree}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
