import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../CSS/Contact.css";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import contactBuilding from "../assets/images/about-building.png";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="contact-page">

  {/* Contact Hero */}
  <section className="contact-hero">

    <img
      src={contactBuilding}
      alt=""
      className="contact-hero-building"
    />

    <div className="contact-hero-content">
      <h1>Contact Us</h1>

      <p>
        <span>Home</span>
        <span>/</span>
        <span>Contact Us</span>
      </p>
    </div>

  </section>


  {/* Contact Area */}
  <section className="contact-area">

    <div className="contact-wrapper">

      {/* Left - Contact Cards */}
      <div className="contact-cards">

        {/* Registered Office */}
        <div className="contact-card active">
          <MapPin size={48} />

          <h3>Reg. Office</h3>

          <p>
            56/10, Street no. 450, Latino house
            <br />
            City, Italy
          </p>
        </div>


        {/* Call Us */}
        <div className="contact-card">
          <Phone size={48} />

          <h3>Call Us</h3>

          <p>
            +91 9836774342
          </p>
        </div>


        {/* Email */}
        <div className="contact-card">
          <Mail size={48} />

          <h3>Email Us</h3>

          <p>
            info@cosmicinfra.com
          </p>
        </div>


        {/* Open Hours */}
        <div className="contact-card">
          <Clock size={48} />

          <h3>Open Hours</h3>

          <p>
            Monday - Sunday
            <br />
            10:00AM - 07:00PM
          </p>
        </div>

      </div>


      {/* Right - Contact Form */}
      <div className="contact-form-box">

        <form>

          <div className="form-row">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

          </div>


          <input
            type="text"
            placeholder="Contact Number"
          />


          <textarea
            placeholder="Message"
          ></textarea>


          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>

  </section>

</main>

      <Footer />
    </>
  );
}

export default Contact;