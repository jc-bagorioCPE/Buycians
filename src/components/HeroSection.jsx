import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TypographyH1, TypographyP } from "./Typography";
import model from "../assets/model.png"

const HeroSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-24">
        {/* Left Side */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <TypographyP className="font-bold text-xs uppercase tracking-wider text-teal-400">
            Prototype Now Live
          </TypographyP>
          <TypographyH1 className="text-5xl font-bold leading-tight text-white">
            Smarter Traffic with{" "}
            <span className="text-teal-500">AI and IoT</span> {/* Updated to teal */}
          </TypographyH1>
          <TypographyP className="text-gray-300">
            Experience the future of traffic control with our hybrid AI- and IoT-powered system — designed to improve vehicle flow and pedestrian safety.
          </TypographyP>
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href="https://baron95.tech/traiffic/automated-traffic-management-system-using-data-driven-predective-analysis-for-traffic-control/?fbclid=IwY2xjawJ40qVleHRuA2FlbQIxMABicmlkETFJbWpldW80Rk80dVRTdlNEAR4IzQx1Al-D_Ap5QdzvT-_P1j_Uidk1uKgv9fUy-kGHOvX1Gl0aRN6MxC_CzA_aem_teAG_yZF9X35ZfLrVYsx6A"
                class="inline-block px-4 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-800 shadow-lg transition duration-300 hover:shadow-xl"
              >
                Explore the System
              </a>

            </motion.div>
            <div className="flex items-center gap-1 text-gray-300">
              🚦 🧠 🌐
              <span className="text-sm">Powered by AI + IoT</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image with Animation */}
        <motion.div
  className="grid grid-cols-1 w-full" // Changed to 1 column to give full width
  initial={{ opacity: 0, x: 50 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
>
  <motion.img
    src={model}
    alt="Smart Traffic System"
    className="w-full h-auto rounded-lg shadow-2xl" // w-full and added larger shadow
    whileHover={{ scale: 1.1 }} // Slightly increased scale
    transition={{ duration: 0.3 }}
  />
</motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
