import "./About.css";
import { FaBullseye, FaEye, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <div className="overlay">
          <div className="container">
            <h1>About FelixNet Solutions</h1>
            <p>
              Connecting apartments with fast, reliable, and affordable internet solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container story-section">

            {/* IMAGE */}
            <div className="story-image">
            <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                alt="Team working"
            />
            </div>

            {/* TEXT */}
            <div className="story-text">
            <h2>Who We Are</h2>

            <p className="highlight">
                We are a modern network solutions company helping apartment buildings
                become smart, connected spaces.
            </p>

            <p>
                FelixNet Solutions focuses on delivering high-speed, reliable Wi-Fi
                for apartment buildings. We handle everything from installation to
                maintenance, ensuring tenants enjoy seamless internet access.
            </p>

            <p>
                Our approach is simple — provide value to both tenants and property
                owners by combining technology, reliability, and affordability.
            </p>
            </div>

        </div>
     </section>

      {/* MISSION & VISION */}
      <section className="section light">
        <div className="container grid">

          <div className="card">
            <FaBullseye size={30} />
            <h3>Our Mission</h3>
            <p>
              To deliver fast, reliable, and affordable internet solutions that improve
              everyday living for tenants and create value for property owners.
            </p>
          </div>

          <div className="card">
            <FaEye size={30} />
            <h3>Our Vision</h3>
            <p>
              To become the leading provider of smart apartment connectivity solutions
              across Kenya and beyond.
            </p>
          </div>

          <div className="card">
            <FaUsers size={30} />
            <h3>Our Values</h3>
            <p>
              Reliability, innovation, customer satisfaction, and long-term partnerships
              with our clients.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <h2>Why Choose FelixNet?</h2>

          <div className="grid">
            <div className="card">
              <h3>Professional Installation</h3>
              <p>We use modern equipment and structured cabling for reliable performance.</p>
            </div>

            <div className="card">
              <h3>Reliable Support</h3>
              <p>We monitor and maintain networks to ensure minimal downtime.</p>
            </div>

            <div className="card">
              <h3>Business-Oriented</h3>
              <p>We help property owners earn passive income from Wi-Fi services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section light">
        <div className="container">
          <h2>What Our Customers Say</h2>

          <div className="grid">
            <div className="card">
              <p>
                “FelixNet transformed our apartment with fast and reliable internet.
                Tenants are happier and we earn extra income monthly.”
              </p>
              <h4>- Apartment Owner</h4>
            </div>

            <div className="card">
              <p>
                “The network is stable and affordable. Best decision for our building.”
              </p>
              <h4>- Tenant</h4>
            </div>

            <div className="card">
              <p>
                “Professional installation and excellent support. Highly recommend.”
              </p>
              <h4>- Property Manager</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}