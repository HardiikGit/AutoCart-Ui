import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { API_GET } from '../../../config';

function ShopbyCategory() {

 const categoriesData = [
  {
   id: 'category-1',
   title: 'Seat Cover',
   image: '68d3da33f985b9550afc82c6',
   subCategories: ['Car Seats', 'Fuel', 'Gear Box', 'Steering Parts']
  },
  {
   id: 'category-2',
   title: 'Wheels & Rims',
   image: '68d63e482dc44cd922238433',
   subCategories: ['Alloy Wheels', 'Steel Rims', 'Tires', 'Hubcaps']
  },
  {
   id: 'category-3',
   title: 'Lighting',
   image: '68d3dac4f985b9550afc82ce',
   subCategories: ['Headlights', 'Tail Lights', 'Fog Lights', 'LED Bars']
  },
  {
   id: 'category-4',
   title: 'Engine Parts',
   image: '68d63e002dc44cd92223842f',
   subCategories: ['Spark Plugs', 'Oil Filters', 'Belts', 'Hoses']
  },
  {
   id: 'category-5',
   title: 'Steering',
   image: '68d278b5f5f8ea4290cbaefe',
   subCategories: ['Steering Wheels', 'Power Steering', 'Tie Rods', 'Bushings']
  },
  {
   id: 'category-6',
   title: 'Braking System',
   image: '68d27757f5f8ea4290cbaeee',
   subCategories: ['Brake Pads', 'Rotors', 'Calipers', 'Brake Fluid']
  },
  {
   id: 'category-7',
   title: 'Engine Cooling',
   image: '68d63ed62dc44cd92223843b',
   subCategories: ['Radiators', 'Water Pumps', 'Thermostats', 'Coolant Hoses']
  },
  {
   id: 'category-8',
   title: 'Suspension',
   image: '68d63e8c2dc44cd922238437',
   subCategories: ['Shock Absorbers', 'Struts', 'Springs', 'Control Arms']
  },
  {
   id: 'category-9',
   title: 'Transmission',
   image: '68d3c872f985b9550afc82c2',
   subCategories: ['Clutch Kits', 'Transmission Fluid', 'Drive Shafts', 'CV Joints']
  },
  {
   id: 'category-10',
   title: 'Exhaust System',
   image: '68d277ddf5f8ea4290cbaef4',
   subCategories: ['Mufflers', 'Catalytic Converters', 'Exhaust Pipes', 'Oxygen Sensors']
  },
  {
   id: 'category-11',
   title: 'Air Intake',
   image: '68d2785ff5f8ea4290cbaefa',
   subCategories: ['Air Filters', 'Intake Manifolds', 'Turbochargers', 'Superchargers']
  },
  {
   id: 'category-12',
   title: 'Electrical',
   image: '68cbb916f8d48ccf362bd4a0',
   subCategories: ['Batteries', 'Alternators', 'Starters', 'Wiring']
  },
  {
   id: 'category-13',
   title: 'Interior',
   image: '68cbf4b8ea608757bdcaee90',
   subCategories: ['Floor Mats', 'Dashboard Covers', 'Shifters', 'Pedals']
  },
  {
   id: 'category-14',
   title: 'Exterior',
   image: '68d3bd8ef985b9550afc82c0',
   subCategories: ['Spoilers', 'Body Kits', 'Grilles', 'Side Mirrors']
  },
 ];

 const slidesContent = [];
 for (let i = 0; i < categoriesData.length; i += 2) {
  slidesContent.push(categoriesData.slice(i, i + 2));
 }

 return (
  <div className="MainShopByCategory" style={{ backgroundImage: (`url(${API_GET}/${'68f20da40f59a173b826b8e9'})`), backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', padding: '60px 0px', width: '100%', height: '100%' }}>
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
        autoplay={{ delay: 400000, disableOnInteraction: false }}
        breakpoints={{
         320: { slidesPerView: 1 },
         640: { slidesPerView: 2 },
         768: { slidesPerView: 3 },
         1024: { slidesPerView: 3 },
         1280: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true, }}
        className="mySwiper"
       >
        {slidesContent.map((slidePair, index) => (
         <SwiperSlide key={index}>
          <div className='d-flex flexcolumn' style={{ gap: '30px', }}>
           {slidePair.map((category) => (
            <div key={category.id} className='WrapperBox d-flex align-items-center justify-content-center' style={{
             gap: '40px', background: 'var(--white-color)', padding: '20px'
            }}>
             <div className="Wrapper_Image">
              <img src={`${API_GET}/${category.image}`} className='img-cover' alt={category.title} />
             </div>
             <div>
              <div className="Product_Name" style={{ marginBottom: '10px' }}>
               <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                <h4>{category.title}</h4>
               </a>
              </div>
              <div>
               <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
                {category.subCategories.map((subCat, subIndex) => (
                 <li key={subIndex} className="List">
                  <a href="#" style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '500' }}>
                   {subCat}
                  </a>
                 </li>
                ))}
                <li className="List">
                 <a href="#" style={{ textTransform: 'uppercase', fontWeight: '700', fontSize: '16px', color: 'var(--orange-color)', textDecoration: 'underline' }}>
                  View More
                 </a>
                </li>
               </ul>
              </div>
             </div>
            </div>
           ))}
          </div>
         </SwiperSlide>
        ))}
       </Swiper>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ShopbyCategory;