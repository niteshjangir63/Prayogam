import React from "react";
import "./Home.css"; // we'll add simple CSS for hover effects

function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
      >
        <div className="container hero-content">
          <h1 className="display-3 fw-bold mb-3">🌾 Millet Value Chain Platform</h1>
          <p className="lead mb-4">
            Connecting Farmers, SHGs, Startups and Consumers through a Digital Marketplace
          </p>
          <a href="/marketplace" className="btn btn-success btn-lg me-3 hero-btn">
            Explore Marketplace
          </a>
          <a href="/register" className="btn btn-light btn-lg hero-btn">
            Join Platform
          </a>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <h2 className="fw-bold text-success">10K+</h2>
              <p>Farmers Connected</p>
            </div>
            <div className="col-md-3 mb-3">
              <h2 className="fw-bold text-success">500+</h2>
              <p>Millet Products</p>
            </div>
            <div className="col-md-3 mb-3">
              <h2 className="fw-bold text-success">100+</h2>
              <p>Processing Startups</p>
            </div>
            <div className="col-md-3 mb-3">
              <h2 className="fw-bold text-success">50K+</h2>
              <p>Consumers</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Platform Features</h2>
          <div className="row g-4">
            {[
              { icon: "🌾", title: "Farmer Marketplace", desc: "Farmers and SHGs can directly sell millets to consumers and processors." },
              { icon: "🔍", title: "Traceability", desc: "Track millet products from farm to fork for transparency." },
              { icon: "📦", title: "Supply Chain", desc: "Integrated logistics and quality certification." },
              { icon: "💰", title: "Fair Pricing", desc: "Ensures farmers receive fair market value." },
              { icon: "🌍", title: "Multilingual", desc: "Supports regional languages for rural accessibility." },
              { icon: "📊", title: "Market Insights", desc: "Provides analytics and demand insights for farmers." },
            ].map((feature, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card shadow h-100 text-center p-4 feature-card">
                  <h3>{feature.icon}</h3>
                  <h5 className="mt-3">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILLET GALLERY */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Popular Millets</h2>
          <div className="row g-4">
            {[
              "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
              "https://images.unsplash.com/photo-1604908176881-3e7f2b937352",
              "https://images.unsplash.com/photo-1604908177000-97b68bc35cdb",
              "https://images.unsplash.com/photo-1604908176911-b69f964bce63",
            ].map((img, idx) => (
              <div key={idx} className="col-md-3">
                <img
                  src={img}
                  alt="millet"
                  className="img-fluid rounded shadow gallery-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">How It Works</h2>
          <div className="row text-center">
            {[
              { step: 1, title: "Register", desc: "Farmers and buyers create accounts." },
              { step: 2, title: "List Products", desc: "Farmers list millets and value-added products." },
              { step: 3, title: "Buy", desc: "Consumers browse marketplace and place orders." },
              { step: 4, title: "Delivery", desc: "Logistics partners deliver the products." },
            ].map((item, idx) => (
              <div key={idx} className="col-md-3 mb-3">
                <div className="step-card p-3">
                  <h1 className="text-success">{item.step}</h1>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="bg-success text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Join the Millet Revolution</h2>
          <p className="lead mb-4">Support sustainable agriculture and healthy diets.</p>
          <a href="/register" className="btn btn-light btn-lg cta-btn">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;