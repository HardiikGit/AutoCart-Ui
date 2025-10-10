import { useEffect, useState } from "react";
import { BACKEND_API_GET } from "../../server2";

export default function ShowCars() {
 const [cars, setCars] = useState([]);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  fetch(BACKEND_API_GET)
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

 if (loading) {
  return <h2>Loading data...</h2>;
 }

 return (
  <div className="container mx-auto">

   <div className="pb-10">
    <h1 className="text-center font-bold text-6xl text-orange-600 uppercase">Car List</h1>

    {cars.length === 0 ? (
     <p className="text-center font-bold text-3xl mt-5">No cars found.</p>
    ) : (
     <ul>
      {cars.map((car) => (
       <li key={car._id}>
        <strong>{car.name}</strong>
        {car.image && (
         <div>
          <img
           src={car.image}
           alt={car.name}
           width="200"
           style={{ borderRadius: "8px", marginTop: "10px" }}
          />
         </div>
        )}
       </li>
      ))}
     </ul>
    )}
   </div>
  </div>
 );
}
