import { useState } from "react";
import { API_ADD_PRODUCT } from "../../../config";

function AddProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [mainImage, setMainImage] = useState(null);
  const [hoverImage, setHoverImage] = useState(null);
  const [previewMain, setPreviewMain] = useState(null);
  const [previewHover, setPreviewHover] = useState(null);

  // Handle main image upload
  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(file);
      setPreviewMain(URL.createObjectURL(file));
    }
  };

  // Handle hover image upload
  const handleHoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHoverImage(file);
      setPreviewHover(URL.createObjectURL(file));
    }
  };

  // Only allow numbers or decimals in price
  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) setPrice(value);
  };

  // Submit form data
  const handleSubmit = async () => {
    if (!name.trim() || !price || !category.trim() || !mainImage || !hoverImage) {
      console.warn("Missing field:", { name, price, category, mainImage, hoverImage });
      alert("Please fill all fields and upload both images!");
      return;
    }


    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("mainImage", mainImage);
      formData.append("hoverImage", hoverImage);

      const res = await fetch(API_ADD_PRODUCT, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log({
        name,
        price,
        category,
        mainImage,
        hoverImage,
      });


      if (res.ok) {
        alert(data.message || "Product added successfully!");
        setName("");
        setPrice("");
        setCategory("");
        setMainImage(null);
        setHoverImage(null);
        setPreviewMain(null);
        setPreviewHover(null);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("Server error while adding product!");
    }
  };

  return (
    <div className="container">
      <h1 className="product-heading">Add New Product In MongoDB</h1>

      <div className="product-form d-flex flexcolumn align-items-center">
        {/* Product Name */}
        <input
          type="text"
          placeholder="Enter Product Name"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Product Price */}
        <input
          type="number"
          placeholder="Enter Product Price"
          className="input-field"
          value={price}
          onChange={handlePriceChange}
        />

        {/* Category */}
        <select
          className="input-field"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Body Parts">Body Parts</option>
          <option value="Engine Parts">Engine Parts</option>
          <option value="Accessories">Accessories</option>
        </select>


        {/* Main Product Image */}
        <label className="mt-2">Upload Main Image:</label>
        <input
          type="file"
          accept="image/*"
          className="input-field"
          onChange={handleMainImageChange}
        />
        {previewMain && (
          <img
            src={previewMain}
            alt="Main Preview"
            style={{
              width: "200px",
              height: "auto",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          />
        )}

        {/* Hover Product Image */}
        <label className="mt-2">Upload Hover Image:</label>
        <input
          type="file"
          accept="image/*"
          className="input-field"
          onChange={handleHoverImageChange}
        />
        {previewHover && (
          <img
            src={previewHover}
            alt="Hover Preview"
            style={{
              width: "200px",
              height: "auto",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          />
        )}

        <button
          className="submit-btn justify-content-center mx-auto" onClick={handleSubmit}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProducts;
