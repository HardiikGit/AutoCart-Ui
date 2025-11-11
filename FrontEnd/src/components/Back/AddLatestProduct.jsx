import { useState } from "react";
import { API_POST_LAT_PRODUCT } from "../../../config";

function AddLatestProduct() {
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 const [mainImage, setMainImage] = useState(null);
 const [hoverImage, setHoverImage] = useState(null);
 const [previewMain, setPreviewMain] = useState(null);
 const [previewHover, setPreviewHover] = useState(null);

 // Handle main image upload
 const handleMainImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
   setMainImage(file);
   setPreviewMain(URL.createObjectURL(file)); // ✅ instant preview
  }
 };

 // Handle hover image upload
 const handleHoverImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
   setHoverImage(file);
   setPreviewHover(URL.createObjectURL(file)); // ✅ instant preview
  }
 };

 // Submit form data
 const handleSubmit = async () => {
  if (!name || !price || !mainImage || !hoverImage) {
   alert("Please fill all fields and upload both images!");
   return;
  }

  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("mainImage", mainImage);
  formData.append("hoverImage", hoverImage);

  try {
   const res = await fetch(API_POST_LAT_PRODUCT, {
    method: "POST",
    body: formData,
   });
   const data = await res.json();

   if (res.ok) {
    alert("✅ Product added successfully!");
    setName("");
    setPrice("");
    setMainImage(null);
    setHoverImage(null);
    setPreviewMain(null);
    setPreviewHover(null);
   } else {
    alert(data.error || "Failed to add product!");
   }
  } catch (err) {
   alert("Server error while uploading!");
  }
 };

 return (
  <div className="d-flex align-items-center flexcolumn" style={{}}>
   <h2
    style={{
     fontSize: "24px",
     textAlign: "center",
     fontWeight: "700",
     marginBottom: "30px",
    }}
   >
    Add Latest Product
   </h2>

   <div style={{
    display: "flex", flexDirection: "column", gap: "20px", width: '100%', alignItems: 'center'
   }}>
    <input
     type="text"
     placeholder="Product Name"
     value={name}
     onChange={(e) => setName(e.target.value)}
     className="input-field"
    />

    <input
     type="number"
     placeholder="Product Price"
     value={price}
     onChange={(e) => setPrice(e.target.value)}
     className="input-field"
    />

    {/* Main Image Upload */}
    <div className="d-flex flexcolumn align-items-center" style={{ gap: '10px', width: '100%' }}>
     <label style={{ fontWeight: "600" }}>Main Image</label>
     <input
      type="file"
      accept="image/*"
      onChange={handleMainImageChange}
      className="input-field"
     />
     {previewMain && (
      <img
       src={previewMain}
       alt="Main Preview"
       style={{
        width: "200px",
        height: "auto",
        marginTop: "10px",
        borderRadius: "8px",
        border: "1px solid #ddd",
       }}
      />
     )}
    </div>

    {/* Hover Image Upload */}
    <div className="d-flex flexcolumn align-items-center" style={{ gap: '10px', width: '100%' }}>
     <label style={{ fontWeight: "600" }}>Hover Image</label>
     <input
      type="file"
      accept="image/*"
      onChange={handleHoverImageChange}
      className="input-field"
     />
     {previewHover && (
      <img
       src={previewHover}
       alt="Hover Preview"
       style={{
        width: "200px",
        height: "auto",
        marginTop: "10px",
        borderRadius: "8px",
        border: "1px solid #ddd",
       }}
      />
     )}
    </div>

    <button
     onClick={handleSubmit}
     className="submit-btn justify-content-center"
    >
     Add Product
    </button>
   </div>
  </div>
 );
}

export default AddLatestProduct;
