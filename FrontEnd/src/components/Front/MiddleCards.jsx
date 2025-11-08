import { API_GET } from "../../../config";

const advertisementData = [
   {
      id: '68ccfe8f6dceb378c5438256',
      price: 'From $149',
      title: 'Disc Brake',
      text: 'Black Rhino Prime',
      textColor: 'var(--black-color)',
   },
   {
      id: '68ccfeac6dceb378c5438258',
      price: 'From $240',
      title: 'Rear Shock',
      text: 'Spin-On Lube Filter',
      textColor: 'var(--white-color)',
   },
   {
      id: '68ccfedd6dceb378c543825a',
      price: 'From $240',
      title: 'Blue Wheel',
      text: 'Spin-On Lube Filter',
      textColor: 'var(--black-color)',
   },
];

function AddvertismentCards() {
   const style = { padding: '30px 0px', background: 'var(--grey-color)' }
   return (
      <div className="MainAddSetion" style={style}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12 col-md-12">
                  <div className="AddSection">
                     <div className="AddsBoxes d-flex align-items-center justify-space-between" style={{ gap: '20px' }}>
                        {advertisementData.map((card, index) => (
                           <div
                              key={index}
                              className="AddsContent relative hidden"
                              style={{ borderRadius: '5px', height: '227px' }}
                           >
                              <img
                                 src={`${API_GET}/${card.id}`}
                                 className='img-cover'
                                 alt={card.title}
                                 style={{ overflow: 'hidden', borderRadius: '5px', height: '100%' }}
                              />
                              <div
                                 className='absolute'
                                 style={{
                                    top: '0',
                                    zIndex: '9999',
                                    padding: '30px 20px',
                                    color: card.textColor,
                                 }}
                              >
                                 <div className="price" style={{ marginBottom: '10px' }}>
                                    <p style={{ fontSize: '18px', fontWeight: '500' }}>{card.price}</p>
                                 </div>
                                 <div className="ProWheel" style={{ marginBottom: '10px' }}>
                                    <h3 style={{ fontSize: '24px', fontWeight: '700', textTransform: 'uppercase' }}>{card.title}</h3>
                                 </div>
                                 <div className="txt" style={{ marginBottom: '10px' }}>
                                    <p style={{ fontWeight: '500', fontSize: '18px' }}>{card.text}</p>
                                 </div>
                                 <div className="button">
                                    <a style={{ textTransform: 'uppercase', fontSize: '14px' }}>Shop Now</a>
                                 </div>
                              </div>
                           </div>
                        ))}

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div >
   )
}

export default AddvertismentCards;