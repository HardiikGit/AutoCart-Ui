function TabSwitchButton({ activeTab, setActiveTab }) {
  return (
    <div className="container mx-auto">
      <div className="Nav flex gap-20 justify-center my-10">
        <button
          onClick={() => setActiveTab("add")}
          className={`py-3 px-6 border-2 border-amber-600 rounded-lg text-lg uppercase cursor-pointer transition-all ${activeTab === "add"
            ? "bg-amber-600 text-amber-50"
            : "hover:bg-amber-600 hover:text-amber-50"
            }`}
        >
          Add Images
        </button>

        <button
          onClick={() => setActiveTab("view")}
          className={`py-3 px-6 border-2 border-amber-600 rounded-lg text-lg uppercase cursor-pointer transition-all ${activeTab === "view"
            ? "bg-amber-600 text-amber-50"
            : "hover:bg-amber-600 hover:text-amber-50"
            }`}
        >
          View Images
        </button>
        <button
          onClick={() => setActiveTab("addcard")}
          className={`py-3 px-6 border-2 border-amber-600 rounded-lg text-lg uppercase cursor-pointer transition-all ${activeTab === "addcard"
            ? "bg-amber-600 text-amber-50"
            : "hover:bg-amber-600 hover:text-amber-50"
            }`}
        >
          Add Cards
        </button>
      </div>
    </div>
  );
}

export default TabSwitchButton;
