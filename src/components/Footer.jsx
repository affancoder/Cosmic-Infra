import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div>
        <img src={logo} alt="Cosmic Infra" className="footer-logo" />
      </div>

      <div>
        <h3>Quick Links</h3>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Properties</p>
      </div>

      <div>
        <h3>Contact Us</h3>
        <p>Dubai, UAE</p>
        <p>+971 123456789</p>
        <p>info@cosmicinfra.com</p>
      </div>

      <div>
        <h3>Newsletter</h3>
        <input placeholder="Your email address" />
        <button>Sign up</button>
      </div>

    </footer>
  );
}

export default Footer;