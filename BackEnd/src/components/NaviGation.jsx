function NaviGationBar() {
 return (
  <div className="container mx-auto">
   <div className="Nav flex gap-20 justify-center my-10">
    <div className="Add-Images">
     <button className="py-3 px-6 border-2 border-amber-600 rounded-lg text-lg uppercase cursor-pointer hover:bg-amber-600 
     hover:text-amber-50 transition-all">Add Images</button>
    </div>
    <div className="View-Images">
     <button className="py-3 px-6 border-2 border-amber-600 rounded-lg text-lg uppercase cursor-pointer hover:bg-amber-600 
     hover:text-amber-50 transition-all">View Images</button>
    </div>
   </div>
  </div>
 )
}

export default NaviGationBar;