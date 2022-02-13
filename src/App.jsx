import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./pages/home/Home";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import "swiper/css/bundle";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader color={"#36D7B7"} loading={loading} size={20} />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;
