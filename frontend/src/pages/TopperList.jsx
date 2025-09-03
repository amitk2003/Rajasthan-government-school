import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TopperList = () => {
  const [toppers, setToppers] = useState([]);

  // Fetch toppers from the backend
  useEffect(() => {
    const fetchToppers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/topper-list'); // Adjust URL to your backend
        setToppers(response.data);
      } catch (error) {
        console.error('Error fetching toppers:', error);
      }
    };
    fetchToppers();
  }, []);

  return (
    <div className="topper-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {toppers.length > 0 ? (
        toppers.map((topper) => (
          <div
            key={topper._id}
            className="topper-card"
            style={{
              border: '1px solid #ccc',
              padding: '20px',
              width: '250px',
              textAlign: 'center',
            }}
          >
            {topper.Image ? (
              <img
                // src={`data:image/jpg;base64,${topper.Image}`} // 
                // Adjust MIME type if needed (e.g., image/png)
                src={topper.Image ? `data:${topper.mimeType};base64,${topper.Image}` : ''}
                alt={topper.name}
                style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'cover' }}
              />
            ) : (
              <p>No image available</p>
            )}
            <h3>{topper.name}</h3>
            <p>Class: {topper.Class}</p>
            <p>Stream: {topper.stream}</p>
            <p>Percentage: {topper.Percentage}%</p>
          </div>
        ))
      ) : (
        <p>Loading toppers...</p>
      )}
    </div>
  );
};

export default TopperList;