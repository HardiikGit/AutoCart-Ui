import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { useState, useEffect } from "react";

function NextNavigationBar() {
   const [category, setCategory] = useState(false)
   const [isSticky, setIsSticky] = useState(false)
   const [hover, setHover] = useState(false)
   const [hover2, setHover2] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 180) {
            setIsSticky(true)
         }
         else {
            setIsSticky(false)
         }
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   })

   // state , add class , normal class
   return (
      <div className={isSticky ? "Fixed" : "ProductNavigation"} style={{ padding: '10px 0px', background: 'var(--orange-color)' }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-9">
                  <div className="navBar2">
                     <ul className="NavListLinks d-flex align-items-center" style={{ gap: '40px' }}>
                        <li className="DropDownButton" style={{ position: 'relative' }}>
                           <button style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'var(--white-color)', border: '1px solid var(--white-color)', fontSize: '18px', fontWeight: '600', color: 'var(--black-color)', borderRadius: '5px' }} onClick={() => setCategory(!category)}><HiMiniBars3CenterLeft />Shop By Categories</button>
                           <div className={category ? "active" : "Category"} style={{ position: 'absolute', top: '70px', left: '0', zIndex: '999', background: 'var(--white-color)', display: 'none', width: '100%', }}>
                              <ul className="CatList">
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Our Store</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Ammeter</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Break Parts</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Engine</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Spark Plug</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Headlights</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Caliper</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>More Categories</a>
                                 </li>
                              </ul>
                           </div>
                        </li>
                        <li className="ListLinks">
                           <a href="" style={{ fontWeight: '700', color: 'var(--white-color)' }}>Home</a>
                        </li>
                        <li className="ListLinks">
                           <a href="" style={{ gap: '3px', fontWeight: '700', color: 'var(--white-color)' }} className="d-flex align-items-center relative" onMouseEnter={() => setHover(true)}
                              onMouseLeave={() => setHover(false)}>Shop <MdOutlineKeyboardArrowDown /></a>
                           {hover && (
                              <div className="DropDownShop d-flex absolute" style={{ padding: '20px', background: 'var(--white-color)', top: '35px', zIndex: '999', gap: '20px', }}
                                 onMouseEnter={() => setHover(true)}
                                 onMouseLeave={() => setHover(false)}
                              >
                                 <div className="FerrariParts">
                                    <div className="partsHeading" style={{ marginBottom: '15px' }}>
                                       <h4>
                                          <a href="" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--black-color)' }}>Ferrari Wheel</a>
                                       </h4>
                                    </div>
                                    <div className="PartsList-fl">
                                       <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Alloy Wheels</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Forged Wheels</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Retro Polka</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Steel Wheels</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Camshaft</a></li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="GearOil">
                                    <div className="partsHeading" style={{ marginBottom: '15px' }}>
                                       <h4>
                                          <a href="" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--black-color)' }}>Gear Oil</a>
                                       </h4>
                                    </div>
                                    <div className="PartsList-fl">
                                       <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Airbags Sensor</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Coolant</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Proximity Sensor</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Suspension Sensor</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Bra  ke Fluid</a></li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="seatCover">
                                    <div className="partsHeading" style={{ marginBottom: '15px' }}>
                                       <h4>
                                          <a href="" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--black-color)' }}>Seat Cover</a>
                                       </h4>
                                    </div>
                                    <div className="PartsList-fl">
                                       <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Car Seats</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Fuel</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Gear Box</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Steering Parts</a></li>
                                          <li className="Parts"><a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Lubricant</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </li>
                        <li className="ListLinks">
                           <a href="" style={{ fontWeight: '700', color: 'var(--white-color)' }}>Collections</a>
                        </li>
                        <li className="ListLinks">
                           <a href="" style={{ gap: '3px', fontWeight: '700', color: 'var(--white-color)' }} className="d-flex align-items-center relative" onMouseEnter={() => setHover2(true)}
                              onMouseLeave={() => setHover2(false)}>Headlights <MdOutlineKeyboardArrowDown /></a>
                           {hover2 && (
                              <div className="DropDownShop d-flex absolute" style={{ padding: '20px', background: 'var(--white-color)', top: '35px', zIndex: '9999', gap: '20px', }}
                                 onMouseEnter={() => setHover2(true)}
                                 onMouseLeave={() => setHover2(false)}>
                                 <div className="HeadLightParts">
                                    <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                       <li className="Parts">
                                          <a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Bumpers</a>
                                       </li>
                                       <li className="Parts">
                                          <a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Dash Cam</a>
                                       </li>
                                       <li className="Parts">
                                          <a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Grills</a>
                                       </li>
                                       <li className="Parts">
                                          <a href="" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Headlight</a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           )}
                        </li>
                        <li className="ListLinks">
                           <a href="" style={{ gap: '3px', fontWeight: '700', color: 'var(--white-color)' }} className="d-flex align-items-center relative">More <MdOutlineKeyboardArrowDown />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="WeeklyDeal d-flex justify-content-end">
                     <a href="" className="d-flex align-items-center" style={{ gap: '3px', fontSize: '18px', fontWeight: '700', color: 'var(--white-color)' }}>
                        <BiSolidOffer /> Weekly Deal
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default NextNavigationBar;