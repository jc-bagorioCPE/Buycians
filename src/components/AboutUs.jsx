import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import trafficTechImage from "../assets/pic1.png"; // Replace with your actual image file

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white m-0">
      {/* Full-width banner */}
      <motion.div
        className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-white font-bold py-4 text-2xl text-center shadow-md mt-0"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        About the Project
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto text-center mt-8 px-4 m-0"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-white mb-4">
          Smarter Traffic Management with AI and IoT
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A prototype developed to enhance vehicle flow and pedestrian safety at Dr. Yanga’s Colleges Inc. using real-time data and adaptive signal control.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.img
              src={trafficTechImage}
              alt="AI Traffic Monitoring"
              className="w-full max-w-md rounded-xl shadow-xl"
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
              src={trafficTechImage}
              alt="IoT Sensors in Use"
              className="w-full max-w-md rounded-xl shadow-xl"
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
