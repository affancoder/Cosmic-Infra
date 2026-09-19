import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <Link to="/" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Cosmic Infra" className="logo" />
      </Link>

      <nav className={menuOpen ? "nav-open" : ""}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>SERVICES</Link>
        <Link to="/properties" onClick={() => setMenuOpen(false)}>PROPERTIES</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
      </nav>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

    </header>
  );
}

export default Navbar;