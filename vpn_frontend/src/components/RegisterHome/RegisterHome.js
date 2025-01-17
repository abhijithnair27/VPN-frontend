import React from "react";
import "./RegisterHome.css";
// import homeImage from '../../../public/images/home.jpg';
import homeImage from '../../assests/testimage.jpg';
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const RegisterHome = () => {
  return (
    <div>
        <Navbar />
    <div className="home">
      {/* Header Section */}
      <header className="home-header" style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        height: '400px',
        width: '100%',
        
      }}>
        <div className="home-banner">
          <h1>Welcome to Community Safety</h1>
          <p>
            Connect with your local police department, access resources, and
            report non-emergency incidents.
          </p>
          {/* <button className="home-button">Create an account</button> */}
          <Link to="/register" className="home-button">Create an account</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="home-features">
        <h2>Features</h2>
        <p>
          Community Safety is your one-stop resource for all things public
          safety. Whether you're looking for help, want to report a concern, or
          simply need information, we're here to assist you.
        </p>
        <div className="feature-cards">
          <div className="feature-card">
            <span role="img" aria-label="police">🔍</span>
            <h3>Find a police station</h3>
            <p>Locate the nearest station, view contact info, hours, and services.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="report">📝</span>
            <h3>Report a non-emergency incident</h3>
            <p>Submit a report, attach photos, and track progress.</p>
          </div>
          <div className="feature-card">
            <span role="img" aria-label="resources">📚</span>
            <h3>Access resources</h3>
            <p>Find safety tips, learn about local programs, and more.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="home-cta">
        <h2>Ready to get started?</h2>
        <button className="home-button">Create an account</button>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        <div className="footer-links">
          <a href="/privacy">Privacy policy</a>
          <a href="/terms">Terms of service</a>
        </div>
        <p>© 2022 Community Safety</p>
      </footer>
    </div>
    </div>
    
  );
};

export default RegisterHome;
