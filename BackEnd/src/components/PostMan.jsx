import { useState } from "react";

function AddCars() {
 const [name, setName] = useState("");
 const [base64, setBase64] = useState("");

 const handleSubmit = async () => {
  if (!name || !base64) {
   alert("Please fill all fields!");
   return;
  }

  try {
   const res = await fetch("http://localhost:5000/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, base64 }),
   });

   const data = await res.json();

   if (res.ok) {
    alert(data.message);
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

 return (
  <div className="container mx-auto">
   <div className="w-full h-screen flex items-center justify-center flex-col">
    <h2 className="text-2xl text-center font-black text-orange-600 uppercase">
     👉 Add Cars Info & Images
    </h2>
    <div className="flex w-full flex-col gap-5 mt-5">
     <input
      className="w-1/2 mx-auto px-2.5 py-2.5 outline-0 focus:border-2 focus:border-amber-600 border-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 placeholder:text-black"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter Car Name"
     />
     <input
      className="w-1/2 mx-auto px-2.5 py-2.5 outline-0 focus:border-2 focus:border-amber-600 border-0 focus:border-t-0 focus:border-r-0 focus:border-l-0 placeholder:text-black"
      type="text"
      value={base64}
      onChange={(e) => setBase64(e.target.value)}
      placeholder="Enter Base64 Image"
     />
     <button
      onClick={handleSubmit}
      className="border-2 p-2.5 rounded-full cursor-pointer text-md uppercase w-1/9 mx-auto transition-all hover:bg-orange-500 hover:border-orange-500 hover:text-amber-50"
     >
      Add Car
     </button>
    </div>
   </div>
  </div>
 );
}

export default AddCars;
