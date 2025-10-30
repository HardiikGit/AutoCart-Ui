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
    <div className="container">
      <div className="d-flex flexcolumn">
        <h1 className="heading">Add New Car</h1>

        <input
          type="text"
          placeholder="Image Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-text"
        />

        <input
          type="file"
          accept="image/*" s
          onChange={handleImageChange}
          className="input-file"
        />

        {base64 && (
          <img src={base64} alt="Preview" className="preview-image" />
        )}

        <div className="btn-group d-flex justify-content-center">
          <button onClick={handleSubmit} className="btn primary">
            Upload Image
          </button>
          <button onClick={handleReload} className="btn danger">
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddImages;
