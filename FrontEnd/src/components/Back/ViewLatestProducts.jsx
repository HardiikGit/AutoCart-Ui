import { useEffect, useState } from "react";
import {
 API_GET_LAT_PRODUCTS,
 API_GET_SINGLE_PRODUCT,
 API_DELETE_LAT_PRODUCT,
} from "../../../config";

function ViewLatestProduct() {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);

 // Fetch all latest products
 const fetchProducts = () => {
  setLoading(true);
  fetch(API_GET_LAT_PRODUCTS)
   .then((res) => res.json())
   .then((data) => {
    setProducts(data);
    setLoading(false);
   })
   .catch(() => setLoading(false));
 };

 useEffect(() => {
  fetchProducts();
 }, []);

 // Delete product
 const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this product?")) return;

  try {
   const res = await fetch(`${API_DELETE_LAT_PRODUCT}/${id}`, {
    method: "DELETE",
   });

   const data = await res.json();

   if (res.ok) {
    alert("✅ Product deleted successfully!");
    fetchProducts(); // Refresh list
   } else {
    alert(data.error || "Failed to delete product");
   }
  } catch (err) {
   alert("Server error while deleting!");
  }
 };

 if (loading)
  return <p className="text-center mt-10 text-gray-600">Loading products...</p>;

 if (products.length === 0)
  return <p className="text-center mt-10 text-gray-600">No latest products found.</p>;

 return (
  <div className="py-10 px-4">
   <h1 className="text-center text-3xl font-semibold mb-8">Latest Products</h1>

   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
    {products.map((product) => (
     <div
      key={product._id}
      className="border rounded-2xl p-4 shadow hover:shadow-lg transition w-64 text-center"
     >
      <div className="relative w-full h-52 overflow-hidden rounded-xl mb-4 group">
       <img
        src={`${API_GET_SINGLE_PRODUCT}/${product.mainImageId}`}
        alt={product.name}
        className="w-full h-full object-cover group-hover:opacity-0 transition"
       />
       <img
        src={`${API_GET_SINGLE_PRODUCT}/${product.hoverImageId}`}
        alt={product.name}
        className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition"
       />
      </div>

      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-700 mt-1">₹{product.price}</p>

      <button
       onClick={() => handleDelete(product._id)}
       className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
      >
       Delete
      </button>
     </div>
    ))}
   </div>
  </div>
 );
}

export default ViewLatestProduct;
