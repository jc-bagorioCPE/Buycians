import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const adminEmail = "admin@example.com";

  if (!user || user.email !== adminEmail) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;