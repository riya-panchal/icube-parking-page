import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Columns */}
        <div className="footer-columns">
          {/* Contact Us Section */}
          <div className="footer-column">
            <h3><b>Contact Us</b></h3>
            <p>
              <i className="fa fa-location"></i><b>Address : </b>
              <br></br>
              I-CUBE industries Pvt.Ltd.
              316 Akshar Complex, Near Shivranjani Cross Roads, Opposite Kalupur Bank, 
              Satelite, Ahmedabad - 380015
            </p>
            <p>
              <i className="fa fa-phone"></i> 
              <b>Phone: </b>
              <br></br>
              +91-95581 37093
            </p>
            <p>
              <i className="fa fa-envelope"></i> 
              <b>Email: </b>
              <br></br>
              info@icubeelevators.com
            </p>
          </div>

          {/* Useful Links Section */}
          <div className="footer-column">
            <h3><b>Useful Links</b></h3>
            <ul>
              <li><b>Home</b></li>
              <li><b>About</b></li>
              <li><b>Products</b></li>
              <li><b>Blogs</b></li>
              <li><b>Enquiry</b></li>
              <li><b>Career</b></li>
              <li><b>Contact</b></li>
              <li><b>Calculator</b></li>
              <li><b>Mobile App</b></li>
              <li><b>Client insights</b></li>
              <li><b>Parking Consultancy</b></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="footer-column">
            <h3><b>Products</b></h3>
            <ul>
              <li><b>Stack Parking System</b></li>
              <li><b>Suspended Parking System</b></li>
              <li><b>Pit Parking System</b></li>
              <li><b>Puzzle Parking System</b></li>
              <li><b>Rotary Parking System</b></li>
              <li><b>Two-Wheeler Parking System</b></li>
              <li><b>EV Cahrging Solution</b></li>
              <li><b>Customized Solution</b></li>
              <li><b>AMC</b></li>
              <li><b>Accessories</b></li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="footer-column">
            <h3><b>Get in Touch</b></h3>
            <iframe
              src="https://www.google.com/maps/embed"
              title="map"
              className="map"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer with Black Background */}
      <div className="footer-bottom">
        <p>&copy; 2025 I-CUBE Parking Solutions. All rights reserved.</p>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
