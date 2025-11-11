import { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import {
  API_GET_LAT_PRODUCTS,
  API_GET_SINGLE_PRODUCT,
  API_DELETE_LAT_PRODUCT,
} from "../../../config";

function ViewLatestProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`${API_DELETE_LAT_PRODUCT}/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (res.ok) {
        alert("Product deleted successfully!");
        fetchProducts();
      } else {
        alert(data.error || "Failed to delete product");
      }
    } catch (err) {
      alert("Server error while deleting!");
    }
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Loading products...</h2>
      </div>
    );

  if (products.length === 0)
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>No latest products found.</h2>
      </div>
    );

  return (
    <div
      className="MainViewProduct"
      style={{ padding: "50px 0", backgroundColor: "#fff" }}
    >
      <div className="container" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "32px",
            fontWeight: "700",
            color: "#000",
          }}
        >
          Latest Products
        </h1>

        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "start",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              className="col"
              style={{
                flex: "1 1 250px",
                maxWidth: "280px",
                minWidth: "250px",
              }}
            >
              <div
                className="BodyCard"
                style={{
                  position: "relative",
                  textAlign: "center",
                  border: "1px solid #00000039",
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  backgroundColor: "#fff",
                }}
              >
                {/* Product ID */}
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "#000000b3",
                    color: "#fff",
                    fontSize: "12px",
                    padding: "4px 8px",
                    borderRadius: "4px",
                    zIndex: "9999999",
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(product._id);
                    alert("Product ID copied!");
                  }}
                >
                  ID: {product._id}
                </div>

                {/* Product Image */}
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    margin: "20px auto 0",
                    position: "relative",
                  }}
                >
                  <img
                    src={`${API_GET_SINGLE_PRODUCT}/${product.mainImageId}`}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      transition: "opacity 0.5s ease-in-out",
                    }}
                    onMouseOver={(e) => {
                      if (product.hoverImageId) {
                        e.currentTarget.src = `${API_GET_SINGLE_PRODUCT}/${product.hoverImageId}`;
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.src = `${API_GET_SINGLE_PRODUCT}/${product.mainImageId}`;
                    }}
                  />
                </div>

                {/* Product Details */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    padding: "20px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      margin: 0,
                      color: "#000",
                    }}
                  >
                    {product.name}
                  </h4>

                  <p
                    style={{
                      color: "orange",
                      fontSize: "16px",
                      fontWeight: "700",
                      margin: 0,
                    }}
                  >
                    ${product.price}
                  </p>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(product._id)}
                    style={{
                      width: "38px",
                      height: "38px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "#dc3545",
                      border: "none",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                    title="Delete Product"
                  >
                    <AiTwotoneDelete size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewLatestProduct;
