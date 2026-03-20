import "./Home.css";
import {motion} from "framer-motion"

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
    <section className="hero">
    <div className="overlay">
        <div className="container">
        <h1>Turn Your Apartment into a Smart Wi-Fi Property</h1>
        <p>
            Fast, reliable internet for tenants. Passive income for landlords.
        </p>
        <button className="btn">Check Your Building</button>
        </div>
    </div>
    </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2>How It Works</h2>
          <div className="grid">
            <motion.div
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            >
            <h3>We Install</h3>
            <p>We set up professional Wi-Fi across the building.</p>
            </motion.div>
            <motion.div className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
              <h3>Residents Subscribe</h3>
              <p>Flexible daily, weekly, and monthly plans.</p>
            </motion.div>
            <motion.div className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}>
              <h3>You Earn</h3>
              <p>Get monthly commission from subscriptions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section light">
        <div className="container">
          <h2>Why Choose FelixNet?</h2>
          <ul>
            <li>No installation cost for owners</li>
            <li>Reliable high-speed internet</li>
            <li>Professional maintenance & support</li>
            <li>Increase property value</li>
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="container">
            <h2>Affordable Packages for Residents</h2>

            <div className="grid">
            <div className="card">
                <h3>Daily</h3>
                <p>KSh 50</p>
                <p>Fast browsing & streaming</p>
            </div>

            <div className="card">
                <h3>Weekly</h3>
                <p>KSh 200</p>
                <p>Best for regular users</p>
            </div>

            <div className="card">
                <h3>Monthly</h3>
                <p>KSh 600</p>
                <p>Unlimited access</p>
            </div>
            </div>
        </div>
      </section>
      <section className="section light">
        <div className="container">
            <h2>Benefits for Apartment Owners</h2>

            <div className="grid">
            <div className="card">
                <h3>No Cost Installation</h3>
                <p>We install everything at zero cost to you.</p>
            </div>

            <div className="card">
                <h3>Monthly Income</h3>
                <p>Earn passive income from tenant subscriptions.</p>
            </div>

            <div className="card">
                <h3>Increase Property Value</h3>
                <p>Attract more tenants with reliable Wi-Fi.</p>
            </div>
            </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
            <h2>Get Your Building Connected</h2>
            <p>Contact us today for a free site survey.</p>

            <button className="btn">Contact on WhatsApp</button>
        </div>
       </section>
    </>
  );
}