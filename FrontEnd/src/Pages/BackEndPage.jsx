import { useState } from "react";
import TabSwitchButton from "../components/Back/TabSwitchButton";
import AddProducts from "../components/Back/AddProducts";
import ViewProduct from "../components/Back/ViewProduct";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CompaniesLogos from "../components/Back/CompaniesLogos";
import CompanyLogos from "../components/Back/CompanyLogos";

function DashBoard() {
 const [activeTab, setActiveTab] = useState("view");

 return (
  <div className="container">
   <div className="BackToHome">
    <Link to="/" className="BackArrow d-flex align-items-center" style={{ gap: '10px', fontSize: '20px', fontWeight: '600' }}>
     <FaArrowLeftLong /> Back to home
    </Link>
    <div>
     <TabSwitchButton activeTab={activeTab} setActiveTab={setActiveTab} />
     {activeTab === "view" && <CompanyLogos />}
     {activeTab === "addproduct" && <AddProducts />}
     {activeTab === 'productview' && <ViewProduct />}
     {activeTab === 'companylogo' && <CompaniesLogos />}
    </div>
   </div>
  </div>


 );
}

export default DashBoard;
