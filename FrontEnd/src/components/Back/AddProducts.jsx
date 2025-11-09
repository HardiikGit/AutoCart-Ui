// import { useState } from "react";

// function AddImages() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [base64, setBase64] = useState("");

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setBase64(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async () => {
//     if (!name || !price || !base64) {
//       alert("Please fill all fields!");
//       return;
//     }

//     try {
//       // Convert base64 → blob → file
//       const blob = await fetch(base64).then((res) => res.blob());
//       const file = new File([blob], `${name}.png`, { type: "image/png" });

//       // Prepare FormData for multer
//       const formData = new FormData();
//       formData.append("name", name);
//       formData.append("price", price);
//       formData.append("image", file);

//       // POST to your backend route
//       const res = await fetch("http://localhost:5000/add-product", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert(data.message || "Image added successfully!");
//         setName("");
//         setPrice("");
//         setBase64("");
//       } else {
//         alert(data.error || "Something went wrong!");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error uploading image!");
//     }
//   };

//   const handleReload = () => {
//     window.location.reload();
//   };

//   return (
//     <div className="container">
//       <div className="d-flex flexcolumn">
//         <h1 className="heading">Add New Product</h1>

//         <input
//           type="text"
//           placeholder="Product Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="input-text"
//         />

//         <input
//           type="number"
//           placeholder="Product Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="input-text"
//         />

//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="input-file"
//         />

//         {base64 && (
//           <img
//             src={base64}
//             alt="Preview"
//             className="preview-image img-contain"
//             style={{ width: "200px", height: "auto", marginTop: "10px" }}
//           />
//         )}

//         <div className="btn-group d-flex justify-content-center" style={{ marginTop: "20px" }}>
//           <button onClick={handleSubmit} className="btn primary">
//             Upload Product
//           </button>
//           <button onClick={handleReload} className="btn danger">
//             Cancel
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AddImages;

import { useState } from "react";
import { API_ADD_PRODUCT } from "../../../config";

function AddProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
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
    if (!name || !price || !review || !mainImage || !hoverImage) {
      alert("Please fill all fields and upload both images!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("review", review);
      formData.append("mainImage", mainImage);
      formData.append("hoverImage", hoverImage);

      const res = await fetch(API_ADD_PRODUCT, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || "Product added successfully!");
        setName("");
        setPrice("");
        setReview("");
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

        {/* Product Review */}
        <textarea
          placeholder="Enter Product Review"
          className="input-field"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows="3"
        />

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
          className="submit-btn justify-content-center mx-auto"
          onClick={handleSubmit}
        >
          Add Product
        </button>
      </div>
    </div>
  );
}

export default AddProducts;
