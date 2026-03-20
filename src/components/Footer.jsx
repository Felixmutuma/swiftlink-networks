import "./Footer.css";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* LINKS */}
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3>Contact Us</h3>
          <p>Nairobi, Kenya</p>
          <p>Phone: +254 7XX XXX XXX</p>
          <p>Email: info@felixnet.co.ke</p>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h3>Follow Us</h3>
          <div className="socials">
            <a href="#"><FaFacebook/>Facebook</a>
            <a href="#"><FaXTwitter/>X</a>
            <a href="#"><FaWhatsapp/>WhatsApp</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 FelixNet Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}