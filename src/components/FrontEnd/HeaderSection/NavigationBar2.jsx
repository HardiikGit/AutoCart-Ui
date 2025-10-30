import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

function NextNavigationBar() {
   const [category, setCategory] = useState(false)
   const [isSticky, setIsSticky] = useState(false)
   const [hover, setHover] = useState(false)
   const [hover2, setHover2] = useState(false)
   const [show, setShow] = useState(0)
   const [isOpen, setIsOpen] = useState(false)

   useEffect(() => {
      const block = document.querySelector('.Cart-Link');
      const handleScroll = () => {
         if (window.scrollY > 180) {
            setIsSticky(true)
            block.classList.add('Cart');
         }
         else {
            setIsSticky(false)
            block.classList.remove('Cart');
         }
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])


   const buttonStyle = {
      background: "none",
      border: "none",
      color: "var(--white-color)",
      fontSize: "14px",
      gap: "5px",
      fontWeight: "500",
      cursor: "pointer"
   };
   const rightBorder = { borderRight: "1px solid var(--white-color)" }

   // state , add class , normal class
   return (
      <div className={isSticky ? "Fixed" : "ProductNavigation"} style={{ padding: '10px 0px', background: 'var(--orange-color)' }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-9 col-md-12">
                  <div className="navBar2">
                     <ul className="NavListLinks d-flex align-items-center" style={{ gap: '40px' }}>
                        <li className="DropDownButton" style={{ position: 'relative' }}>
                           <button style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'var(--white-color)', border: '1px solid var(--white-color)', fontSize: '18px', fontWeight: '600', color: 'var(--black-color)', borderRadius: '5px' }} onClick={() => setCategory(!category)}><HiMiniBars3CenterLeft />Shop By Categories</button>
                           <div className={category ? "active" : "Category"} style={{ position: 'absolute', top: '70px', left: '0', zIndex: '999', background: 'var(--white-color)', display: 'none', width: '100%', }}>
                              <ul className="CatList">
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="/" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Our Store</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="/" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Ammeter</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="/" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Break Parts</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="/" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Engine</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="/" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Spark Plug</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="/" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Headlights</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="/" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>Caliper</a>
                                 </li>
                                 <li className="List_Items" style={{ border: '1px solid #00000023' }}>
                                    <a href="/" style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>More Categories</a>
                                 </li>
                              </ul>
                           </div>
                        </li>
                        <li className="ListLinks">
                           <a href="/" style={{ fontWeight: '700', color: 'var(--white-color)' }}>Home</a>
                        </li>
                        <li className="ListLinks">
                           <a href="/" style={{ gap: '3px', fontWeight: '700', color: 'var(--white-color)' }} className="d-flex align-items-center relative" onMouseEnter={() => setHover(true)}
                              onMouseLeave={() => setHover(false)}>Shop <MdOutlineKeyboardArrowDown /></a>
                           {hover && (
                              <div className="DropDownShop d-flex absolute" style={{ padding: '20px', background: 'var(--white-color)', top: '35px', zIndex: '999', gap: '20px', }}
                                 onMouseEnter={() => setHover(true)}
                                 onMouseLeave={() => setHover(false)}
                              >
                                 <div className="FerrariParts">
                                    <div className="partsHeading" style={{ marginBottom: '15px' }}>
                                       <h4>
                                          <a href="/" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--black-color)' }}>Ferrari Wheel</a>
                                       </h4>
                                    </div>
                                    <div className="PartsList-fl">
                                       <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Alloy Wheels</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Forged Wheels</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Retro Polka</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Steel Wheels</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Camshaft</a></li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="GearOil">
                                    <div className="partsHeading" style={{ marginBottom: '15px' }}>
                                       <h4>
                                          <a href="/" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--black-color)' }}>Gear Oil</a>
                                       </h4>
                                    </div>
                                    <div className="PartsList-fl">
                                       <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Airbags Sensor</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Coolant</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Proximity Sensor</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Suspension Sensor</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Bra  ke Fluid</a></li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className="seatCover">
                                    <div className="partsHeading" style={{ marginBottom: '15px' }}>
                                       <h4>
                                          <a href="/" style={{ fontSize: '16px', fontWeight: '700', color: 'var(--black-color)' }}>Seat Cover</a>
                                       </h4>
                                    </div>
                                    <div className="PartsList-fl">
                                       <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Car Seats</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Fuel</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Gear Box</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Steering Parts</a></li>
                                          <li className="Parts"><a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Lubricant</a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           )}
                        </li>
                        <li className="ListLinks">
                           <a href="/" style={{ fontWeight: '700', color: 'var(--white-color)' }}>Collections</a>
                        </li>
                        <li className="ListLinks">
                           <a href="/" style={{ gap: '3px', fontWeight: '700', color: 'var(--white-color)' }} className="d-flex align-items-center relative" onMouseEnter={() => setHover2(true)}
                              onMouseLeave={() => setHover2(false)}>Headlights <MdOutlineKeyboardArrowDown /></a>
                           {hover2 && (
                              <div className="DropDownShop d-flex absolute" style={{ padding: '20px', background: 'var(--white-color)', top: '35px', zIndex: '9999', gap: '20px', }}
                                 onMouseEnter={() => setHover2(true)}
                                 onMouseLeave={() => setHover2(false)}>
                                 <div className="HeadLightParts">
                                    <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                       <li className="Parts">
                                          <a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Bumpers</a>
                                       </li>
                                       <li className="Parts">
                                          <a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Dash Cam</a>
                                       </li>
                                       <li className="Parts">
                                          <a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Grills</a>
                                       </li>
                                       <li className="Parts">
                                          <a href="/" style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>Headlight</a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           )}
                        </li>
                        <li className="ListLinks">
                           <a href="/" style={{ gap: '3px', fontWeight: '700', color: 'var(--white-color)' }} className="d-flex align-items-center relative">More <MdOutlineKeyboardArrowDown />
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className="MenuBarResponsive align-items-center justify-space-between d-none">
                     <div className="MenuButton">
                        <button className="Navigatio_Button d-flex align-items-center" style={{ gap: '5px', background: 'none', fontSize: '18px', fontWeight: '500', color: 'var(--white-color)', border: 'none' }}
                           onClick={() => setIsOpen(true)} >
                           <HiMiniBars3CenterLeft />
                           Menu
                        </button>
                     </div>
                     <div className={`OverLay ${isOpen ? 'Agya' : ''}`} onClick={() => setIsOpen(false)}></div>
                     <div className={`Responsive_Navigation ${isOpen ? 'Agya' : ''}`} style={{ position: 'fixed', top: '0', left: '-100%', zIndex: '9999', width: '50%', height: '100vh', background: 'var(--white-color)', transition: 'all ease-in-out .5s' }}>
                        <div className="Head d-flex justify-space-between align-items-center" style={{
                           padding: '10px 20px', borderBottom: '3px solid var(--grey-color)'
                        }} >
                           <div className="Heading2">
                              <h2 style={{ textTransform: 'uppercase', fontSize: '26px', fontWeight: '500' }}>Menu</h2>
                           </div>
                           <div className="Cross-X" style={{ position: 'relative', zIndex: '999999999999' }}>
                              <button style={{ background: 'none', padding: '10px', border: 'none', fontSize: '28px' }} onClick={() => setIsOpen(false)}>
                                 <RxCross2 />
                              </button>
                           </div>
                        </div>
                        <div className="Responsive_List" style={{ borderBottom: '3px solid var(--grey-color)', padding: '20px 20px' }}>
                           <ul className="d-flex flexcolumn" style={{ gap: '30px' }}>
                              <li className="Links">
                                 <a href="#" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Home</a>
                              </li>
                              <li className="Links">
                                 <a href="#" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Shop</a>
                              </li>
                              <li className="Links">
                                 <a href="#" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Collections</a>
                              </li>
                              <li className="Links">
                                 <a href="#" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Headlights</a>
                              </li>
                              <li className="Links">
                                 <a href="#" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Contact</a>
                              </li>
                              <li className="Links">
                                 <a href="#" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Blog</a>
                              </li>
                              <li className="Links">
                                 <a href="#" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Track Order</a>
                              </li>
                              <li className="Links">
                                 <a href="#" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Help Center</a>
                              </li>
                              <li className="Links">
                                 <Link to="/login" style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>Login</Link>
                              </li>
                           </ul>
                           <div className="HelpCenter" style={{ display: 'block', marginTop: '30px' }}>
                              <p>Need Help?</p>
                              <a href="/">9876-543-210</a>
                           </div>
                        </div>
                     </div>

                     <div className="topContent">
                        <ul className="topSlideShow-1 d-flex justify-content-end align-items-center">
                           <li className="slideShow-items relative" style={rightBorder}>
                              <div className="currencyButton">
                                 <button
                                    className="curruncyButton d-flex align-items-center"
                                    style={buttonStyle} onClick={() => setShow(prev => {
                                       if (prev == 1) {
                                          return 0
                                       }
                                       return 1
                                    })}
                                 >
                                    USD $<MdOutlineKeyboardArrowUp />
                                 </button>
                              </div>
                              <div className={`dropDown ${(show && show == 1) ? "show" : "none"}`}
                              >
                                 <ul className="currencyDownBox d-flex flexcolumn" style={{ gap: "5px" }}>
                                    <li className="downBox">
                                       <a href="/">CAD $ | Canada</a>
                                    </li>
                                    <li className="downBox">
                                       <a href="/">Euro | France</a>
                                    </li>
                                    <li className="downBox">
                                       <a href="/">USD $ | United States</a>
                                    </li>
                                 </ul>
                              </div>
                           </li>
                           <li className="slideShow-items relative">
                              <div className="languageDownBox">
                                 <button
                                    className="languageButton d-flex align-items-center"
                                    style={buttonStyle}
                                    onClick={() => setShow(prev => {
                                       if (prev == 2) {
                                          return 0
                                       }
                                       return 2
                                    })}>English <MdOutlineKeyboardArrowUp />
                                 </button>
                              </div>
                              <div className={`dropDown1 ${(show && show == 2) ? "show" : "none"}`}>
                                 <ul className="currencyDownBox d-flex flexcolumn" style={{ gap: "5px" }}>
                                    <li className="downBox">
                                       <a href="/">English</a>
                                    </li>
                                    <li className="downBox">
                                       <a href="/">Nederlands</a>
                                    </li>
                                    <li className="downBox">
                                       <a href="/">Francias</a>
                                    </li>
                                 </ul>
                              </div>
                           </li>
                        </ul>
                     </div>

                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="WeeklyDeal d-flex justify-content-end" style={{ gap: '15px' }}>
                     <Link to="/cartproducts" className="Cart-Link" style={{ fontSize: '18px', fontWeight: '700', color: 'var(--white-color)', display: 'none' }}>My Cart</Link>
                     <a href="/" className="d-flex align-items-center" style={{ gap: '3px', fontSize: '18px', fontWeight: '700', color: 'var(--white-color)' }}>
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