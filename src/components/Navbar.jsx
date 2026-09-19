import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      
      <Link to="/">
        <img src={logo} alt="Cosmic Infra" className="logo" />
      </Link>

      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/properties">PROPERTIES</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}

export default Navbar;