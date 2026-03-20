import "./Services.css";
import { FaWifi, FaTools, FaVideo, FaNetworkWired } from "react-icons/fa";

export default function Services() {
  return (
    <div className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="overlay">
          <div className="container">
            <h1>Our Services</h1>
            <p>
              We provide reliable internet and security solutions for apartment buildings.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section">
        <div className="container grid">

          {/* WIFI INSTALLATION */}
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1581091870627-3f7b5c4b8b7e" alt="WiFi Installation" />
            <FaWifi size={30} />
            <h3>Wi-Fi Installation</h3>
            <p>
              We design and install high-speed Wi-Fi networks covering all floors and rooms in apartment buildings.
            </p>
          </div>

          {/* MAINTENANCE */}
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1581093588401-22a3b8b3a3b3" alt="Maintenance" />
            <FaTools size={30} />
            <h3>Network Maintenance</h3>
            <p>
              We monitor and maintain the network to ensure fast, stable, and reliable internet for all users.
            </p>
          </div>

          {/* CCTV */}
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" alt="CCTV" />
            <FaVideo size={30} />
            <h3>CCTV Installation</h3>
            <p>
              Enhance security with high-quality surveillance cameras for apartments and businesses.
            </p>
          </div>

          {/* NETWORK OPTIMIZATION */}
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31" alt="Network Optimization" />
            <FaNetworkWired size={30} />
            <h3>Network Optimization</h3>
            <p>
              We optimize your network for maximum speed, performance, and user experience.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}