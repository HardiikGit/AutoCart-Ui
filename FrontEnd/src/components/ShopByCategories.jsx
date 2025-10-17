import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { API_GET } from '../config';

function ShopbyCategory() {

 return (
  <div className="MainShopByCategory" style={{ backgroundImage: (`${API_GET}/${'68f20da40f59a173b826b8e9'}`), backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 0px', width: '100%', height: '100%' }}>
   <div className="container">
    <div className="row">
     <div className="col-lg-12 col-md-12">
      <div className="Section_Heading">
       <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Shop By Categories</h2>
      </div>
      <div className="CateGoryBoxes" style={{ marginTop: '40px' }}>
       <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 20000, disableOnInteraction: false }}
        breakpoints={{
         320: { slidesPerView: 1 },
         640: { slidesPerView: 2 },
         768: { slidesPerView: 3 },
         1024: { slidesPerView: 3 },
         1280: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true, }}
        className="mySwiper"
       >
        <SwiperSlide>
         <div className='d-flex flexcolumn' style={{ gap: '30px', }}>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d3da33f985b9550afc82c6'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d63e482dc44cd922238433'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='d-flex flexcolumn' style={{ gap: '30px', }}>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d3dac4f985b9550afc82ce'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d63e002dc44cd92223842f'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='d-flex flexcolumn' style={{ gap: '30px', }}>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d278b5f5f8ea4290cbaefe'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d27757f5f8ea4290cbaeee'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='d-flex flexcolumn' style={{ gap: '30px', }}>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d63ed62dc44cd92223843b'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d63e8c2dc44cd922238437'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='d-flex flexcolumn' style={{ gap: '30px', }}>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d3c872f985b9550afc82c2'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d277ddf5f8ea4290cbaef4'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='d-flex flexcolumn' style={{ gap: '30px', }}>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d2785ff5f8ea4290cbaefa'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68cbb916f8d48ccf362bd4a0'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
         </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='d-flex flexcolumn' style={{ gap: '30px', }}>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px'
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68cbf4b8ea608757bdcaee90'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
          <div className='WrapperBox d-flex align-items-center' style={{
           gap: '20px', background: 'var(--white-color)', padding: '20px',
          }}>
           <div className="Wrapper_Image" style={{ height: '160px', width: '160px' }}>
            <img src={`${API_GET}/${'68d3bd8ef985b9550afc82c0'}`} className='img-cover' alt="" />
           </div>
           <div>
            <div className="Product_Name" style={{ marginBottom: '10px' }}>
             <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
              <h4>Seat Cover</h4>
             </a>
            </div>
            <div>
             <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Car Seats
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Fuel
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Gear Box
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                Steering Parts
               </a>
              </li>
              <li className="List">
               <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                View More
               </a>
              </li>
             </ul>
            </div>
           </div>
          </div>
         </div>
        </SwiperSlide>
       </Swiper>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ShopbyCategory;