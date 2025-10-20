import { motion } from "framer-motion";

const teamMembers = [
  { name: "Bernardo, Rence Luel P.", role: "Leader" },
  { name: "Bagorio, John Vincent B.", role: "Prototype" },
  { name: "Gaspar, Eric John E.", role: "Financial Plan" },
  { name: "Piedad, Liyan Alexander V.", role: "Financial Plan" },
  { name: "Roxas, Cyril Miguel R.", role: "Researcher" },
  { name: "Sevilla, Fren Jorel B.", role: "Operations" },
  { name: "Banzon, Dafne Rian D.R.", role: "Designer" },
  { name: "Cundanga, Chaisle Donne A.", role: "Researcher" },
  { name: "Enriquez, Trishia Sophia C.", role: "Marketing" },
  { name: "Raymundo, Flor Mecala O.", role: "Human Resource" },
  { name: "Suarez, Rasel Ann B.", role: "Researcher" },
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
          Meet the Team
        </h2>
        <p className="text-center text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          We are students from{" "}
          <span className="text-teal-400 font-semibold">
            Dr. Yanga's College Inc.
          </span>{" "}
          collaborating to build innovative solutions through teamwork and creativity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl text-center hover:scale-105 transition-transform"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-teal-400">{member.name}</h3>
              <p className="text-sm text-gray-400 italic">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsPage;
