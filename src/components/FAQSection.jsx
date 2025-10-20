import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import handshake from "../assets/handshake3.png";
import safe from "../assets/safe.png";

const FAQSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How does the campus food ordering system work?",
            answer:
                "Students and staff can browse menus, place orders, and pay online through the web platform. Vendors receive real-time notifications for every order.",
        },
        {
            question: "Can I order from multiple vendors at once?",
            answer:
                "Yes! You can add meals from different vendors to your cart and complete checkout in a single transaction.",
        },
        {
            question: "Is payment done online or in person?",
            answer:
                "Both options are available. You can pay using your preferred e-wallet or upon pickup at the vendor’s stall.",
        },
        {
            question: "How do food vendors manage their menus?",
            answer:
                "Vendors can log in to update menus, set item availability, and view order reports anytime through their dashboard.",
        },
        {
            question: "Where is this system being implemented?",
            answer:
                "This system is currently developed for the on-campus food vendors of Dr. Yanga’s Colleges Inc., Bocaue, Bulacan.",
        },
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
            {/* Top Banner Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto overflow-hidden rounded-xl mt-0 shadow-md"
                ref={ref}
            >
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white p-10 flex flex-col justify-between mt-10">
                        <div>
                            <h1 className="text-4xl font-bold leading-tight">
                                Empowering <br /> Campus Food Vendors
                            </h1>
                        </div>
                        <div className="flex mt-8">
                            <div className="mr-12">
                                <p className="text-3xl font-bold">95%</p>
                                <p className="text-sm">Faster Food Ordering Process</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">80%</p>
                                <p className="text-sm">Improved Vendor Efficiency</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src={safe}
                            alt="Campus food system"
                            className="w-full h-full object-cover mt-10"
                        />
                    </div>
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="py-12 max-w-7xl mx-auto px-4"
            >
                <h2 className="text-md font-bold uppercase tracking-wide text-teal-600">
                    FAQ
                </h2>
                <h3 className="text-3xl font-bold mt-2 text-gray-200">
                    Frequently Asked Questions
                </h3>
                <div className="mt-8 space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex justify-between items-center border-b border-gray-600 py-4 cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <p className="text-lg font-medium text-gray-300">
                                    {faq.question}
                                </p>
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-2xl font-bold text-teal-500"
                                >
                                    {openIndex === index ? "-" : "+"}
                                </motion.span>
                            </motion.div>
                            {openIndex === index && (
                                <div className="pl-8 text-gray-400">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Call-to-Action Section */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-teal-500 to-teal-400 text-white py-12"
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
                    <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold leading-snug">
                            Smarter Dining for{" "}
                            <span className="text-yellow-300">DYC Students</span>
                        </h2>
                        <p className="mt-4 text-lg">
                            Discover how technology transforms campus dining — fast, secure,
                            and sustainable.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="mt-6 bg-gray-800 text-white py-2 px-6 rounded-full"
                        >
                            <Link
                                to="/contact"
                                className="text-sm font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105"
                            >
                                Contact Us
                            </Link>
                        </motion.button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src={handshake}
                            alt="Campus partnership"
                            className="w-64 h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </motion.section>

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
        </div>
    );
};

export default FAQSection;
