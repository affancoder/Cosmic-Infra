import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../CSS/Services.css";
import newtown from "../assets/images/newtown-villa.jpg";
import servicesBuilding from "../assets/images/service-building.png";
import services1 from "../assets/images/services1.png";
import services2 from "../assets/images/services2.png";
import services3 from "../assets/images/services3.png";
import man1 from "../assets/images/man1.png";
import man2 from "../assets/images/man2.png";
import girl1 from "../assets/images/girl1.png";
import thinking from "../assets/images/thinking.png"

function Services() {
  return (
    <>
      <Navbar />

      <main className="services-page">
        {/* =================================
            PART 1 - SERVICES HERO
        ================================= */}

        <section className="services-hero">
          <img
            src={newtown}
            alt="Our Services"
            className="services-hero-image"
          />

          <div className="services-hero-overlay"></div>

          <div className="services-hero-content">
            <h1>Our Services</h1>
          </div>
        </section>

        {/* =================================
            PART 1 - SERVICES
        ================================= */}

        <section className="services-list">
          {/* Service 1 */}
          <div className="service-card service-card-left">
            <div className="service-image">
              <img src={services1} alt="Property Sale" />
            </div>

            <div className="service-text">
              <h3>Looking to sell your property hassle-free?</h3>

              <p>
                Our real estate experts connect you with the right buyers
                ensuring a smooth and profitable transaction. List your property
                and get the best market value with our trusted platform.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-card service-card-right">
            <div className="service-image">
              <img src={services2} alt="Property Buying" />
            </div>

            <div className="service-text">
              <h3>Looking for the perfect home or investment?</h3>

              <p>
                Explore a wide range of properties tailored to your needs. Our
                team ensures a seamless buying experience from search to final
                purchase.Start exploring today!
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-card service-card-left">
            <div className="service-image">
              <img src={services3} alt="Asset Management" />
            </div>

            <div className="service-text">
              <h3>Smart Asset Management for Maximum Returns</h3>

              <p>
                Optimize your real estate investments with our expert asset
                management services. From property maintenance to financial
                planning, we ensure your assets grow in value while minimizing
                risks. Let us handle the details while you enjoy the profits!
              </p>
            </div>
          </div>
        </section>

        {/* =================================
    PART 2 - HAPPY CUSTOMERS
================================= */}

        <section className="happy-customers">
          <h2>Hear from Our Happy Customers</h2>

          <div className="customer-cards">
            {/* Customer 1 */}
            <div className="customer-card">
              <div className="customer-image">
                <img src={man1} alt="Happy Customer" />
              </div>

              <p>
                "Amazing experience! The process was smooth, and the team was
                incredibly helpful. Sold my property at a great price!"
              </p>

              <span>— Sarah M.</span>
            </div>

            {/* Customer 2 */}
            <div className="customer-card">
              <div className="customer-image">
                <img src={man2} alt="Happy Customer" />
              </div>

              <p>
                "Found my dream home effortlessly! The team guided me through
                every step, making the buying process stress-free."
              </p>

              <span>— James R.</span>
            </div>

            {/* Customer 3 */}
            <div className="customer-card">
              <div className="customer-image">
                <img src={girl1} alt="Happy Customer" />
              </div>

              <p>
                "Excellent asset management services! My investments are
                growing, and I have peace of mind knowing my properties are in
                good hands."
              </p>

              <span>— Emily T.</span>
            </div>
          </div>
        </section>

        {/* =================================
    PART 3 - FINAL CTA
================================= */}

        <section className="services-final">
          {/* CTA Heading */}
          <div className="final-title">
            <h2>Still thinking what to do??</h2>
          </div>

          {/* Floating Buttons */}
          <div className="floating-buttons">
            <button className="floating-button">💬</button>

            <button
              className="floating-button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              ↑
            </button>
          </div>

          {/* Final Content */}
          <div className="final-content">
            {/* Left Illustration */}
            <div className="final-question">
              <img src={thinking} alt="Have questions" />
            </div>

            {/* Right Property */}
            <div className="final-property">
              <img src={servicesBuilding} alt="Discover Properties" />

              <div className="discover-box">
                <span>DISCOVER</span>
                <span>PROPERTIES</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;
