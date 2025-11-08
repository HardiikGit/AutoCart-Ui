import { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import {
  API_IMAGE,
  API_VIEW_ALL_PRODUCTS,
  API_VIEW_SINGLE_PRODUCT,
} from "../../../config";

function ViewProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_VIEW_ALL_PRODUCTS);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`${API_VIEW_SINGLE_PRODUCT}/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        alert("Product deleted successfully!");
      } else {
        alert("Failed to delete product!");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (loading) {
    return (
      <div className="MainViewProduct">
        <div className="container text-center mt-5">
          <h2 className="loading-text">Loading products...</h2>
        </div>
      </div>
    );
  }

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
          All Products
        </h1>

        <div
          className="row"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {products.length > 0 ? (
            products.map((product) => (
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
                      zIndex: '9999999'
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
                    className="BodyPartCard"
                    style={{
                      width: "200px",
                      height: "200px",
                      margin: "20px auto 0",
                      position: "relative",
                    }}
                  >
                    <img
                      src={`${API_IMAGE}/${product.mainImageId}`}
                      alt={product.name}
                      className="img-contain main-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        transition: "opacity 0.5s ease-in-out",
                      }}
                      onMouseOver={(e) => {
                        if (product.hoverImageId) {
                          e.currentTarget.src = `${API_IMAGE}/${product.hoverImageId}`;
                        }
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.src = `${API_IMAGE}/${product.mainImageId}`;
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div
                    className="PartsDetails"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "10px",
                      padding: "20px",
                    }}
                  >
                    {/* Product Name */}
                    <div className="PartName">
                      <a
                        href="/"
                        className="d-flex flex-column text-decoration-none"
                        style={{
                          color: "#000",
                          textDecoration: "none",
                        }}
                      >
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            margin: 0,
                          }}
                        >
                          {product.name}
                        </h4>
                      </a>
                    </div>

                    {/* Stars */}
                    <div
                      className="PartReview"
                      style={{
                        display: "flex",
                        gap: "2px",
                        color: "#00000076",
                        fontSize: "18px",
                        justifyContent: "center",
                      }}
                    >
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                      <CiStar />
                    </div>

                    {/* Price */}
                    <div className="PartPrice">
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
                    </div>

                    {/* Buttons */}
                    <div
                      className="CartBox"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      {/* <button
                        className="CartButton"
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          padding: "10px 15px",
                          background: "#e1e1e160",
                          border: "1px solid #e1e1e160",
                          borderRadius: "5px",
                          color: "#000",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          addToCart({
                            id: product._id,
                            name: product.name,
                            image: `${API_IMAGE}/${product.mainImageId}`,
                            Price: product.price,
                          })
                        }
                      >
                        Add to Cart
                      </button> */}

                      <button
                        className="Dlt-Btn"
                        onClick={() => handleDelete(product._id)}
                        title="Delete Product"
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
                      >
                        <AiTwotoneDelete size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center mx-auto">No products found</h3>
          )}
        </div>
      </div>
    </div >
  );
}

export default ViewProduct;
