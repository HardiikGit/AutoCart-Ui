import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import { CiStar } from "react-icons/ci";
import { API_GET } from "../../../config";
import { useState } from "react";
import { useCart } from "../../Hooks/CartContext";

function TrendingProductsSlider() {
   const [tabSwitch, setTabSwitch] = useState(0)
   const { addToCart } = useCart()

   const bodyPartsData = [
      {
         id: 'Thinkware',
         name: 'Thinkware F770 2CH FHD Wi-Fi Dash Camera',
         image: '68cbb916f8d48ccf362bd4a0',
         hoverImage: '68cce2454a5faa54d3101e94',
         price: '$86.00'
      },
      {
         id: 'Upgraded',
         name: 'New Upgraded 1-Piece Rear Driveshaft & Parts',
         image: '68cbb7e1f8d48ccf362bd49a',
         hoverImage: '68cbf4b8ea608757bdcaee90',
         price: '$21.00'
      },
      {
         id: 'Black Wheel',
         name: 'Black Yellow Wheel Cover 13 Inch For Four-Wheel',
         image: '68cbb864f8d48ccf362bd49c',
         hoverImage: '68ccdf0c4a5faa54d3101e8c',
         price: '$199.00'
      },
      {
         id: 'OMP Car',
         name: 'OMP Car Steering Aluminum Spacer Steering',
         image: '68cbb8d3f8d48ccf362bd49e',
         hoverImage: '68ccdf4d4a5faa54d3101e8e',
         price: '$56.00'
      },
      {
         id: 'Alternator Bosch',
         name: 'Alternator Bosch Fits Fordd Hollanndd Models',
         image: '68cbb98bf8d48ccf362bd4a2',
         hoverImage: '68ccdfd94a5faa54d3101e92',
         price: '$69.00'
      },
      {
         id: 'Autoparts LED',
         name: 'Autoparts LED Black Projector Headlights',
         image: '68cbb9b9f8d48ccf362bd4a4',
         hoverImage: '68ccdf814a5faa54d3101e90',
         price: '$47.00'
      },
      {
         id: 'Savini Forged',
         name: 'Savini Forged SV64-XC Wheels Rims On Sale',
         image: '68cd138e5050338095e422f7',
         hoverImage: '68cd13c55050338095e422f9',
         price: '$50.00'
      },
   ];

   const enginePartsData = [
      {
         id: 'Upgraded-Engine',
         name: 'New Upgraded 1-Piece Rear Driveshaft & Parts',
         image: '68d63e002dc44cd92223842f',
         hoverImage: '68d63e242dc44cd922238431',
         price: '$21.00'
      },
      {
         id: 'Black Wheel-Engine',
         name: 'Black Yellow Wheel Cover 13 Inch For Four-Wheel',
         image: '68d63e482dc44cd922238433',
         hoverImage: '68d63e632dc44cd922238435',
         price: '$199.00'
      },
      {
         id: 'OMP Car-Engine',
         name: 'OMP Car Steering Aluminum Spacer Steering',
         image: '68d63e8c2dc44cd922238437',
         hoverImage: '68d63ea62dc44cd922238439',
         price: '$56.00'
      },
      {
         id: 'Thinkware-Engine',
         name: 'Thinkware F770 2CH FHD Wi-Fi Dash Camera',
         image: '68d63ed62dc44cd92223843b',
         hoverImage: '68d63eed2dc44cd92223843d',
         price: '$86.00'
      },
      {
         id: 'Alternator Bosch-Engine',
         name: 'Alternator Bosch Fits Fordd Hollanndd Models',
         image: '68cbb98bf8d48ccf362bd4a2',
         hoverImage: '68ccdfd94a5faa54d3101e92',
         price: '$56.00'
      },
      {
         id: 'Autoparts LED-Engine',
         name: 'Autoparts LED Black Projector Headlights',
         image: '68cbb9b9f8d48ccf362bd4a4',
         hoverImage: '68ccdf814a5faa54d3101e90',
         price: '$47.00'
      },
      {
         id: 'Savini Forged-Engine',
         name: 'Savini Forged SV64-XC Wheels Rims On Sale',
         image: '68cd138e5050338095e422f7',
         hoverImage: '68cd13c55050338095e422f9',
         price: '$50.00'
      },
   ];


   const accessoriesData = [
      {
         id: 'OMP Car-Acc',
         name: 'OMP Car Steering Aluminum Spacer Steering',
         image: '68cbb8d3f8d48ccf362bd49e',
         hoverImage: '68ccdf4d4a5faa54d3101e8e',
         price: '$56.00'
      },
      {
         id: 'Black Wheel-Acc',
         name: 'Black Yellow Wheel Cover 13 Inch For Four-Wheel',
         image: '68cbb864f8d48ccf362bd49c',
         hoverImage: '68ccdf0c4a5faa54d3101e8c',
         price: '$199.00'
      },
      {
         id: 'Upgraded-Acc',
         name: 'New Upgraded 1-Piece Rear Driveshaft & Parts',
         image: '68cbb7e1f8d48ccf362bd49a',
         hoverImage: '68cbf4b8ea608757bdcaee90',
         price: '$21.00'
      },
      {
         id: 'Thinkware-Acc',
         name: 'Thinkware F770 2CH FHD Wi-Fi Dash Camera',
         image: '68cbb916f8d48ccf362bd4a0',
         hoverImage: '68cce2454a5faa54d3101e94',
         price: '$86.00'
      },
      {
         id: 'Alternator Bosch-Acc',
         name: 'Alternator Bosch Fits Fordd Hollanndd Models',
         image: '68cbb98bf8d48ccf362bd4a2',
         hoverImage: '68ccdfd94a5faa54d3101e92',
         price: '$56.00'
      },
      {
         id: 'Savini Forged-Acc',
         name: 'Savini Forged SV64-XC Wheels Rims On Sale',
         image: '68cd138e5050338095e422f7',
         hoverImage: '68cd13c55050338095e422f9',
         price: '$50.00'
      },
      {
         id: 'Autoparts LED-Acc',
         name: 'Autoparts LED Black Projector Headlights',
         image: '68cbb9b9f8d48ccf362bd4a4',
         hoverImage: '68ccdf814a5faa54d3101e90',
         price: '$47.00'
      },
   ];


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
               speed={300}
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
               {bodyPartsData.map((product) => (
                  <SwiperSlide key={product.id}>
                     <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                        <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                           <img src={`${API_GET}/${product.image}`} className="img-contain" alt={product.name} />
                        </div>
                        {product.hoverImage && (
                           <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                              <img src={`${API_GET}/${product.hoverImage}`} className="img-contain" alt="HoverImage" />
                           </div>
                        )}
                        <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                           <div className="PartName">
                              <a href="/" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                                 <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                    {product.name}
                                 </h4>
                              </a>
                           </div>
                           <div className="PartReview">
                              <a href="/" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                              </a>
                           </div>
                           <div className="PartPrice">
                              <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>{product.price}</p>
                           </div>
                           <div className="CartBox">
                              <button className="CartButton" style={{
                                 fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                              }} onClick={() => addToCart({ id: product.id, name: product.name, image: `${API_GET}/${product.image}`, Price: product.price })}>Add to Cart</button>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
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
               speed={300}
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
               {enginePartsData.map((product) => (
                  <SwiperSlide key={product.id}>
                     <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                        <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                           <img src={`${API_GET}/${product.image}`} className="img-contain" alt={product.name} />
                           {product.hoverImage && (
                              <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                                 <img src={`${API_GET}/${product.hoverImage}`} className="img-contain" alt="HoverImage" />
                              </div>
                           )}
                        </div>
                        <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                           <div className="PartName">
                              <a href="/" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                                 <h4 style={{ fontSize: '16px', fontWeight: '500' }}>{product.name}</h4>
                              </a>
                           </div>
                           <div className="PartReview">
                              <a href="/" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                              </a>
                           </div>
                           <div className="PartPrice">
                              <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>{product.price}</p>
                           </div>
                           <div className="CartBox">
                              <button className="CartButton" style={{
                                 fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                              }} onClick={() => addToCart({ id: product.id, name: product.name, image: `${API_GET}/${product.image}`, Price: product.price })}>Add to Cart</button>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
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
               speed={300}
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
               {accessoriesData.map((product) => (
                  <SwiperSlide key={product.id}>
                     <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                        <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                           <img src={`${API_GET}/${product.image}`} className="img-contain" alt={product.name} />
                        </div>
                        {product.hoverImage && (
                           <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', width: '200px', height: '200px', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                              <img src={`${API_GET}/${product.hoverImage}`} className="img-contain" alt="HoverImage" />
                           </div>
                        )}
                        <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                           <div className="PartName">
                              <a href="/" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                                 <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                                    {product.name}
                                 </h4>
                              </a>
                           </div>
                           <div className="PartReview">
                              <a href="/" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                                 <CiStar />
                              </a>
                           </div>
                           <div className="PartPrice">
                              <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>{product.price}</p>
                           </div>
                           <div className="CartBox">
                              <button className="CartButton" style={{
                                 fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)'
                              }} onClick={() => addToCart({ id: product.id, name: product.name, image: `${API_GET}/${product.image}`, Price: product.price })}>Add to Cart</button>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
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
                        {tabs.map((tab) => (
                           <button key={tab.id} className={`Tab_Switch_Button ${tabSwitch === tab.id ? "TabShow bgColor" : ""}`} onClick={() => handleTabClick(tab.id)} style={{ padding: '10px 20px', background: 'var(--white-color)', fontSize: '16px', color: 'var(--black-color)', borderRadius: '5px', fontWeight: '600' }}>
                              {tab.label}
                           </button>
                        ))}
                     </div>
                  </div>
                  <div className="tab_Content">
                     {tabs.map((tab) => (
                        <div key={tab.id} className={`tabPanel ${tabSwitch === tab.id ? 'TabShow' : ''}`}>
                           {tab.content}
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