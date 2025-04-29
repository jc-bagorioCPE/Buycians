import React from "react";

const PerformanceMetrics = () => {
  const metrics = [
    {
      label: "Avg Vehicle Wait Time",
      value: "1 min",
      color: "text-green-400",
    },
    {
      label: "Avg Pedestrian Wait Time",
      value: " 15 sec",
      color: "text-yellow-400",
    },
    {
      label: "Traffic Throughput",
      value: "20 vehicles/hr",
      color: "text-blue-400",
    },
    {
      label: "Congestion Level",
      value: "High",
      color: "text-orange-400",
    },
  ];

  return (
    <div className="w-full px-6 py-8">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center h-40"
          >
            <h3 className="text-base font-medium text-gray-400 mb-2 text-center">
              {metric.label}
            </h3>
            <p className={`text-3xl font-bold ${metric.color} text-center`}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceMetrics;
