import { RxCross2 } from "react-icons/rx";

function Test() {
 return (
  <>
   <div className="Responsive_Navigation">
    <div className="Head d-flex justify-space-between" style={{
     padding: '10px 0px', borderBottom: '1px solid var(--grey-color)'
    }} >
     <div className="Heading">
      <h2 style={{ textTransform: 'uppercase', fontSize: '26px', fontWeight: '500' }}>Menu</h2>
     </div>
     <div className="Cross-X" style={{ position: 'relative', zIndex: '999999999999' }}>
      <button style={{ background: 'none', padding: '10px', border: 'none', fontSize: '28px' }} onClick={() => setIsOpen(false)}>
       <RxCross2 />
      </button>
     </div>
    </div>
    <div className="Responsive_List" style={{ borderBottom: '1px solid var(--grey-color)', padding: '20px 0px' }}>
     <ul className="d-flex flexcolumn" style={{ gap: '25px' }}>
      <li className="Links">
       <a href="#" style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--black-color)' }}>Home</a>
      </li>
      <li className="Links">
       <a href="#" style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--black-color)' }}>Home</a>
      </li>
      <li className="Links">
       <a href="#" style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--black-color)' }}>Home</a>
      </li>
      <li className="Links">
       <a href="#" style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--black-color)' }}>Home</a>
      </li>
      <li className="Links">
       <a href="#" style={{ fontSize: '16px', fontWeight: '600', textTransform: 'uppercase', color: 'var(--black-color)' }}>Home</a>
      </li>
     </ul>
    </div>
   </div>
  </>
 )
}

export default Test;
