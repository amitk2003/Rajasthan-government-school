import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Professor = () => {
  const { category } = useParams(); // get category from URL
  VITE_HOME_URL=import.meta.env.VITE_HOME_URL || "http://localhost:5000"
  // Extract English category inside parentheses, or fallback to the whole category
  const extractedCategory = category?.match(/\(([^)]+)\)/)?.[1] || category;

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const url = extractedCategory
          ? `${import.meta.env.VITE_HOME_URL}api/professor?category=${encodeURIComponent(extractedCategory)}`
          : `{import.meta.env.VITE_HOME_URL}api/professor`;

        const response = await axios.get(url);
        console.log("Fetched professors:", response.data); // Debug log
        setTeachers(response.data);
      } catch (error) {
        console.error("Error fetching teachers:", error);
      }
    };

    fetchTeachers();
  }, [extractedCategory]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">
        {extractedCategory ? `Professors in ${extractedCategory}` : "All Professors"}
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
                backgroundColor: "#fafafa",
                borderRadius: "8px",
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
                    borderRadius: "4px",
                    marginBottom: "10px",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-image.png"; // fallback image path
                  }}
                />
              ) : (
                <p>No image available</p>
              )}
              <h3>{professor.Categoryname || "Category Unknown"}</h3>
              <p>Name: {professor.name || "N/A"}</p>
              <p>Degree: {professor.degree || "N/A"}</p>
              <p>Designation: {professor.Designation || "N/A"}</p>
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
