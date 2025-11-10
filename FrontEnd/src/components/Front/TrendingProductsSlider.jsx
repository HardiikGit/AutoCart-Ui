import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { CiStar } from "react-icons/ci";
import { useCart } from "../../Hooks/CartContext";
import { API_GET, API_VIEW_ALL_PRODUCTS } from "../../../config";

function TrendingProductsSlider() {
   const [tabSwitch, setTabSwitch] = useState(0);
   const [products, setProducts] = useState([]);
   const { addToCart } = useCart();

   // Fetch products from MongoDB
   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const res = await fetch(API_VIEW_ALL_PRODUCTS);
            const data = await res.json();
            setProducts(data);
         } catch (err) {
            console.error("Error fetching products:", err);
         }
      };
      fetchProducts();
   }, []);

   // Group products by category
   const bodyPartsData = products.filter((p) => p.category === "Body Parts");
   const enginePartsData = products.filter((p) => p.category === "Engine Parts");
   const accessoriesData = products.filter((p) => p.category === "Accessories");

   const tabs = [
      { id: 0, label: "Body Parts", data: bodyPartsData },
      { id: 1, label: "Engine Parts", data: enginePartsData },
      { id: 2, label: "Accessories", data: accessoriesData },
   ];

   const handleTabClick = (tabId) => {
      setTabSwitch(tabId);
   };

   return (
      <div className="Trending_Product_Slider" style={{ padding: "50px 0px" }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12">
                  <div
                     className="Wrapper-fl d-flex align-items-center justify-space-between"
                     style={{ marginBottom: "40px" }}
                  >
                     <div className="Section_Heading">
                        <h2 style={{ fontSize: "32px", fontWeight: "800" }}>
                           Trending Products
                        </h2>
                     </div>
                     <div
                        className="Tab_Buttons d-flex align-items-center"
                        style={{ gap: "20px" }}
                     >
                        {tabs.map((tab) => (
                           <button
                              key={tab.id}
                              className={`Tab_Switch_Button ${tabSwitch === tab.id ? "TabShow bgColor" : ""
                                 }`}
                              onClick={() => handleTabClick(tab.id)}
                              style={{
                                 padding: "10px 20px",
                                 background: "var(--white-color)",
                                 fontSize: "16px",
                                 color: "var(--black-color)",
                                 borderRadius: "5px",
                                 fontWeight: "600",
                              }}
                           >
                              {tab.label}
                           </button>
                        ))}
                     </div>
                  </div>

                  <div className="tab_Content">
                     {tabs.map((tab) => (
                        <div
                           key={tab.id}
                           className={`tabPanel ${tabSwitch === tab.id ? "TabShow" : ""}`}
                        >
                           <Swiper
                              modules={[Navigation, Autoplay]}
                              spaceBetween={30}
                              slidesPerView={1}
                              loop={true}
                              autoplay={{
                                 delay: 7000,
                                 disableOnInteraction: false,
                              }}
                              speed={300}
                              navigation={false}
                              breakpoints={{
                                 320: { slidesPerView: 1 },
                                 640: { slidesPerView: 2 },
                                 1024: { slidesPerView: 4 },
                                 1200: { slidesPerView: 5 },
                              }}
                              className="mySwiper"
                           >
                              {tab.data.length > 0 ? (
                                 tab.data.map((product) => (
                                    <SwiperSlide key={product._id}>
                                       <div
                                          className="BodyCard"
                                          style={{
                                             border: "1px solid #00000039",
                                             cursor: "pointer",
                                          }}
                                       >
                                          <div
                                             className="BodyPartCard"
                                             style={{
                                                width: "200px",
                                                height: "200px",
                                                margin: "0 auto",
                                             }}
                                          >
                                             <img
                                                src={`${API_GET}/${product.mainImageId}`}
                                                className="img-contain"
                                                alt={product.name}
                                             />
                                          </div>
                                          {product.hoverImageId && (
                                             <div
                                                className="Other absolute"
                                                style={{
                                                   opacity: "0",
                                                   top: "10px",
                                                   left: "0",
                                                   right: "0",
                                                   width: "200px",
                                                   height: "200px",
                                                   margin: "0 auto",
                                                   transition: "all ease-in-out 0.5s",
                                                }}
                                             >
                                                <img
                                                   src={`${API_GET}/${product.hoverImageId}`}
                                                   className="img-contain"
                                                   alt="HoverImage"
                                                />
                                             </div>
                                          )}
                                          <div
                                             className="PartsDetails d-flex flexcolumn"
                                             style={{ gap: "10px", padding: "20px" }}
                                          >
                                             <div className="PartName">
                                                <a
                                                   href="/"
                                                   className="d-flex flexcolumn"
                                                   style={{ color: "var(--black-color)" }}
                                                >
                                                   <h4
                                                      style={{
                                                         fontSize: "16px",
                                                         fontWeight: "500",
                                                      }}
                                                   >
                                                      {product.name}
                                                   </h4>
                                                </a>
                                             </div>
                                             <div className="PartReview">
                                                <a
                                                   href="/"
                                                   className="d-flex"
                                                   style={{
                                                      gap: "2px",
                                                      color: "#00000076",
                                                      fontSize: "18px",
                                                   }}
                                                >
                                                   <CiStar />
                                                   <CiStar />
                                                   <CiStar />
                                                   <CiStar />
                                                   <CiStar />
                                                </a>
                                             </div>
                                             <div className="PartPrice">
                                                <p
                                                   style={{
                                                      color: "var(--orange-color)",
                                                      fontSize: "16px",
                                                      fontWeight: "700",
                                                   }}
                                                >
                                                   ${product.price}
                                                </p>
                                             </div>
                                             <div className="CartBox">
                                                <button
                                                   className="CartButton"
                                                   style={{
                                                      fontSize: "16px",
                                                      fontWeight: "700",
                                                      textTransform: "uppercase",
                                                      padding: "10px 15px",
                                                      background: "#e1e1e160",
                                                      border: "1px solid #e1e1e160",
                                                      borderRadius: "2px",
                                                      color: "var(--black-color)",
                                                   }}
                                                   onClick={() =>
                                                      addToCart({
                                                         id: product._id,
                                                         name: product.name,
                                                         image: `${API_GET}/file/${product.mainImageId}`,
                                                         Price: `$${product.price}`,
                                                      })
                                                   }
                                                >
                                                   Add to Cart
                                                </button>
                                             </div>
                                          </div>
                                       </div>
                                    </SwiperSlide>
                                 ))
                              ) : (
                                 <p
                                    style={{
                                       textAlign: "center",
                                       padding: "30px",
                                       color: "#777",
                                    }}
                                 >
                                    No products available in this category.
                                 </p>
                              )}
                           </Swiper>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default TrendingProductsSlider;
