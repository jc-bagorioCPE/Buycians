import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ValuesSection from "./components/ValuesSection";
import FAQSection from "./components/FAQSection";
import Signup from "./components/ui/Signup";
import ContactUs from "./components/Contact"
import AboutUs_2 from "./components/AboutUs_2";
import AdminDashboard from "./pages/AdminDashboard";
import ReportPage from "./pages/report";
import dashboardRoute from "./routes/dashboardRoute";


function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-900 text-white">
        {/* Top Header */}
        <div className="w-full bg-teal-500 text-center text-white py-2 text-sm">
          @Top Header
        </div>
        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroSection />
                <AboutUs />
                <ValuesSection />
                <FAQSection />
              </>
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
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/reports" element={<ReportPage />} />

          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
