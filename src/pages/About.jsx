import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../CSS/About.css";
import property1 from "../assets/images/property-1.jpg";

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* About Hero */}
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>About</h1>

            <p>
              <span>Home</span>
              <span>/</span>
              <span>About</span>
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="who-we-are">

          <h2>WHO WE ARE</h2>

          <div className="who-content">

            {/* Left Content */}
            <div className="who-text">
              <span className="read-more">Read more</span>

              <p>
                Welcome to Cosmic Infra, your trusted partner for all your real
                estate needs. Our team of experienced professionals is committed
                to helping you find the perfect home or investment property, and
                we are dedicated to providing exceptional service and support
                every step of the way.
              </p>

              <p>
                Whether you are buying, selling, or investing in real estate, we
                have the expertise and resources to help you achieve your goals.
                We understand that every client has unique needs and preferences,
                which is why we take a personalized approach to every transaction.
              </p>

              <p>
                We take the time to listen to your needs, answer your questions,
                and provide guidance and support throughout the process. At
                Cosmic Infra, we pride ourselves on our knowledge of the local
                real estate market.
              </p>

              <p>
                Our team is well-versed in the latest trends and developments in
                the industry, and we have a deep understanding of the communities
                we serve.
              </p>

              <p>
                Whether you are looking for a cozy bungalow in the heart of the
                city or a sprawling estate in the suburbs, we can help you find
                the perfect property to meet your needs.
              </p>

              <p>
                In addition to our real estate services, we offer a range of
                resources and tools to help you make informed decisions about
                your real estate transactions.
              </p>

              <p>
                Our website features up-to-date property listings, market
                reports, and educational resources to help you navigate the
                complex world of real estate.
              </p>

              <p>
                Thank you for considering Cosmic Infra as your real estate
                partner. We look forward to working with you and helping you
                achieve your real estate goals.
              </p>

              <p>
                Contact us today to schedule a consultation and learn more about
                how we can help you.
              </p>
            </div>

            {/* Right Image */}
            <div className="who-image">
              <img
                src={property1}
                alt="Cosmic Infra Property"
              />
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;