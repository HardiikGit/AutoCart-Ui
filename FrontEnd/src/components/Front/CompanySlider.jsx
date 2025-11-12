import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { API_ALL_LOGOS, API_SINGLE_LOGO } from "../../../config";

function CompaniesSlider() {
   const [companyLogos, setCompanyLogos] = useState([]);

   useEffect(() => {
      const fetchLogos = async () => {
         try {
            const response = await fetch(`${API_ALL_LOGOS}`);
            const data = await response.json();
            setCompanyLogos(data);
         } catch (err) {
            console.error("Error fetching company logos:", err);
         }
      };

      fetchLogos();
   }, []);

   return (
      <div className="MainCompanySlider" style={{ padding: "50px 0px" }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12">
                  <Swiper
                     modules={[Autoplay]}
                     slidesPerView={3}
                     spaceBetween={20}
                     // loop={true}
                     speed={300} 
                     breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 4 },
                        1024: { slidesPerView: 5 },
                        1440: { slidesPerView: 6 },
                     }}
                     autoplay={{ delay: 2000, disableOnInteraction: false }}
                     className="mySwiper"
                  >
                     {companyLogos.map((logo) => (
                        <SwiperSlide key={logo._id}>
                           <div className="SlideImage d-flex align-items-center justify-content-center">
                              <img
                                 src={`${API_SINGLE_LOGO}/${logo.logoFileId}`}
                                 alt={logo.companyName}
                                 title={logo.companyName}
                                 style={{
                                    width: "120px",
                                    height: "120px",
                                    objectFit: "contain",
                                 }}
                              />
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
