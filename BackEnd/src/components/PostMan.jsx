function AddCars() {
 return (
  <div className="container mx-auto">
   <div className="w-full h-screen flex items-center justify-center flex-col">
    <div className="Heading">
     <h2 className="text-2xl text-center font-semibold text-orange-600 capitalize">👉 Adds Cars</h2>
    </div>
    <div className="cars_add_form flex w-full flex-col gap-3 mt-5">
     <input className="w-1/2 mx-auto border-2 px-2.5 py-2.5 rounded" type="text" id="name" placeholder="Enter Image Name" />
     <input className="w-1/2 mx-auto border-2 px-2.5 py-2.5 rounded" type="text" id="base64" placeholder="Enter base64 Image Converter Code" />
     <button className="border-2 p-2.5 rounded-sm cursor-pointer text-md uppercase w-1/9 mx-auto">Add Car</button>
    </div>
   </div>
  </div>
 )
}

export default AddCars;