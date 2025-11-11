const footerData = {
 aboutStore: {
  title: 'About Our Store',
  description: 'Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service. Our store is a haven for those who appreciate quality, style, and innovation.',
  appLinks: [
   { name: 'App Store', icon: 'fa-apple', link: '#' }, // Using Font Awesome icons as placeholders
   { name: 'Google Play', icon: 'fa-google-play', link: '#' }
  ]
 },
 yourAccount: {
  title: 'Your Account',
  links: [
   { name: 'Search', link: '#' },
   { name: 'About Us', link: '#' },
   { name: 'Delivery Information', link: '#' },
   { name: 'Contact', link: '#' },
   { name: 'FAQs', link: '#' },
   { name: 'Shipping', link: '#' }
  ]
 },
 quickLinks: {
  title: 'Quick Links',
  links: [
   { name: 'Privacy Policy', link: '#' },
   { name: 'Refund Policy', link: '#' },
   { name: 'Shipping Policy', link: '#' },
   { name: 'Terms of Service', link: '#' },
   { name: 'Policy for Buyers', link: '#' },
   { name: 'Policy for Sellers', link: '#' }
  ]
 },
 footerLinks: {
  title: 'Footer Links',
  links: [
   { name: 'Size Chart', link: '#' },
   { name: 'Contact', link: '#' },
   { name: 'About Us', link: '#' },
   { name: 'FAQs', link: '#' },
   { name: 'Shipping & Refund', link: '#' },
   { name: 'Sitemap', link: '#' }
  ]
 },
 contactUs: {
  title: 'Contact Us',
  details: [
   { icon: 'fa-map-marker-alt', text: 'Autokart - Auto Parts Store 507-Union Trade Ipsum Doler Centre France' },
   { icon: 'fa-envelope', text: 'demo@example.com' },
   { icon: 'fa-phone-alt', text: '(+91) 9876-543-210' }
  ]
 },
 socialMedia: [
  { icon: 'fa-facebook-f', link: '#' },
  { icon: 'fa-instagram', link: '#' },
  { icon: 'fa-youtube', link: '#' },
  { icon: 'fa-pinterest-p', link: '#' },
  { icon: 'fa-twitter', link: '#' }
 ],
 copyright: '© 2025, Autokart - Auto Parts Store (Password: demo) Powered by Shopify',
 paymentMethods: [
  { name: 'Visa', src: 'path/to/visa.png' }, // Replace with actual image paths
  { name: 'Mastercard', src: 'path/to/mastercard.png' },
  { name: 'Amex', src: 'path/to/amex.png' },
  { name: 'Discover', src: 'path/to/discover.png' },
  { name: 'Diners Club', src: 'path/to/diners.png' }
 ]
};

function Footer() {
 return (
  <footer className="container">
   <div className="row">
    <div className="col-lg-12">
     <div className="footer-top">
      <div className="footer-column about-store">
       <h3>{footerData.aboutStore.title}</h3>
       <p>{footerData.aboutStore.description}</p>
       <div className="app-links">
        {footerData.aboutStore.appLinks.map((app, index) => (
         <a key={index} href={app.link} className="app-button">
          <i className={`fab ${app.icon}`}></i> {app.name}
         </a>
        ))}
       </div>
      </div>

      <div className="footer-column">
       <h3>{footerData.yourAccount.title}</h3>
       <ul>
        {footerData.yourAccount.links.map((link, index) => (
         <li key={index}><a href={link.link}>{link.name}</a></li>
        ))}
       </ul>
      </div>

      <div className="footer-column">
       <h3>{footerData.quickLinks.title}</h3>
       <ul>
        {footerData.quickLinks.links.map((link, index) => (
         <li key={index}><a href={link.link}>{link.name}</a></li>
        ))}
       </ul>
      </div>

      <div className="footer-column">
       <h3>{footerData.footerLinks.title}</h3>
       <ul>
        {footerData.footerLinks.links.map((link, index) => (
         <li key={index}><a href={link.link}>{link.name}</a></li>
        ))}
       </ul>
      </div>

      <div className="footer-column contact-us">
       <h3>{footerData.contactUs.title}</h3>
       {footerData.contactUs.details.map((detail, index) => (
        <div key={index} className="contact-item">
         <i className={`fas ${detail.icon}`}></i>
         <span>{detail.text}</span>
        </div>
       ))}
      </div>
     </div>

     <div className="footer-bottom">
      <div className="social-media">
       {footerData.socialMedia.map((social, index) => (
        <a key={index} href={social.link} className="social-icon">
         <i className={`fab ${social.icon}`}></i>
        </a>
       ))}
      </div>
      <p className="copyright">{footerData.copyright}</p>
      <div className="payment-methods">
       {footerData.paymentMethods.map((method, index) => (
        <img key={index} src={method.src} alt={method.name} />
       ))}
      </div>
     </div>
    </div>
   </div>
  </footer>
 );
};

export default Footer;