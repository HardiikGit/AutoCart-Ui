import { useEffect, useState } from "react";

const ALL_IMAGES = import.meta.env.VITE_IMAGES;

function ShowImages() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(ALL_IMAGES)
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
      const response = await fetch(`${import.meta.env.VITE_SINGLE_IMAGE}/${id}`, {
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
      <h2 className="w-full h-screen flex items-center justify-center text-3xl text-white">
        Loading data...
      </h2>
    );

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center font-bold text-3xl text-amber-600 mb-10 uppercase">
        Images List
      </h1>

      {cars.length === 0 ? (
        <p className="text-center text-2xl mt-5 font-semibold">No Images found 😢</p>
      ) : (
        <ul className="grid grid-cols-3 gap-5 justify-center">
          {cars
            .slice()
            .reverse()
            .map((car) => (
              <li key={car._id} className="border-2 border-amber-600 rounded-lg p-5 text-center">
                <strong className="block">Image _id :- {car._id}</strong>
                <strong>Image Name :- {car.filename}</strong>
                <img src={`${import.meta.env.VITE_SINGLE_IMAGE}/${car._id}`} className="w-full h-64 object-contain rounded-md shadow-md mt-5" />
                <button
                  className="px-7 py-1 border-2 border-amber-600 text-lg font-bold rounded-sm cursor-pointer my-5"
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