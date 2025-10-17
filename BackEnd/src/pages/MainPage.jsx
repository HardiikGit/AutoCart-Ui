import { useState } from "react";
import TabSwitchButton from "../components/TabSwitchButton";
import AddImages from "../components/AddImages";
import AddProducts from "../components/AddProducts";
import ShowImages from "../components/ShowImages";

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
