import { useState, useEffect } from "react";
import axios from "axios";
const handleBack = () => {
  window.history.back();
};


// Keep these imports and constants if you still need the polling logic
// for any reason (e.g., displaying status elsewhere, or if the iframe
// source is dynamic based on polled data).
// If the iframe is the *only* thing this component does, you can remove
// these imports, constants, state, and effect hook entirely.
const API_URL = "http://127.0.0.1:5000/latest_results";
const POLL_INTERVAL = 1000; // 1 second

function ReportPage() {
  // Keep this state and effect if the polling logic is still needed.
  // Otherwise, remove it.
  const [data, setData] = useState(null);

  useEffect(() => {
    // If you don't need the polling logic anymore, you can comment out
    // or remove the contents of this useEffect, or the whole hook.
    // const fetchStatus = async () => {
    //   try {
    //     const res = await axios.get(API_URL);
    //     setData(res.data);
    //   } catch (err) {
    //     console.error("Failed to fetch data:", err);
    //   }
    // };

    // fetchStatus();
    // const interval = setInterval(fetchStatus, POLL_INTERVAL);
    // return () => clearInterval(interval);

  }, []); // Empty dependency array means this effect runs once on mount

  // The loading state check is removed as we want the iframe to show immediately.
  // If you need to load something first before showing the iframe, keep it.
  // if (!data) return <div className="p-4">Loading...</div>;

  // The renderLight function is removed as it's not used for the iframe.
  // const renderLight = (color, isOn) => { ... }

  return (
    // Style the main div to take up 100% of the viewport width and height.
    // Use inline styles for simplicity here, or apply via CSS classes.
    // `overflow: 'hidden'` on the parent can prevent scrollbars on the host page.
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-10 px-4 py-2 m-10 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      {/* The iframe styled to fill its parent (which is now 100% of viewport) */}
      <iframe
        src="http://192.168.100.154:5001/"
        title="Live Report" // Always good practice to add a title
        style={{ width: '100%', height: '100%', border: 'none' }} // Make iframe fill its container and remove default border
        // Optional: Add sandbox attribute for security if embedding external content you don't control fully
        // sandbox="allow-scripts allow-same-origin"
      >
        {/* Fallback content if iframe is not supported */}
        <p>Your browser does not support iframes.</p>
        <p>Please visit <a href="http://192.168.100.154:5001/" target="_blank" rel="noopener noreferrer">http://192.168.100.154:5001/</a> directly.</p>
      </iframe>
    </div>
  );
}

export default ReportPage;