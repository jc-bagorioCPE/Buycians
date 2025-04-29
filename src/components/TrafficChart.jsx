import {
    LineChart,
    Line,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from "recharts";
  
  const vehicleData = [
    { time: "08:00", vehicles: 5 },
    { time: "08:30", vehicles: 8 },
    { time: "09:00", vehicles: 12 },
    { time: "09:30", vehicles: 7 },
    { time: "10:00", vehicles: 11 },
  ];
  
  const pedestrianData = [
    { time: "08:00", count: 5 },
    { time: "08:30", count: 9 },
    { time: "09:00", count: 7 },
    { time: "09:30", count: 11 },
    { time: "10:00", count: 6 },
  ];
  
  const getCongestionStatus = (vehicles) => {
    return vehicles >= 10 ? "High Congestion" : "Low Congestion";
  };
  
  const TrafficChart = () => {
    // Check congestion at the latest time point
    const lastVehicleCount = vehicleData[vehicleData.length - 1].vehicles;
    const congestionStatus = getCongestionStatus(lastVehicleCount);
  
    return (
      <div className="space-y-8 mt-4">
  
        {/* Congestion Status Indicator */}
        <div className="bg-yellow-100 text-black text-xl font-semibold p-4 rounded-lg">
          <h2>
            Current Traffic Status:{" "}
            <span className={`font-semibold ${congestionStatus === "High Congestion" ? "text-red-500" : "text-green-500"}`}>
              {congestionStatus}
            </span>
          </h2>
        </div>
  
        {/* Line Chart - Vehicle Count Over Time */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-black">Vehicle Count Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={vehicleData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="vehicles" stroke="#1d4ed8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
  
        {/* Area Chart - Pedestrian Count Over Time */}
        <div className="bg-white rounded-xl p-4 shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-black">Pedestrian Count Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={pedestrianData}>
              <defs>
                <linearGradient id="colorPedestrian" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="count" stroke="#3b82f6" fillOpacity={1} fill="url(#colorPedestrian)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default TrafficChart;
  