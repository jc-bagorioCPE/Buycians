function FlaskConnectPage() {
    const handleBack = () => {
      window.history.back();
    };
  
    return (
      <div className="w-full h-screen relative">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 z-10 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          ← Back
        </button>
  
        <iframe
          src="http://192.168.100.154:5000/preview"
          title="Car Detector"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    );
  }
  
  export default FlaskConnectPage;