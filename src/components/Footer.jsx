// import logo from "../assets/images/logo.png";
// import {
//   Home,
//   Info,
//   Briefcase,
//   Building2,
//   MapPin,
//   Phone,
//   Mail,
//   CopyrightIcon,
// } from "lucide-react";

// function Footer() {
//   return (
//     <footer className="footer">
//       {/* Logo */}
//       <div>
//         <img src={logo} alt="Cosmic Infra" className="footer-logo" />
//       </div>

//       {/* Quick Links */}
//       <div>
//         <h3>Quick Links</h3>

//         <p>
//           <Home size={16} />
//           <span>Home</span>
//         </p>

//         <p>
//           <Info size={16} />
//           <span>About</span>
//         </p>

//         <p>
//           <Briefcase size={16} />
//           <span>Services</span>
//         </p>

//         <p>
//           <Building2 size={16} />
//           <span>Properties</span>
//         </p>
//       </div>

//       {/* Contact Us */}
//       <div>
//         <h3>Contact Us</h3>

//         <p>
//           <MapPin size={16} />
//           <span>
//             Empire Heights, Tower A, 7th Floor, Unit 01, Business Bay, Dubai,
//             UAE
//           </span>
//         </p>

//         <p>
//           <Phone size={16} />
//           <span>9999999990</span>
//         </p>

//         <p>
//           <Mail size={16} />
//           <span>info@cosmicinfra.com</span>
//         </p>
//       </div>

//       {/* Newsletter */}
//       <div>
//         <h3>Remain Updated</h3>
//         <input placeholder="Your email address" />
//         <button>Sign up</button>

//         {/* Social Media */}
//         <div className="footer-social">

//           <div className="social-icons">
//             <a href="#" aria-label="Facebook">
//               f
//             </a>
//             <a href="#" aria-label="Instagram">
//               ◎
//             </a>
//             <a href="#" aria-label="LinkedIn">
//               in
//             </a>
//             <a href="#" aria-label="YouTube">
//               ▶
//             </a>
//             <a href="#" aria-label="X">
//               𝕏
//             </a>
//           </div>
//         </div>
//       </div>

//       <p className="copyright">
//         <CopyrightIcon />
//         <span>2026 All Rights Reserved.</span>
//       </p>
//     </footer>
//   );
// }

// export default Footer;

import "../CSS/Footer.css";

import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="signature-footer-wrapper">

      {/* =========================================
          VISIT US / CTA SECTION
      ========================================= */}

      <section className="signature-footer-visit-section">

        <div className="signature-footer-visit-container">

          {/* LEFT CONTENT */}

          <div className="signature-footer-visit-content">

            <span className="signature-footer-visit-label">
              VISIT US
            </span>

            <h2 className="signature-footer-visit-heading">
              Let's Build
              <br />
              Your Tomorrow
            </h2>

            <p className="signature-footer-visit-description">
              Schedule a site visit or get in touch with our team.
            </p>

          </div>


          {/* CONTACT DETAILS */}

          <div className="signature-footer-contact-container">

            <div className="signature-footer-contact-row">

              <span className="signature-footer-contact-symbol">
                📍
              </span>

              <p>
                <strong>
                  Cosmic Infra Head Office
                </strong>

                <br />

                Latino City, Italy - 40021
              </p>

            </div>


            <div className="signature-footer-contact-row">

              <span className="signature-footer-contact-symbol">
                ☎
              </span>

              <p>
                +91 98765 43210
              </p>

            </div>


            <div className="signature-footer-contact-row">

              <span className="signature-footer-contact-symbol">
                ✉
              </span>

              <p>
                info@cosmicinfra.com
              </p>

            </div>


            <button
              type="button"
              className="signature-footer-visit-button"
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              <span>
                BOOK A SITE VISIT
              </span>

              <strong>
                →
              </strong>

            </button>

          </div>

        </div>


        {/* RIGHT SIDE IMAGE */}

        <div className="signature-footer-background-image"></div>

      </section>


      {/* =========================================
          FOOTER NAVIGATION
      ========================================= */}

      <section className="signature-footer-navigation-section">

        <div className="signature-footer-navigation-container">


          {/* BRAND */}

          <div className="signature-footer-brand-area">

            <a
              href="/"
              className="signature-footer-brand-link"
            >
              <img
                src={logo}
                alt="Cosmic Infra"
                className="signature-footer-brand-image"
              />
            </a>

          </div>


          {/* NAVIGATION */}

          <nav className="signature-footer-menu">

            <a href="/properties">
              PROJECTS
            </a>

            <a href="/news">
              NEWS
            </a>

            <a href="/about">
              WHY US
            </a>

            <a href="/reviews">
              REVIEWS
            </a>

            <a href="/about">
              ABOUT
            </a>

            <a href="/contact">
              VISIT
            </a>

          </nav>


          {/* SOCIAL MEDIA */}

          <div className="signature-footer-social-area">

            <a
              href="#"
              className="signature-footer-social-item"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="#"
              className="signature-footer-social-item"
              aria-label="Instagram"
            >
              ◎
            </a>

            <a
              href="#"
              className="signature-footer-social-item"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="#"
              className="signature-footer-social-item"
              aria-label="YouTube"
            >
              ▶
            </a>

          </div>


          {/* COPYRIGHT */}

          <div className="signature-footer-copyright">

            © 2026 Cosmic Infra. All Rights Reserved.

          </div>

        </div>

      </section>

    </footer>
  );
}

export default Footer;