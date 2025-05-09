import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ValuesSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  return (
    <section className="py-16 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-lg font-bold text-teal-500 uppercase tracking-wide">System Values</h2>
        <h3 className="text-3xl font-bold mt-2 leading-tight text-gray-200">
          Smart, Safe, and Scalable<br /> Traffic Innovation
        </h3>
        <p className="mt-2 text-gray-400">
          Our intelligent traffic system is built around real-time responsiveness, pedestrian safety, and sustainable development.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between shadow-md border border-gray-600"
          >
            <div>
              <div className="mb-4 text-3xl">📡</div>
              <h4 className="font-bold text-lg text-gray-200">Real-Time Intelligence</h4>
              <p className="text-gray-400 mt-2">
                Adaptive signal control powered by AI and IoT sensors, reacting instantly to traffic and pedestrian needs.
              </p>
            </div>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shadow hover:bg-teal-600"
              >
                <span className="text-white">➔</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between shadow-md border border-gray-600"
          >
            <div>
              <div className="mb-4 text-3xl">🛡️</div>
              <h4 className="font-bold text-lg text-gray-200">Pedestrian-Centric Safety</h4>
              <p className="text-gray-400 mt-2">
                Manual push-button and fallback timing ensure safe crossing zones for students and faculty, even during congestion.
              </p>
            </div>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shadow hover:bg-teal-600"
              >
                <span className="text-white">➔</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg flex flex-col justify-between shadow-md border border-gray-600"
          >
            <div>
              <div className="mb-4 text-3xl">⚙️</div>
              <h4 className="font-bold text-lg text-gray-200">Scalable & Cost-Effective</h4>
              <p className="text-gray-400 mt-2">
                Built using Raspberry Pi and open-source tools, this system is made for schools, small communities, and local governments.
              </p>
            </div>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center shadow hover:bg-teal-600"
              >
                <span className="text-white">➔</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
