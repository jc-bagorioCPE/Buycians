import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-10 border-t border-gray-700"
        >
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold">
                        <span className="text-white">BUY</span>
                        <span className="text-teal-500">cians</span>
                    </h2>
                    <p className="text-sm mt-2 text-gray-400">
                        Your go-to online platform for ordering food from on-campus vendors
                        at <b>Dr. Yanga’s Colleges Inc.</b> — fast, convenient, and student-friendly.
                    </p>
                    <p className="text-sm mt-2 text-gray-500">
                        Brgy. Wakas, Bocaue, Bulacan, Philippines 🇵🇭
                    </p>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="grid grid-cols-2 gap-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <h3 className="text-md font-bold text-teal-400">System</h3>
                        <ul className="mt-2 space-y-1 text-sm text-gray-400">
                            <li>Vendor Management</li>
                            <li>Online Ordering</li>
                            <li>Cashless Payments</li>
                            <li>Menu Updates</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-md font-bold text-teal-400">Support</h3>
                        <ul className="mt-2 space-y-1 text-sm text-gray-400">
                            <li>Contact Team</li>
                            <li>Documentation</li>
                            <li>Research Paper</li>
                        </ul>
                    </div>
                </motion.div>
            </div>

            <div className="text-center text-gray-500 text-xs mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} DYCI Eats+. All rights reserved.
            </div>
        </motion.footer>
    );
};

export default Footer;
