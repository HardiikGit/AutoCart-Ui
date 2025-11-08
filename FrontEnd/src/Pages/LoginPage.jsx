import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function LoginPage() {

 const navigate = useNavigate();

 return (
  <div className="container">
   <div className="LoginPageStyle d-flex align-items-center justify-content-center" style={{ width: '100%', height: '100vh' }} >
    <div className="Login" style={{ padding: '40px 20px', borderRadius: '10px', width: '40%', boxShadow: '0px 0px 40px 1px #ff840042', border: '1px solid var(--white-color)' }}>
     <div className="LoginHeading text-center" style={{ marginBottom: '30px' }}>
      <h2 style={{ fontSize: '32px', fontWeight: '800' }}>Login Auto Cart</h2>
     </div>
     <div className="LoginForm">
      <div style={{ marginBottom: '15px' }}>
       <div className="UserNameHeading" style={{ paddingBottom: '5px' }}>
        <p style={{ fontSize: '14px', color: 'var(--orange-color)' }}>Email / Phone No.</p>
       </div>
       <div className="UserEmailPhn">
        <input type="text" placeholder="Enter Email Address or Phone No." style={{ width: '100%', padding: '10px 20px', border: '1px solid var(--orange-color)', borderRadius: '5px', color: 'var(--orange-color)', fontSize: '14px', fontWeight: '500' }} />
       </div>
      </div>
      <div>
       <div className="UserNameHeading" style={{ paddingBottom: '5px' }}>
        <p style={{ fontSize: '14px', color: 'var(--orange-color)' }}>Password</p>
       </div>
       <div className="UserEmailPhn">
        <input type="password" placeholder="Enter Password" style={{ width: '100%', padding: '10px 20px', border: '1px solid var(--orange-color)', borderRadius: '5px', color: 'var(--orange-color)', fontSize: '14px', fontWeight: '500' }} />
       </div>
      </div>
      <div className="ForgotPassword" style={{ margin: '10px 0px', textAlign: 'right' }}>
       <a href="#" style={{ fontSize: '12px', fontWeight: '400', color: 'var(--orange-color)' }}>Forgot Password</a>
      </div>
      <div className="Submit text-center">
       <button className="SubmitBtn" style={{ fontSize: '16px', textTransform: 'uppercase', fontWeight: '500', padding: '10px 30px', borderRadius: '5px', border: 'none', background: 'var(--orange-color)', color: 'var(--white-color)' }} onClick={() => navigate("/")}>Login</button>
      </div>
     </div>
     <div className="OtherLogin d-flex align-items-center justify-content-center" style={{ marginTop: '30px', gap: '30px' }}>
      <div className="Social-links">
       <a href="#" style={{ fontSize: '22px', color: 'var(--orange-color)', transition: 'all ease .5s' }}><FaGoogle /></a>
      </div>
      <div className="Social-links">
       <a href="#" style={{ fontSize: '22px', color: 'var(--orange-color)', transition: 'all ease .5s' }}><FaApple /></a>
      </div>
      <div className="Social-links">
       <a href="#" style={{ fontSize: '22px', color: 'var(--orange-color)', transition: 'all ease .5s' }}><FaXTwitter /></a>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default LoginPage;
