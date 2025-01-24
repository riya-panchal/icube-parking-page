import React from "react";

const QuickEnquiry = () => {
  return (
    <div className="quick-enquiry-card">
      {/* Quick Enquiry Section */}
      <div className="quick-enquiry">
        <h2>Quick Enquiry</h2>
        <form>
          {/* Your Name and Email */}
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          {/* Country and Contact Number */}
          <div className="form-row">
            <div className="form-group">
              <label>Country</label>
              <select>
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input type="tel" placeholder="Enter contact number" />
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label>Leave a Message for Us</label>
            <textarea placeholder="Enter your message"></textarea>
          </div>

          {/* Send Message Button */}
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="contact-information">
        <h2>Contact Information</h2>
        <div className="contact-info-item">
          <div className="icon">👤</div>
          <p><strong>I-CUBE Innovations Pvt. Ltd.</strong></p>
        </div>
        <div className="contact-info-item">
          <div className="icon">📍</div>
          <p>
            <b>
              I-CUBE industries Pvt.Ltd.
              316 Akshar Complex, Near Shivranjani Cross Roads, Opposite Kalupur Bank, 
              Satelite, Ahmedabad - 380015
            </b>
          </p>
        </div>
        <div className="contact-info-item">
          <div className="icon">📞</div>
          <p>+91-95581 37093</p>
        </div>
        <div className="contact-info-item">
          <div className="icon">📧</div>
          <p>info@icubeelevators.com</p>
        </div>
      </div>
    </div>
  );
};

export default QuickEnquiry;
