import './z-style.css'
function TabSwitchButton({ activeTab, setActiveTab }) {
  return (
    <div className="container">
      <div className="nav d-flex justify-content-center">
        <button
          onClick={() => setActiveTab("view")}
          className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
        >
          View Images
        </button>
        <button
          onClick={() => setActiveTab("addproduct")}
          className={`tab-btn ${activeTab === "addproduct" ? "active" : ""}`}>
          Add New Product
        </button>
        <button
          onClick={() => setActiveTab("productview")}
          className={`tab-btn ${activeTab === "productview" ? "active" : ""}`}
        >
          View Added Products
        </button>
      </div>

    </div>
  );
}

export default TabSwitchButton;
