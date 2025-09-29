import { API_GET } from '../config';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay, Navigation } from 'swiper/modules';
import { CiStar } from 'react-icons/ci';

function LatestSlider() {

  const swiperStop = useRef(null)

  return (
    <div className="row" style={{ flexDirection: 'column-reverse', gap: '30px' }}>
      <div className="col-lg-3">
        <div className="trending_Banner hidden relative d-flex justify-content-center" style={{ width: '100%', maxHeight: '400px', borderRadius: '10px', color: 'var(--white-color)' }}>
          <img src={`${API_GET}/${'68d1202614c1dbf02b9598d9'}`} className='img-cover' alt="" />
          <div className='Trending_text text-center absolute' style={{ top: '20px', padding: '20px', }}>
            <div className='mx-auto' style={{ marginBottom: '20px', width: '75%' }}>
              <h4 style={{ textTransform: 'uppercase', background: 'var(--orange-color)', fontSize: '16px', padding: '5px 0px' }}>Up To 30% Discount</h4>
            </div>
            <div>
              <h3 style={{ textTransform: 'uppercase', fontSize: '24px' }}>Rubber Tubeless Tyre For Car</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-9">
        <div onMouseEnter={() => swiperStop.current.autoplay.stop()}
          onMouseLeave={() => swiperStop.current.autoplay.start()}>
          <Swiper className='mySwiper'
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              320: {
                slidesPerView: 1
              },
              640: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              },
              1200: {
                slidesPerView: 3
              },
              1400: {
                slidesPerView: 4
              }
            }}
            spaceBetween={40}
            loop={true}
            speed={700}
            navigation={{
              nextEl: '.NextBtn',
              prevEl: '.PreviousBtn',
            }}
            onSwiper={(swiper) => (swiperStop.current = swiper)}
            style={{ marginRight: '15px' }}>
            <SwiperSlide>
              <div className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer' }}>
                <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <img src={`${API_GET}/${'68d27757f5f8ea4290cbaeee'}`} className="img-contain" alt="Driver Sifter" />
                  <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                    <img src={`${API_GET}/${'68d2778bf5f8ea4290cbaef0'}`} className="img-contain" alt="HoverImage" />
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
                <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <img src={`${API_GET}/${'68d277c0f5f8ea4290cbaef2'}`} className="img-contain" alt="Driver Sifter" />
                  <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                    <img src={`${API_GET}/${'68d277ddf5f8ea4290cbaef4'}`} className="img-contain" alt="HoverImage" />
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
                <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <img src={`${API_GET}/${'68d27815f5f8ea4290cbaef6'}`} className="img-contain" alt="Driver Sifter" />
                  <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                    <img src={`${API_GET}/${'68d3bd8ef985b9550afc82c0'}`} className="img-contain" alt="HoverImage" />
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
                <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <img src={`${API_GET}/${'68d2785ff5f8ea4290cbaefa'}`} className="img-contain" alt="Driver Sifter" />
                  <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                    <img src={`${API_GET}/${'68d2787ef5f8ea4290cbaefc'}`} className="img-contain" alt="HoverImage" />
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
                <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <img src={`${API_GET}/${'68d278b5f5f8ea4290cbaefe'}`} className="img-contain" alt="Driver Sifter" />
                  <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                    <img src={`${API_GET}/${'68d278daf5f8ea4290cbaf00'}`} className="img-contain" alt="HoverImage" />
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
                <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <img src={`${API_GET}/${'68d2794ff5f8ea4290cbaf02'}`} className="img-contain" alt="Driver Sifter" />
                  <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                    <img src={`${API_GET}/${'68d27968f5f8ea4290cbaf04'}`} className="img-contain" alt="HoverImage" />
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
                <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <img src={`${API_GET}/${'68cbb7e1f8d48ccf362bd49a'}`} className="img-contain" alt="Driver Sifter" />
                  <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
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
                <div className="BodyPartCard relative" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                  <img src={`${API_GET}/${'68d3c872f985b9550afc82c2'}`} className="img-contain" alt="Driver Sifter" />
                  <div className="Other absolute" style={{ opacity: '0', top: '10px', left: '0', right: '0', margin: '0 auto', transition: 'all ease-in-out 0.5s' }}>
                    <img src={`${API_GET}/${'68d3c891f985b9550afc82c4'}`} className="img-contain" alt="HoverImage" />
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

          </Swiper>
        </div>
      </div>
    </div >
  )
}

export default LatestSlider;