import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "@/components/Sidebar"; // adjust path if needed


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
        <div className="p-4 flex items-start space-x-4">
            <Sidebar />
            <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-6">Welcome to Admin Dashboard</h1>
                {/* Your content */}
            </div>
        </div>

    );
};

export default AdminDashboard;
