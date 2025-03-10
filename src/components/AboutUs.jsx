import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import techImage from "../assets/tech.png"; // Import the image

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-white">
      {/* Full-width orange banner */}
      <motion.div
        className="w-full bg-orange-500 text-white font-bold py-3 text-xl text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        About Us
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto text-center mt-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold">A single app to manage all your finances</h2>
        <p className="mt-2 text-gray-600">
          "Say goodbye to complications and stay on track with your money goals."
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <motion.img
              src={techImage}
              alt="Digital Payment Illustration"
              className="w-full max-w-md rounded-lg shadow-lg"
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
              src={techImage}
              alt="Financial Dashboard Illustration"
              className="w-full max-w-md rounded-lg shadow-lg"
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
