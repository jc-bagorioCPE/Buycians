import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useState } from "react"; // Import useState for managing state
import trafficImage from '../assets/handshake.jpg'; // Replace with your actual image
import ContactUs from "./Contact";

const FAQSection = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });

    const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open
    const faqs = [
        { question: "How does the system detect vehicles?", answer: "It uses sensors and cameras to detect vehicles." },
        { question: "What happens during heavy traffic congestion?", answer: "The system adjusts the traffic light timing to optimize flow." },
        { question: "Is the system fully automated?", answer: "Yes, it operates autonomously based on real-time traffic data." },
        { question: "Can pedestrians safely cross using the push button?", answer: "Yes, the system includes a pedestrian crossing feature." },
        { question: "Where is the prototype currently deployed?", answer: "It is currently deployed at Dr. Yanga's Colleges Inc." }
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the clicked FAQ
    };

    return (
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white">
            {/* Top Banner Section */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto overflow-hidden rounded-xl mt-0 shadow-md "
                ref={ref}
            >
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-400 text-white p-10 flex flex-col justify-between mt-10   ">
                        <div>
                            <h1 className="text-4xl font-bold leading-tight">Enhancing Campus<br />Traffic Efficiency</h1>
                        </div>
                        <div className="flex mt-8">
                            <div className="mr-12">
                                <p className="text-3xl font-bold">20%</p>
                                <p className="text-sm">Target Reduction in Congestion</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">30%</p>
                                <p className="text-sm">Improved Pedestrian Flow</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={trafficImage} alt="Traffic AI System" className="w-full h-full object-cover mt-10" />
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
                <h2 className="text-md font-bold uppercase tracking-wide text-teal-600">FAQ</h2>
                <h3 className="text-3xl font-bold mt-2 text-gray-200">Frequently Asked Questions</h3>
                <div className="mt-8 space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="space-y-4">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex justify-between items-center border-b border-gray-600 py-4"
                            >
                                <p className="text-lg font-medium text-gray-300">{faq.question}</p>
                                <motion.button 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                    onClick={() => toggleAnswer(index)} // Toggle answer visibility
                                    className="text-2xl font-bold text-teal-500"
                                >
                                    {openIndex === index ? '-' : '+'} {/* Change icon based on open state */}
                                </motion.button>
                            </motion.div>
                            {/* Conditionally render the answer */}
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
                            Smarter Roads for <span className="text-yellow-300">Safer Campuses</span>
                        </h2>
                        <p className="mt-4 text-lg">See how AI and IoT are revolutionizing traffic flow at Dr. Yanga’s Colleges Inc.</p>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="mt-6 bg-gray-800 text-white py-2 px-6 rounded-full"
                        >
                            <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-teal-400 transition transform hover:scale-105">Contact Us</Link>
                        </motion.button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src={trafficImage} alt="Smart traffic system" className="w-64 h-auto rounded-lg shadow-xl" />
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
                        <h2 className="text-3xl font-bold"><span className="text-white">DYCI</span><span className="text-teal-500"> Traffic+</span></h2>
                        <p className="text-sm mt-2">Dr. Yanga’s Colleges Inc., Brgy. Wakas, Bocaue, Bulacan</p>
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
                                <li>Vehicle Detection</li>
                                <li>Signal Control</li>
                                <li>Pedestrian Safety</li>
                                <li>AI Learning</li>
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
