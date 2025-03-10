import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ValuesSection from "./components/ValuesSection";
import FAQSection from "./components/FAQSection";
import Login from "./components/ui/Login";
import Signup from "./components/ui/Signup";

function App() {
  return (
    <Router>
      <div className="font-sans">
        {/* Top Header */}
        <div className="w-full bg-orange-500 text-center text-white py-2 text-sm">
          @Top Header
        </div>

        <Navbar />

        <Routes>
          {/* Main Page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <AboutUs />
                <ValuesSection />
                <FAQSection />
              </>
            }
          />
          {/* Login and Signup Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
