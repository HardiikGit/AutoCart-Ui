import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { API_GET } from "../../../config";

const companyLogos = [
   { id: '68c91dd2b25298586d231b61', alt: "1" },
   { id: '68c91df8b25298586d231b63', alt: "2" },
   { id: '68c91e24b25298586d231b65', alt: "3" },
   { id: '68c91e71b25298586d231b6b', alt: "6" },
   { id: '68c91e3db25298586d231b67', alt: "4" },
   { id: '68c91e56b25298586d231b69', alt: "5" },
   { id: '68c91dd2b25298586d231b61', alt: "1" },
   { id: '68c91e71b25298586d231b6b', alt: "6" },
   { id: '68c91e3db25298586d231b67', alt: "4" },
];

function CompaniesSlider() {
   return (
      <div className="MainCompanySlider" style={{ padding: "50px 0px" }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12">
                  <Swiper
                     modules={[Autoplay]}
                     slidesPerView={3}
                     spaceBetween={20}
                     loop={true}
                     speed={300}
                     breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1440: { slidesPerView: 7 },
                     }}
                     autoplay={{ delay: 2000, disableOnInteraction: false, }}
                     className="mySwiper">

                     {companyLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                           <div className="SlideImage d-flex align-items-center justify-content-center">
                              <img src={`${API_GET}/${logo.id}`} alt={logo.alt} />
                           </div>
                        </SwiperSlide>
                     ))}

                  </Swiper>
               </div>
            </div>
         </div>
      </div>
   );
}

export default CompaniesSlider;