import { useState } from "react";
import TabSwitchButton from "../components/TabSwitchButton";
import ShowCars from "../components/ShowCars";
import AddCars from "../components/AddCars";
import AddCards from "../components/AddCards";

function DashBoard() {
 const [activeTab, setActiveTab] = useState("add");

 return (
  <div>
   <TabSwitchButton activeTab={activeTab} setActiveTab={setActiveTab} />
   {activeTab === "add" && <AddCars />}
   {activeTab === "view" && <ShowCars />}
   {activeTab === "addcard" && <AddCards />}
  </div>
 );
}

export default DashBoard;
