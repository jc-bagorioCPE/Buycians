import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ValuesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="w-full min-h-screen py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 text-center"
      >
        {/* Section Header */}
        <h2 className="text-base md:text-lg font-bold text-teal-400 uppercase tracking-widest">
          System Values
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold mt-2 leading-tight text-gray-100">
          Smart, Fresh, and Sustainable <br /> Campus Food Experience
        </h3>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Our campus food vendor system is designed to make ordering, vendor management, and
          meal accessibility easier for students and staff at Dr. Yanga’s Colleges Inc.
        </p>

        {/* Values Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 🔹 Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/80 backdrop-blur-md border border-gray-700 p-8 rounded-2xl flex flex-col justify-between shadow-lg hover:shadow-teal-500/20"
          >
            <div>
              <div className="text-4xl mb-4">🍱</div>
              <h4 className="text-xl font-bold text-gray-100">
                Real-Time Ordering
              </h4>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Students and faculty can order meals instantly from on-campus vendors
                through an easy-to-use online platform — no long queues, no delays.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
              className="mt-6 w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md hover:bg-teal-600 transition"
            >
              <span className="text-xl text-white">➔</span>
            </motion.button>
          </motion.div>

          {/* 🔹 Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/80 backdrop-blur-md border border-gray-700 p-8 rounded-2xl flex flex-col justify-between shadow-lg hover:shadow-teal-500/20"
          >
            <div>
              <div className="text-4xl mb-4">🥗</div>
              <h4 className="text-xl font-bold text-gray-100">
                Student-Centered Convenience
              </h4>
              <p className="text-gray-400 mt-3 leading-relaxed">
                The platform prioritizes students’ needs by offering food variety, affordable
                meals, and seamless digital transactions between buyers and vendors.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
              className="mt-6 w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md hover:bg-teal-600 transition"
            >
              <span className="text-xl text-white">➔</span>
            </motion.button>
          </motion.div>

          {/* 🔹 Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/80 backdrop-blur-md border border-gray-700 p-8 rounded-2xl flex flex-col justify-between shadow-lg hover:shadow-teal-500/20"
          >
            <div>
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-xl font-bold text-gray-100">
                Sustainable & Scalable
              </h4>
              <p className="text-gray-400 mt-3 leading-relaxed">
                Built to support every food vendor inside the campus — promoting local
                business, reducing food waste, and creating a smarter dining experience
                for the DYCI community.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
              className="mt-6 w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center shadow-md hover:bg-teal-600 transition"
            >
              <span className="text-xl text-white">➔</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
