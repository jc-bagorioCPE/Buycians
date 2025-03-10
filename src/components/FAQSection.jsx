import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import techImage from '../assets/handshake.jpg';

const FAQSection = () => {
    const { ref, inView } = useInView({threshold: 0.2 });
    
    const faqs = [
        "How do I send a bank transfer?",
        "What is the scheduled payments feature?",
        "How can I reactivate a canceled card?",
        "What is the process for requesting a refund?",
        "How do I deposit funds into my account?"
    ];

    return (
        <div className="bg-white">
            {/* Top Banner Section */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto overflow-hidden rounded-xl mt-8"
                ref={ref}
            >
                <div className="grid grid-cols-2">
                    <div className="bg-orange-500 text-white p-10 flex flex-col justify-between">
                        <div>
                            <h1 className="text-4xl font-bold leading-tight">Market and Build<br />the Solutions</h1>
                        </div>
                        <div className="flex mt-8">
                            <div className="mr-12">
                                <p className="text-3xl font-bold">₱10B</p>
                                <p className="text-sm">Funds and Sindicate</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold">100k+</p>
                                <p className="text-sm">Raised by active startups</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={techImage} alt="Technology" className="w-full h-full object-cover" />
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
                <h2 className="text-md font-bold uppercase tracking-wide">FAQ</h2>
                <h3 className="text-3xl font-bold mt-2">Frequently asked questions</h3>
                <div className="mt-8 space-y-6">
                    {faqs.map((question, index) => (
                        <motion.div 
                            key={index} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex justify-between items-center border-b border-gray-200 py-4"
                        >
                            <p className="text-lg font-medium text-gray-900">{question}</p>
                            <motion.button 
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="text-2xl font-bold text-gray-800"
                            >+</motion.button>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Change the way you use your money Section */}
            <motion.section 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-orange-500 text-white py-12"
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4">
                    <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                        <h2 className="text-3xl font-bold leading-snug">
                            Change the way you use <span className="text-yellow-300">your money</span>
                        </h2>
                        <p className="mt-4 text-lg">Join millions who trust Ascone for a seamless and secure banking experience.</p>
                        <motion.button 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                            className="mt-6 bg-gray-800 text-white py-2 px-6 rounded-full"
                        >
                            Get Started Now
                        </motion.button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src={techImage} alt="Mobile banking illustration" className="w-64 h-auto" />
                    </div>
                </div>
            </motion.section>

            {/* Footer Section */}
            <motion.footer 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white py-8 border-t border-gray-200"
            >
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold"><span className="text-black">Go</span><span className="text-orange-500">Send+</span></h2>
                        <p className="text-sm mt-2">Ground floor SOHO Private Residence, Shaw boulevard Mandaluyong City</p>
                        <div className="flex items-center mt-1">
                            <span className="mr-2">🇵🇭</span>
                            <span className="text-sm">Philippines</span>
                        </div>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-4 gap-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h3 className="text-md font-bold">Account</h3>
                            <ul className="mt-2 space-y-1 text-sm">
                                <li>Saving</li>
                                <li>Join Accounts</li>
                                <li>Crypto</li>
                                <li>Freelance</li>
                                <li>Commodities</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-md font-bold">Help</h3>
                            <ul className="mt-2 space-y-1 text-sm">
                                <li>Customer Help</li>
                                <li>Community</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </motion.footer>
        </div>
    );
};

export default FAQSection;
