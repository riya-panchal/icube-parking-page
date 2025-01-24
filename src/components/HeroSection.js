import React from 'react';
import { Carousel } from 'react-bootstrap';

function HeroSection() {
  return (
    <section>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/picture1.jpg" alt="Parking System 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/picture2.jpg" alt="Parking System 2" />
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default HeroSection;
