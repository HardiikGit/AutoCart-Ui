import { useState } from "react";

function AddCars() {
 const [name, setName] = useState("");
 const [base64, setBase64] = useState("");
 const UploadCars = import.meta.env.VITE_UPLOAD;

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
   setBase64(reader.result);
  };
  reader.readAsDataURL(file);
 };

 const handleSubmit = async () => {
  if (!name || !base64) {
   alert("Please fill all fields!");
   return;
  }

  try {
   const res = await fetch(UploadCars, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, base64 }),
   });

   const data = await res.json();

   if (res.ok) {
    alert(data.message || "Car added successfully!");
    setName("");
    setBase64("");
   } else {
    alert(data.error || "Something went wrong!");
   }
  } catch (error) {
   console.error(error);
   alert("Error adding car!");
  }
 };

 const handleReload = () => {
  window.location.reload();
 }
 return (
  <div className="container mx-auto p-10 w-1/2">
   <h1 className="text-3xl font-semibold mb-4 text-center uppercase text-amber-600">Add New Car</h1>

   <input type="text" placeholder="Car Name" value={name} onChange={(e) => setName(e.target.value)}
    className="border-2 p-2 w-full mb-3 rounded outline-none border-amber-600 focus:border-amber-600" />

   <input
    type="file" accept="image/*" onChange={handleImageChange} className="border-2 p-2 w-60 mb-3 rounded border-amber-600 outline-none focus:border-amber-600" />

   {base64 && (
    <img
     src={base64} alt="Preview" className="w-full h-40 object-cover rounded mb-3 border border-amber-600" />
   )}
   <div className="flex gap-10">
    <button
     onClick={handleSubmit}
     className="bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 uppercase font-bold cursor-pointer">
     Upload Car
    </button>
    <button
     onClick={handleReload}
     className="bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 uppercase font-bold cursor-pointer">
     Cancel
    </button>
   </div>
  </div>
 );
}

export default AddCars;
