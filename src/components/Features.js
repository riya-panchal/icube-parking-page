import React from 'react';

function Features() {
  return (
    <section className="text-center py-5" style={{ backgroundColor: '#f4731d' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow-sm text-dark">
              <div className="feature-icon mx-auto mb-3">
                <img src="/images/qualityicon.jpg" alt="Quality Icon" />
              </div>
              <h4 className="fw-bold">8</h4>
              <p>Years of Quality</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow-sm text-dark">
              <div className="feature-icon mx-auto mb-3">
                <img src="/images/customericon.jpg" alt="Customers Icon" />
              </div>
              <h4 className="fw-bold">50+</h4>
              <p>Satisfied Customers</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow-sm text-dark">
              <div className="feature-icon mx-auto mb-3">
                <img src="/images/producticon.jpg" alt="Products Icon" />
              </div>
              <h4 className="fw-bold">25+</h4>
              <p>Range of Products</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="p-4 bg-white rounded shadow-sm text-dark">
              <div className="feature-icon mx-auto mb-3">
                <img src="/images/producedicon.jpg" alt="Units Icon" />
              </div>
              <h4 className="fw-bold">2000+</h4>
              <p>Units Produced & Installed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
