import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminEmail = "admin@example.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      setLoginStatus("✅ Welcome, Admin!");
      try {
        if (typeof window !== "undefined") {
          // Make sure localStorage is available
          localStorage.setItem("user", JSON.stringify({ email }));
        }
      } catch (error) {
        console.error("Error accessing localStorage", error);
      }

      // Navigate to dashboard after delay
      setTimeout(() => {
        navigate("/admin-dashboard");
      }, 1000);
    } else {
      setLoginStatus("❌ Invalid credentials.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-8"
      >
        <h2 className="text-center text-3xl font-bold text-white mb-6">
          Admin Sign In
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 text-sm text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="admin@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="admin123"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded transition duration-300"
          >
            Sign In
          </button>
        </form>
        {loginStatus && (
          <p
            className={`mt-4 text-center ${
              loginStatus.includes("✅") ? "text-teal-400" : "text-red-400"
            }`}
          >
            {loginStatus}
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default SignIn;
