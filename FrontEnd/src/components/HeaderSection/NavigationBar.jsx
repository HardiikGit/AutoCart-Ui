import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import Logo from '/Logo.png'
import NextNavigationBar from "./NavigationBar2";
function NavigationBarSection() {

   return (
      <>
         <nav className="NavigationBar" style={{ padding: "20px 0px" }}>
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-12">
                     <div className="LogoSection d-flex align-items-center justify-space-between">
                        <div className="Logo">
                           <a href="">
                              <img src={Logo} className='img-cover' alt="" />
                           </a>
                        </div>
                        <div className="QuickLinks2 d-flex align-items-center justify-content-end d-none" style={{ gap: "15px" }}>
                           <div className="UserLogin">
                              <a href="">
                                 <CiUser />
                              </a>
                           </div>
                           <div className="WishList">
                              <a href="">
                                 <CiHeart />
                              </a>
                           </div>
                           <div className="CartPage">
                              <a href="" className="d-flex align-items-center">
                                 <div className="CartIcon">
                                    <CiShoppingCart />
                                 </div>
                                 <div className="CartCount">
                                    <p className="d-flex flexcolumn">
                                       $0.00
                                       <b>
                                          My Cart
                                       </b>
                                    </p>
                                 </div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                     <div className="NavigationSearchBar d-flex align-items-center justify-content-center" style={{ gap: "15px" }}>
                        <div className="SearchInput d-flex align-items-center hidden">
                           <input type="search" placeholder='Search' minLength={1} maxLength={100} />
                           <button className="InputButton" style={{ textTransform: 'uppercase' }}>Search</button>
                           <h1>{name}</h1>
                        </div>
                        <div className="HelpCenter">
                           <p>Need Help?</p>
                           <a href="">9876-543-210</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12">
                     <div className="QuickLinks d-flex align-items-center justify-content-end" style={{ gap: "15px" }}>
                        <div className="UserLogin">
                           <a href="">
                              <CiUser />
                           </a>
                        </div>
                        <div className="WishList">
                           <a href="">
                              <CiHeart />
                           </a>
                        </div>
                        <div className="CartPage">
                           <a href="" className="d-flex align-items-center">
                              <div className="CartIcon">
                                 <CiShoppingCart />
                              </div>
                              <div className="CartCount">
                                 <p className="d-flex flexcolumn">
                                    $0.00
                                    <b>
                                       My Cart
                                    </b>
                                 </p>
                              </div>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
         <NextNavigationBar />
      </>
   )
}

export default NavigationBarSection;