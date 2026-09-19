import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../CSS/PropertyDetails.css";

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

function PropertyDetails() {
  const { id } = useParams();

  const properties = [
    {
      id: 1,
      name: "BHAWANI INARA",
      image: property1,
    },
    {
      id: 2,
      name: "BHAWANI INARA",
      image: property2,
    },
    {
      id: 3,
      name: "CHITRAKUT HEIGHTS",
      image: property3,
    },
    {
      id: 4,
      name: "DTC CAPITAL CITY",
      image: property4,
    },
    {
      id: 5,
      name: "FORUM ESTATE",
      image: property5,
    },
    {
      id: 6,
      name: "KAPPA ALPHA",
      image: property6,
    },
    {
      id: 7,
      name: "MANI CASA",
      image: property7,
    },
    {
      id: 8,
      name: "MERLIN LAKESCAPE",
      image: property8,
    },
    {
      id: 9,
      name: "MERLIN RISE",
      image: property9,
    },
    {
      id: 10,
      name: "NATURAL AQUA WAVES",
      image: property10,
    },
    {
      id: 11,
      name: "NEWTOWN VILLAS",
      image: property11,
    },
    {
      id: 12,
      name: "ONE VICTORIA",
      image: property12,
    },
    {
      id: 13,
      name: "OPTIMA",
      image: property13,
    },
    {
      id: 14,
      name: "SIDDHA SERENA",
      image: property14,
    },
    {
      id: 15,
      name: "VINAYAK AMARA",
      image: property15,
    },
  ];

  const property = properties.find(
    (item) => item.id === Number(id)
  );

  if (!property) {
    return (
      <>
        <Navbar />

        <main className="property-not-found">
          <h1>Property Not Found</h1>

          <Link to="/properties">
            Back to Properties
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="property-details-page">

        <section className="property-details">

          <div className="property-details-image">
            <img
              src={property.image}
              alt={property.name}
            />
          </div>

          <div className="property-details-content">

            <p className="property-details-location">
              📍 Bandra
            </p>

            <h1>{property.name}</h1>

            <h2>₹92 Lakhs</h2>

            <p className="property-details-description">
              This property offers comfortable living spaces,
              modern design and convenient connectivity. It is
              suitable for residential living and investment
              purposes.
            </p>

            <div className="property-features">

              <div>
                <strong>Residential</strong>
                <span>Property Type</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Bedrooms</span>
              </div>

              <div>
                <strong>2</strong>
                <span>Bathrooms</span>
              </div>

              <div>
                <strong>1,450 sq.ft</strong>
                <span>Area</span>
              </div>

            </div>

            <div className="property-details-actions">

              <button className="contact-property-btn">
                Contact Us
              </button>

              <Link
                to="/properties"
                className="back-properties-btn"
              >
                Back to Properties
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default PropertyDetails;