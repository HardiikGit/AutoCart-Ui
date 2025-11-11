import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

function ShopbyCategory() {

 const categoriesData = [
  {
   id: 'category-1',
   title: 'Seat Cover',
   image: '/category-1.jpg',
   subCategories: ['Car Seats', 'Fuel', 'Gear Box', 'Steering Parts']
  },
  {
   id: 'category-2',
   title: 'Wheels & Rims',
   image: '/category-2.jpg',
   subCategories: ['Alloy Wheels', 'Steel Rims', 'Tires', 'Hubcaps']
  },
  {
   id: 'category-3',
   title: 'Lighting',
   image: '/category-3.jpg',
   subCategories: ['Headlights', 'Tail Lights', 'Fog Lights', 'LED Bars']
  },
  {
   id: 'category-4',
   title: 'Engine Parts',
   image: '/category-4.jpg',
   subCategories: ['Spark Plugs', 'Oil Filters', 'Belts', 'Hoses']
  },
  {
   id: 'category-5',
   title: 'Steering',
   image: '/category-5.jpg',
   subCategories: ['Steering Wheels', 'Power Steering', 'Tie Rods', 'Bushings']
  },
  {
   id: 'category-6',
   title: 'Braking System',
   image: '/category-6.jpg',
   subCategories: ['Brake Pads', 'Rotors', 'Calipers', 'Brake Fluid']
  },
  {
   id: 'category-7',
   title: 'Engine Cooling',
   image: '/category-2.jpg',
   subCategories: ['Radiators', 'Water Pumps', 'Thermostats', 'Coolant Hoses']
  },
  {
   id: 'category-8',
   title: 'Suspension',
   image: '/category-3.jpg',
   subCategories: ['Shock Absorbers', 'Struts', 'Springs', 'Control Arms']
  },
 ];

 const slidesContent = [];
 for (let i = 0; i < categoriesData.length; i += 2) {
  slidesContent.push(categoriesData.slice(i, i + 2));
 }

 return (
  <div
   className="MainShopByCategory"
   style={{
    backgroundImage: 'url("/categories-banner.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '60px 0px',
    width: '100%',
    height: '100%',
   }}
  >
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
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
         320: { slidesPerView: 1 },
         640: { slidesPerView: 2 },
         768: { slidesPerView: 3 },
         1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
       >
        {slidesContent.map((slidePair, index) => (
         <SwiperSlide key={index}>
          <div className="d-flex flexcolumn" style={{ gap: '30px' }}>
           {slidePair.map((category) => (
            <div
             key={category.id}
             className="WrapperBox d-flex align-items-center justify-content-center"
             style={{
              gap: '40px',
              background: '#fff',
              padding: '20px',
              borderRadius: '2px',
              boxShadow: '0 0 10px #0000001a',
             }}
            >
             <div className="Wrapper_Image" style={{ width: '190px', height: '190px' }}>
              <img
               src={category.image}
               className="img-cover"
               alt={category.title}
               style={{ borderRadius: '8px' }}
              />
             </div>
             <div>
              <div className="Product_Name" style={{ marginBottom: '10px' }}>
               <a href="#" style={{ color: '#000', fontSize: '16px', fontWeight: '500' }}>
                <h4>{category.title}</h4>
               </a>
              </div>
              <ul className="Product_List d-flex flexcolumn" style={{ gap: '10px' }}>
               {category.subCategories.map((subCat, subIndex) => (
                <li key={subIndex} className="List">
                 <a
                  href="#"
                  style={{ color: '#000', fontSize: '15px', fontWeight: '400', textDecoration: 'none' }}
                 >
                  {subCat}
                 </a>
                </li>
               ))}
               <li className="List">
                <a
                 href="#"
                 style={{
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  fontSize: '15px',
                  color: 'var(--orange-color)',
                  textDecoration: 'underline',
                 }}
                >
                 View More
                </a>
               </li>
              </ul>
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
 );
}

export default ShopbyCategory;
