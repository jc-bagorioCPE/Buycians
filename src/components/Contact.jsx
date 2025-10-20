import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactUs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-lg font-bold text-teal-500 uppercase tracking-wide">
          Contact Us
        </h2>
        <h3 className="text-3xl font-bold mt-2 leading-tight text-gray-200">
          Get in Touch With Us
        </h3>
        <p className="mt-2 text-gray-400">
          Have any questions or suggestions? We're here to help you. Reach out to us below.
        </p>

        {/* Increased bottom margin for better gap */}
        <div className="mt-10 mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-600"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg text-gray-200" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-200" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-lg text-gray-200" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 w-full p-3 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your message here"
                  rows="4"
                />
              </div>

              {status && (
                <div className="mt-4 text-center text-lg text-teal-500">
                  {status}
                </div>
              )}

              <div className="mt-6 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="px-8 py-3 bg-teal-500 text-white font-bold text-lg rounded-lg shadow hover:bg-teal-600"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black py-8 border-t border-gray-600"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold">
              <span className="text-white">DYCI</span>
              <span className="text-teal-500"> Eats+</span>
            </h2>
            <p className="text-sm mt-2">
              Dr. Yanga’s Colleges Inc., Brgy. Wakas, Bocaue, Bulacan
            </p>
            <div className="flex items-center mt-1">
              <span className="mr-2">🇵🇭</span>
              <span className="text-sm">Philippines</span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-md font-bold">System</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Vendor Management</li>
                <li>Online Ordering</li>
                <li>Cashless Payments</li>
                <li>Menu Updates</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-bold">Support</h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>Contact Team</li>
                <li>Documentation</li>
                <li>Research Paper</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </section>
  );
};

export default ContactUs;
