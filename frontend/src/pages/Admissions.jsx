import React, { useState } from 'react';

const Admission = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    classLevel: '',
    stream: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here (e.g., API call to backend)
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Admission - Government School</h1>
          <p className="text-lg">Join our esteemed government school for quality education in Classes 10th and 12th!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Admission Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Why Choose Our School?</h2>
            <p className="mb-4">
              Our government school is renowned for its academic excellence, offering education for Classes 10th and 12th. 
              For Class 12th, we provide two streams: <strong>Science</strong> and <strong>Arts</strong>, tailored to prepare students for competitive exams and higher education.
            </p>
            <h3 className="text-xl font-semibold mb-4">Our Faculty</h3>
            <p className="mb-4">
              Our teachers are highly qualified with extensive experience in their respective fields. They are dedicated to nurturing students and have a proven track record of producing toppers in board examinations.
            </p>
            <h3 className="text-xl font-semibold mb-4">Admission Process</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Complete the online application form</li>
              <li>Submit required documents (e.g., previous academic records, ID proof)</li>
              <li>Attend verification process (if required)</li>
              <li>Receive admission confirmation</li>
            </ul>
            <h3 className="text-xl font-semibold mb-4">Important Dates</h3>
            <ul className="list-disc pl-6">
              <li>Application Start: March 1, 2026</li>
              <li>Application Deadline: April 15, 2026</li>
              <li>Document Verification: April 20-25, 2026</li>
              <li>Admission Confirmation: May 1, 2026</li>
            </ul>
          </div>

          {/* Admission Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Application Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="classLevel" className="block text-sm font-medium text-gray-700">
                  Class Applying For
                </label>
                <select
                  id="classLevel"
                  name="classLevel"
                  value={formData.classLevel}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
                  required
                >
                  <option value="">Select Class</option>
                  <option value="10th">Class 10th</option>
                  <option value="12th">Class 12th</option>
                </select>
              </div>
              {formData.classLevel === '12th' && (
                <div className="mb-4">
                  <label htmlFor="stream" className="block text-sm font-medium text-gray-700">
                    Stream (Class 12th)
                  </label>
                  <select
                    id="stream"
                    name="stream"
                    value={formData.stream}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="">Select Stream</option>
                    <option value="science">Science</option>
                    <option value="arts">Arts</option>
                  </select>
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring-green-500 focus:border-green-500"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p>Contact us at: admissions@govschool.edu | Phone: (123) 456-7890</p>
          <p className="mt-2">&copy; 2025 Government School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Admission;