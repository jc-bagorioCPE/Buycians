// src/components/ReportsOverview.jsx
import React from "react";
import { jsPDF } from "jspdf"; // Import jsPDF

const ReportsOverview = () => {
  // 🔹 Mock data (replace with real API or state data later)
  const peakHourData = {
    busiestHour: "5 PM - 6 PM",
    averageVehicles: 120,
  };

  const pedestrianData = {
    peakCrossingTime: "12 PM",
    totalPresses: 69,
  };

  // Function to download the report as PDF
  const downloadReport = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text("Summary Report", 20, 20);

    doc.setFontSize(12);

    // Peak Hour Trends Section
    doc.text("Peak Hour Trends:", 20, 30);
    doc.text(`• Busiest Hour: ${peakHourData.busiestHour}`, 25, 40);
    doc.text(`• Avg. Vehicles/Hour: ${peakHourData.averageVehicles}`, 25, 50);

    // Pedestrian Crossing Analysis Section
    doc.text("Pedestrian Crossing Analysis:", 20, 65);
    doc.text(`• Peak Crossing Time: ${pedestrianData.peakCrossingTime}`, 25, 75);
    doc.text(`• Total Button Presses: ${pedestrianData.totalPresses}`, 25, 85);

    // Footer
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 105);

    // Save the PDF
    doc.save("summary_report.pdf");
  };

  return (
    <div className="mt-6 space-y-6">
      {/* Peak Hour Trends */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">📈 Peak Hour Trends</h3>
        <div className="h-40 bg-gray-700 rounded flex items-center justify-center text-gray-400">
          [Heatmap or Line Chart Placeholder]
        </div>
      </div>

      {/* Pedestrian Crossing Analysis */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">🚶 Pedestrian Crossing Analysis</h3>
        <div className="h-40 bg-gray-700 rounded flex items-center justify-center text-gray-400">
          [Time-of-Day Button Presses Chart Placeholder]
        </div>
      </div>

      {/* Download Button */}
      <div className="flex justify-end">
        <button
          onClick={downloadReport}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          📄 Download Summary Report (PDF)
        </button>
      </div>
    </div>
  );
};

export default ReportsOverview;
