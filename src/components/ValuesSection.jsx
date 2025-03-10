import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ValuesSection = () => {
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the section is visible
    });

    return (
        <section className="py-16 bg-white" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-4"
            >
                <h2 className="text-lg font-bold">Values</h2>
                <h3 className="text-3xl font-bold mt-2 leading-tight">
                    Maximize your spending, <br />make every dollar count
                </h3>
                <p className="mt-2 text-gray-600">
                    Effortlessly manage diverse financial solutions with smart, tech-driven processes.
                </p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between shadow-lg"
                    >
                        <div>
                            <div className="mb-4">🔍</div>
                            <h4 className="font-bold text-lg">Clarity & Trust</h4>
                            <p className="text-gray-600 mt-2">
                                Breaking away from industry ambiguity, we uphold transparency as a public and trusted company.
                            </p>
                        </div>
                        <div className="mt-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
                            >
                                ➔
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-100 p-6 rounded-lg flex flex-col justify-between shadow-lg"
                    >
                        <div>
                            <div className="mb-4">🌱</div>
                            <h4 className="font-bold text-lg">Innovative Growth</h4>
                            <p className="text-gray-600 mt-2">
                                Our proprietary fintech platform empowers subsidiaries to identify and manage investments efficiently.
                            </p>
                        </div>
                        <div className="mt-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
                            >
                                ➔
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-300 p-6 rounded-lg flex flex-col justify-between shadow-lg"
                    >
                        <div>
                            <div className="mb-4">📊</div>
                            <h4 className="font-bold text-lg">Exclusive Credit Opportunities</h4>
                            <p className="text-gray-600 mt-2">
                                Gain access to unique private credit investments — a rare yet essential part of a strong financial portfolio.
                            </p>
                        </div>
                        <div className="mt-6">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow"
                            >
                                ➔
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default ValuesSection;
