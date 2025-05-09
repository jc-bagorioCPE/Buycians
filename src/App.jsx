
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ValuesSection from "./components/ValuesSection";
import FAQSection from "./components/FAQSection";
import Signup from "./components/ui/Signup";
import ContactUs from "./components/Contact";
import AboutUs_2 from "./components/AboutUs_2";
import AdminDashboard from "./pages/AdminDashboard";
import ReportPage from "./pages/report";
import FlaskConnectPage from "./pages/car_detector";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isLoggedIn = localStorage.getItem("user");

  return (
    <Router>
      <div className="font-sans bg-gray-900 text-white">
        {/* Top Header */}
        <div className="w-full bg-teal-500 text-center text-white py-2 text-sm">
          @DYCI STUDENT
        </div>

        <Routes>
          {/* Main Page with redirect if logged in */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <>
                  <Navbar />
                  <HeroSection />
                  <AboutUs />
                  <ValuesSection />
                  <FAQSection />
                </>
              )
            }
          />

          {/* Login and Signup Pages */}
          <Route path="/contact" element={
            <>
              <Navbar />
              <ContactUs />
            </>
          } />
          <Route path="/accounts" element={ 
            <>
              <Navbar />
              <AboutUs_2 />
            </>
          } />
          <Route path="/login" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/admin-dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/reports" element={
            <ProtectedRoute>
              <ReportPage />
            </ProtectedRoute>
          } />
          <Route path="/cars" element={
            <ProtectedRoute>
              <FlaskConnectPage />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;