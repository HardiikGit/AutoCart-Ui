import { useEffect, useState } from "react";
import { API_ALL_IMAGES, API_IMAGE } from "../../../config";

// const ALL_IMAGES = import.meta.env.VITE_IMAGES;

function ShowImages() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_ALL_IMAGES)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // Delete image by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    try {
      const response = await fetch(`${API_IMAGE}/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Delete failed");
      }

      setCars((prevCars) => prevCars.filter((car) => car._id !== id));
      alert(data.message); // optional
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting image!");
    }
  };

  if (loading)
    return (
      <h2 className="loading-text text-center">Loading data...</h2>
    );

  return (
    <div className="container">
      <h1 className="page-title">Images List</h1>

      {cars.length === 0 ? (
        <p className="no-data">No Images found 😢</p>
      ) : (
        <ul className="image-grid">
          {cars
            .slice()
            .reverse()
            .map((car) => (
              <li key={car._id} className="image-card">
                <strong style={{ display: 'block', marginBottom: '5px' }}>Image _id :- {car._id}</strong>
                <strong>Image Name :- {car.filename}</strong>
                <img
                  src={`${API_IMAGE}/${car._id}`}
                  className="image-preview"
                  alt={car.filename}
                />
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(car._id)}>Delete</button>
              </li>
            ))}
        </ul>
      )
      }
    </div >
  );
}


export default ShowImages;