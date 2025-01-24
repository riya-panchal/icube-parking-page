import React from "react";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left Section: Image with Overlay */}
        <div className="image-container">
          <img
            src="images/aboutus.jpg"
            alt="aboustus"
            className="main-image"
          />
          {/* Logo and Play Button */}
          <div className="logo-and-play">
            <img
              src="images/logo.jpg"
              alt="Logo"
              className="logo-image"
            />
            <div className="play-button-overlay">
              <i className="play-icon"></i>
            </div>
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="content-container">
          <h5 className="text-muted">Welcome to I-CUBE Parking Solutions</h5>
          <h3>About Us</h3>
          <p>
              <b>I-CUBE Parking Elevators</b> is a leading manufacturer of various types
              of car parking systems.
            </p>
            <p>
              The company specializes in providing
              customized parking solutions for commercial and residential spaces.
            </p>
            <p>
              We are the pioneers in providing space-saving, economic, user-friendly
              MADE IN INDIA 2000+ parking Solutions installable from the basement 
              to the rooftop
            </p>
          <div className="mt-3">
              <a
                href="#"
                className="btn btn-warning text-white me-2"
                style={{ borderRadius: '10px' }}
              >
                Read More
              </a>
              <a
                href="#"
                className="btn btn-outline-warning"
                style={{ borderRadius: '10px' }}
              >
                Download Brochure
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
