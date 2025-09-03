import React from "react";
import { BookOpen, Users, FlaskConical, Globe, Trophy, Volleyball } from "lucide-react";

const About = () => {
  return (
    <div className="p-8 md:p-16 bg-gradient-to-b from-yellow-50 to-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-amber-600 mb-6">
        About GSS School, Peth
      </h1>
      <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-gray-700">
        Welcome to <span className="font-semibold">GSS School, Peth</span> — a place where education 
        meets excellence. We nurture students from <b>Std. 1 to 12</b>, blending academic rigor 
        with creativity, sports, and real-world learning.
      </p>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-2">
          <Users className="w-12 h-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
          <p className="text-gray-600">
            Our dedicated teachers hold degrees in Arts, Science, and other fields, 
            ensuring personalized learning and mentorship.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-2">
          <Globe className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Geography Lab</h3>
          <p className="text-gray-600">
            Explore the world through interactive maps, models, and modern learning tools.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-2">
          <FlaskConical className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Biology Lab</h3>
          <p className="text-gray-600">
            Hands-on experiments and projects make science engaging and practical.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-2">
          <Volleyball className="w-12 h-12 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sports & Fitness</h3>
          <p className="text-gray-600">
            Spacious playgrounds for cricket, football, and athletics encourage teamwork and health.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-2">
          <BookOpen className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Retail & Smart Labs</h3>
          <p className="text-gray-600">
            Special labs like retail and digital classrooms provide real-world exposure.
          </p>
        </div>

        <div className="p-6 bg-white shadow-md rounded-2xl hover:shadow-xl transition-transform hover:-translate-y-2">
          <Trophy className="w-12 h-12 text-yellow-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Achievements</h3>
          <p className="text-gray-600">
            Our students excel in academics, sports, and cultural events, making us proud.
          </p>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-600 mb-4">Our Vision</h2>
        <p className="text-gray-700 text-lg mb-8">
          To empower students with knowledge, values, and skills, preparing them for a 
          future of leadership, innovation, and social responsibility.
        </p>

        <h2 className="text-3xl font-bold text-amber-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg">
          We strive to create an inspiring learning environment that balances academics, 
          creativity, and co-curricular excellence—shaping well-rounded individuals.
        </p>
      </div>
    </div>
  );
};

export default About;
