import "./Contact.css";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";


export default function Contact() {
    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
    ).then(
        
        () => alert("Message sent successfully!"),
        () => alert("Failed to send message")
    );

    e.target.reset();
    }


  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="overlay">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Let’s connect your building to fast and reliable internet.</p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="section">
        <div className="container contact-grid">

          {/* FORM */}
          <div className="contact-form">
            <h2>Send Us a Message</h2>

            <form onSubmit={sendEmail}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Apartment Name / Location" />
              <textarea placeholder="Your Message" rows="5"></textarea>

              <button className="btn">Send Message</button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <p><FaMapMarkerAlt /> Nairobi, Kenya</p>
            <p><FaPhone /> +254 7XX XXX XXX</p>
            <p><FaEnvelope /> info@felixnet.co.ke</p>

            <a
              href="https://wa.me/2547XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}