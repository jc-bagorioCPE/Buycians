import Sidebar from "@/components/Sidebar";
import TrafficChart from "@/components/TrafficChart";
import SignalStatusCard from "@/components/SignalStatusCard";
import PerformanceMetrics from "@/components/PerformanceMetrics";
import ReportsOverview from "@/components/ReportsOverview";

const AdminDashboard = () => {
  return (
    <div className="p-4 flex items-start gap-6 bg-gray-900 min-h-screen text-white">
      <Sidebar />
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* The iframe styled to fill its parent (which is now 100% of viewport) */}
      <iframe
        src="http://192.168.100.154:5001/dashboard"
        title="Live Report" // Always good practice to add a title
        style={{ width: '100%', height: '90vh', border: 'none' }} // Make iframe fill its container and remove default border
        // Optional: Add sandbox attribute for security if embedding external content you don't control fully
        // sandbox="allow-scripts allow-same-origin"
      >
        {/* Fallback content if iframe is not supported */}
        <p>Your browser does not support iframes.</p>
        <p>Please visit <a href="http://192.168.100.154:5001/dashboard" target="_blank" rel="noopener noreferrer">http://192.168.100.154:5001/</a> directly.</p>
      </iframe>
      
      </div>
      
    </div>
  );
};

export default AdminDashboard;