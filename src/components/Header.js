import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-dark text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <a href="tel:+91-95581 37093" className="text-white mx-2">
              Call Us: +91-95581 37093
            </a>
            <a href="mailto:info@icubeparking.com" className="text-white mx-2">
              info@icubeparking.com
            </a>
          </div>
          <div>
            <span className="me-2">Follow Us:</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-1">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-1">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white mx-1">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <Navbar bg="light" expand="lg" sticky="top">
        <div className="container text-center">
          {/* Logo */}
          <Navbar.Brand href="#" className="d-block mb-3">
            <img
              src="images/logo.jpg" // Replace with your logo URL
              alt="I-CUBE Logo"
              height="50"
              className="d-block mx-auto"
            />
          </Navbar.Brand>

          {/* Navigation Links */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex flex-column flex-lg-row justify-content-center w-100">
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                About Us
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Products
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Blogs
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Enquiry
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Career
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Contact
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Calculator
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Mobile Apps
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Client insights
              </Nav.Link>
              <Nav.Link href="#" className="mx-2 nav-link-custom">
                Parking Consultancy
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
