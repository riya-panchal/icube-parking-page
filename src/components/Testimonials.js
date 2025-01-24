import React, { useState } from "react";

const testimonials = [
  {
    image: "/images/client.jpg", // Replace with actual image URL
    text: "Great service! They understood our requirements and delivered an exceptional solution for our business needs.",
    name: "Client Name",
    profession: "Profession",
  },
  {
    image: "/images/client2.jpg", // Replace with actual image URL
    text: "Amazing experience! Highly professional team and outstanding quality of work.",
    name: "John Doe",
    profession: "CEO, ABC Corp",
  },
  {
    image: "/images/client3.jpg", // Replace with actual image URL
    text: "Their expertise and commitment ensured our project’s success. I highly recommend them!",
    name: "Jane Smith",
    profession: "CTO, XYZ Ltd",
  },
];

const logos = [
  "/images/adani.png", // Replace with logo URLs
  "/images/sintex.png",
  "/images/tata.png",
  "/images/LT.png",
  "/images/reliance.png",
  "/images/arvind.png",
  "/images/real_estate.png",
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonials-container">
      {/* Logo Section */}
      <div className="logo-section">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="logo" />
        ))}
      </div>

      {/* Title */}
      <h2 className="testimonials-title">Testimonials</h2>

      {/* Testimonial Card */}
      <div className="testimonial-card">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8592;
        </button>
        <div className="testimonial-content">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />
          <div className="testimonial-text-card">
            <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
            <h3 className="client-name">{testimonials[currentIndex].name}</h3>
            <p className="client-profession">{testimonials[currentIndex].profession}</p>
          </div>
        </div>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
