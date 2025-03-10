import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div 
      className="w-full border-b bg-white sticky top-0 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo - Clicking navigates to Features */}
        <Link to="/#features" className="text-2xl font-bold hover:scale-105 transition-transform duration-200">
          <span className="text-black">Go</span>
          <span className="text-orange-500">Send+</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-20">
          <Link to="/#features" className="text-sm font-medium text-gray-700 hover:text-black transition transform hover:scale-105">Features</Link>
          <Link to="/accounts" className="text-sm font-medium text-gray-700 hover:text-black transition transform hover:scale-105">Accounts</Link>
          <Link to="/company" className="text-sm font-medium text-gray-700 hover:text-black transition transform hover:scale-105">Company</Link>
          <Link to="/insight" className="text-sm font-medium text-gray-700 hover:text-black transition transform hover:scale-105">Insight</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-black transition transform hover:scale-105">Login</Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/signup" className="text-sm font-medium text-gray-700 hover:text-black transition transform hover:scale-105 px-4 py-2 border border-gray-700 rounded-full">Become A Member Here!</Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
