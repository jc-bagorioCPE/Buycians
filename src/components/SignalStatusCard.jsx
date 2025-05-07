// src/components/SignalStatusCard.jsx
import React from "react";

const SignalStatusCard = () => {
  const currentPhase = "Main Road: Green | Side Road: Red";
  const timeRemaining = 18; // seconds
  const mode = "Fix"; // or "Fixed"

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Traffic Signal Status</h2>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="font-medium">Current Phase:</span>
          <span className="text-green-400">{currentPhase}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Time Remaining:</span>
          <span className="text-yellow-400">{timeRemaining}s</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Current Mode:</span>
          <span className={`font-bold ${mode === "AI" ? "text-blue-400" : "text-red-400"}`}>
            {mode === "AI" ? "🧠 AI Mode (Active)" : "🛑 Fixed Mode"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignalStatusCard;
