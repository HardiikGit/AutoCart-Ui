import { Link } from "react-router-dom";
import { useCart } from "../../Hooks/CartContext"
import { CiStar } from "react-icons/ci";
import { FaArrowLeftLong } from 'react-icons/fa6';

function CartProducts() {

  const { cart, removeFromCart } = useCart();

  return (
    <div className="CartName">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="Cart-Heading">
              <Link to="/" className="BackArrow">
                <FaArrowLeftLong />
              </Link>
            </div>
            <div className="Cart-Products d-flex">
              {cart.map((data, index) => (
                <div key={data.id} className="BodyCard" style={{ border: '1px solid #00000039', cursor: 'pointer', height: 'unset', width: '300px' }}>
                  <div className="BodyPartCard" style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                    <img src={data.image} className="img-contain" alt="" />
                  </div>
                  <div className="PartsDetails d-flex flexcolumn" style={{ gap: '10px', padding: '20px' }}>
                    <div className="PartName">
                      <a href="/" className="d-flex flexcolumn" style={{ color: 'var(--black-color)' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '500' }}>
                          {data.name}
                        </h4>
                      </a>
                    </div>
                    <div className="PartReview">
                      <a href="/" className="d-flex" style={{ gap: '2px', color: '#00000076', fontSize: '18px' }}>
                        <CiStar /><CiStar /><CiStar /><CiStar /><CiStar />
                      </a>
                    </div>
                    <div className="PartPrice">
                      <p style={{ color: 'var(--orange-color)', fontSize: '16px', fontWeight: '700' }}>{data.Price}</p>
                    </div>
                    <div className="d-flex align-items-center justify-space-between">
                      <div className="Quantity">
                        <p style={{ color: 'var(--black-color)', fontSize: '16px', fontWeight: '700' }}>Qty : {data.qty}</p>
                      </div>
                      <div className="RemoveCart">
                        <button
                          className="CartButton" style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', padding: '10px 15px', background: '#e1e1e160', border: '1px solid #e1e1e160', borderRadius: '5px', color: 'var(--black-color)' }} onClick={() => removeFromCart(data.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartProducts
