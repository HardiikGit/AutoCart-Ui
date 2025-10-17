import { useState } from "react";

function AddImages() {
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
        body: JSON.stringify({ name, base64: base64.split(",")[1] }),
      });
      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Image added successfully!");
        setName("");
        setBase64("");
      } else {
        alert(data.error || "Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding Image!");
    }
  };

  const handleReload = () => {
    window.location.reload();
  }
  return (
    <div className="container mx-auto p-10 w-1/2">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-semibold mb-4 text-center uppercase text-amber-600">Add New Car</h1>

        <input type="text" placeholder="Image Name" value={name} onChange={(e) => setName(e.target.value)}
          className="border-2 px-5  py-2 w-full rounded outline-none border-amber-600 focus:border-amber-600 placeholder:uppercase" />

        <input
          type="file" accept="image/*" onChange={handleImageChange} className="border-2 p-2 rounded border-amber-600 outline-none focus:border-amber-600" />

        {base64 && (<img src={base64} alt="Preview" className="w-full h-40 object-cover rounded border border-amber-600" />)}
        <div className="flex gap-10 justify-center">
          <button
            onClick={handleSubmit}
            className="bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 uppercase font-bold cursor-pointer">
            Upload Image
          </button>
          <button
            onClick={handleReload}
            className="bg-amber-600 text-white px-5 py-2 rounded hover:bg-amber-700 uppercase font-bold cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddImages;
