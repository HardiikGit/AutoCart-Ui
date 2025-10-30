function AddProducts() {
 return (
  <div className="container">
   <h1 className="product-heading">Add New Product</h1>

   <div className="product-form d-flex flexcolumn align-items-center">
    <input
     type="text"
     placeholder="Enter Product Name"
     className="input-field"
    />
    <input
     type="text"
     placeholder="Enter Product Price"
     className="input-field"
    />
    <input
     type="file"
     placeholder="Upload Product Image"
     className="input-field"
    />
    <button className="submit-btn">Add Card</button>
   </div>

  </div>
 )
}

export default AddProducts;