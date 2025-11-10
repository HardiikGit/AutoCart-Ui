import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
// import { useCart } from "../../../Hooks/CartContext";

const categoriesData = [
   { name: 'Our Store', link: '/' },
   { name: 'Ammeter', link: '/' },
   { name: 'Break Parts', link: '/' },
   { name: 'Engine', link: '/' },
   { name: 'Spark Plug', link: '/' },
   { name: 'Headlights', link: '/' },
   { name: 'Caliper', link: '/' },
   { name: 'More Categories', link: '/' },
];

const shopDropdownData = [
   {
      heading: 'Ferrari Wheel',
      link: '/',
      parts: [
         { name: 'Alloy Wheels', link: '/' },
         { name: 'Forged Wheels', link: '/' },
         { name: 'Retro Polka', link: '/' },
         { name: 'Steel Wheels', link: '/' },
         { name: 'Camshaft', link: '/' },
      ],
   },
   {
      heading: 'Gear Oil',
      link: '/',
      parts: [
         { name: 'Airbags Sensor', link: '/' },
         { name: 'Coolant', link: '/' },
         { name: 'Proximity Sensor', link: '/' },
         { name: 'Suspension Sensor', link: '/' },
         { name: 'Brake Fluid', link: '/' },
      ],
   },
   {
      heading: 'Seat Cover',
      link: '/',
      parts: [
         { name: 'Car Seats', link: '/' },
         { name: 'Fuel', link: '/' },
         { name: 'Gear Box', link: '/' },
         { name: 'Steering Parts', link: '/' },
         { name: 'Lubricant', link: '/' },
      ],
   },
];

const headlightsDropdownData = [
   { name: 'Bumpers', link: '/' },
   { name: 'Dash Cam', link: '/' },
   { name: 'Grills', link: '/' },
   { name: 'Headlight', link: '/' },
];

const currencyOptions = [
   { display: 'CAD $ | Canada', link: '/' },
   { display: 'Euro | France', link: '/' },
   { display: 'USD $ | United States', link: '/' },
];

const languageOptions = [
   { display: 'English', link: '/' },
   { display: 'Nederlands', link: '/' },
   { display: 'Francias', link: '/' },
];

const responsiveMenuData = [
   { name: 'Home', to: '#' },
   { name: 'Shop', to: '#' },
   { name: 'Collections', to: '#' },
   { name: 'Headlights', to: '#' },
   { name: 'Contact', to: '#' },
   { name: 'Blog', to: '#' },
   { name: 'Track Order', to: '#' },
   { name: 'Help Center', to: '#' },
   { name: 'Login', to: '/login', isLink: true },
   { name: 'Dashboard', to: '/backend', isLink: true },
];


function NextNavigationBar() {
   const [category, setCategory] = useState(false)
   const [isSticky, setIsSticky] = useState(false)
   const [hover, setHover] = useState(false)
   const [hover2, setHover2] = useState(false)
   const [show, setShow] = useState(0)
   const [isOpen, setIsOpen] = useState(false)

   useEffect(() => {
      const block = document.querySelector('.CartOpen');
      const handleScroll = () => {
         if (window.scrollY > 130) {
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

   return (
      <div className={isSticky ? "Fixed" : "ProductNavigation"} style={{ padding: '10px 0px', background: 'var(--orange-color)', transition: 'all ease-in-out .5s !important' }}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-9 col-md-12">
                  <div className="navBar2">
                     <ul className="NavListLinks d-flex align-items-center" style={{ gap: '40px' }}>
                        <li className="DropDownButton" style={{ position: 'relative' }}>
                           <button style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 20px', background: 'var(--white-color)', border: '1px solid var(--white-color)', fontSize: '18px', fontWeight: '600', color: 'var(--black-color)', borderRadius: '5px' }} onClick={() => setCategory(!category)}><HiMiniBars3CenterLeft />Shop By Categories</button>
                           <div className={category ? "ShowList" : "Category"} style={{ position: 'absolute', top: '70px', left: '0', zIndex: '999', background: 'var(--white-color)', display: 'none', width: '100%', }}>
                              <ul className="CatList">
                                 {categoriesData.map((cat, index) => (
                                    <li key={index} className="List_Items" style={{ border: '1px solid #00000023' }}>
                                       <a href={cat.link} style={{ color: 'var(--black-color)', padding: '10px 20px', fontSize: '16px', fontWeight: '600' }}>{cat.name}</a>
                                    </li>
                                 ))}
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
                                 onMouseLeave={() => setHover(false)}>
                                 {shopDropdownData.map((column, colIndex) => (
                                    <div key={colIndex} className={column.heading.replace(/\s/g, '')}>
                                       <div className="partsHeading" style={{ marginBottom: '15px' }}>
                                          <h4>
                                             <a href={column.link} style={{ fontSize: '16px', fontWeight: '700', color: 'var(--black-color)' }}>{column.heading}</a>
                                          </h4>
                                       </div>
                                       <div className="PartsList-fl">
                                          <ul className="PartsList d-flex flexcolumn" style={{ gap: '10px' }}>
                                             {column.parts.map((part, partIndex) => (
                                                <li key={partIndex} className="Parts">
                                                   <a href={part.link} style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>{part.name}</a>
                                                </li>
                                             ))}
                                          </ul>
                                       </div>
                                    </div>
                                 ))}
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
                                       {headlightsDropdownData.map((item, index) => (
                                          <li key={index} className="Parts">
                                             <a href={item.link} style={{ color: 'var(--black-color)', fontSize: '14px', fontWeight: '500' }}>{item.name}</a>
                                          </li>
                                       ))}
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

                              {responsiveMenuData.map((item, index) => (
                                 <li key={index} className="Links">
                                    {item.isLink ? (
                                       <Link to={item.to} style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>{item.name}</Link>
                                    ) : (
                                       <a href={item.to} style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--black-color)' }}>{item.name}</a>
                                    )}
                                 </li>
                              ))}
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
                              <button className="CartOpen" style={{ fontSize: '18px', fontWeight: '700', color: 'var(--white-color)', display: 'none', background: 'none', border: 'none', height: '18px' }}><CiShoppingCart /></button>
                           </li>
                           <li className="slideShow-items relative" style={rightBorder}>
                              <div className="currencyButton">
                                 <button
                                    className="curruncyButton d-flex align-items-center"
                                    style={buttonStyle} onClick={() => setShow(prev => prev === 1 ? 0 : 1)}
                                 >
                                    USD $<MdOutlineKeyboardArrowUp />
                                 </button>
                              </div>
                              <div className={`dropDown ${(show === 1) ? "show" : "none"}`}
                              >
                                 <ul className="currencyDownBox d-flex flexcolumn" style={{ gap: "5px" }}>
                                    {/* Refactored: Currency Dropdown */}
                                    {currencyOptions.map((option, index) => (
                                       <li key={index} className="downBox">
                                          <a href={option.link}>{option.display}</a>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </li>
                           <li className="slideShow-items relative">
                              <div className="languageDownBox">
                                 <button
                                    className="languageButton d-flex align-items-center"
                                    style={buttonStyle}
                                    onClick={() => setShow(prev => prev === 2 ? 0 : 2)}>English <MdOutlineKeyboardArrowUp />
                                 </button>
                              </div>
                              <div className={`dropDown1 ${(show === 2) ? "show" : "none"}`}>
                                 <ul className="currencyDownBox d-flex flexcolumn" style={{ gap: "5px" }}>
                                    {/* Refactored: Language Dropdown */}
                                    {languageOptions.map((option, index) => (
                                       <li key={index} className="downBox">
                                          <a href={option.link}>{option.display}</a>
                                       </li>
                                    ))}
                                 </ul>
                              </div>
                           </li>
                        </ul>
                     </div>

                  </div>
               </div>
               <div className="col-lg-3">
                  <div className="WeeklyDeal d-flex justify-content-end" style={{ gap: '15px' }}>
                     <button className="CartOpen" style={{ height: '32px', fontSize: '32px', fontWeight: '700', color: 'var(--white-color)', display: 'none', background: 'none', border: 'none' }}>
                        <CiShoppingCart />
                     </button>
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