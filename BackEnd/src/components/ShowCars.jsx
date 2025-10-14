import { useEffect, useState } from "react";

const ALL_IMAGES = import.meta.env.VITE_IMAGES

export default function ShowCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(ALL_IMAGES)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="w-full h-screen flex items-center justify-center">Loading data...</h2>;

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center font-bold text-5xl text-orange-600 mb-10 uppercase">
        Car List
      </h1>

      {cars.length === 0 ? (
        <p className="text-center text-2xl mt-5 font-semibold">
          No cars found. . . . 😢
        </p>
      ) : (
        <ul className="grid grid-cols-3 gap-5 justify-center">
          {cars.map((car) => (
            <li
              key={car._id}
              className="border-2 border-amber-600 rounded-lg p-3 text-center"
            >
              <strong className="block mb-2">{car.filename}</strong>
              <img
                src={`${import.meta.env.VITE_SINGLE_IMAGE}/${car._id}`}
                alt={car.filename}
                className="w-full h-64 object-contain rounded-md shadow-md"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
