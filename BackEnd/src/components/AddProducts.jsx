function AddProducts() {
 return (
  <div className="container mx-auto p-10">
   <h1 className="text-center font-bold text-3xl text-amber-600 mb-10 uppercase">
    Add New Product
   </h1>
   <div className="flex flex-col gap-6">
    <input type="text" placeholder="Enter Product Name" className="w-1/2 mx-auto border-2 border-amber-600 py-2 px-5 text-lg rounded-sm placeholder:uppercase" />
    <input type="text" placeholder="Enter Product Price" className="w-1/2 mx-auto border-2 border-amber-600 py-2 px-5 text-lg rounded-sm placeholder:uppercase" />
    <input type="file" className="w-1/2 mx-auto border-2 border-amber-600 py-2 px-5 text-lg rounded-sm" />
    <button className="mt-5 border-2 border-amber-600 w-55 mx-auto py-4 text-lg uppercase rounded-sm cursor-pointer hover:bg-amber-600 hover:text-white">Add Card</button>
   </div>
  </div>
 )
}

export default AddProducts;