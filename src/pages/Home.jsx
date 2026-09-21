import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../CSS/Home.css";

import property1 from "../assets/images/sudarshan-1.jpg";
import sudarshan2 from "../assets/images/sudarshan-2.jpg";

import property2 from "../assets/images/shrimant.jpg";
import tathastu1 from "../assets/images/tathastu-1.jpg";
import tathastu2 from "../assets/images/tathastu-2.jpg";
import shrimant from "../assets/images/shrimant.jpg";
import onkar1 from "../assets/images/onkar1.jpg";
import onkar2 from "../assets/images/onkar2.jpg";
import onkar3 from "../assets/images/onkar3.jpg";
import onkar4 from "../assets/images/onkar4.jpg";
import sachivilla from "../assets/images/sachi-villa.jpg";
import raavi from "../assets/images/raavi.jpg";
import sweethome from "../assets/images/sweet-home.jpg";
import vivek from "../assets/images/vivek.jpg";

import client from "../assets/images/client.jpg";
import apartment from "../assets/images/apartment.png";
import house from "../assets/images/house.png";
import office from "../assets/images/office.png";
import newtownVilla from "../assets/images/newtown-villa.jpg";
import categoryHouse from "../assets/images/category-house.jpg";

import buyProperty from "../assets/images/service-sell.png";
import sellProperty from "../assets/images/service-buy.png";
import assetManagement from "../assets/images/service-management.png";

import realtor from "../assets/images/realtor.jpg";

import emaar from "../assets/images/emaar.png";
import embassy from "../assets/images/embassy.png";
import kolte from "../assets/images/kolte.png";
import myg from "../assets/images/myg.png";
import dubai from "../assets/images/dubai.png";
import partner6 from "../assets/images/partner-6.png";
import midBanner from "../assets/images/mid-banner.png";
import goldencurve from "../assets/images/golden-curve.png";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  /* =====================================
     PROPERTY DATA
  ===================================== */

  const properties = [
    {
      id: 1,

      name: "SUDARSHAN",

      location: "Near Shankar Nagar Garden - Behind Apple iNspire Showroom",

      price: "1,680 sq.ft",

      type: "3 BHK",

      images: [property1, sudarshan2],

      developer: "Signature Address",
    },

    {
      id: 2,

      name: "SHRIMAT",

      location:
        "Residential 4BHK · Behind Jain Temple, Lendra Park, Ramdaspeth",

      price: "2,930 sq.ft",

      type: "4 BHK",

      images: [property2],

      developer: "Signature Address",
    },

    {
      id: 3,

      name: "TATHASTU",

      location: "245 & 246, Shankar Nagar",

      price: "2,150 sq.ft",

      type: "3 BHK",

      images: [tathastu2, tathastu1],

      developer: "Only 1st Floor Available",
    },

    {
      id: 4,

      name: "ONKAR",

      location: "51, Kotwal Nagar - Near Orange City Square - Khamla",

      price: "1,400 sq.ft",

      type: "3 BHK",

      images: [onkar1, onkar2, onkar3, onkar4],

      developer: "ONGOING",
    },

    {
      id: 5,

      name: "SACHI VILLA",

      location: "36, Pratap Nagar - 24 meter Main Road",

      price: "2,400 sq.ft",

      type: "Commercials",

      images: [sachivilla],

      developer: "ONGOING",
    },

    {
      id: 6,

      name: "RAAVI",

      location: "70, Pratap Nagar",

      price: "1,700 sq.ft",

      type: "3 BHK",

      images: [raavi],

      developer: "ONGOING",
    },

    {
      id: 7,

      name: "SWEET HOME",

      location:
        "19, Telecom Nagar, Near Dhomne Jewellers, Behind Manjiri Textiles",

      price: "1,050 sq.ft",

      type: "2 BHK",

      images: [sweethome],

      developer: "ONGOING",
    },

    {
      id: 8,

      name: "VIVEK",

      location: "135, Pandey Layout",

      price: "1,350 sq.ft",

      type: "3 BHK",

      images: [vivek],

      developer: "ONGOING",
    },
  ];

  /* =====================================
     PROPERTY SHOWCASE STATE
  ===================================== */

  const [activeProperty, setActiveProperty] = useState(0);

  const [activePhoto, setActivePhoto] = useState(0);

  const [thumbnailStart, setThumbnailStart] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const [activeProjectTab, setActiveProjectTab] = useState("photos");

  const currentProperty = properties[activeProperty];

  const projectTabs = [
    {
      id: "photos",
      label: "Project Photos",
    },
    {
      id: "amenities",
      label: "Amenities",
    },
    {
      id: "location",
      label: "Location",
    },
    {
      id: "specifications",
      label: "Specifications",
    },
    {
      id: "floor-plans",
      label: "Floor Plans",
    },
    {
      id: "brochure",
      label: "Brochure",
    },
  ];

  /* =====================================
     CHANGE PROPERTY
  ===================================== */

  const handlePropertyChange = (index) => {
    setActiveProperty(index);

    setActivePhoto(0);

    setIsPaused(false);
  };

  /* =====================================
     PREVIOUS PROPERTY THUMBNAILS
  ===================================== */

  const handlePreviousProperties = () => {
    setThumbnailStart((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return Math.max(properties.length - 3, 0);
    });
  };

  /* =====================================
     NEXT PROPERTY THUMBNAILS
  ===================================== */

  const handleNextProperties = () => {
    setThumbnailStart((prev) => {
      if (prev < properties.length - 3) {
        return prev + 1;
      }

      return 0;
    });
  };

  /* =====================================
     PREVIOUS PHOTO
  ===================================== */

  const handlePreviousPhoto = () => {
    setActivePhoto((prev) => {
      if (prev === 0) {
        return currentProperty.images.length - 1;
      }

      return prev - 1;
    });
  };

  /* =====================================
     NEXT PHOTO
  ===================================== */

  const handleNextPhoto = () => {
    setActivePhoto((prev) => {
      if (prev === currentProperty.images.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* =====================================
     AUTO PHOTO SLIDER
  ===================================== */

  useEffect(() => {
    if (isPaused) {
      return;
    }

    if (currentProperty.images.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActivePhoto((prev) => {
        if (prev === currentProperty.images.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [activeProperty, isPaused, currentProperty.images.length]);

  return (
    <>
      <Navbar />

      <main className="main-content">
        {/* =====================================================
            HERO SECTION
        ===================================================== */}

        <section className="hero-section">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            {/* =================================
                HERO HEADING
            ================================= */}

            <div className="hero-heading">
              <h1>Properties to buy in Bengaluru</h1>

              <p>5K+ listings added daily and 77K+ total verified</p>
            </div>

            {/* =================================
                PROPERTY SEARCH PANEL
            ================================= */}

            <div className="property-search-panel">
              {/* SEARCH TABS */}

              <div className="property-tabs">
                <button className="property-tab active" type="button">
                  BUY
                </button>

                <button className="property-tab" type="button">
                  RENT
                </button>

                <button className="property-tab" type="button">
                  COMMERCIAL
                </button>

                <button className="property-tab" type="button">
                  PG/CO-LIVING
                </button>

                <button className="property-tab" type="button">
                  PLOTS
                </button>
              </div>

              {/* MAIN SEARCH */}

              <div className="property-main-search">
                <div className="property-input">
                  <span className="property-search-icon">🔍</span>

                  <input
                    type="text"
                    placeholder="Search for locality, landmark, project, or builder"
                  />
                </div>

                <button
                  type="button"
                  className="property-search-button"
                  onClick={() => navigate("/properties")}
                >
                  Search
                </button>
              </div>
            </div>

            {/* =================================
                POPULAR LOCALITIES
            ================================= */}

            <div className="popular-localities">
              <div className="popular-title">
                <span className="popular-icon">📍</span>

                <strong>Popular Localities</strong>
              </div>

              <div className="locality-list">
                <button
                  type="button"
                  className="locality-item"
                  onClick={() => navigate("/properties")}
                >
                  Nasik
                  <span>›</span>
                </button>

                <button
                  type="button"
                  className="locality-item"
                  onClick={() => navigate("/properties")}
                >
                  Latino
                  <span>›</span>
                </button>

                <button
                  type="button"
                  className="locality-item"
                  onClick={() => navigate("/properties")}
                >
                  Daniel City
                  <span>›</span>
                </button>

                <button
                  type="button"
                  className="locality-item"
                  onClick={() => navigate("/properties")}
                >
                  Malaad
                  <span>›</span>
                </button>

                <button
                  type="button"
                  className="locality-item"
                  onClick={() => navigate("/properties")}
                >
                  Pune
                  <span>›</span>
                </button>

                <button
                  type="button"
                  className="locality-next"
                  onClick={() => navigate("/properties")}
                >
                  ›
                </button>
              </div>
            </div>

            {/* =================================
                PROPERTY OWNER CTA
            ================================= */}

            <button
              type="button"
              className="property-owner-cta"
              onClick={() => navigate("/contact")}
            >
              <span className="owner-sparkle">✦</span>

              <span>Are you a Property Owner?</span>

              <strong>Sell / Rent for FREE</strong>

              <span className="owner-arrow">›</span>
            </button>
          </div>
        </section>

        {/* =====================================================
            PROPERTY SHOWCASE
        ===================================================== */}

        <section className="showcase-properties">
          {/* =================================
              SECTION HEADER
          ================================= */}

          <div className="showcase-header">
            <div className="showcase-title">
              <h2>
                <span style={{ color: "#333" }}>Our</span> Portfolio
              </h2>
            </div>

            {/* =================================
                PROPERTY THUMBNAIL CAROUSEL
            ================================= */}

            <div className="showcase-thumbnail-wrapper">
              {/* PREVIOUS */}

              <button
                type="button"
                className="showcase-thumb-arrow"
                onClick={handlePreviousProperties}
                aria-label="Previous properties"
              >
                ‹
              </button>

              {/* THUMBNAILS */}

              <div className="showcase-thumbnails">
                {properties
                  .slice(thumbnailStart, thumbnailStart + 3)
                  .map((property) => {
                    const actualIndex = properties.findIndex(
                      (item) => item.id === property.id,
                    );

                    return (
                      <button
                        key={property.id}
                        type="button"
                        className={`showcase-thumbnail ${
                          activeProperty === actualIndex ? "active" : ""
                        }`}
                        onClick={() => handlePropertyChange(actualIndex)}
                      >
                        <img src={property.images[0]} alt={property.name} />

                        <span>{property.name}</span>
                      </button>
                    );
                  })}
              </div>

              {/* NEXT */}

              <button
                type="button"
                className="showcase-thumb-arrow"
                onClick={handleNextProperties}
                aria-label="Next properties"
              >
                ›
              </button>
            </div>
          </div>

          {/* =================================
              MAIN SHOWCASE
          ================================= */}

          <div className="showcase-card">
            {/* =================================
                LEFT PROPERTY INFORMATION
            ================================= */}

            <div className="showcase-info">
              {/* DEVELOPER */}

              <div className="showcase-developer">
                <div className="developer-logo">✦</div>

                <div>
                  <strong>{currentProperty.developer}</strong>

                  <button type="button" onClick={() => navigate("/properties")}>
                    View Projects
                  </button>
                </div>
              </div>

              {/* PROPERTY DETAILS */}

              <div className="showcase-details">
                <h3>{currentProperty.name}</h3>

                <p className="showcase-location">
                  📍 {currentProperty.location}
                </p>

                <div className="showcase-price">
                  <strong>{currentProperty.price}</strong>

                  <span>{currentProperty.type}</span>
                </div>

                <div className="available">
                  <strong>Available</strong>
                </div>
              </div>

              {/* CONTACT */}

              <button
                type="button"
                className="showcase-contact"
                onClick={() => navigate("/contact")}
              >
                Contact
              </button>
            </div>

            {/* =================================
                LARGE PROPERTY IMAGE CAROUSEL
            ================================= */}

            <div className="showcase-image">
              <img
                key={`${currentProperty.id}-${activePhoto}`}
                src={currentProperty.images[activePhoto]}
                alt={`${currentProperty.name} ${activePhoto + 1}`}
              />

              {/* IMAGE PREVIOUS */}

              {currentProperty.images.length > 1 && (
                <button
                  type="button"
                  className="showcase-image-arrow showcase-image-prev"
                  onClick={handlePreviousPhoto}
                  aria-label="Previous photo"
                >
                  ‹
                </button>
              )}

              {/* IMAGE NEXT */}

              {currentProperty.images.length > 1 && (
                <button
                  type="button"
                  className="showcase-image-arrow showcase-image-next"
                  onClick={handleNextPhoto}
                  aria-label="Next photo"
                >
                  ›
                </button>
              )}

              {/* PAUSE / PLAY */}

              <button
                type="button"
                className="showcase-pause"
                onClick={() => setIsPaused(!isPaused)}
                aria-label={
                  isPaused
                    ? "Play property showcase"
                    : "Pause property showcase"
                }
              >
                {isPaused ? "▶" : "Ⅱ"}
              </button>

              {/* PHOTO COUNTER */}

              <div className="showcase-image-overlay">
                <span>
                  {activePhoto + 1} / {currentProperty.images.length}
                </span>
              </div>

              {/* PHOTO DOTS */}

              {currentProperty.images.length > 1 && (
                <div className="showcase-photo-dots">
                  {currentProperty.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={activePhoto === index ? "active" : ""}
                      onClick={() => setActivePhoto(index)}
                      aria-label={`View photo ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =========================================
          MID BANNER
          ====================== */}

        <section className="cosmic-mid-banner">
          <img src={midBanner} alt="Cosmic Infra" />
        </section>

        {/* =========================================
    COSMIC INFRA — ABOUT BLOCK
========================================= */}

        <section className="ciab2026-main-shell">
          {/* LEFT VISUAL */}
          <div className="ciab2026-primary-visual">
            <img
              className="ciab2026-primary-visual-img"
              src={realtor}
              alt="Cosmic Infra Building"
            />
          </div>

          {/* CENTER CONTENT */}
          <div className="ciab2026-central-content">
            <span className="ciab2026-section-kicker">ABOUT COSMIC INFRA</span>

            <h2 className="ciab2026-main-heading">
              Building
              <br />A Brighter Tomorrow
            </h2>

            <p className="ciab2026-main-description">
              We are committed to creating landmark developments that blend
              modern design, superior quality and sustainable living. We don't
              just build properties, we build better futures.
            </p>

            {/* STATISTICS */}

            <div className="ciab2026-statistics-row">
              <div className="ciab2026-stat-unit">
                <strong className="ciab2026-stat-value">10+</strong>

                <span className="ciab2026-stat-caption">
                  Years of
                  <br />
                  Experience
                </span>
              </div>

              <div className="ciab2026-stat-unit">
                <strong className="ciab2026-stat-value">25+</strong>

                <span className="ciab2026-stat-caption">
                  Landmark
                  <br />
                  Projects
                </span>
              </div>

              <div className="ciab2026-stat-unit">
                <strong className="ciab2026-stat-value">5000+</strong>

                <span className="ciab2026-stat-caption">
                  Happy
                  <br />
                  Families
                </span>
              </div>
            </div>

            {/* ACTION */}

            <button
              type="button"
              className="ciab2026-action-trigger"
              onClick={() => navigate("/about")}
            >
              <span className="ciab2026-action-label">KNOW MORE</span>

              <span className="ciab2026-action-symbol">→</span>
            </button>
          </div>

          {/* RIGHT DECORATIVE AREA */}

          <aside className="ciab2026-secondary-panel">
            <div className="ciab2026-secondary-visual">
              <img
                className="ciab2026-secondary-visual-img"
                src={goldencurve}
                alt="Cosmic Infra Lifestyle"
              />
            </div>

            <div className="ciab2026-secondary-message">
              <span>MORE</span>
              <span>THAN</span>
              <span>BUILDINGS</span>
              <span>WE BUILD</span>
              <span>LIFESTYLES</span>
            </div>
          </aside>
        </section>

        {/* =====================================================
    PROJECT STORY / PROJECT GALLERY
===================================================== */}

        <section className="cosmic-project-gallery">
          {/* =================================================
      LEFT CONTENT
  ================================================= */}

          <div className="cosmic-project-gallery-content">
            <span className="cosmic-project-gallery-label">
              PROJECT SHOWCASE
            </span>

            <h2>
              Each Project
              <br />
              Tells a Unique Story
            </h2>

            <p>
              Discover detailed information about our projects, explore
              galleries, amenities, floor plans, location and more on each
              dedicated project page.
            </p>

            <button
              type="button"
              className="cosmic-project-gallery-explore"
              onClick={() => navigate("/properties")}
            >
              EXPLORE A PROJECT
              <span>→</span>
            </button>
          </div>

          {/* =================================================
      RIGHT CONTENT
  ================================================= */}

          <div className="cosmic-project-gallery-right">
            {/* =================================================
        TABS
    ================================================= */}

            <div className="cosmic-project-gallery-tabs">
              {projectTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`cosmic-project-gallery-tab ${
                    activeProjectTab === tab.id
                      ? "cosmic-project-gallery-tab-active"
                      : ""
                  }`}
                  onClick={() => setActiveProjectTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* =================================================
        TAB CONTENT
    ================================================= */}

            <div className="cosmic-project-gallery-panel">
              {/* =================================================
          PROJECT PHOTOS
      ================================================= */}

              {activeProjectTab === "photos" && (
                <div className="cosmic-project-gallery-photos">
                  <div className="cosmic-project-gallery-main-photo">
                    <img src={onkar1} alt="Project" />

                    <button
                      type="button"
                      className="cosmic-project-gallery-play"
                      onClick={() => navigate("/properties")}
                    >
                      ▶
                    </button>
                  </div>

                  <div className="cosmic-project-gallery-small-grid">
                    <img src={raavi} alt="Sudarshan Project" />

                    <img src={onkar3} alt="Shrimat Project" />

                    <img src={shrimant} alt="Tathastu Project" />

                    <img src={sachivilla} alt="Tathastu Project" />
                  </div>
                </div>
              )}

              {/* =================================================
          AMENITIES
      ================================================= */}

              {activeProjectTab === "amenities" && (
                <div className="cosmic-project-gallery-information">
                  <h3>Premium Amenities</h3>

                  <div className="cosmic-project-gallery-feature-grid">
                    <div>
                      <strong>Swimming Pool</strong>

                      <span>Modern lifestyle facilities</span>
                    </div>

                    <div>
                      <strong>Club House</strong>

                      <span>Community & recreation</span>
                    </div>

                    <div>
                      <strong>Fitness Centre</strong>

                      <span>Fully equipped gym</span>
                    </div>

                    <div>
                      <strong>24×7 Security</strong>

                      <span>Secure living environment</span>
                    </div>

                    <div>
                      <strong>Parking</strong>

                      <span>Dedicated parking spaces</span>
                    </div>

                    <div>
                      <strong>Landscaped Gardens</strong>

                      <span>Green open spaces</span>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================================
          LOCATION
      ================================================= */}

              {activeProjectTab === "location" && (
                <div className="cosmic-project-gallery-information">
                  <h3>Prime Location</h3>

                  <p>
                    Conveniently located close to major roads, schools,
                    hospitals, shopping destinations and everyday conveniences.
                  </p>

                  <div className="cosmic-project-location-box">
                    <span>📍</span>

                    <div>
                      <strong>Project Location</strong>

                      <p>Near Shankar Nagar Garden, Nagpur</p>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================================
          SPECIFICATIONS
      ================================================= */}

              {activeProjectTab === "specifications" && (
                <div className="cosmic-project-gallery-information">
                  <h3>Project Specifications</h3>

                  <div className="cosmic-project-specifications">
                    <div>
                      <span>Property Type</span>

                      <strong>Residential</strong>
                    </div>

                    <div>
                      <span>Configuration</span>

                      <strong>2 & 3 BHK</strong>
                    </div>

                    <div>
                      <span>Area</span>

                      <strong>1,680 sq.ft onwards</strong>
                    </div>

                    <div>
                      <span>Status</span>

                      <strong>Ongoing</strong>
                    </div>

                    <div>
                      <span>Parking</span>

                      <strong>Available</strong>
                    </div>

                    <div>
                      <span>Possession</span>

                      <strong>Contact for details</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================================
          FLOOR PLANS
      ================================================= */}

              {activeProjectTab === "floor-plans" && (
                <div className="cosmic-project-gallery-information">
                  <h3>Floor Plans</h3>

                  <div className="cosmic-floor-plan-grid">
                    <div className="cosmic-floor-plan-card">
                      <img src={onkar1} alt="2 BHK Floor Plan" />

                      <strong>2 BHK</strong>
                    </div>

                    <div className="cosmic-floor-plan-card">
                      <img src={property2} alt="3 BHK Floor Plan" />

                      <strong>3 BHK</strong>
                    </div>

                    <div className="cosmic-floor-plan-card">
                      <img src={raavi} alt="4 BHK Floor Plan" />

                      <strong>4 BHK</strong>
                    </div>
                  </div>
                </div>
              )}

              {/* =================================================
          BROCHURE
      ================================================= */}

              {activeProjectTab === "brochure" && (
                <div className="cosmic-project-gallery-information cosmic-project-brochure">
                  <div className="cosmic-project-brochure-icon">PDF</div>

                  <div>
                    <h3>Project Brochure</h3>

                    <p>
                      Get complete information about the project,
                      specifications, amenities, floor plans and other details.
                    </p>

                    <button type="button" onClick={() => navigate("/contact")}>
                      REQUEST BROCHURE →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            CLIENT TESTIMONIAL
        ===================================================== */}

        <section className="testimonial-section">
          <div className="testimonial-heading">
            <h2>What's Client Say</h2>
          </div>

          <div className="testimonial-content">
            <div className="testimonial-quote">
              <span>"</span>
            </div>

            <button type="button" className="testimonial-arrow left-arrow">
              ‹
            </button>

            <div className="testimonial-text">
              <h3>Bliss Residency, Aydar</h3>

              <p>
                "I am extremely happy with my experience. The attention to
                detail and professionalism made my home buying journey smooth
                and stress-free. I highly recommend their services!"
              </p>
            </div>

            <div className="client-image">
              <img src={client} alt="Client" />
            </div>

            <div className="client-details">
              <h4>John</h4>

              <p>Business</p>

              <p>Engineer</p>
            </div>

            <button type="button" className="testimonial-arrow right-arrow">
              ›
            </button>
          </div>

          <div className="testimonial-slider">
            <span></span>
          </div>
        </section>

        {/* =====================================================
            LOOKING FOR
        ===================================================== */}

        <div className="looking-heading">
          <p>WE'RE HERE TO HELP YOU</p>

          <h2>WHAT ARE YOU LOOKING FOR?</h2>
        </div>

        <section className="looking-section">
          <div className="looking-cards">
            {/* APARTMENTS */}

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

            {/* HOUSES */}

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

            {/* OFFICES */}

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

        {/* =====================================================
            CATEGORIES
        ===================================================== */}

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
              {/* HOUSE */}

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

              {/* OFFICE */}

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

              {/* LAND */}

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

              {/* VILLA */}

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

              {/* SHOP */}

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

              {/* LEASE */}

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

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className="cosmic-services-section">
          <div className="cosmic-services-heading">
            <span>Check Out</span>

            <h2>Our Services</h2>
          </div>

          <div className="cosmic-services-cards">
            {/* BUY */}

            <div className="cosmic-service-card">
              <img src={buyProperty} alt="Buy Property" />

              <div className="cosmic-service-overlay">
                <h3>Buy Property</h3>
              </div>
            </div>

            {/* SELL */}

            <div className="cosmic-service-card">
              <img src={sellProperty} alt="Sell Property" />

              <div className="cosmic-service-overlay">
                <h3>Sell Property</h3>
              </div>
            </div>

            {/* MANAGEMENT */}

            <div className="cosmic-service-card">
              <img src={assetManagement} alt="Asset Management" />

              <div className="cosmic-service-overlay">
                <h3>Asset Management</h3>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            REALTOR
        ===================================================== */}

        <section className="realtor-section">
          <div className="realtor-container">
            <div className="realtor-content">
              <h2>We are Cosmic Infra</h2>

              <p>
                Welcome to Property Street, your gateway to a world of
                exceptional real estate opportunities. At Property Street, we
                understand that finding the perfect home or investment property
                is more than a transaction—it's a significant milestone in your
                life.
              </p>

              <p>
                Our platform is designed to simplify your property search,
                offering a seamless experience to explore a diverse range of
                apartments, villas, plots and more.
              </p>

              <button
                type="button"
                className="realtor-button"
                onClick={() => navigate("/about")}
              >
                Read more
              </button>
            </div>

            <div className="realtor-image">
              <img src={realtor} alt="AR Realtor" />
            </div>
          </div>
        </section>

        {/* =====================================================
            PARTNERS
        ===================================================== */}

        <section className="partners-section">
          <div className="partners-container">
            <div className="partners-heading">
              <span>Our</span>

              <h2>Partners</h2>
            </div>

            <div className="partners-logos">
              <div className="partner-logo">
                <img src={emaar} alt="Emaar" />
              </div>

              <div className="partner-logo">
                <img src={embassy} alt="Embassy" />
              </div>

              <div className="partner-logo">
                <img src={kolte} alt="Kolte" />
              </div>

              <div className="partner-logo">
                <img src={myg} alt="MYG" />
              </div>

              <div className="partner-logo">
                <img src={dubai} alt="Dubai" />
              </div>

              <div className="partner-logo">
                <img src={partner6} alt="Partner" />
              </div>
            </div>
          </div>

          {/* FLOATING BUTTONS */}

          <div className="floating-buttons">
            <button
              type="button"
              className="floating-button chat-button"
              aria-label="Chat"
              onClick={() => navigate("/contact")}
            >
              <span>●</span>
            </button>

            <button
              type="button"
              className="floating-button top-button"
              aria-label="Back to top"
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
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
