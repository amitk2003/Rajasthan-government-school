import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Professor = () => {
  const { category } = useParams(); // get category from URL
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const url = category
          ? `http://localhost:5000/api/professor?category=${encodeURIComponent(category)}`
          : "http://localhost:5000/api/professor";

        const response = await axios.get(url);
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, [category]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {category ? `Professors in ${category}` : "All Professors"}
      </h2>

      <div
        className="topper-container"
        style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
      >
        {teachers.length > 0 ? (
          teachers.map((professor) => (
            <div
              key={professor._id}
              className="professor-card"
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                width: "250px",
                textAlign: "center",
              }}
            >
              {professor.Image ? (
                <img
                  src={`data:${professor.mimeType};base64,${professor.Image}`}
                  alt={professor.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxHeight: "200px",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <p>No image available</p>
              )}
              <h3>{professor.Categoryname}</h3>
              <p>Name: {professor.name}</p>
              <p>Degree: {professor.degree}</p>
              <p>Designation: {professor.Designation}</p>
            </div>
          ))
        ) : (
          <p>No professors found.</p>
        )}
      </div>
    </div>
  );
};

export default Professor;
