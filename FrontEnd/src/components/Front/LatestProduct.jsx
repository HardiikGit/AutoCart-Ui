import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import LatestSlider from "./LatestProductSlider";


function LatestProducts() {
   return (
      <div className="MainLatestProductSection" style={{ padding: '50px 0px' }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="Heading" style={{ marginBottom: '40px' }}>
                     <div className="Wrapper-fl d-flex align-items-center justify-space-between">
                        <div className="Section_Heading">
                           <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Latest Product</h2>
                        </div>
                        <div className="Tab_SwitcherButton d-flex align-items-center" style={{ gap: '20px' }}>
                           <div className="Next">
                              <button className="NextBtn d-flex align-items-center justify-content-center" style={{ background: 'var(--white-color)', fontSize: '18px', color: 'var(--black-color)', borderRadius: '50%', fontWeight: '600', border: '1px solid #00000029', width: '50px', height: '50px' }}>
                                 <FiArrowLeft />
                              </button>
                           </div>
                           <div className="Previous">
                              <button className="PreviousBtn d-flex align-items-center justify-content-center" style={{ background: 'var(--white-color)', fontSize: '18px', color: 'var(--black-color)', borderRadius: '50%', fontWeight: '600', border: '1px solid #00000029', width: '50px', height: '50px' }}>
                                 <FiArrowRight />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <>
               <LatestSlider />
            </>
         </div>
      </div >
   )
}

export default LatestProducts;