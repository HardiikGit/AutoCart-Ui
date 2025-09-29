import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { CiStar } from "react-icons/ci";
import { API_GET } from "../config";
import { useState } from "react";

function TrendingProductsSlider() {
   const [tabSwitch, setTabSwitch] = useState(0)

   const tabs = [
      {
         id: 0,
         label: 'Body Parts',
         content: (
            <Swiper
               modules={[Navigation, Autoplay]}
               spaceBetween={30}
               slidesPerView={1}
               loop={true}
               autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
               }}
               speed={1000}
               navigation={false}
               breakpoints={{
                  320: {
                     slidesPerView: 1
                  },
                  640: {
                     slidesPerView: 2
                  },
                  1024: {
                     slidesPerView: 4
                  },
                  1200: {
                     slidesPerView: 5
                  }
               }}
               className="mySwiper">
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb916f8d48ccf362bd4a0'}`} className="img-contain" alt="Projector" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68cce2454a5faa54d3101e94'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Thinkware F770 2CH FHD Wi-Fi Dash Camera
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$86.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb7e1f8d48ccf362bd49a'}`} className="img-contain" alt="Driver Sifter" />
                        <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                           <img src={`${API_GET}/${'68cbf4b8ea608757bdcaee90'}`} className="img-contain" alt="HoverImage" />
                        </div>
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>New Upgraded 1-Piece Rear Driveshaft & Parts</h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$21.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb864f8d48ccf362bd49c'}`} className="img-contain" alt="Rim" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdf0c4a5faa54d3101e8c'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>Black Yellow Wheel Cover 13 Inch For Four-Wheel</h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$199.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide style={{ height: '100%' }}>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb8d3f8d48ccf362bd49e'}`} className="img-contain" alt="Round-Black" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdf4d4a5faa54d3101e8e'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 OMP Car Steering Aluminum Spacer Steering
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$56.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb98bf8d48ccf362bd4a2'}`} className="img-contain" alt="Motor" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdfd94a5faa54d3101e92'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Alternator Bosch Fits Fordd Hollanndd Models
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$56.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb9b9f8d48ccf362bd4a4'}`} className="img-contain" alt="Headlight" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdf814a5faa54d3101e90'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Autoparts LED Black Projector Headlights
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$47.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cd138e5050338095e422f7'}`} className="img-contain" alt="Headlight" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68cd13c55050338095e422f9'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Savini Forged SV64-XC Wheels Rims On Sale
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$50.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper >
         )
      },
      {
         id: 1,
         label: 'Engine Parts',
         content: (
            <Swiper
               modules={[Navigation, Autoplay]}
               spaceBetween={30}
               slidesPerView={1}
               loop={true}
               autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
               }}
               speed={1000}
               navigation={false}
               breakpoints={{
                  320: {
                     slidesPerView: 1
                  },
                  640: {
                     slidesPerView: 2
                  },
                  1024: {
                     slidesPerView: 4
                  },
                  1200: {
                     slidesPerView: 5
                  }
               }}

               className="mySwiper">
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68d63e002dc44cd92223842f'}`} className="img-contain" alt="Driver Sifter" />
                        <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                           <img src={`${API_GET}/${'68d63e242dc44cd922238431'}`} className="img-contain" alt="HoverImage" />
                        </div>
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>New Upgraded 1-Piece Rear Driveshaft & Parts</h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$21.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68d63e482dc44cd922238433'}`} className="img-contain" alt="Rim" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68d63e632dc44cd922238435'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>Black Yellow Wheel Cover 13 Inch For Four-Wheel</h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$199.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide style={{ height: '100%' }}>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68d63e8c2dc44cd922238437'}`} className="img-contain" alt="Round-Black" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68d63ea62dc44cd922238439'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 OMP Car Steering Aluminum Spacer Steering
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$56.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68d63ed62dc44cd92223843b'}`} className="img-contain" alt="Projector" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68d63eed2dc44cd92223843d'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Thinkware F770 2CH FHD Wi-Fi Dash Camera
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$86.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb98bf8d48ccf362bd4a2'}`} className="img-contain" alt="Motor" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdfd94a5faa54d3101e92'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Alternator Bosch Fits Fordd Hollanndd Models
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$56.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb9b9f8d48ccf362bd4a4'}`} className="img-contain" alt="Headlight" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdf814a5faa54d3101e90'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Autoparts LED Black Projector Headlights
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$47.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cd138e5050338095e422f7'}`} className="img-contain" alt="Headlight" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68cd13c55050338095e422f9'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Savini Forged SV64-XC Wheels Rims On Sale
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$50.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper >
         )
      },
      {
         id: 2,
         label: 'Accessories',
         content: (
            <Swiper
               modules={[Navigation, Autoplay]}
               spaceBetween={30}
               slidesPerView={1}
               loop={true}
               autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
               }}
               speed={1000}
               navigation={false}
               breakpoints={{
                  320: {
                     slidesPerView: 1
                  },
                  640: {
                     slidesPerView: 2
                  },
                  1024: {
                     slidesPerView: 4
                  },
                  1200: {
                     slidesPerView: 5
                  }
               }}

               className="mySwiper">
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb8d3f8d48ccf362bd49e'}`} className="img-contain" alt="Round-Black" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdf4d4a5faa54d3101e8e'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 OMP Car Steering Aluminum Spacer Steering
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$56.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb864f8d48ccf362bd49c'}`} className="img-contain" alt="Rim" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdf0c4a5faa54d3101e8c'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>Black Yellow Wheel Cover 13 Inch For Four-Wheel</h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$199.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb7e1f8d48ccf362bd49a'}`} className="img-contain" alt="Driver Sifter" />
                        <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                           <img src={`${API_GET}/${'68cbf4b8ea608757bdcaee90'}`} className="img-contain" alt="HoverImage" />
                        </div>
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>New Upgraded 1-Piece Rear Driveshaft & Parts</h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$21.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb916f8d48ccf362bd4a0'}`} className="img-contain" alt="Projector" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68cce2454a5faa54d3101e94'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Thinkware F770 2CH FHD Wi-Fi Dash Camera
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$86.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb98bf8d48ccf362bd4a2'}`} className="img-contain" alt="Motor" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdfd94a5faa54d3101e92'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Alternator Bosch Fits Fordd Hollanndd Models
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$56.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cd138e5050338095e422f7'}`} className="img-contain" alt="Headlight" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68cd13c55050338095e422f9'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Savini Forged SV64-XC Wheels Rims On Sale
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$50.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                     <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                        <img src={`${API_GET}/${'68cbb9b9f8d48ccf362bd4a4'}`} className="img-contain" alt="Headlight" />
                     </div>
                     <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                        <img src={`${API_GET}/${'68ccdf814a5faa54d3101e90'}`} className="img-contain" alt="HoverImage" />
                     </div>
                     <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                        <div className="PartName">
                           <a href="" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                              <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                 Autoparts LED Black Projector Headlights
                              </h4>
                           </a>
                        </div>
                        <div className="PartReview">
                           <a href="" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                              <CiStar />
                           </a>
                        </div>
                        <div className="PartPrice">
                           <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>$47.00</p>
                        </div>
                        <div className="CartBox">
                           <button className="CartButton" style={{
                              fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                           }}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper >
         )
      }
   ]

   const handleTabClick = (tabId) => {
      setTabSwitch(tabId)
   }

   return (
      <div className="Trending_Product_Slider" style={{ padding: '50px 0px', }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12">
                  <div className="Wrapper-fl d-flex align-items-center justify-space-between" style={{ marginBottom: '40px' }}>
                     <div className="Section_Heading">
                        <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Trending Products</h2>
                     </div>
                     <div className="Tab_Buttons d-flex align-items-center" style={{ gap: '20px' }}>
                        {tabs.map((index) => (
                           <button key={index.id} className={`Tab_Switch_Button ${tabSwitch === index.id ? "TabShow bgColor" : ""}`} onClick={() => handleTabClick(index.id)} style={{ padding: '10px 20px', background: 'var(--white-color)', fontSize: '16px', color: 'var(--black-color)', borderRadius: '5px', fontWeight: '600' }}>
                              {index.label}
                           </button>
                        ))}
                     </div>
                  </div>
                  <div className="tab_Content">
                     {tabs.map((index) => (
                        <div key={index.id} className={`tabPanel ${tabSwitch === index.id ? 'TabShow' : ''}`}>
                           {index.content}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default TrendingProductsSlider;