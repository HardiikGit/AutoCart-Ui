import { useState } from "react";
import { API_POST_LAT_PRODUCT } from "../../../config";

function AddLatestProduct() {
 const [name, setName] = useState("");
 const [price, setPrice] = useState("");
 const [mainImage, setMainImage] = useState(null);
 const [hoverImage, setHoverImage] = useState(null);

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
    alert("Product added successfully!");
    setName("");
    setPrice("");
    setMainImage(null);
    setHoverImage(null);
   } else {
    alert(`${data.error}`);
   }
  } catch (err) {
   alert("Error uploading product!");
  }
 };

 return (
  <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
   <h2 className="text-2xl font-bold mb-5 text-center text-gray-700">
    Add Latest Product
   </h2>

   <div className="space-y-4">
    <input
     type="text"
     placeholder="Product Name"
     value={name}
     onChange={(e) => setName(e.target.value)}
     className="w-full border p-2 rounded-lg"
    />

    <input
     type="number"
     placeholder="Product Price"
     value={price}
     onChange={(e) => setPrice(e.target.value)}
     className="w-full border p-2 rounded-lg"
    />

    <div>
     <label className="block text-gray-600 mb-1">Main Image</label>
     <input
      type="file"
      onChange={(e) => setMainImage(e.target.files[0])}
      className="w-full border p-2 rounded-lg"
     />
    </div>

    <div>
     <label className="block text-gray-600 mb-1">Hover Image</label>
     <input
      type="file"
      onChange={(e) => setHoverImage(e.target.files[0])}
      className="w-full border p-2 rounded-lg"
     />
    </div>

    <button
     onClick={handleSubmit}
     className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    >
     Add Product
    </button>
   </div>
  </div>
 );
}

export default AddLatestProduct;
