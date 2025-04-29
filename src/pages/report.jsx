import { motion } from "framer-motion";

const mockReports = [
  {
    id: 1,
    title: "System Check - Traffic Sensors",
    date: "April 25, 2025",
    status: "Operational",
    details: "All IoT traffic sensors are active and transmitting data.",
  },
  {
    id: 2,
    title: "AI Detection Summary",
    date: "April 24, 2025",
    status: "Normal",
    details: "AI successfully detected 132 vehicle entries with 97.4% accuracy.",
  },
  {
    id: 3,
    title: "Admin Access Log",
    date: "April 24, 2025",
    status: "Accessed",
    details: "Admin (admin@example.com) signed in at 8:43 AM.",
  },
];

const ReportPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-center text-4xl font-bold mb-6 text-white">
          Reports & Logs
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Monitor activity logs and system reports for the AI-powered traffic management platform.
        </p>

        <div className="space-y-6">
          {mockReports.map((report, index) => (
            <motion.div
              key={report.id}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-teal-400 mb-1">{report.title}</h3>
              <p className="text-sm text-gray-400 mb-1">📅 {report.date}</p>
              <p className="text-sm text-green-400 mb-2">🔒 Status: {report.status}</p>
              <p className="text-gray-300">{report.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ReportPage;
