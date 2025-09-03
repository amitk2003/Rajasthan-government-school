import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Users, Rocket } from "lucide-react";

const Mission = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-amber-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission
        </motion.h2>

        {/* Main Mission Statement */}
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          To provide <span className="font-semibold">quality education</span> that nurtures 
          <span className="text-amber-600"> curiosity</span>, 
          <span className="text-amber-600"> creativity</span>, and 
          <span className="text-amber-600"> leadership</span> in every student.
        </motion.p>

        {/* Mission Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Lightbulb className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Curiosity</h3>
            <p className="text-gray-600">
              Encouraging students to ask questions and discover the world around them.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Creativity</h3>
            <p className="text-gray-600">
              Fostering innovation through arts, sciences, and technology.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Rocket className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Leadership</h3>
            <p className="text-gray-600">
              Building confidence and responsibility to lead in academics and life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
