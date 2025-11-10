import { useEffect, useState } from "react";
import { API_ALL_LOGOS, API_DELETE_LOGO, API_SINGLE_LOGO } from "../../../config";

function CompanyLogos() {
  const [companyLogos, setCompanyLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);




  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const response = await fetch(API_ALL_LOGOS);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCompanyLogos(data);
      } catch (err) {
        console.error("Error fetching company logos:", err);
        setError("Failed to fetch company logos.");
      } finally {
        setLoading(false);
      }
    };
    fetchLogos();
  }, []);

  const handleDelete = async (logoDbId) => {
    if (!window.confirm("Are you sure you want to delete this company logo?")) return;

    try {
      const response = await fetch(`${API_DELETE_LOGO}/${logoDbId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Delete failed");
      }

      setCompanyLogos((prevLogos) => prevLogos.filter((logo) => logo._id !== logoDbId));
      alert(data.message || "Company logo deleted successfully!");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting company logo: " + err.message);
    }
  };

  if (loading) {
    return (
      <h2 className="loading-text text-center">Loading company logos...</h2>
    );
  }

  if (error) {
    return (
      <h2 className="error-text text-center text-danger">{error}</h2>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Company Logos List</h1>

      {companyLogos.length === 0 ? (
        <p className="no-data">No Company Logos found 😢</p>
      ) : (
        <ul className="image-grid">
          {companyLogos
            .slice()
            .reverse() // Display newest first
            .map((logo) => (
              <li key={logo._id} className="image-card">
                <strong style={{ display: 'block', marginBottom: '5px' }}>Database _id: {logo._id}</strong>
                <strong style={{ display: 'block', marginBottom: '5px' }}>Company Name: {logo.companyName}</strong>
                <img
                  src={`${API_SINGLE_LOGO}/${logo.logoFileId}`}
                  className="image-preview"
                  alt={logo.companyName}
                />

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(logo._id)}>Delete</button>
              </li>
            ))}
        </ul>
      )
      }
    </div >
  );
}

export default CompanyLogos;