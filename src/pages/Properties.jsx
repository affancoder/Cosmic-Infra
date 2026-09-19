import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../CSS/Properties.css";

import servicesBuilding from "../assets/images/newtown-villa.jpg";

import property1 from "../assets/images/category-house.jpg";
import property2 from "../assets/images/property-2.jpg";
import property3 from "../assets/images/property-3.jpg";
import property4 from "../assets/images/property-2.jpg";
import property5 from "../assets/images/property-4.jpg";
import property6 from "../assets/images/property-2.jpg";
import property7 from "../assets/images/property-5.jpg";
import property8 from "../assets/images/property-2.jpg";
import property9 from "../assets/images/property-4.jpg";
import property10 from "../assets/images/property-2.jpg";
import property11 from "../assets/images/property-5.jpg";
import property12 from "../assets/images/property-3.jpg";
import property13 from "../assets/images/property-2.jpg";
import property14 from "../assets/images/property-4.jpg";
import property15 from "../assets/images/property-5.jpg";

function Properties() {
  const properties = [
    {
      name: "BHAWANI INARA",
      image: property1,
    },
    {
      name: "BHAWANI INARA",
      image: property2,
    },
    {
      name: "CHITRAKUT HEIGHTS",
      image: property3,
    },
    {
      name: "DTC CAPITAL CITY",
      image: property4,
    },
    {
      name: "FORUM ESTATE",
      image: property5,
    },
    {
      name: "KAPPA ALPHA",
      image: property6,
    },
    {
      name: "MANI CASA",
      image: property7,
    },
    {
      name: "MERLIN LAKESCAPE",
      image: property8,
    },
    {
      name: "MERLIN RISE",
      image: property9,
    },
    {
      name: "NATURAL AQUA WAVES",
      image: property10,
    },
    {
      name: "NEWTOWN VILLAS",
      image: property11,
    },
    {
      name: "ONE VICTORIA",
      image: property12,
    },
    {
      name: "OPTIMA",
      image: property13,
    },
    {
      name: "SIDDHA SERENA",
      image: property14,
    },
    {
      name: "VINAYAK AMARA",
      image: property15,
    },
  ];

  return (
    <>
      <Navbar />

      <main className="properties-page">

        {/* =========================
            PROPERTIES HERO
        ========================= */}
        <section className="properties-hero">

          <img
            src={servicesBuilding}
            alt="Properties"
            className="properties-hero-image"
          />

          <div className="properties-hero-overlay"></div>

          <div className="properties-hero-content">
            <p>check out some of our latest properties</p>
            <h1>PROPERTIES</h1>
          </div>

        </section>


        {/* =========================
            PROPERTY GRID
        ========================= */}
        <section className="properties-grid-section">

          <div className="properties-grid">

            {properties.map((property, index) => (
              <div className="property-card" key={index}>

                <div className="property-image">
                  <img
                    src={property.image}
                    alt={property.name}
                  />
                </div>

                <div className="property-info">

                  <h3>{property.name}</h3>

                  <p className="property-location">
                    <span>⌖</span>
                    Bandra
                  </p>

                  <div className="property-bottom">

                    <strong>₹92 Lakhs</strong>

                    <button>
                      View Details
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Properties;