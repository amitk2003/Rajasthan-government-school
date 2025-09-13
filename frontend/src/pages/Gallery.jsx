import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Glab from "../assets/school-material/Geography_lab.jpg";
import Rlab from "../assets/school-material/Retail_lab.jpg";
import Poffice from "../assets/school-material/principal_office.jpg";
import fest from "../assets/gallery/fest.jpg"
import yoga from "../assets/gallery/yoga.jpg"
import greenery from "../assets/school-material/greenery_school.jpg"
import entrance from "../assets/school-material/campus1.jpg"
import voc_lab from "../assets/gallery/voc_lab.jpg"
import science_lab from "../assets/gallery/science_lab.jpg"
import student from "../assets/gallery/student.jpg"
import schoolA  from "../assets/gallery/school_activity.jpg"

// Example images (replace with real ones)

const galleryImages = [
  { id: 1, src: Glab, category: "Labs", title: "Geography_lab" },
  { id: 2, src: Rlab, category: "Labs", title: "Retail Lab" },
  { id: 3, src: Poffice, category: "office", title: "principal office" },
  { id: 4, src: fest, category: "Events ", title: "Annual fest" },
  { id: 5, src: yoga, category: "Events", title: "yoga" },
  { id: 6, src: greenery, category: "campus", title: "campus_greenery" },
  { id: 7, src: entrance, category: "campus", title: "school_entrance" },
  { id: 8, src: voc_lab, category: "Labs", title: "Vocational Lab" },
  { id: 9, src: science_lab, category: "Labs", title: "Science Lab" },
  { id: 10, src: student, category: "Events", title: "student activity" },
  { id: 11, src: schoolA, category: "Events", title: "school activity" },


];
const categories = ["All", "Events","office", "Labs","campus"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">
      <h1 className="text-3xl font-bold text-center mb-8">Campus Gallery</h1>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-blue-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img) => (
          <motion.div
            key={img.id}
            className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center py-2">
              {img.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal / Fullscreen Viewer */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-6 text-white"
            onClick={handlePrev}
          >
            <ChevronLeft size={40} />
          </button>

          <motion.img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
          />

          <button
            className="absolute right-6 text-white"
            onClick={handleNext}
          >
            <ChevronRight size={40} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
