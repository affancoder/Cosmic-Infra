import logo from "../assets/images/logo.png";
import {
  Home,
  Info,
  Briefcase,
  Building2,
  MapPin,
  Phone,
  Mail,
  CopyrightIcon,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      {/* Logo */}
      <div>
        <img src={logo} alt="Cosmic Infra" className="footer-logo" />
      </div>

      {/* Quick Links */}
      <div>
        <h3>Quick Links</h3>

        <p>
          <Home size={16} />
          <span>Home</span>
        </p>

        <p>
          <Info size={16} />
          <span>About</span>
        </p>

        <p>
          <Briefcase size={16} />
          <span>Services</span>
        </p>

        <p>
          <Building2 size={16} />
          <span>Properties</span>
        </p>
      </div>

      {/* Contact Us */}
      <div>
        <h3>Contact Us</h3>

        <p>
          <MapPin size={16} />
          <span>
            Empire Heights, Tower A, 7th Floor, Unit 01, Business Bay, Dubai,
            UAE
          </span>
        </p>

        <p>
          <Phone size={16} />
          <span>+971123456789</span>
        </p>

        <p>
          <Mail size={16} />
          <span>info@cosmicinfra.com</span>
        </p>
      </div>

      {/* Newsletter */}
      <div>
        <h3>Newsletter</h3>
        <input placeholder="Your email address" />
        <button>Sign up</button>
      </div>

      <p className="copyright">
        <CopyrightIcon />
        <span>2026 All Rights Reserved</span>
      </p>

    </footer>
  );
}

export default Footer;
