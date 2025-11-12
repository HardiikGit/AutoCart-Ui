import { useState } from 'react';
import { API_ADD_LOGO } from '../../../config';

function CompaniesLogos() {
 const [companyName, setCompanyName] = useState('');
 const [companyImage, setCompanyImage] = useState(null);
 const [previewImage, setPreviewImage] = useState(null);

 const handleFileChange = (e) => {
  const file = e.target.files[0];
  setCompanyImage(file);

  if (file) {
   const imageURL = URL.createObjectURL(file);
   setPreviewImage(imageURL);
  } else {
   setPreviewImage(null);
  }
 };

 const handleSubmit = async () => {
  if (!companyName || !companyImage) {
   alert('Please enter company name and select an image.');
   return;
  }

  const formData = new FormData();
  formData.append('companyName', companyName);
  formData.append('logo', companyImage);

  try {
   const response = await fetch(`${API_ADD_LOGO}`, {
    method: 'POST',
    body: formData,
   });

   const data = await response.json();

   if (response.ok) {
    alert(data.message || 'Company logo uploaded successfully!');
    setCompanyName('');
    setCompanyImage(null);
    setPreviewImage(null);
    document.getElementById('companyImageInput').value = '';
   } else {
    alert(data.error || 'Failed to upload company logo.');
   }
  } catch (error) {
   console.error('Error uploading company logo:', error);
   alert('Network error or server unavailable.');
  }
 };

 return (
  <div className="container">
   <div className="heading">
    <h1 className="product-heading">Companies Logo</h1>
   </div>

   <div className="d-flex flexcolumn" style={{ gap: '25px' }}>
    <div className="Image-name">
     <input
      type="text"
      className="input-field"
      placeholder="Enter Company Name"
      value={companyName}
      onChange={(e) => setCompanyName(e.target.value)}
      name=""
      id=""
     />
    </div>

    <div className="Enter-Company-Image">
     <input
      type="file"
      className="input-field"
      id="companyImageInput"
      accept="image/*"
      onChange={handleFileChange}
      name=""
     />
    </div>
    {previewImage && (
     <div className="image-preview" style={{ textAlign: 'center' }}>
      <img
       src={previewImage}
       alt="Preview"
       style={{
        width: '200px',
        height: '70px',
        objectFit: 'contain',
        border: '1px solid #ccc',
        borderRadius: '10px',
       }}
      />
     </div>
    )}

    <div className="Button">
     <button
      className="submit-btn justify-content-center mx-auto"
      onClick={handleSubmit}
     >
      Add Image
     </button>
    </div>
   </div>
  </div>
 );
}

export default CompaniesLogos;
