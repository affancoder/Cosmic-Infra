import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../CSS/Home.css";

import property1 from "../assets/images/property-1.jpg";
import property2 from "../assets/images/property-2.jpg";
import property3 from "../assets/images/property-3.jpg";
import client from "../assets/images/client.jpg";
import apartment from "../assets/images/apartment.png";
import house from "../assets/images/house.png";
import office from "../assets/images/office.png";
import newtownVilla from "../assets/images/newtown-villa.jpg";
import categoryHouse from "../assets/images/category-house.jpg";
import serviceSell from "../assets/images/service-sell.png";
import serviceBuy from "../assets/images/service-buy.png";
import serviceManagement from "../assets/images/service-management.png";
import realtor from "../assets/images/realtor.jpg";

function Home() {
  return (
    <>
      <Navbar />

      <main className="main-content">
        <section className="hero-section">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-left">
              <h1>
                FIND YOUR
                <br />
                <strong>DREAM</strong>
                <br />
                <span>TODAY</span>
              </h1>

              {/* Search Box */}
              <div className="property-search">
                <div className="search-field">
                  <label>Location</label>
                  <p>Search Location</p>
                </div>

                <div className="search-field">
                  <label>Property Status</label>
                  <p>For Sale</p>
                </div>

                <div className="search-field">
                  <label>Property Type</label>
                  <p>All Types</p>
                </div>

                <button className="search-btn">🔍</button>
              </div>
            </div>

            {/* Right Form */}
            <div className="hero-form">
              <h3>Let's Go Call You!</h3>

              <p className="form-subtitle">Talk to our property experts</p>

              <input type="text" placeholder="Your Name" />

              <input type="tel" placeholder="Your Mobile" />

              <select>
                <option>Select City</option>
                <option>Bengaluru</option>
                <option>Delhi</option>
                <option>Mumbai</option>
              </select>

              <textarea placeholder="Write your message" rows="2"></textarea>

              <button className="form-btn">Submit</button>
            </div>
          </div>
        </section>

        {/* Recent Properties Section */}

        <section className="recent-properties">
          <div className="section-heading">
            <p>Recent</p>
            <h2>Properties</h2>
            <span>check out some of our latest properties</span>
          </div>

          <button className="view-all-btn">View All</button>

          <div className="property-cards">
            {/* Card 1 */}
            <div className="property-card">
              <img src={property1} alt="Property" />

              <div className="property-info">
                <h3>CHITRAKUT HEIGHTS</h3>

                <p>📍 Jaipur</p>

                <div className="property-bottom">
                  <strong>₹75 Lakhs</strong>

                  <button>View Details</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="property-card">
              <img src={property2} alt="Property" />

              <div className="property-info">
                <h3>BHAWANI NIVARA</h3>

                <p>📍 Malad</p>

                <div className="property-bottom">
                  <strong>₹52 Lakhs</strong>

                  <button>View Details</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="property-card">
              <img src={property3} alt="Property" />

              <div className="property-info">
                <h3>OTC CAPITAL CITY</h3>

                <p>📍 Ahmedabad</p>

                <div className="property-bottom">
                  <strong>₹25 Crore</strong>

                  <button>View Details</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonial Section */}

        <section className="testimonial-section">
          <div className="testimonial-heading">
            <h2>What's Client Say</h2>
          </div>

          <div className="testimonial-content">
            {/* Quote */}
            <div className="testimonial-quote">
              <span>"</span>
            </div>

            {/* Left Arrow */}
            <button className="testimonial-arrow left-arrow">‹</button>

            {/* Testimonial Text */}
            <div className="testimonial-text">
              <h3>Bliss Residency, Aydar</h3>

              <p>
                "I am extremely happy with my experience. The attention to
                detail and professionalism made my home buying journey smooth
                and stress-free. I highly recommend their services!"
              </p>
            </div>

            {/* Client Image */}
            <div className="client-image">
              <img src={client} alt="Client" />
            </div>

            {/* Client Details */}
            <div className="client-details">
              <h4>John</h4>
              <p>Business</p>
              <p>Engineer</p>
            </div>

            {/* Right Arrow */}
            <button className="testimonial-arrow right-arrow">›</button>
          </div>

          {/* Slider Line */}
          <div className="testimonial-slider">
            <span></span>
          </div>
        </section>

        {/* What Are You Looking For Section */}

        <div className="looking-heading">
          <p>WE'RE HERE TO HELP YOU</p>
          <h2>WHAT ARE YOU LOOKING FOR?</h2>
        </div>

        <section className="looking-section">
          <div className="looking-cards">
            {/* Apartments */}
            <div className="looking-card">
              <div className="looking-image">
                <img src={apartment} alt="Apartments" />
              </div>

              <div className="looking-info">
                <h3>APARTMENTS</h3>

                <p>
                  Find modern apartments designed for comfortable living with
                  excellent amenities and convenient locations.
                </p>
              </div>
            </div>

            {/* Houses */}
            <div className="looking-card">
              <div className="looking-image">
                <img src={house} alt="Houses" />
              </div>

              <div className="looking-info">
                <h3>HOUSES</h3>

                <p>
                  Discover beautiful homes with spacious layouts, premium
                  surroundings and everything your family needs.
                </p>
              </div>
            </div>

            {/* Offices */}
            <div className="looking-card">
              <div className="looking-image">
                <img src={office} alt="Offices" />
              </div>

              <div className="looking-info">
                <h3>OFFICES</h3>

                <p>
                  Explore professional office spaces in prime locations suitable
                  for businesses of every size.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bottom-gap"></div>

        {/* Categories Section */}

        <div className="category-top">
          <img src={newtownVilla} alt="House" />

          <div className="categories-heading">
            <p>FIND YOUR PERFECT HOME</p>
            <h2>CATEGORIES</h2>
          </div>
        </div>

        <section className="categories-section">
          <div className="categories-container">
            <div className="categories-grid">
              {/* House */}
              <div className="category-card">
                <div className="category-image">
                  <img src={categoryHouse} alt="House" />

                  <div className="category-image-overlay"></div>

                  <h3>House</h3>
                </div>

                <div className="category-content">
                  <p>
                    GET YOUR DREAM HOME TODAY. WE ARE HERE TO HELP YOU FIND THE
                    PERFECT HOUSE WITH GREAT LOCATIONS AND MODERN AMENITIES.
                  </p>
                </div>
              </div>

              {/* Office */}
              <div className="category-card">
                <div className="category-image">
                  <img src={categoryHouse} alt="Office" />

                  <div className="category-image-overlay"></div>

                  <h3>Office</h3>
                </div>

                <div className="category-content">
                  <p>
                    FIND YOUR IDEAL WORKSPACE WITH PREMIUM LOCATIONS, MODERN
                    FACILITIES AND FLEXIBLE OPTIONS FOR YOUR BUSINESS.
                  </p>
                </div>
              </div>

              {/* Land */}
              <div className="category-card">
                <div className="category-image">
                  <img src={categoryHouse} alt="Land" />

                  <div className="category-image-overlay"></div>

                  <h3>Land</h3>
                </div>

                <div className="category-content">
                  <p>
                    THE RIGHT LAND CAN BE A GREAT INVESTMENT. EXPLORE PRIME
                    LOCATIONS SUITABLE FOR RESIDENTIAL AND COMMERCIAL PURPOSES.
                  </p>
                </div>
              </div>

              {/* Villa */}
              <div className="category-card">
                <div className="category-image">
                  <img src={categoryHouse} alt="Villa" />

                  <div className="category-image-overlay"></div>

                  <h3>Villa</h3>
                </div>

                <div className="category-content">
                  <p>
                    ENJOY LUXURY LIVING IN BEAUTIFUL VILLAS WITH SPACIOUS
                    INTERIORS, PREMIUM AMENITIES AND PEACEFUL SURROUNDINGS.
                  </p>
                </div>
              </div>

              {/* Shop */}
              <div className="category-card">
                <div className="category-image">
                  <img src={categoryHouse} alt="Shop" />

                  <div className="category-image-overlay"></div>

                  <h3>Shop</h3>
                </div>

                <div className="category-content">
                  <p>
                    FIND COMMERCIAL SPACES IN PRIME LOCATIONS THAT HELP YOUR
                    BUSINESS GROW AND ATTRACT MORE CUSTOMERS.
                  </p>
                </div>
              </div>

              {/* Lease */}
              <div className="category-card">
                <div className="category-image">
                  <img src={categoryHouse} alt="Lease" />

                  <div className="category-image-overlay"></div>

                  <h3>Lease</h3>
                </div>

                <div className="category-content">
                  <p>
                    ACQUIRE PROPERTY ON LEASE AND CHOOSE FROM A WIDE RANGE OF
                    RESIDENTIAL AND COMMERCIAL OPTIONS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}

        <section className="services-section">
          <div className="services-container">
            {/* Heading */}
            <div className="services-heading">
              <p>Check Out</p>
              <h2>OUR SERVICES</h2>
            </div>

            {/* Services Cards */}
            <div className="services-grid">
              {/* Buy Property */}
              <div className="service-card">
                <div className="service-image">
                  <img src={serviceSell} alt="Buy Property" />

                  <div className="service-overlay"></div>

                  <div className="service-title">
                    <h3>BUY PROPERTY</h3>
                  </div>
                </div>
              </div>

              {/* Sell Property */}
              <div className="service-card">
                <div className="service-image">
                  <img src={serviceBuy} alt="Sell Property" />

                  <div className="service-overlay"></div>

                  <div className="service-title">
                    <h3>SELL PROPERTY</h3>
                  </div>
                </div>
              </div>

              {/* Asset Management */}
              <div className="service-card">
                <div className="service-image">
                  <img src={serviceManagement} alt="Asset Management" />

                  <div className="service-overlay"></div>

                  <div className="service-title">
                    <h3>ASSET MANAGEMENT</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AR REALTOR SECTION */}

        <section className="realtor-section">
          <div className="realtor-container">
            {/* Left Content */}
            <div className="realtor-content">
              <h2>We are Cosmic Infra</h2>

              <p>
                Welcome to Property Street, your gateway to a world of exceptional real estate opportunities. At Property Street, we understand that finding the perfect home or investment property is more than a transaction—it's a significant milestone in your life. 
              </p>

              <p>
                Our platform is designed to simplify your property search,
                offering a seamless experience to explore a diverse range
                of apartments, villas, plots and more.
              </p>

              <button className="realtor-button">
                Read more
              </button>
            </div>

            {/* Right Image */}
            <div className="realtor-image">
              <img src={realtor} alt="AR Realtor" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;