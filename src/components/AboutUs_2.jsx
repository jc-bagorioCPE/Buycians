import { motion } from "framer-motion";
import jcImg from "../assets/jc.png"; // Replace with John Carlo's image
import arbenImg from "../assets/arben.jpg"; // Arben's photo
import redjieImg from "../assets/redjie.png"; // Redjie’s photo
import runcelImg from "../assets/runcel.png"; // Runcel’s photo
import michaellaImg from "../assets/micha.jpg"; // Michaella’s photo

const teamMembers = [
  {
    name: "John Carlo Bagorio",
    role: "Lead Developer & Project Coordinator",
    description:
      "Focused on full-stack development, JC leads the project structure, database design, and frontend integration using React.js and Tailwind CSS.",
    image: jcImg,
  },
  {
    name: "Arben Abrao",
    role: "Backend & IoT Systems Specialist",
    description:
      "Arben specializes in backend logic and integration of real-time IoT data from sensors and AI detection models into the system.",
    image: arbenImg,
  },
  {
    name: "Redjie Mhar De Jesus",
    role: "AI/ML Developer",
    description:
      "Redjie works on building and training AI models for traffic detection, ensuring efficient and accurate recognition using OpenCV and TensorFlow.",
    image: redjieImg,
  },
  {
    name: "Runcel Tiangco",
    role: "UI/UX Designer",
    description:
      "Runcel focuses on crafting user-friendly interfaces, ensuring a smooth and accessible experience across all user types.",
    image: runcelImg,
  },
  {
    name: "Michaella Villapana",
    role: "Documentation & Quality Assurance",
    description:
      "Michaella handles project documentation, proposal writing, and ensures each feature meets our quality standards before deployment.",
    image: michaellaImg,
  },
];

const AboutUsPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-center text-4xl font-bold mb-6 text-white">
          Meet the Developers
        </h2>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          We are 4th-year BS Computer Engineering students from{" "}
          <span className="text-teal-400 font-semibold">
            Dr. Yanga's College Inc.
          </span>{" "}
          in Bulacan, working together on a smart traffic management system using AI and IoT.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-teal-500"
              />
              <h3 className="text-xl font-bold text-teal-400">{member.name}</h3>
              <p className="text-sm text-gray-400 italic mb-2">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsPage;
