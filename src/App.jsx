import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ValuesSection from "./components/ValuesSection";
import FAQSection from "./components/FAQSection";
import Signup from "./components/ui/Signup";
import ContactUs from "./components/Contact";
import AboutUs_2 from "./components/AboutUs_2";
import ProtectedRoute from "./components/ProtectedRoute";
import HomeDashboard from "./pages/HomeDashboard";


function App() {
  const isLoggedIn = localStorage.getItem("user");
  const currentUser = localStorage.getItem("user") || "Guest";

  const PublicLayout = ({ children }) => (
    <>
      <Navbar />
      {children}
    </>
  );

  return (
    <Router>
      <div className="font-sans bg-gray-900 text-white">

        <Routes>
          {/* Main Page with redirect if logged in */}
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Navigate to="/admin-dashboard" replace />
              ) : (
                <PublicLayout>
                  <HeroSection />
                  <AboutUs />
                  <ValuesSection />
                  <FAQSection />
                </PublicLayout>
              )
            }
          />

          {/* Login and Signup Pages */}
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactUs />
              </>
            }
          />
          <Route
            path="/accounts"
            element={
              <>
                <Navbar />
                <AboutUs_2 />
              </>
            }
          />
          <Route path="/login" element={<Signup />} />

          {/* Protected Routes */}
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute>
                <HomeDashboard currentUser={currentUser} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
