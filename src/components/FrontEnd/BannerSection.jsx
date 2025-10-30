// Api's
import { API_GET } from '../../../server2';
// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function BannerSection() {
   return (
      <div className='MainBannerSection' style={{ padding: '20px' }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-8 col-md-12 col-sm-12">
                  <Swiper
                     autoplay={{ delay: 4000, disableOnInteraction: false }}
                     spaceBetween={30}
                     effect={'fade'}
                     speed={2000}
                     navigation={false}
                     loop={true}
                     simulateTouch={false}
                     pagination={{ clickable: true }}
                     modules={[EffectFade, Navigation, Pagination, Autoplay]}
                     className="mySwiper"
                     style={{ overflow: 'hidden', borderRadius: '10px', position: 'relative', height: '475px' }}
                  >
                     <SwiperSlide className='relative'>
                        <img
                           src={`${API_GET}/${'68c90f08c8b63503abe24460'}`}
                           alt="Banner_1"
                           className='img-cover'
                        />
                        <div className="BannerHeading absolute" style={{ top: '0px', zIndex: '99', padding: '60px 0px 0px 30px' }}>
                           <div className='BannerSubHeading' style={{ marginBottom: '20px' }}>
                              <h3 style={{ fontSize: '32px', color: 'var(--orange-color)', fontWeight: '600' }}>Starting From $199</h3>
                           </div>
                           <div className="BannerHeading" style={{ marginBottom: '20px' }}>
                              <h1 style={{ fontSize: '42px', fontWeight: '700', textTransform: 'capitalize' }}> Two Day Shipping <br />
                                 On All Orders</h1>
                           </div>
                           <div className='BannerBottom' style={{ marginBottom: '20px' }}>
                              <h4 style={{ fontSize: '28px', fontWeight: '500' }}>Discount all deals – 40% off</h4>
                           </div>
                           <div className="BannerButton">
                              <button className='BannerShopButton' style={{ padding: '12px 20px', background: 'var(--orange-color)', border: '1px solid var(--orange-color)', fontSize: '16px', fontWeight: '500', color: 'var(--white-color)', borderRadius: '5px' }}>Shop Now</button>
                           </div>
                        </div>
                     </SwiperSlide>
                     <SwiperSlide className='relative'>
                        <img
                           src={`${API_GET}/${'68c90f89c8b63503abe24462'}`}
                           alt="Banner_2"
                           className='img-cover'
                        />
                        <div className="BannerHeading absolute" style={{ top: '0px', zIndex: '99', padding: '60px 0px 0px 30px' }}>
                           <div className='BannerSubHeading' style={{ marginBottom: '20px' }}>
                              <h3 style={{ fontSize: '32px', color: 'var(--orange-color)', fontWeight: '600' }}>Starting From $99</h3>
                           </div>
                           <div className="BannerHeading" style={{ marginBottom: '20px' }}>
                              <h1 style={{ fontSize: '42px', fontWeight: '700', textTransform: 'capitalize' }}> oil canisters and <br />
                                 car oil filter</h1>
                           </div>
                           <div className='BannerBottom' style={{ marginBottom: '20px' }}>
                              <h4 style={{ fontSize: '28px', fontWeight: '500' }}>Discount all deals – 30% off</h4>
                           </div>
                           <div className="BannerButton">
                              <button className='BannerShopButton' style={{ padding: '12px 20px', background: 'var(--orange-color)', border: '1px solid var(--orange-color)', fontSize: '16px', fontWeight: '500', color: 'var(--white-color)', borderRadius: '5px' }}>Shop Now</button>
                           </div>
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>

               <div className="col-lg-4 col-md-12">
                  <div className="RightBannerSection">
                     <div className="BannerBoxes d-flex flexcolumn" style={{ gap: '20px' }}>
                        <div className="SlipPad relative" style={{ height: '227px', zIndex: '0' }}>
                           <img src={`${API_GET}/${'68c91d6cb25298586d231b5d'}`} className='img-cover' alt="" style={{ overflow: 'hidden', borderRadius: '5px', height: '100%' }} />
                           <div className='absolute' style={{ top: '0', zIndex: '9999', padding: '30px 20px', color: 'var(--white-color)' }}>
                              <div className="price" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontSize: '18px', fontWeight: '500' }}>From $149</p>
                              </div>
                              <div className="ProWheel" style={{ marginBottom: '10px' }}>
                                 <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase' }}>Pro Wheel</h3>
                              </div>
                              <div className="txt" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontWeight: '500', fontSize: '18px' }}>Black Rhino Primm</p>
                              </div>
                              <div className="button">
                                 <a style={{ textTransform: 'uppercase', fontSize: '14px' }}>Shop Now</a>
                              </div>
                           </div>
                        </div>
                        <div className="SlipPad relative" style={{ height: '227px' }}>
                           <img src={`${API_GET}/${'68c91dafb25298586d231b5f'}`} className='img-cover' alt="" style={{ overflow: 'hidden', borderRadius: '5px', height: "100%" }} />
                           <div className='absolute' style={{ top: '0', right: '0', zIndex: '9999', padding: '30px 20px', color: 'var(--black-color)' }}>
                              <div className="price" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontSize: '18px', fontWeight: '500' }}>From $240</p>
                              </div>
                              <div className="ProWheel" style={{ marginBottom: '10px' }}>
                                 <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase' }}>Buy Brake</h3>
                              </div>
                              <div className="txt" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontWeight: '500', fontSize: '18px' }}>Spin-On Lube Filter</p>
                              </div>
                              <div className="button">
                                 <a style={{ textTransform: 'uppercase', fontSize: '14px' }}>Shop Now</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default BannerSection;
