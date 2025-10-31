import { useEffect, useState } from "react";

function ViewProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  const VIEW_PRODUCTS = import.meta.env.VITE_VIEW_ALL_PRODUCTS;
  const VIEW_IMAGE = import.meta.env.VITE_SINGLE_IMAGE;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(VIEW_PRODUCTS);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [VIEW_PRODUCTS]);

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
    <div className="MainViewProduct">
      <div className="container">
        <h1 className="text-center All-Products">All Products</h1>
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                className="col-lg-3 col-md-5 col-sm-12"
                key={product._id}
              >
                <div className="card text-center">
                  <img
                    src={`${VIEW_IMAGE}/${product.imageId}`}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <div className="Product-body">
                    <h5 className="Product-name">{product.name}</h5>
                    <p className="Product-price fw-bold">${product.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h4 className="text-center mt-5">No products found</h4>
          )}
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
