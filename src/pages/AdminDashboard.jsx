import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TrafficChart from "@/components/TrafficChart";
import SignalStatusCard from "@/components/SignalStatusCard";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import ReportsOverview from "@/components/ReportsOverview";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const adminEmail = "admin@example.com";
  const storedUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!storedUser || storedUser.email !== adminEmail) {
      navigate("/admin");
    }
  }, []);

  return (
    <div className="p-4 flex items-start gap-6 bg-gray-900 min-h-screen text-white">
      <Sidebar />
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Section 2: Traffic Signal Status */}
        <div className="flex justify-center mb-6">
  <div className="w-full max-w-4xl">
    <SignalStatusCard />
  </div>
</div>

        {/* Section 3: System Performance Analytics */}
        <div className="flex justify-center mb-6">
  <div className="w-full max-w-4xl">
  <PerformanceMetrics />
  </div>
</div>
        {/* Section 5: Reports and Charts */}
        <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Traffic Trends & Reports</h2>
          <TrafficChart />
          <ReportsOverview />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
