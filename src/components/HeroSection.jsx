import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypographyH1, TypographyP } from "./Typography";
import model from "../assets/hero1.jpg";

const HeroSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left Side - Text */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <TypographyP className="font-bold text-sm uppercase tracking-wider text-teal-400">
            Now Serving On Campus
          </TypographyP>

          <TypographyH1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Enjoy Great Meals from{" "}
            <span className="text-teal-500">DYCI Food Vendors</span>
          </TypographyH1>

          <TypographyP className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Discover, order, and enjoy your favorite meals from trusted food vendors inside
            Dr. Yanga’s Colleges Inc. — bringing convenience and flavor closer to every DYCIan.
          </TypographyP>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <motion.a
              href="#vendors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="px-6 py-3 rounded-full bg-teal-500 text-white font-semibold hover:bg-teal-600 shadow-lg transition duration-300"
            >
              Browse Food Stalls
            </motion.a>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 text-gray-300 text-sm">
              <span>🍔 ☕ 🏫</span>
              <span>Campus Food • Fresh Choices • Fast Service</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.img
            src={model}
            alt="DYCI Campus Food Vendors"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-2xl object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
