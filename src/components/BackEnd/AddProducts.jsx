import { useState } from "react";

function AddProducts() {
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 const [image, setImage] = useState(null);

 const ADD_PRODUCT = import.meta.env.VITE_ADD_PRODUCT

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onloadend = () => setImage(reader.result.split(",")[1]); // get base64 only
  if (file) reader.readAsDataURL(file);
 };

 const handlePriceChange = (e) => {
  const value = e.target.value;
  if (/^\d*\.?\d*$/.test(value)) {
   setPrice(value);
  }
 };


 const handleSubmit = async () => {
  if (!name || !price || !image) {
   alert("Please fill all fields");
   return;
  }

  try {
   const res = await fetch(ADD_PRODUCT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, base64: image }),
   });

   const data = await res.json();
   if (res.ok) {
    alert("Product added successfully!");
    setName("");
    setPrice("");
    setImage(null);
   } else {
    alert(`Error: ${data.error}`);
   }
  } catch (err) {
   console.error(err);
   alert("Server error");
  }
 };

 return (
  <div className="container">
   <h1 className="product-heading">Add New Product In MongoDB</h1>

   <div className="product-form d-flex flexcolumn align-items-center">
    <input
     type="text"
     placeholder="Enter Product Name"
     className="input-field"
     value={name}
     onChange={(e) => setName(e.target.value)}
    />

    <input
     type="number"
     placeholder="Enter Product Price"
     className="input-field"
     value={price}
     onChange={(e) => setPrice(e.target.value)}
    />

    <input
     type="file"
     accept="image/*"
     className="input-field"
     onChange={handleImageChange}
    />

    <button className="submit-btn justify-content-center" onClick={handleSubmit}>
     Add Product
    </button>
   </div>
  </div>
 );
}

export default AddProducts;
