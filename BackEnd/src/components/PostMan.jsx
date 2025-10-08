function AddCars() {
 return (
  <div className="container mx-auto">
   <div className="w-full h-screen flex items-center justify-center flex-col">
    <div className="Heading">
     <h2 className="text-2xl text-center font-black text-orange-600 uppercase">👉 Adds Cars</h2>
    </div>
    <div className="cars_add_form flex w-full flex-col gap-3 mt-5">
     <input className="w-1/2 mx-auto border-2 px-2.5 py-2.5 rounded focus:border-2 focus:border-gray-500 transition-all outline-0 placeholder:text-gray-500" type="text" id="name" placeholder="Enter Image Name" />
     <input className="w-1/2 mx-auto border-2 px-2.5 py-2.5 rounded focus:border-2 focus:border-gray-500 transition-all outline-0 placeholder:text-gray-500" type="text" id="base64" placeholder="Enter base64 Image Converter Code" />
     <button className="border-2 p-2.5 rounded-sm cursor-pointer text-md uppercase w-1/9 mx-auto transition-all hover:bg-orange-500 hover:border-2 hover:border-orange-500 hover:text-amber-50">Add Car</button>
    </div>
   </div>
  </div>
 )
}

export default AddCars;

// < !DOCTYPE html >
//  <html lang="en">
//   <head>
//    <meta charset="UTF-8" />
//    <title>Add Images Form</title>
//   </head>
//   <body class="w-full h-screen flex items-center justify-center">
//    <div class="container mx-auto">
//     <h2 class="text-center">Add File Data</h2>
//     <form id="fileForm">
//      <label>Name:</label><br />
//      <input type="text" id="name" required /><br /><br />

//      <label>Category:</label><br />
//      <input type="text" id="category" required /><br /><br />

//      <label>Price:</label><br />
//      <input type="number" id="price" required /><br /><br />

//      <button type="submit">Add File</button>
//     </form>

//     <h2>Files List</h2>
//     <div id="fileList"></div>
//    </div>

//    <script>
//     const form = document.getElementById("fileForm");
//     const fileList = document.getElementById("fileList");

//       // ✅ Handle Form Submit
//       form.addEventListener("submit", async (e) => {
//      e.preventDefault();

//     const fileData = {
//      name: document.getElementById("name").value,
//     category: document.getElementById("category").value,
//     price: document.getElementById("price").value,
//         };

//     await fetch("http://localhost:5000/files", {
//      method: "POST",
//     headers: {"Content-Type": "application/json" },
//     body: JSON.stringify(fileData),
//         });

//     form.reset();
//     loadFiles();
//       });

//     // ✅ Load Files from API
//     async function loadFiles() {
//         const res = await fetch("http://localhost:5000/files");
//     const data = await res.json();
//     fileList.innerHTML = data
//           .map((f) => `<p>${f.name} - ${f.category} - ₹${f.price}</p>`)
//     .join("");
//       }

//     // Load on page start
//     loadFiles();
//    </script>
//   </body>
//  </html>
