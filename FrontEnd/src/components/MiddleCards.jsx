import { API_GET } from "../config";

function AddvertismentCards() {
   return (
      <div className="MainAddSetion">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="AddSection">
                     <div className="AddsBoxes d-flex align-items-center justify-space-between" style={{ gap: '20px' }}>
                        <div className="AddsContent relative hidden" style={{ borderRadius: '5px', height: '227px' }}>
                           <img src={`${API_GET}/${`68ccfe8f6dceb378c5438256`}`} className='img-cover' alt="" style={{ overflow: 'hidden', borderRadius: '5px', height: '100%' }} />
                           <div className='absolute' style={{ top: '0', zIndex: '9999', padding: '30px 20px', color: 'var(--black-color)' }}>
                              <div className="price" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontSize: '18px', fontWeight: '500' }}>From $149</p>
                              </div>
                              <div className="ProWheel" style={{ marginBottom: '10px' }}>
                                 <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase' }}>Disc Brake</h3>
                              </div>
                              <div className="txt" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontWeight: '500', fontSize: '18px' }}>Black Rhino Prime</p>
                              </div>
                              <div className="button">
                                 <a style={{ textTransform: 'uppercase', fontSize: '14px' }}>Shop Now</a>
                              </div>
                           </div>
                        </div>
                        <div className="AddsContent relative hidden" style={{ borderRadius: '5px', height: '227px' }}>
                           <img src={`${API_GET}/${'68ccfeac6dceb378c5438258'}`} className='img-cover' alt="" style={{ overflow: 'hidden', borderRadius: '5px', height: "100%" }} />
                           <div className='absolute' style={{ top: '0', zIndex: '9999', padding: '30px 20px', color: 'var(--white-color)' }}>
                              <div className="price" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontSize: '18px', fontWeight: '500' }}>From $240</p>
                              </div>
                              <div className="ProWheel" style={{ marginBottom: '10px' }}>
                                 <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase' }}>Rear Shock</h3>
                              </div>
                              <div className="txt" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontWeight: '500', fontSize: '18px' }}>Spin-On Lube Filter</p>
                              </div>
                              <div className="button">
                                 <a style={{ textTransform: 'uppercase', fontSize: '14px' }}>Shop Now</a>
                              </div>
                           </div>
                        </div>
                        <div className="AddsContent relative hidden" style={{ borderRadius: '5px', height: '227px' }}>
                           <img src={`${API_GET}/${'68ccfedd6dceb378c543825a'}`} className='img-cover' alt="" style={{ overflow: 'hidden', borderRadius: '5px', height: "100%" }} />
                           <div className='absolute' style={{ top: '0', zIndex: '9999', padding: '30px 20px', color: 'var(--black-color)' }}>
                              <div className="price" style={{ marginBottom: '10px' }}>
                                 <p style={{ fontSize: '18px', fontWeight: '500' }}>From $240</p>
                              </div>
                              <div className="ProWheel" style={{ marginBottom: '10px' }}>
                                 <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase' }}>Blue Wheel</h3>
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
   )
}

export default AddvertismentCards;