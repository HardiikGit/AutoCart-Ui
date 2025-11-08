import TrendingProductsSlider from "./TrendingProductsSlider";

function TrendingProducts() {
   return (
      <div className="MainTrendingProductsSection" style={{ padding: '50px 0px', }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="Wrapper-fl d-flex align-items-center justify-space-between">
                     <div className="Section_Heading">
                        <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Trending Products</h2>
                     </div>
                     <div className="Tab_SwitcherButton d-flex align-items-center" style={{ gap: '20px' }}>
                        <div className="BodyParts">
                           <button className="BodyPartsBtn" style={{ padding: '10px 20px', background: 'var(--white-color)', fontSize: '16px', color: 'var(--black-color)', borderRadius: '5px', fontWeight: '600' }}>
                              Body Parts
                           </button>
                        </div>
                        <div className="EngineParts">
                           <button className="EnginePartsBtn" style={{ padding: '10px 20px', background: 'var(--white-color)', fontSize: '16px', color: 'var(--black-color)', borderRadius: '5px', fontWeight: '600' }}>
                              Engine Parts
                           </button>
                        </div>
                        <div className="Accessories">
                           <button className="AccessoriesBtn" style={{ padding: '10px 20px', background: 'var(--white-color)', fontSize: '16px', color: 'var(--black-color)', borderRadius: '5px', fontWeight: '600' }}>
                              Accessories
                           </button>
                        </div>
                     </div>
                  </div>
                  <>
                     <TrendingProductsSlider />
                  </>
               </div>
            </div>
         </div>
      </div>
   )
}

export default TrendingProducts;