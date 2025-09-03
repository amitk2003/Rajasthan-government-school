// src/components/TeacherCard.jsx
import React from 'react';

const TeacherCard = ({ teacher }) => (
  <div className="card">
    <img src={{teacher.Image ? `data:${teacher.mimeType};base64,${teacher.Image}` : ''}} />
    <h3>{teacher.name}</h3>
    <p>{teacher.Categoryname}</p>
    <p>{teacher.degree}</p>
    <p>{teacher.Designation}</p>
  </div>
);

export default TeacherCard;
