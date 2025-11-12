import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation } from 'swiper/modules';
import { CiStar } from 'react-icons/ci';
import { useCart } from '../../Hooks/CartContext';
import { API_GET_LAT_PRODUCTS, API_GET_SINGLE_PRODUCT } from '../../../config';

function LatestSlider() {
  const swiperStop = useRef(null);
  const [latestProductsData, setLatestProductsData] = useState([]);
  const { addToCart } = useCart();
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        const res = await fetch(API_GET_LAT_PRODUCTS);
        const data = await res.json();
        setLatestProductsData(data);
      } catch (error) {
        console.error('Error fetching latest products:', error);
      }
    };

    fetchLatestProducts();
  }, []);

  const showPopup = (message) => {
    setPopup(message);
    setTimeout(() => setPopup(null), 2000);
  };

  return (
    <div className="relative">
      {popup && (
        <div
          className="Pop-up"
          style={{ position: 'fixed', top: '10%', right: '2%', zIndex: '1000000', background: 'var(--orange-color)', color: 'var(--white-color)', height: 'auto', width: '300px', padding: '20px 30px', borderRadius: '5px', fontSize: '18px', fontWeight: '500' }}>
          {popup}
        </div>
      )}

      <div className="row align-items-center">
        <div className="col-lg-3">
          <div
            className="trending_Banner hidden relative d-flex justify-content-center"
            style={{
              width: '300px',
              maxHeight: '410px',
              borderRadius: '10px',
              color: 'var(--white-color)',
            }}
          >
            <img src="/Lat.jpg" className="img-contain" alt="Banner" />
            <div
              className="Trending_text text-center absolute"
              style={{ top: '20px', padding: '20px' }}
            >
              <div
                className="mx-auto"
                style={{ marginBottom: '20px', width: '75%' }}
              >
                <h4
                  style={{
                    textTransform: 'uppercase',
                    background: 'var(--orange-color)',
                    fontSize: '16px',
                    padding: '5px 0px',
                  }}
                >
                  Up To 30% Discount
                </h4>
              </div>
              <div>
                <h3
                  style={{
                    textTransform: 'uppercase',
                    fontSize: '24px',
                  }}
                >
                  Rubber Tubeless Tyre For Car
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-9">
          <div
            onMouseEnter={() => swiperStop.current?.autoplay?.stop()}
            onMouseLeave={() => swiperStop.current?.autoplay?.start()}
            className="Slider-L"
          >
            <Swiper
              className="mySwiper margin0"
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1200: { slidesPerView: 3 },
                1400: { slidesPerView: 4 },
              }}
              spaceBetween={40}
              // loop={true}
              speed={700}
              navigation={{
                nextEl: '.NextBtn',
                prevEl: '.PreviousBtn',
              }}
              onSwiper={(swiper) => (swiperStop.current = swiper)}
              style={{ marginRight: '15px' }}
            >
              {latestProductsData.length > 0 ? (
                latestProductsData.map((product) => (
                  <SwiperSlide key={product._id}>
                    <div
                      className="BodyCard"
                      style={{
                        border: '1px solid #00000039',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div
                        className="BodyPartCard relative"
                        style={{
                          width: '200px',
                          height: '200px',
                          margin: '0 auto',
                          position: 'relative',
                        }}
                      >
                        <img
                          src={`${API_GET_SINGLE_PRODUCT}/${product.mainImageId}`}
                          alt={product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            transition: 'opacity 0.5s ease-in-out',
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

                      <div
                        className="PartsDetails d-flex flexcolumn"
                        style={{ gap: '10px', padding: '20px' }}
                      >
                        <div className="PartName">
                          <h4
                            style={{
                              fontSize: '16px',
                              fontWeight: '500',
                              color: 'var(--black-color)',
                              marginBottom: '5px',
                            }}
                          >
                            {product.name}
                          </h4>
                        </div>

                        <div
                          className="PartReview d-flex"
                          style={{
                            gap: '2px',
                            color: '#00000076',
                            fontSize: '18px',
                          }}
                        >
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                          <CiStar />
                        </div>

                        <div className="PartPrice">
                          <p
                            style={{
                              color: 'var(--orange-color)',
                              fontSize: '16px',
                              fontWeight: '700',
                            }}
                          >
                            ${product.price}
                          </p>
                        </div>

                        <div className="CartBox">
                          <button
                            className="CartButton"
                            style={{
                              fontSize: '16px',
                              fontWeight: '700',
                              textTransform: 'uppercase',
                              padding: '10px 15px',
                              background: '#e1e1e160',
                              border: '1px solid #e1e1e160',
                              borderRadius: '5px',
                              color: 'var(--black-color)',
                            }}
                            onClick={() => {
                              addToCart({
                                id: product._id,
                                name: product.name,
                                image: `${API_GET_SINGLE_PRODUCT}/${product.mainImageId}`,
                                price: product.price,
                              });
                              showPopup(`${product.name} added to cart`);
                            }}
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '50px',
                      fontSize: '18px',
                      color: '#666',
                    }}
                  >
                    No latest products found
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestSlider;
