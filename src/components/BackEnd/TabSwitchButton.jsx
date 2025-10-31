import './z-style.css'
function TabSwitchButton({ activeTab, setActiveTab }) {
  return (
    <div className="container">
      <div className="nav d-flex justify-content-center">
        <button
          onClick={() => setActiveTab("add")}
          className={`tab-btn ${activeTab === "add" ? "active" : ""}`}
        >
          Add New Image
        </button>

        <button
          onClick={() => setActiveTab("view")}
          className={`tab-btn ${activeTab === "view" ? "active" : ""}`}
        >
          View Images
        </button>

        <button
          onClick={() => setActiveTab("addcard")}
          className={`tab-btn ${activeTab === "addcard" ? "active" : ""}`}
        >
          Add Cards
        </button>
      </div>

    </div>
  );
}

export default TabSwitchButton;
