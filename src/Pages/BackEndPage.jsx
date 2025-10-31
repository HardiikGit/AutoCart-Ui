import { useState } from "react";
// import AddImages from "../components/BackEnd/AddImages";
import TabSwitchButton from "../components/BackEnd/TabSwitchButton";
import ShowImages from "../components/BackEnd/ShowImages";
import AddProducts from "../components/BackEnd/AddProducts";
import ViewProduct from "../components/BackEnd/ViewProduct";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

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
     {/* {activeTab === "add" && <AddImages />} */}
     {activeTab === "view" && <ShowImages />}
     {activeTab === "addcard" && <AddProducts />}
     {activeTab === 'productview' && <ViewProduct />}
    </div>
   </div>
  </div>


 );
}

export default DashBoard;
