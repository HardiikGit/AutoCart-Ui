import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PiAppStoreLogoBold } from "react-icons/pi";
import { FaFacebookF, FaMapPin, FaPhoneAlt, FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { RiVisaLine, RiMastercardLine } from "react-icons/ri";
import { GrAmex } from "react-icons/gr";
import { SiDiscover } from "react-icons/si";
import { LiaCcDinersClub } from "react-icons/lia";

const footerData = {
  aboutStore: {
    title: "About Our Store",
    description:
      "Welcome to our store, where we pride ourselves on providing exceptional products and unparalleled customer service. Our store is a haven for those who appreciate quality, style, and innovation.",
    appLinks: [
      { name: "App Store", icon: <PiAppStoreLogoBold />, link: "#" },
      { name: "Google Play", icon: <IoLogoGooglePlaystore />, link: "#" },
    ],
  },

  yourAccount: {
    title: "Your Account",
    links: [
      { name: "Search", link: "#" },
      { name: "About Us", link: "#" },
      { name: "Delivery Information", link: "#" },
      { name: "Contact", link: "#" },
      { name: "FAQs", link: "#" },
      { name: "Shipping", link: "#" },
    ],
  },

  quickLinks: {
    title: "Quick Links",
    links: [
      { name: "Privacy Policy", link: "#" },
      { name: "Refund Policy", link: "#" },
      { name: "Shipping Policy", link: "#" },
      { name: "Terms of Service", link: "#" },
      { name: "Policy for Buyers", link: "#" },
      { name: "Policy for Sellers", link: "#" },
    ],
  },

  footerLinks: {
    title: "Footer Links",
    links: [
      { name: "Size Chart", link: "#" },
      { name: "Contact", link: "#" },
      { name: "About Us", link: "#" },
      { name: "FAQs", link: "#" },
      { name: "Shipping & Refund", link: "#" },
      { name: "Sitemap", link: "#" },
    ],
  },

  contactUs: {
    title: "Contact Us",
    details: [
      { icon: <FaMapPin />, text: "Autokart - Auto Parts Store 507-Union Trade Ipsum Doler Centre France" },
      { icon: <IoIosMail />, text: "demo@example.com" },
      { icon: <FaPhoneAlt />, text: "(+91) 9876-543-210" },
    ],
  },

  socialMedia: [
    { name: "Facebook", link: "#", icon: <FaFacebookF /> },
    { name: "Instagram", link: "#", icon: <FaInstagram /> },
    { name: "YouTube", link: "#", icon: <FaYoutube /> },
    { name: "Pinterest", link: "#", icon: <FaPinterestP /> },
    { name: "Twitter", link: "#", icon: <FaTwitter /> },
  ],

  copyright:
    "© 2025, Autokart - Auto Parts Store (Password: demo) Powered by Shopify",

  paymentMethods: [
    { name: "Visa", icon: <RiVisaLine /> },
    { name: "Mastercard", icon: <RiMastercardLine /> },
    { name: "Amex", icon: <GrAmex /> },
    { name: "Discover", icon: <SiDiscover /> },
    { name: "Diners Club", icon: <LiaCcDinersClub /> },
  ],
};

function Footer() {
  return (
    <footer className="container">
      <div className="row">
        <div className="col-lg-12">

          <div className="footer-top d-flex align-items-center justify-space-between mx-auto">
            <div className="footer-column about-store">
              <h3>{footerData.aboutStore.title}</h3>
              <p>{footerData.aboutStore.description}</p>

              <div className="app-links d-flex align-items-center">
                {footerData.aboutStore.appLinks.map((app, i) => (
                  <a key={i} href={app.link} className="app-button d-flex align-items-center" style={{ gap: "10px" }}>
                    {app.icon}
                    <span>{app.name}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="footer-column">
              <h3>{footerData.yourAccount.title}</h3>
              <ul>
                {footerData.yourAccount.links.map((link, i) => (
                  <li key={i}><a href={link.link}>{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h3>{footerData.quickLinks.title}</h3>
              <ul>
                {footerData.quickLinks.links.map((link, i) => (
                  <li key={i}><a href={link.link}>{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column">
              <h3>{footerData.footerLinks.title}</h3>
              <ul>
                {footerData.footerLinks.links.map((link, i) => (
                  <li key={i}><a href={link.link}>{link.name}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-column contact-us">
              <h3>{footerData.contactUs.title}</h3>
              {footerData.contactUs.details.map((detail, i) => (
                <div key={i} className="contact-item d-flex">
                  <span>{detail.icon}</span>
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="footer-bottom d-flex align-items-center justify-space-between" style={{ padding: '10px 0px' }}>
            <div className="social-media d-flex align-items-center" style={{ gap: '20px' }}>
              {footerData.socialMedia.map((social, i) => (
                <a key={i} href={social.link} className="social-icon d-flex align-items-center justify-content-center" style={{ gap: '10px' }}>
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="pari">
              <p className="copyright">{footerData.copyright}</p>
            </div>
            <div className="payment-methods d-flex align-items-center justify-content-center" style={{ gap: '15px', fontSize: '18px' }}>
              {footerData.paymentMethods.map((method, i) => (
                <i key={i} className="payment-icon d-flex align-items-center justify-content-center" style={{ fontSize: '22px' }}>
                  {method.icon}
                </i>
              ))}
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
