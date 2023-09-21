// ApiCall.js

import React, { useState } from "react";
import axios from "axios";
import "./ApiCall.css";

const ApiCall = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Axios
      const response = await axios.get(
        "https://azurewebappbackend.azurewebsites.net/api/GetData?code=kAviPABi77AbHwY1xu1WNYWsTOn5vtkiFkks56oLlCyTAzFuUgp8Pw=="
      );
      setData(response.data);
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ApiCall-container">
      <button className="ApiCall-button" onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Call API"}
      </button>
      {error && <p className="ApiCall-error">{error}</p>}
      {data && (
        <div className="ApiCall-response">
          <h2>API Response:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiCall;
