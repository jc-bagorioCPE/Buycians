import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import contact from "./Contact"

const Navbar = () => {
  return (
    <motion.div 
      className="w-full border-b bg-gray-900 text-white sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo - Clicking navigates to Features */}
        <Link to="/#features" className="text-2xl font-bold hover:scale-105 transition-transform duration-200">
          <span className="text-teal-400">TRAIFFIC</span> {/* Updated to teal */}
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-40">
          <Link to="/#features" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105">Features</Link>
          <Link to="/accounts" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105">AboutUs</Link>
          <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105">Contact Us</Link>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex space-x-30">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105 px-4 py-2 border border-gray-600 rounded-full">
              Login
            </Link>
          </motion.div>
        </div>
        
      </div>
    </motion.div>
  );
};

export default Navbar;