import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopperList = () => {
  const [toppers, setToppers] = useState([]);
  const API_URL=import.meta.env.VITE_TOPPER_URL || "http://localhost:5000/api/topper-list";
  console.log(API_URL)
  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_HOME_URL+"api/topper-list");
        setToppers(response.data);
      } catch (error) {
        console.error('Error fetching toppers:', error);
      }
    };
    fetchToppers();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        🎓 School Toppers
      </h2>

      {toppers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {toppers.map((topper) => (
            <div
              key={topper._id}
              className="bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              {topper.Image ? (
                <img
                  src={`data:${topper.mimeType};base64,${topper.Image}`}
                  alt={topper.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-48 flex items-center justify-center bg-gray-100 text-gray-500 rounded-lg mb-4">
                  No Image
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-800">{topper.name}</h3>
              <p className="text-gray-600">Class: {topper.Class}</p>
              <p className="text-gray-600">Stream: {topper.stream}</p>
              <p className="mt-2 font-bold text-green-600 text-lg">
                {topper.Percentage}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading toppers...</p>
      )}
    </div>
  );
};

export default TopperList;
