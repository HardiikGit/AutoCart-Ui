import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";

function TopHeaderSection() {
   const [show, setShow] = useState(0)

   const buttonStyle = {
      background: "none",
      border: "none",
      color: "var(--black-color)",
      fontSize: "14px",
      gap: "5px",
      fontWeight: "500",
      cursor: "pointer"
   };

   const TopBar = { padding: "10px 0px 10px 0px", backgroundColor: "var(--grey-color)" }
   const borderStyle = { borderRight: "1px solid var(--black-color)", borderLeft: "1px solid var(--black-color)" }
   const rightBorder = { borderRight: "1px solid var(--black-color)" }
   const leftBorder = { borderLeft: '1px solid var(--black-color)' }

   return (
      <div className="TopBar" style={TopBar}>
         <div className="container">
            <div className="row">
               <div className="col-lg-6 col-md-12">
                  <div className="topContent">
                     <p>
                        Get Upto 25% Cashback On First Order: { }
                        <span style={{ textTransform: "uppercase", fontWeight: "500" }}>
                           Get25Off - { }
                        </span>
                        <a href="/" style={{ textDecoration: "underline" }}>
                           SHOP NOW
                        </a>
                     </p>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="topContent">
                     <ul className="topSlideShow d-flex justify-content-end align-items-center">
                        <li className="slideShow-items" style={{ borderRight: '1px solid #000' }}>
                           <Link to="/backend">Dashboard</Link>
                        </li>
                        <li className="slideShow-items">
                           <a href="/">Track Order</a>
                        </li>
                        <li className="slideShow-items" style={borderStyle}>
                           <a href="/">Help Center</a>
                        </li>
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
                        <li className="slideShow-items" style={leftBorder}>
                           <div className="loginButton">
                              <Link to="/login">Login</Link>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div >
         </div>
      </div>
   );
}

export default TopHeaderSection;
