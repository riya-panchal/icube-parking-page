import React, { useState } from "react";

function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { title: "Stack Parking System", image: "/images/product1.jpg" },
    { title: "Suspended Parking System", image: "/images/product2.jpg" },
    { title: "Pit Parking System", image: "/images/product3.jpg" },
    { title: "Puzzle Parking System", image: "/images/product4.jpg" },
    { title: "Rotary Parking System", image: "/images/product5.jpg" },
    { title: "Two-wheeler Parking System", image: "/images/product6.jpg" },
    { title: "EV Charging Solution", image: "/images/product7.jpg" },
    { title: "Customized Solution", image: "/images/product8.jpg" },
    { title: "AMC", image: "/images/product9.jpg" },
    { title: "Accessories", image: "/images/product10.jpg" },
  ];

  const itemsPerSlide = 3; // Number of items visible at a time
  const totalProducts = products.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + itemsPerSlide) % totalProducts
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - itemsPerSlide + totalProducts) % totalProducts
    );
  };

  return (
    <section className="text-center py-5">
      <div className="container">
        <h2 className="mb-4" style={{ color: "#f4731d" }}>
          Our Products
        </h2>
        <div className="carousel-container position-relative d-flex align-items-center">
          {/* Left Arrow */}
          <button
            className="carousel-arrow left-arrow"
            onClick={prevSlide}
            aria-label="Previous"
          >
            &#8249;
          </button>

          {/* Product Slides */}
          <div className="row flex-nowrap overflow-hidden w-100">
            {products
              .slice(currentIndex, currentIndex + itemsPerSlide)
              .map((product, index) => (
                <div className="col-md-4" key={index}>
                  <div className="product-card shadow-sm">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="img-fluid"
                    />
                    <h4 className="mt-3">{product.title}</h4>
                    <button className="btn" style={{ backgroundColor: "#f4731d", color: "#fff" }}>
                      Read More
                    </button>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Arrow */}
          <button
            className="carousel-arrow right-arrow"
            onClick={nextSlide}
            aria-label="Next"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
