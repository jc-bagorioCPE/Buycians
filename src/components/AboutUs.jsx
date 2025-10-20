import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import campusFood from "../assets/pic1.png";
import studentMeal from "../assets/pic1.png";

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col"
    >
      {/* 🔹 Full-width banner */}
      <motion.div
        className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold py-6 text-3xl text-center shadow-md"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        About DYCI Eats
      </motion.div>

      {/* 🔹 Content */}
      <motion.div
        className="flex-1 w-full max-w-7xl mx-auto text-center mt-12 px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Bringing Campus Food Vendors Closer to Every DYCIan
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          DYCI Eats is a student-developed platform that connects campus food vendors
          with students and staff — making ordering faster, simpler, and more convenient.
          Whether you’re craving coffee, snacks, or full meals, you can explore everything in one place.
        </p>

        {/* 🔹 Responsive Image Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.img
              src={campusFood}
              alt="DYCI Campus Food Vendors"
              className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <motion.img
              src={studentMeal}
              alt="Students Enjoying Meals"
              className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
