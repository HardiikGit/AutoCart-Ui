import './z-style.css'
function TabSwitchButton({ activeTab, setActiveTab }) {
  return (
    <div className="container">
      <div className="nav d-flex justify-content-center">
        <button
          onClick={() => setActiveTab("view")}
          className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
        >
          Show Company Logo's
        </button>
        <button
          onClick={() => setActiveTab("companylogo")}
          className={`tab-btn ${activeTab === "companylogo" ? "active" : ""}`}
        >
          Add Company Imaages
        </button>
        <button
          onClick={() => setActiveTab("addproduct")}
          className={`tab-btn ${activeTab === "addproduct" ? "active" : ""}`}>
          Add Trending Product
        </button>
        <button
          onClick={() => setActiveTab("productview")}
          className={`tab-btn ${activeTab === "productview" ? "active" : ""}`}
        >
          View Trending Products
        </button>
        <button
          onClick={() => setActiveTab("latestproduct")}
          className={`tab-btn ${activeTab === "latestproduct" ? "active" : ""}`}
        >
          Add Latest Products
        </button>
        <button
          onClick={() => setActiveTab("viewlatestproduct")}
          className={`tab-btn ${activeTab === "viewlatestproduct" ? "active" : ""}`}
        >
          View Latest Products
        </button>
      </div>

    </div>
  );
}

export default TabSwitchButton;
