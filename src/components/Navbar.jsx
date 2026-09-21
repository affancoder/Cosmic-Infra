import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ChevronDown,
  Search,
  Heart,
  UserRound,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/images/logo.png";
import "../CSS/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* =================================
          LOGO
      ================================= */}

      <Link
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        <img src={logo} alt="Cosmic Infra" />
      </Link>


      {/* =================================
          MAIN NAVIGATION
      ================================= */}

      <nav className={`navbar-nav ${menuOpen ? "nav-open" : ""}`}>

        {/* HOME */}

        <Link
          to="/"
          className="nav-link"
          onClick={closeMenu}
        >
          HOME
        </Link>


        {/* ABOUT */}

        <Link
          to="/about"
          className="nav-link"
          onClick={closeMenu}
        >
          ABOUT
        </Link>


        {/* =================================
            SERVICES
        ================================= */}

        <div className="nav-dropdown">

          <Link
            to="/services"
            className="nav-link dropdown-link"
            onClick={closeMenu}
          >
            SERVICES

            <ChevronDown size={14} />
          </Link>


          <div className="mega-menu services-mega">

            <div className="mega-column">

              <span className="mega-title">
                PROPERTY SERVICES
              </span>

              <Link to="/services" onClick={closeMenu}>
                Buying Property
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Selling Property
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Renting Property
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Property Management
              </Link>

            </div>


            <div className="mega-column">

              <span className="mega-title">
                PROPERTY SOLUTIONS
              </span>

              <Link to="/services" onClick={closeMenu}>
                Home Valuation
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Property Consultation
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Investment Consultation
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Commercial Property
              </Link>

            </div>


            <div className="mega-column mega-highlight">

              <span>
                COSMIC INFRA
              </span>

              <h3>
                Complete
                <br />
                Property Solutions
              </h3>

              <Link to="/services" onClick={closeMenu}>
                Explore Services →
              </Link>

            </div>

          </div>

        </div>


        {/* =================================
            PROPERTIES
        ================================= */}

        <div className="nav-dropdown">

          <Link
            to="/properties"
            className="nav-link dropdown-link"
            onClick={closeMenu}
          >
            PROPERTIES

            <ChevronDown size={14} />
          </Link>


          <div className="mega-menu properties-mega">

            <div className="mega-column">

              <span className="mega-title">
                PROPERTY LISTINGS
              </span>

              <Link to="/properties" onClick={closeMenu}>
                All Properties
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Featured Properties
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                New Listings
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Recently Added
              </Link>

            </div>


            <div className="mega-column">

              <span className="mega-title">
                BUY
              </span>

              <Link to="/properties" onClick={closeMenu}>
                Properties For Sale
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Apartments
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Villas
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Independent Houses
              </Link>

            </div>


            <div className="mega-column">

              <span className="mega-title">
                PROPERTY TYPE
              </span>

              <Link to="/properties" onClick={closeMenu}>
                Residential
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Commercial
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Office Spaces
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Plots & Land
              </Link>

            </div>


            <div className="mega-column">

              <span className="mega-title">
                RENT
              </span>

              <Link to="/properties" onClick={closeMenu}>
                Properties For Rent
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Rental Apartments
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Rental Houses
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Commercial Rentals
              </Link>

            </div>

          </div>

        </div>


        {/* =================================
            TENANTS
        ================================= */}

        <div className="nav-dropdown">

          <Link
            to="/properties"
            className="nav-link dropdown-link"
            onClick={closeMenu}
          >
            TENANTS

            <ChevronDown size={14} />
          </Link>


          <div className="mega-menu tenant-mega">

            <div className="mega-column">

              <span className="mega-title">
                FIND A HOME
              </span>

              <Link to="/properties" onClick={closeMenu}>
                Find Rental Property
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Rental Apartments
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Rental Houses
              </Link>

              <Link to="/properties" onClick={closeMenu}>
                Affordable Rentals
              </Link>

            </div>


            <div className="mega-column">

              <span className="mega-title">
                TENANT SERVICES
              </span>

              <Link to="/services" onClick={closeMenu}>
                Tenant Assistance
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Rental Assistance
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Property Enquiry
              </Link>

              <Link to="/contact" onClick={closeMenu}>
                Contact Agent
              </Link>

            </div>


            <div className="mega-column">

              <span className="mega-title">
                RENTAL GUIDE
              </span>

              <Link to="/services" onClick={closeMenu}>
                Renting Process
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Property Viewing
              </Link>

              <Link to="/services" onClick={closeMenu}>
                Rental Consultation
              </Link>

              <Link to="/contact" onClick={closeMenu}>
                Get Help →
              </Link>

            </div>

          </div>

        </div>


        {/* CONTACT */}

        <Link
          to="/contact"
          className="nav-link"
          onClick={closeMenu}
        >
          CONTACT
        </Link>


        {/* MOBILE ACCOUNT */}

        <Link
          to="/contact"
          className="mobile-account"
          onClick={closeMenu}
        >
          <UserRound size={17} />
          SIGN UP
        </Link>

      </nav>


      {/* =================================
          RIGHT ACTIONS
      ================================= */}

      <div className="navbar-actions">

        <Link
          to="/properties"
          className="navbar-icon"
          aria-label="Search properties"
        >
          <Search size={19} />
        </Link>


        <Link
          to="/properties"
          className="navbar-icon"
          aria-label="Saved properties"
        >
          <Heart size={19} />
        </Link>


        <Link
          to="/contact"
          className="navbar-account"
        >
          <UserRound size={17} />

          <span>
            SIGN UP
          </span>
        </Link>

      </div>


      {/* =================================
          MOBILE MENU BUTTON
      ================================= */}

      <button
        className={`menu-btn ${menuOpen ? "menu-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >

        {menuOpen ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}

      </button>

    </header>
  );
}

export default Navbar;