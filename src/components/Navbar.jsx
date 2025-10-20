import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("user");

  const handleLogoClick = () => {
    if (isLoggedIn) {
      navigate("/admin-dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <motion.nav
      className="w-full border-b border-gray-700 bg-gray-900 text-white sticky top-0 z-50 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="text-3xl md:text-4xl font-extrabold cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <span className="text-white">BUY</span>
          <span className="text-teal-500">cians</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-16">
          <Link
            to="/#features"
            className="text-base font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105"
          >
            Features
          </Link>
          <Link
            to="/accounts"
            className="text-base font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/login"
              className="text-base font-semibold text-gray-200 hover:text-white px-5 py-2 border border-teal-500 rounded-full hover:bg-teal-600 transition-all duration-300"
            >
              Login
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ✅ Mobile Menu (Responsive) */}
      <div className="md:hidden px-6 pb-3 flex justify-center space-x-6 text-sm text-gray-400">
        <Link to="/#features" className="hover:text-teal-400">Features</Link>
        <Link to="/about" className="hover:text-teal-400">About</Link>
        <Link to="/contact" className="hover:text-teal-400">Contact</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
