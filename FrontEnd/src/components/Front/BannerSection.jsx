import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const bannerData = [
   {
      image: '/main-banner-1.jpg',
      price: '$199',
      title: 'Two Day Shipping <br/> On All Orders',
      discount: '40% off',
   },
   {
      image: '/main-banner-2.jpg',
      price: '$99',
      title: 'Oil Canisters and <br/> Car Oil Filter',
      discount: '30% off',
   },
];

const rightBannerData = [
   {
      image: '/sub-banner-1.jpg',
      price: '$149',
      title: 'Pro Wheel',
      desc: 'Black Rhino Primm',
      textColor: 'var(--white-color)',
      position: { top: '0', left: '0' },
   },
   {
      image: '/sub-banner-2.jpg',
      price: '$240',
      title: 'Buy Brake',
      desc: 'Spin-On Lube Filter',
      textColor: 'var(--black-color)',
      position: { top: '0', right: '0' },
   },
];

function BannerSection() {
   return (
      <div className="MainBannerSection" style={{ padding: '20px' }}>
         <div className="container">
            <div className="row">
               {/* Left Banner (Swiper) */}
               <div className="col-lg-8 col-md-12 col-sm-12">
                  <Swiper
                     autoplay={{ delay: 4000, disableOnInteraction: false }}
                     spaceBetween={30}
                     effect="fade"
                     speed={300}
                     navigation={false}
                     loop={true}
                     simulateTouch={false}
                     pagination={{ clickable: true }}
                     modules={[EffectFade, Navigation, Pagination, Autoplay]}
                     className="mySwiper"
                     style={{
                        overflow: 'hidden',
                        borderRadius: '10px',
                        position: 'relative',
                        height: '475px',
                     }}
                  >
                     {bannerData.map((item, index) => (
                        <SwiperSlide key={index} className="relative">
                           <img
                              src={item.image}
                              alt={`Banner_${index + 1}`}
                              className="img-cover"
                           />
                           <div
                              className="BannerHeading absolute"
                              style={{
                                 top: '0px',
                                 zIndex: '99',
                                 padding: '60px 0px 0px 30px',
                              }}
                           >
                              <div className="BannerSubHeading" style={{ marginBottom: '20px' }}>
                                 <h3
                                    style={{
                                       fontSize: '32px',
                                       color: 'var(--orange-color)',
                                       fontWeight: '600',
                                    }}
                                 >
                                    Starting From {item.price}
                                 </h3>
                              </div>
                              <div className="BannerHeading" style={{ marginBottom: '20px' }}>
                                 <h1
                                    style={{
                                       fontSize: '42px',
                                       fontWeight: '700',
                                       textTransform: 'capitalize',
                                    }}
                                 >
                                    {item.title.split('<br/>').map((line, i) => (
                                       <span key={i}>
                                          {line}
                                          <br />
                                       </span>
                                    ))}
                                 </h1>
                              </div>
                              <div className="BannerBottom" style={{ marginBottom: '20px' }}>
                                 <h4 style={{ fontSize: '28px', fontWeight: '500' }}>
                                    Discount all deals – {item.discount}
                                 </h4>
                              </div>
                              <div className="BannerButton">
                                 <button
                                    className="BannerShopButton"
                                    style={{
                                       padding: '12px 20px',
                                       background: 'var(--orange-color)',
                                       border: '1px solid var(--orange-color)',
                                       fontSize: '16px',
                                       fontWeight: '500',
                                       color: 'var(--white-color)',
                                       borderRadius: '5px',
                                    }}
                                 >
                                    Shop Now
                                 </button>
                              </div>
                           </div>
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </div>

               {/* Right Banners */}
               <div className="col-lg-4 col-md-12">
                  <div className="RightBannerSection">
                     <div className="BannerBoxes d-flex flexcolumn" style={{ gap: '20px' }}>
                        {rightBannerData.map((item, index) => (
                           <div
                              key={index}
                              className="SlipPad relative"
                              style={{ height: '227px', zIndex: '0' }}
                           >
                              <img
                                 src={item.image}
                                 className="img-cover"
                                 alt={item.title}
                                 style={{
                                    overflow: 'hidden',
                                    borderRadius: '5px',
                                    height: '100%',
                                 }}
                              />
                              <div
                                 className="absolute"
                                 style={{
                                    ...item.position,
                                    zIndex: '9999',
                                    padding: '30px 20px',
                                    color: item.textColor,
                                 }}
                              >
                                 <div className="price" style={{ marginBottom: '10px' }}>
                                    <p style={{ fontSize: '18px', fontWeight: '500' }}>
                                       From {item.price}
                                    </p>
                                 </div>
                                 <div className="ProWheel" style={{ marginBottom: '10px' }}>
                                    <h3
                                       style={{
                                          fontSize: '24px',
                                          fontWeight: '700',
                                          textTransform: 'uppercase',
                                       }}
                                    >
                                       {item.title}
                                    </h3>
                                 </div>
                                 <div className="txt" style={{ marginBottom: '10px' }}>
                                    <p style={{ fontWeight: '500', fontSize: '18px' }}>{item.desc}</p>
                                 </div>
                                 <div className="button">
                                    <a style={{ textTransform: 'uppercase', fontSize: '14px' }}>Shop Now</a>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BannerSection;
