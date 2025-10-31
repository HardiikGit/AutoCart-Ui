import { useState } from "react";
import AddImages from "../components/BackEnd/AddImages";
import TabSwitchButton from "../components/BackEnd/TabSwitchButton";
import ShowImages from "../components/BackEnd/ShowImages";
import AddProducts from "../components/BackEnd/AddProducts";

function DashBoard() {
 const [activeTab, setActiveTab] = useState("add");

 return (
  <div>
   <TabSwitchButton activeTab={activeTab} setActiveTab={setActiveTab} />
   {activeTab === "add" && <AddImages />}
   {activeTab === "view" && <ShowImages />}
   {activeTab === "addcard" && <AddProducts />}
  </div>
 );
}

export default DashBoard;
